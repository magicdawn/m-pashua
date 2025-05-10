// file:///Applications/Pashua.app/Contents/Resources/Documentation.html

/** Window attributes */
interface WindowProps {
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
interface ButtonProps {
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
interface CancelButtonProps {
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
interface DefaultButtonProps {
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
interface CheckboxProps {
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
interface ComboboxProps {
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
interface DateProps {
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
interface ImageProps {
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
interface OpenBrowserProps {
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
interface SaveBrowserProps {
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
interface PasswordProps {
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
interface PopupProps {
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
interface RadioButtonProps {
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
interface TextProps {
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
interface TextboxProps {
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
interface TextfieldProps {
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

export type {
  WindowProps,
  ButtonProps,
  CancelButtonProps,
  DefaultButtonProps,
  CheckboxProps,
  ComboboxProps,
  DateProps,
  ImageProps,
  OpenBrowserProps,
  SaveBrowserProps,
  PasswordProps,
  PopupProps,
  RadioButtonProps,
  TextProps,
  TextboxProps,
  TextfieldProps,
}
