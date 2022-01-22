import { shallowMount, VueWrapper } from '@vue/test-utils';
import VText from '@/components/forms/VText.vue';

describe('VText', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = shallowMount(VText);
  });

  test('Vueインスタンスであること', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
