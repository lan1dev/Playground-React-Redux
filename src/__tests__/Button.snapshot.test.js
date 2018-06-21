import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';
import Button from '../components/Button';

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
      expect(tree).toHaveStyleRule('background', '#00695c');
    });

    it('should not have green color', () => {
      const tree = Wrapper();
      expect(tree).toHaveStyleRule('color', '#b2dfdb');
    });
  });

  describe('when props are defined', () => {
    it('should match snapshot', () => {
      props.children = 'Text';
      props.error = true;
      expect(toJson(Wrapper())).toMatchSnapshot();
    });

    it('should be have red background', () => {
      props.children = 'Text';
      props.error = true;
      expect(Wrapper()).toHaveStyleRule('background', '#dd2c00');
    });
    it('should be have red color', () => {
      props.children = 'Text';
      props.error = true;
      expect(Wrapper()).toHaveStyleRule('color', '#FFAB91');
    });
    describe('user hovers over the button', () => {
      it('should have darkred background', () => {
        props.children = 'Text';
        props.error = true;
        wrapper = Wrapper();
        expect(wrapper).toHaveStyleRule('background', '#BF360C', {
          modifier: ':hover'
        });
      });
    });
  });
});
