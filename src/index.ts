import envPaths from 'env-paths'
import { execa } from 'execa'
import fse from 'fs-extra'
import path from 'node:path'
import pashuaPath from 'pashua-assets'
import { v7 as uuidv7 } from 'uuid'
import type { ComponentType } from './types'

export { pashuaPath }

const appPaths = envPaths('m-pashua')

export async function runPashuaFile(configFile: string): Promise<Record<string, string>> {
  const { stdout } = await execa`${pashuaPath} ${configFile}`
  const result: Record<string, string> = {}
  stdout.split('\n').forEach((line) => {
    const [key, val] = line.split('=').map((x) => x.trim())
    result[key] = val
  })
  return result
}
export async function runPashuaContent(content: string) {
  const id = uuidv7()
  const file = path.join(appPaths.cache, `${id}.conf`)
  await fse.outputFile(file, content)
  try {
    return await runPashuaFile(file)
  } finally {
    await fse.remove(file)
  }
}

export async function pashua<IdType extends string>(components: ComponentType<IdType>[]) {
  const transformValue = (val?: string | number | boolean) => {
    if (typeof val === 'undefined') return
    if (typeof val === 'boolean') return val ? 1 : 0
    return val
  }

  const content = components
    .map((component) => {
      if (component.type === 'window') {
        const { type, ...rest } = component
        return Object.keys(rest)
          .map((k) => `*.${k} = ${transformValue(rest[k as keyof typeof rest])}`)
          .join('\n')
      } else {
        const { type, id, ...rest } = component
        return [
          `${id}.type = ${type}`,
          ...Object.keys(rest).map((k) => `${id}.${k} = ${transformValue(rest[k as keyof typeof rest])}`),
        ].join('\n')
      }
    })
    .join('\n'.repeat(2))

  type Result = Record<IdType, string>
  const result = (await runPashuaContent(content)) as Result
  return result
}
