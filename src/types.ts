// file:///Applications/Pashua.app/Contents/Resources/Documentation.html

export type ComponentType<IdType extends string = string> =
  | WindowProps
  | ButtonProps<IdType>
  | CancelButtonProps<IdType>
  | DefaultButtonProps<IdType>
  | CheckboxProps<IdType>
  | ComboboxProps<IdType>
  | DateProps<IdType>
  | ImageProps<IdType>
  | OpenBrowserProps<IdType>
  | SaveBrowserProps<IdType>
  | PasswordProps<IdType>
  | PopupProps<IdType>
  | RadioButtonProps<IdType>
  | TextProps<IdType>
  | TextboxProps<IdType>
  | TextfieldProps<IdType>

/** Window attributes */
export type WindowProps = {
  type: 'window'
  /** Window title */
  title?: string
  /** Window width */
  width?: number
  /** Window height */
  height?: number
  /** Window x-coordinate */
  x?: number
  /** Window y-coordinate */
  y?: number
}

/** Button component */
export type ButtonProps<IdType extends string = string> = {
  /** Unique identifier for the button */
  id: IdType
  /** Button label text */
  label: string
  /** X-coordinate position */
  x?: number
  /** Y-coordinate position */
  y?: number
  /** Tooltip text */
  tooltip?: string
  /** Whether the button is disabled */
  disabled?: boolean
  /** Button type */
  type: 'button'
}

/** Cancel Button component */
export type CancelButtonProps<IdType extends string = string> = {
  /** Unique identifier for the cancel button */
  id: IdType
  /** Button label text */
  label: string
  /** X-coordinate position */
  x?: number
  /** Y-coordinate position */
  y?: number
  /** Tooltip text */
  tooltip?: string
  /** Whether the button is disabled */
  disabled?: boolean
  /** Button type */
  type: 'cancelbutton'
}

/** Default Button component */
export type DefaultButtonProps<IdType extends string = string> = {
  /** Unique identifier for the default button */
  id: IdType
  /** Button label text */
  label: string
  /** X-coordinate position */
  x?: number
  /** Y-coordinate position */
  y?: number
  /** Tooltip text */
  tooltip?: string
  /** Whether the button is disabled */
  disabled?: boolean
  /** Button type */
  type: 'defaultbutton'
}

/** Checkbox component */
export type CheckboxProps<IdType extends string = string> = {
  /** Unique identifier for the checkbox */
  id: IdType
  /** Checkbox label text */
  label: string
  /** Initial checkbox state */
  default?: boolean
  /** X-coordinate position */
  x?: number
  /** Y-coordinate position */
  y?: number
  /** Checkbox type */
  type: 'checkbox'
}

/** Combobox component */
export type ComboboxProps<IdType extends string = string> = {
  /** Unique identifier for the combobox */
  id: IdType
  /** Combobox label text */
  label?: string
  /** List of options */
  option?: string[]
  /** Default selected value */
  default?: string
  /** X-coordinate position */
  x?: number
  /** Y-coordinate position */
  y?: number
  /** Combobox type */
  type: 'combobox'
}

/** Date component */
export type DateProps<IdType extends string = string> = {
  /** Unique identifier for the date input */
  id: IdType
  /** Date input label text */
  label?: string
  /** Default date */
  default?: string
  /** Minimum allowed date */
  min?: string
  /** Maximum allowed date */
  max?: string
  /** X-coordinate position */
  x?: number
  /** Y-coordinate position */
  y?: number
  /** Date input type */
  type: 'date'
}

/** Image component */
export type ImageProps<IdType extends string = string> = {
  /** Unique identifier for the image */
  id: IdType
  /** Path to the image file */
  path: string
  /** X-coordinate position */
  x?: number
  /** Y-coordinate position */
  y?: number
  /** Image type */
  type: 'image'
}

/** Open Browser component */
export type OpenBrowserProps<IdType extends string = string> = {
  /** Unique identifier for the open browser */
  id: IdType
  /** Label text */
  label?: string
  /** Default path */
  default?: string
  /** X-coordinate position */
  x?: number
  /** Y-coordinate position */
  y?: number
  /** Open browser type */
  type: 'openbrowser'
}

/** Save Browser component */
export type SaveBrowserProps<IdType extends string = string> = {
  /** Unique identifier for the save browser */
  id: IdType
  /** Label text */
  label?: string
  /** Default path */
  default?: string
  /** X-coordinate position */
  x?: number
  /** Y-coordinate position */
  y?: number
  /** Save browser type */
  type: 'savebrowser'
}

/** Password component */
export type PasswordProps<IdType extends string = string> = {
  /** Unique identifier for the password input */
  id: IdType
  /** Label text */
  label?: string
  /** Default password text */
  default?: string
  /** X-coordinate position */
  x?: number
  /** Y-coordinate position */
  y?: number
  /** Password input type */
  type: 'password'
}

/** Popup component */
export type PopupProps<IdType extends string = string> = {
  /** Unique identifier for the popup */
  id: IdType
  /** Label text */
  label?: string
  /** List of options */
  option?: string[]
  /** Default selected value */
  default?: string
  /** X-coordinate position */
  x?: number
  /** Y-coordinate position */
  y?: number
  /** Popup type */
  type: 'popup'
}

/** Radio Button component */
export type RadioButtonProps<IdType extends string = string> = {
  /** Unique identifier for the radio button */
  id: IdType
  /** Label text */
  label?: string
  /** List of options */
  option?: string[]
  /** Default selected value */
  default?: string
  /** X-coordinate position */
  x?: number
  /** Y-coordinate position */
  y?: number
  /** Radio button type */
  type: 'radiobutton'
}

/** Text component */
export type TextProps<IdType extends string = string> = {
  /** Unique identifier for the text */
  id: IdType
  /** Text content */
  default: string
  /** X-coordinate position */
  x?: number
  /** Y-coordinate position */
  y?: number
  /** Text type */
  type: 'text'
}

/** Textbox component */
export type TextboxProps<IdType extends string = string> = {
  /** Unique identifier for the textbox */
  id: IdType
  /** Label text */
  label?: string
  /** Default text content */
  default?: string
  /** Read-only state */
  readonly?: boolean
  /** X-coordinate position */
  x?: number
  /** Y-coordinate position */
  y?: number
  /** Textbox type */
  type: 'textbox'
}

/** Textfield component */
export type TextfieldProps<IdType extends string = string> = {
  /** Unique identifier for the textfield */
  id: IdType
  /** Label text */
  label?: string
  /** Default text content */
  default?: string
  /** Read-only state */
  readonly?: boolean
  /** X-coordinate position */
  x?: number
  /** Y-coordinate position */
  y?: number
  /** Textfield type */
  type: 'textfield'
}
