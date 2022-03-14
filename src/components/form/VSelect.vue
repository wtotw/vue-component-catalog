<template>
  <select v-model="model" v-bind="$attrs">
    <option
      v-for="(item, index) in items"
      :key="index"
      :value="getValue(item, index)"
    >
      {{ getLabel(item) }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<string[] | number[] | object[]>,
      required: true,
    },
    labelKey: {
      type: String,
      required: false,
      default: undefined,
    },
    valueKey: {
      type: String,
      required: false,
      default: undefined,
    },
    modelValue: {
      type: [String, Number],
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

    const getValue: any = (item: any, index: number) => {
      if (typeof item === 'object') {
        if (props.valueKey) {
          return item[props.valueKey];
        } else {
          return '';
        }
      } else {
        return index;
      }
    };

    const getLabel: any = (item: any) => {
      if (typeof item === 'object') {
        if (props.labelKey) {
          return item[props.labelKey];
        } else {
          return '';
        }
      } else {
        return item;
      }
    };

    return { model, getValue, getLabel };
  },
});
</script>
