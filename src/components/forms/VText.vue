<template>
  <input type="text" class="v-text" v-model="model" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: String,
  },
  setup(props, context) {
    const model = computed({
      get: () => props.value,
      set: (value: string | undefined) => { context.emit('input', value) },
    })

    return { model }
  },
})
</script>

<style lang="scss" scoped>
.v-text {
  font-size: 16px;
}
</style>