import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { PlaceSettings } from './PlaceSettings';
import Button from '../../components/UI/Button/Button';

configure({adapter: new Adapter()});

describe('<PlaceSettings />', () => {
  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<PlaceSettings fetchSettingLegend={() => {}} fetchSettingOrder={() => {}} fetchSettingTypes={() => {}} />);
  });
  // initial state should have 3 buttons
  it('should render three <Button /> items', () => {
    wrapper.setProps({setting_legend : [], setting_order : [], setting_types : ['1', '2', '3']});
    expect(wrapper.find(Button)).toHaveLength(3);
  });
  // initial state current setting should have class Empty
  it('should render three <Button /> items', () => {
    wrapper.setProps({setting_legend : [], setting_order : [], setting_types : ['1', '2', '3']});
    expect(wrapper.hasClass('Empty'));
  });
  // if button is clicked, this.props.current_setting_title should not be null
  // if button is clicked, this.props.current_setting_items should be an array



});
