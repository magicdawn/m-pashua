import {
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
} from './types'

/** Helper function to define a button */
export function defineButton(props: Omit<ButtonProps, 'type'>): ButtonProps {
  return { ...props, type: 'button' }
}

/** Helper function to define a cancel button */
export function defineCancelButton(props: Omit<CancelButtonProps, 'type'>): CancelButtonProps {
  return { ...props, type: 'cancelbutton' }
}

/** Helper function to define a default button */
export function defineDefaultButton(props: Omit<DefaultButtonProps, 'type'>): DefaultButtonProps {
  return { ...props, type: 'defaultbutton' }
}

/** Helper function to define a checkbox */
export function defineCheckbox(props: Omit<CheckboxProps, 'type'>): CheckboxProps {
  return { ...props, type: 'checkbox' }
}

/** Helper function to define a combobox */
export function defineCombobox(props: Omit<ComboboxProps, 'type'>): ComboboxProps {
  return { ...props, type: 'combobox' }
}

/** Helper function to define a date input */
export function defineDate(props: Omit<DateProps, 'type'>): DateProps {
  return { ...props, type: 'date' }
}

/** Helper function to define an image */
export function defineImage(props: Omit<ImageProps, 'type'>): ImageProps {
  return { ...props, type: 'image' }
}

/** Helper function to define an open browser */
export function defineOpenBrowser(props: Omit<OpenBrowserProps, 'type'>): OpenBrowserProps {
  return { ...props, type: 'openbrowser' }
}

/** Helper function to define a save browser */
export function defineSaveBrowser(props: Omit<SaveBrowserProps, 'type'>): SaveBrowserProps {
  return { ...props, type: 'savebrowser' }
}

/** Helper function to define a password input */
export function definePassword(props: Omit<PasswordProps, 'type'>): PasswordProps {
  return { ...props, type: 'password' }
}

/** Helper function to define a popup */
export function definePopup(props: Omit<PopupProps, 'type'>): PopupProps {
  return { ...props, type: 'popup' }
}

/** Helper function to define a radio button */
export function defineRadioButton(props: Omit<RadioButtonProps, 'type'>): RadioButtonProps {
  return { ...props, type: 'radiobutton' }
}

/** Helper function to define a text */
export function defineText(props: Omit<TextProps, 'type'>): TextProps {
  return { ...props, type: 'text' }
}

/** Helper function to define a textbox */
export function defineTextbox(props: Omit<TextboxProps, 'type'>): TextboxProps {
  return { ...props, type: 'textbox' }
}

/** Helper function to define a textfield */
export function defineTextField(props: Omit<TextfieldProps, 'type'>): TextfieldProps {
  return { ...props, type: 'textfield' }
}

/** Helper function to define multiple components */
export function defineComponents<T extends Record<string, any>>(...components: T[]): T[] {
  return components
}
