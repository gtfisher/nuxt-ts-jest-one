import subMenu from '@/components/SubMenu.vue'
import { mount } from '@vue/test-utils'

describe('HomePage', () => {
  it('is a Vue component', () => {
    const wrapper = mount(subMenu)
    expect(wrapper.vm).toBeTruthy()
  })
})
