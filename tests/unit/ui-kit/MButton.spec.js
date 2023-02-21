import { mount } from '@vue/test-utils'
import MButton from '@/components/ui-kit/MButton'

describe('testing m-button', () => {
  it('render with label m-button', () => {
    const wrapper = mount(MButton, {
      slots: {
        default: 'Test default',
      },
    })
    expect(wrapper.html()).toContain('Test default')
  })
  it('background m-button', () => {
    const wrapper = mount(MButton, {
      props: {
        color: 'red',
      },
    })
    expect(wrapper.props('color')).toBe('red')
  })
  it('rounded m-button', () => {
    const wrapper = mount(MButton, {
      props: {
        rounded: true,
      },
    })
    expect(wrapper.props('rounded')).toBe(true)
  })
  it('align m-button', () => {
    const wrapper = mount(MButton, {
      props: {
        align: 'center',
      },
    })
    expect(wrapper.props('align')).toBe('center')
  })
  it('disabled m-button', () => {
    const wrapper = mount(MButton, {
      props: {
        disabled: true,
      },
    })
    expect(wrapper.props('disabled')).toBe(true)
  })
  it('flat m-button', () => {
    const wrapper = mount(MButton, {
      props: {
        flat: true,
      },
    })
    expect(wrapper.props('flat')).toBe(true)
  })
})
