import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddToDoForm from './index';

describe('AddToDoForm', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<AddToDoForm />);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {
      children: undefined
    };
    wrapper = undefined;
  });

  describe('when component has rendered', () => {
    it('Should match snapshot', () => {
      expect(toJson(Wrapper())).toMatchSnapshot();
    });
  });
});
