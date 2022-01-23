import { ArgTypes, Meta, Story } from '@storybook/vue3';
import VTextarea from '@/components/forms/VTextarea.vue';
import { ref } from 'vue';

export default {
  title: 'forms/VTextarea',
  component: VTextarea,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as Meta;

const Template: Story = (args: ArgTypes) => ({
  components: { VTextarea },
  setup() {
    const text = ref('');

    return { args, text };
  },
  template: `
  <VTextarea v-bind="args" v-model="text" />
  <p>{{ text }}</p>
  `,
});

export const Basic: Story = Template.bind({});
Basic.args = {};
