import { ArgTypes, Meta, Story } from '@storybook/vue3';
import VText from '@/components/form/VText.vue';
import { ref } from 'vue';

export default {
  title: 'forms/VText',
  component: VText,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'password'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as Meta;

const Template: Story = (args: ArgTypes) => ({
  components: { VText },
  setup() {
    const text = ref('');

    return { args, text };
  },
  template: `
  <VText v-bind="args" v-model="text" />
  <p>{{ text }}</p>
  `,
});

export const Basic: Story = Template.bind({});
Basic.args = {};
