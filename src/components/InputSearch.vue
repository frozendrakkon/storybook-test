<template>
  <input
    class="input-search"
    :placeholder="elem.placeholder"
    :disabled="elem.disabled"
    :value="inputValue"
    type="text"
    @input="changeText($event.target.value)"
  />
</template>

<script lang="ts">
import { PropType, ref } from 'vue'
import { defineComponent } from 'vue'

export type InputSearchProp = {
  placeholder: string
  disabled: boolean
}

const inputSearchDefaultProps = {
  placeholder: 'Значение по умолчанию из компонента',
  disabled: true
}

export default defineComponent({
  props: {
    elem: {
      type: Object as PropType<InputSearchProp>,
      required: true,
      default: inputSearchDefaultProps
    }
  },

  setup(props, { emit }) {
    console.log(props.elem)
    const inputValue = ref<string>('')

    const emitedInputValue = (): void => {
      emit('newInputValue', inputValue)
    }

    const changeText = (text: string): void => {
      inputValue.value = text
      emitedInputValue()
    }

    return {
      inputValue,
      changeText
    }
  }
})
</script>

<style lang="scss" scoped>
.input-search {
  width: 200px;
  height: 30px;
  border-radius: 12px;
  border-color: rgb(240, 60, 207);
  font-size: 15px;
}
</style>