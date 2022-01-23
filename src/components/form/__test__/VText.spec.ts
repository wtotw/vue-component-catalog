import { shallowMount, VueWrapper } from '@vue/test-utils';
import VText from '@/components/form/VText.vue';

describe('VText', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = shallowMount(VText);
  });

  test('Vueインスタンスであること', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test('inputタグであること', () => {
    const input = wrapper.find('.v-text');
    expect(input.element.tagName).toBe('INPUT');
  });

  test('typeが変更できること', async () => {
    const input = wrapper.find('.v-text');
    expect(input.attributes().type).toContain('text');

    await wrapper.setProps({ type: 'number' });
    expect(input.attributes().type).toContain('number');

    await wrapper.setProps({ type: 'password' });
    expect(input.attributes().type).toContain('password');
  });

  test('属性が変更できること', async () => {
    const input = wrapper.find('.v-text');
    expect(input.attributes().disabled).toBeUndefined();

    await wrapper.setProps({ disabled: true });
    expect(input.attributes().disabled).toBe('');
  });

  test('値が変更できること', async () => {
    const input = wrapper.find('.v-text');
    await input.setValue('テキスト');
    expect((wrapper.emitted() as any)['update:modelValue'][0][0]).toBe(
      'テキスト'
    );
  });
});
