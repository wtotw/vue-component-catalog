<template>
  <label class="v-radio">
    <input
      v-model="model"
      v-bind="$attrs"
      :value="value"
      type="radio"
      class="v-radio__input"
    />
    {{ label }}
  </label>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

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
      type: [String, Number, Boolean],
      required: false,
      default: undefined,
    },
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const model = computed({
      get: () => props.modelValue,
      set: (value: string | number | boolean | undefined) => {
        context.emit('update:modelValue', value);
      },
    });

    return { model };
  },
});
</script>

<style lang="scss" scoped>
.v-radio {
  font-size: 16px;

  &:disabled {
    cursor: not-allowed;
  }
}
</style>
