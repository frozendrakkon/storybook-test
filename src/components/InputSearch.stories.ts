import InputSearch from './InputSearch.vue'
//@ts-ignore
import { Meta, Story } from '@storybook/vue3'
import type { InputSearchProp } from './InputSearch.vue'
import { args } from './InputSearch.vue'

export default {
  title: 'Universal/InputSearch',
  component: InputSearch,
  // ! argTypes можно поместить, как и args => NoActive.argTypes
  /* тут Еще прикол в том, что сторибук у себя под капотом скорее всего как-то
  деструктуризирует объект, и оберкта elem ему не нужна
  ну и еще некоторые свойства не отображаются в таблице от слова совсем
  вот здесь можно глянуть https://natds-rn.natura.design/?path=/docs/components-iconbutton--sizes
  пытался запихнуть description, но он туда никак не хочет лезть, пробовал через tablet, прокидывать объект elem
 - не работает
  */
  argTypes: {
    disabled: {
      name: 'disabled',
      type: { name: 'boolean', required: false },
      description: 'Отвечает за включение/выключение инпута',
      control: {
        type: 'boolean',
      },
    },
    placeholder: {
      name: 'placeholder',
      type: {name: 'string', required: true},
      description: 'Текст в placeholder инпута',
      control: {
        type: 'text'
      }
    },
  },
} as Meta;


const Template: Story<InputSearchProp> = (args: InputSearchProp) => ({
  components: { InputSearch },

  setup() {
    return { args };
  },


  /* пробовал по разному прокидывать пропсы, по факту работает только так, либо если
  хардкодить пропсы.
  */ 
  template: '<InputSearch v-bind="args" />',
})

export const NoActive = Template.bind({});

NoActive.args = {
  // ! ts не ругается, если прокидывать другие значения
  /* еще пробовал импортировать объект пропсов с основного компонента
  тогда можно было бы при изменении пропсов в ui ките, в нем же поменять args, и сторибук подтянул
  бы актуальные пропсы
  */
  // elem: {
  //   placeholder: 'Это значение из сторибука',
  //   disabled: false,
  // }
  ...args
};

// * резюме - пока, текущий варик - самый оптимальный, который нашел, чтобы было понятно и разработчикам и дизайнерам
// * но этот варик совершенно мне не нравится.