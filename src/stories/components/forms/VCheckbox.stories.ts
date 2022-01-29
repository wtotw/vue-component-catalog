import { ArgTypes, Meta, Story } from '@storybook/vue3';
import VCheckbox from '@/components/form/VCheckbox.vue';
import { ref } from 'vue';

export default {
  title: 'forms/VCheckbox',
  component: VCheckbox,
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
  components: { VCheckbox },
  setup() {
    const check = ref([]);

    return { args, check };
  },
  template: `
  <VCheckbox v-bind="args" v-model="check" value="check1" label="チェックボックス1" />
  <VCheckbox v-bind="args" v-model="check" value="check2" label="チェックボックス2" />
  <VCheckbox v-bind="args" v-model="check" value="check3" label="チェックボックス3" />
  <p>{{ check }}</p>
  `,
});

export const Basic: Story = Template.bind({});
Basic.args = {};
