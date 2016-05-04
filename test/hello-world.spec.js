import React from 'react'
import HelloWorld from '../src/components/hello-world'
import { shallow } from 'enzyme'
import test from 'ava'

test('<HelloWorld /> has one H1', t => {
  const wrapper = shallow(<HelloWorld />)
  t.is(wrapper.find('h1').length, 1)
})

test('Contains `Hello World`', t => {
  const wrapper = shallow(<HelloWorld />)
  t.true(wrapper.contains('Hello World'))
})
