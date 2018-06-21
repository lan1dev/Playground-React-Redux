import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddToDoForm from '../components/AddToDoForm';
import Button from '../components/Button';

describe('AddToDoForm', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<AddToDoForm {...props} />);
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

  describe('always render a form', () => {
    const forms = Wrapper().find('form');
    expect(forms.length).toBeGreaterThan(0);

    it('should contain everything else that gets rendered', () => {
      const forms = Wrapper().find('form');
      const wrappingForm = forms.first();
      expect(wrappingForm.children()).toEqual(Wrapper().children());
    });

    it('always renders a `Button`', () => {
      expect(Wrapper().find(Button).length).toBe(1);
    });
    describe('rendered Button', () => {
      it('does receive one prop', () => {
        const wrapper = Wrapper().find(Button);
        expect(Object.keys(wrapper.props()).length).toBe(1);
      });
    });
  });
});
