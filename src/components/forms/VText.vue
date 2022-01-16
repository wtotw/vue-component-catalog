<template>
  <input v-model="value" v-bind="$attrs" type="text" class="v-text" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: undefined,
    },
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const value = computed({
      get: () => props.modelValue,
      set: (value: string | undefined) => {
        context.emit('update:modelValue', value);
      },
    });

    return { value };
  },
});
</script>

<style lang="scss" scoped>
.v-text {
  display: block;
  font-size: 16px;

  &:disabled {
    cursor: not-allowed;
  }
}
</style>
