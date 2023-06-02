
// вынести в глобальную область видимости, доработать 
type TControlType = 'boolean' | 'text' | 'number' | 'range' | 'object' | 'file' | 'radio' | 'inline-radio' | 'check' | 'inline-check' | 'select' | 'multi-select' | 'color' | 'date'

interface IArgTypes {
  name: string
  type: {
    name: string,
    required: boolean
  }
  description: string
  // * https://github.com/storybookjs/storybook/issues/21016
  table: {
    defaultValue: {summary: string}
  }
  // * https://storybook.js.org/docs/react/essentials/controls
  control: {
    type: TControlType
    min?: number
    max?: number
    step?: number
    accept?: string
    options?: Array<any>
    presetColors?: Array<string>
  }
}

export const argTypes: Record<string, IArgTypes> = {
  disabled: {
    name: 'disabled',
    type: { name: 'boolean', required: false },
    description: 'Отвечает за включение/выключение инпута',
    table: {
      defaultValue: { summary: 'дефолтное значение' }
    },
    control: {
      type: 'boolean'
    }
  },
  placeholder: {
    name: 'placeholder',
    type: { name: 'string', required: true },
    description: 'Текст в placeholder инпута',
    table: {
      defaultValue: { summary: 'дефолтное значение' }
    },
    control: {
      type: 'text'
    }
  }
}

export const args = {
  elem: {
    placeholder: 'Это значение Аргументов из компонента',
    disabled: false,
  },
}