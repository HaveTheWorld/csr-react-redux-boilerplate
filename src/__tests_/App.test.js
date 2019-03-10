import React from 'react';
import App from 'App';
import { shallow } from 'enzyme';

const wrapper = shallow(<App />);

describe('<App />', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
