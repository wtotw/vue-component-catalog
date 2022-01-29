import { shallowMount, VueWrapper } from '@vue/test-utils';
import VCheckbox from '@/components/form/VCheckbox.vue';

describe('VCheckbox', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = shallowMount(VCheckbox, {
      props: {
        label: 'チェックボックス',
        value: 'checkbox1',
      },
    });
  });

  test('Vueインスタンスであること', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test('lebelタグであること', () => {
    const label = wrapper.find('.v-checkbox');
    expect(label.element.tagName).toBe('LABEL');
  });

  test('属性が変更できること', async () => {
    const chechbox = wrapper.find('.v-checkbox__input');
    expect(chechbox.attributes().disabled).toBeUndefined();

    await wrapper.setProps({ disabled: true });
    expect(chechbox.attributes().disabled).toBe('');
  });

  test('値が変更できること', async () => {
    const chechbox = wrapper.find('.v-checkbox__input');
    await chechbox.setValue(true);
    // FIXME: valueがemitされない
    expect((wrapper.emitted() as any)['update:modelValue'][0][0]).toBe(true);
  });
});
