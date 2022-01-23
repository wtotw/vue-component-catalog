import { shallowMount, VueWrapper } from '@vue/test-utils';
import VTextarea from '@/components/forms/VTextarea.vue';

describe('VTextarea', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = shallowMount(VTextarea);
  });

  test('Vueインスタンスであること', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test('textareaタグであること', () => {
    const textarea = wrapper.find('.v-textarea');
    expect(textarea.element.tagName).toBe('TEXTAREA');
  });

  test('属性が変更できること', async () => {
    const textarea = wrapper.find('.v-textarea');
    expect(textarea.attributes().disabled).toBeUndefined();

    await wrapper.setProps({ disabled: true });
    expect(textarea.attributes().disabled).toBe('');
  });

  test('値が変更できること', async () => {
    const input = wrapper.find('.v-textarea');
    await input.setValue('テキスト');
    expect((wrapper.emitted() as any)['update:modelValue'][0][0]).toBe(
      'テキスト'
    );
  });
});
