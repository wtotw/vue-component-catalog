import { ArgTypes, Meta, Story } from '@storybook/vue3';
import VSelect from '@/components/form/VSelect.vue';
import { ref } from 'vue';

export default {
  title: 'forms/VSelect',
  component: VSelect,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    multiple: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as Meta;

const Template: Story = (args: ArgTypes) => ({
  components: { VSelect },
  setup() {
    const items = [
      { label: 'セレクト1', value: 'select1' },
      { label: 'セレクト2', value: 'select2' },
      { label: 'セレクト3', value: 'select3' },
    ];
    const select = ref();

    return { args, items, select };
  },
  template: `
  <VSelect v-bind="args" v-model="select" :items="args.items" labelKey="label" valueKey="value" />
  <p>{{ select }}</p>
  `,
});

export const Basic: Story = Template.bind({});
Basic.args = {
  items: [
    { label: 'セレクト1', value: 'select1' },
    { label: 'セレクト2', value: 'select2' },
    { label: 'セレクト3', value: 'select3' },
  ],
};

export const SimpleArray: Story = Template.bind({});
SimpleArray.args = {
  items: ['セレクト1', 'セレクト2', 'セレクト3'],
};
