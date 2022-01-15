<template>
  <input type="text" class="v-text" v-model="value" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: String,
  },
  setup(props, context) {
    const value = computed({
      get: () => props.modelValue,
      set: (value: string | undefined) => { context.emit('update:modelValue', value) },
    })

    return { value }
  },
})
</script>

<style lang="scss" scoped>
.v-text {
  font-size: 16px;
}
</style>