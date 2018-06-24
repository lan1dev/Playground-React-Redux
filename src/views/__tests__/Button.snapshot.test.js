import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Button from '../common/Button';
import colors from '../constants/colors';

describe('Button', () => {
  let props;
  let wrapper;

  const Wrapper = () => {
    if (!wrapper) {
      wrapper = shallow(<Button {...props}>{props.children}</Button>);
    }
    return wrapper;
  };

  // Reset Component and Props before each test.
  beforeEach(() => {
    props = {
      children: undefined,
      error: undefined
    };
    wrapper = undefined;
  });

  describe('when props are undefined', () => {
    it('Should match snapshot', () => {
      expect(toJson(Wrapper())).toMatchSnapshot();
    });

    it('should not have green background', () => {
      const tree = Wrapper();
      expect(tree).toHaveStyleRule('background', colors.primary);
    });

    it('should have green color', () => {
      const tree = Wrapper();
      expect(tree).toHaveStyleRule('color', colors.lightPrimary);
    });
  });

  describe('when props are defined', () => {
    it('should match snapshot', () => {
      props.children = 'Text';
      props.error = true;
      expect(toJson(Wrapper())).toMatchSnapshot();
    });

    it('should have red background', () => {
      props.children = 'Text';
      props.error = true;
      expect(Wrapper()).toHaveStyleRule('background', colors.error);
    });
    it('should have red color', () => {
      props.children = 'Text';
      props.error = true;
      expect(Wrapper()).toHaveStyleRule('color', colors.lightError);
    });
    describe('user hovers over the button', () => {
      it('should have darkred background', () => {
        props.children = 'Text';
        props.error = true;
        wrapper = Wrapper();
        expect(wrapper).toHaveStyleRule('background', colors.darkError, {
          modifier: ':hover'
        });
      });
    });
  });
});
