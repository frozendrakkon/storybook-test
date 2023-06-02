import InputSearch from './InputSearch.vue'
//@ts-ignore
import { Meta, Story } from '@storybook/vue3'
import type { InputSearchProp } from './InputSearch.vue'
import { args, argTypes } from './InputSearchStoriesData'

export default {
  title: 'Universal/InputSearch',
  component: InputSearch,
  argTypes: {
    ...argTypes
  },
} as Meta;


const Template: Story<InputSearchProp> = (args: InputSearchProp) => ({
  components: { InputSearch },

  setup() {
    return { args };
  },


  template: '<InputSearch v-bind="args" />',
})

export const NoActive = Template.bind({});

NoActive.args = {
  ...args
};