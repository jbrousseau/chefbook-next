/* eslint-env jest */
import Adapter from 'enzyme-adapter-react-16'
import NoSSR from '/components/generic/NoSSR'
import {shallow, mount, configure} from 'enzyme'

configure({ adapter: new Adapter() })

describe('no-ssr', () => {
  describe('on-server', () => {
    it('should not render children', () => {
      const MyComp = () => (<div>Hello</div>)
      const el = shallow((<NoSSR><MyComp /></NoSSR>), {disableLifecycleMethods: true})
      expect(el.html()).not.toMatch(/Hello/)
    })
  })

  describe('on-client', () => {
    it('should render children', () => {
      const MyComp = () => (<div>Hello</div>)
      const el = mount((<NoSSR><MyComp /></NoSSR>))
      expect(el.html()).toMatch(/Hello/)
    })
  })

  describe('with onSSR components', () => {
    describe('on server', () => {
      it('should show the onSSR component', () => {
        const MyComp = () => (<div>Hello</div>)
        const Loading = () => (<div>Loading...</div>)
        const el = shallow((<NoSSR onSSR={<Loading />}><MyComp /></NoSSR>), {disableLifecycleMethods: true})
        expect(el.html()).toMatch(/Loading/)
      })
    })

    describe('on client after mounted', () => {
      it('should show children', () => {
        const MyComp = () => (<div>Hello</div>)
        const Loading = () => (<div>Loading...</div>)
        const el = mount((<NoSSR onSSR={<Loading />}><MyComp /></NoSSR>))
        expect(el.html()).toMatch(/Hello/)
      })
    })
  })
})
