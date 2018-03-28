import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
  // beforeEach and afterEach are helpers
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems/>);
  });
  it('should render two <NavigationItem /> items', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
})
