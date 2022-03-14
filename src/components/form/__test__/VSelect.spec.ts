import { shallowMount, VueWrapper } from '@vue/test-utils';
import VRadio from '@/components/form/VRadio.vue';

describe('VRadio', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = shallowMount(VRadio, {
      props: {
        label: 'ラジオボタン',
        value: 'radio1',
      },
    });
  });

  test('Vueインスタンスであること', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test('lebelタグであること', () => {
    const label = wrapper.find('.v-radio');
    expect(label.element.tagName).toBe('LABEL');
  });

  test('属性が変更できること', async () => {
    const radio = wrapper.find('.v-radio__input');
    expect(radio.attributes().disabled).toBeUndefined();

    await wrapper.setProps({ disabled: true });
    expect(radio.attributes().disabled).toBe('');
  });

  test('値が変更できること', async () => {
    const radio = wrapper.find('.v-radio__input');
    await radio.setValue(true);
    expect((wrapper.emitted() as any)['update:modelValue'][0][0]).toBe(
      'radio1'
    );
  });
});
