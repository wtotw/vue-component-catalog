import { ArgTypes, Meta, Story } from '@storybook/vue3';
import VRadio from '@/components/form/VRadio.vue';
import { ref } from 'vue';

export default {
  title: 'forms/VRadio',
  component: VRadio,
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
  components: { VRadio },
  setup() {
    const radio = ref();

    return { args, radio };
  },
  template: `
  <VRadio v-bind="args" v-model="radio" value="radio1" label="チェックボックス1" />
  <VRadio v-bind="args" v-model="radio" value="radio2" label="チェックボックス2" />
  <VRadio v-bind="args" v-model="radio" value="radio3" label="チェックボックス3" />
  <p>{{ radio }}</p>
  `,
});

export const Basic: Story = Template.bind({});
Basic.args = {};
