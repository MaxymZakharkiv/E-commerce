import { mount } from '@vue/test-utils'
import MCheckbox from '@/components/ui-kit/Checkbox/MCheckbox'

describe('testing m-checkbox', () => {
  it('set label m-checkbox', () => {
    const wrapper = mount(MCheckbox, {
      props: {
        label: 'test',
      },
    })
    expect(wrapper.props('label')).toBe('test')
  })
  it('set v-model m-checkbox', () => {
    const wrapper = mount(MCheckbox, {
      props: {
        modelValue: true,
      },
    })
    expect(wrapper.props('modelValue')).toBe(true)
  })
  it('set name m-checkbox', () => {
    const wrapper = mount(MCheckbox, {
      props: {
        name: 'name checkbox',
      },
    })
    expect(wrapper.props('name')).toBe('name checkbox')
  })
})
