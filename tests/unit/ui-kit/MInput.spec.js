import { mount } from '@vue/test-utils'
import MInput from '@/components/ui-kit/MInput'

describe('testing m-input', () => {
  it('set placeholder input', () => {
    const wrapper = mount(MInput, {
      props: {
        placeholder: 'test',
      },
    })
    expect(wrapper.props('placeholder')).toBe('test')
  })
  it('set type input', () => {
    const wrapper = mount(MInput, {
      props: {
        type: 'text',
      },
    })
    expect(wrapper.props('type')).toBe('text')
  })
  it('readonly input', () => {
    const wrapper = mount(MInput, {
      props: {
        readonly: true,
      },
    })
    expect(wrapper.props('readonly')).toBe(true)
  })
})
