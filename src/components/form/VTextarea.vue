<template>
  <textarea v-model="model" v-bind="$attrs" class="v-textarea"></textarea>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const model = computed({
      get: () => props.modelValue,
      set: (value: string | undefined) => {
        context.emit('update:modelValue', value);
      },
    });

    return { model };
  },
});
</script>

<style lang="scss" scoped>
.v-textarea {
  font-size: 16px;

  &:disabled {
    cursor: not-allowed;
  }
}
</style>
