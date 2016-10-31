import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import App from '../../src/components/app';

describe('<App />', () => {
  it('should be defined', () => {
    const component = shallow(<App />);
    expect(component).toExist();
  });
});
