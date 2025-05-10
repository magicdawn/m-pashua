// file:///Applications/Pashua.app/Contents/Resources/Documentation.html

/** Window attributes */
export type WindowProps = {
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
export type ButtonProps = {
  /** Unique identifier for the button */
  id: string
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
export type CancelButtonProps = {
  /** Unique identifier for the cancel button */
  id: string
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
export type DefaultButtonProps = {
  /** Unique identifier for the default button */
  id: string
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
export type CheckboxProps = {
  /** Unique identifier for the checkbox */
  id: string
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
export type ComboboxProps = {
  /** Unique identifier for the combobox */
  id: string
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
export type DateProps = {
  /** Unique identifier for the date input */
  id: string
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
export type ImageProps = {
  /** Unique identifier for the image */
  id: string
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
export type OpenBrowserProps = {
  /** Unique identifier for the open browser */
  id: string
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
export type SaveBrowserProps = {
  /** Unique identifier for the save browser */
  id: string
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
export type PasswordProps = {
  /** Unique identifier for the password input */
  id: string
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
export type PopupProps = {
  /** Unique identifier for the popup */
  id: string
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
export type RadioButtonProps = {
  /** Unique identifier for the radio button */
  id: string
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
export type TextProps = {
  /** Unique identifier for the text */
  id: string
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
export type TextboxProps = {
  /** Unique identifier for the textbox */
  id: string
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
export type TextfieldProps = {
  /** Unique identifier for the textfield */
  id: string
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
