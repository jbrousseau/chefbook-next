/* eslint-env jest */
import React from 'react'
import NoSSR from '/components/generic/NoSSR'
import {shallow, mount} from 'enzyme'

describe('no-ssr', () => {
  describe('on-server', () => {
    it('should not render children', () => {
      const MyComp = () => (<div>Hello</div>)
      const el = shallow((<NoSSR><MyComp /></NoSSR>))
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
        const el = shallow((<NoSSR onSSR={<Loading />}><MyComp /></NoSSR>))
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
