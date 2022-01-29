<template>
  <label class="v-checkbox">
    <input
      v-model="model"
      v-bind="$attrs"
      :value="value"
      type="checkbox"
      class="v-checkbox__input"
    />
    {{ label }}
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number, Boolean],
      required: true,
    },
    modelValue: {
      type: Array as PropType<string[] | number[] | boolean[]>,
      required: false,
      default: undefined,
    },
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const model = computed({
      get: () => props.modelValue,
      set: (value: string[] | number[] | boolean[] | undefined) => {
        context.emit('update:modelValue', value);
      },
    });

    return { model };
  },
});
</script>

<style lang="scss" scoped>
.v-checkbox {
  font-size: 16px;

  &:disabled {
    cursor: not-allowed;
  }
}
</style>
