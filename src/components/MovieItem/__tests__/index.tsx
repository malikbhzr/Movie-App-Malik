import React from 'react';
import MovieItem from '../';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallow, ShallowWrapper } from 'enzyme';
import { MockItem } from '../mockData';

Enzyme.configure({ adapter: new Adapter() });

describe("Movie item", () => {

  describe("render with mock data", () => {
    let item = MockItem;
    const movie={item}
    const navigation = jest.fn();
    let wrapper: ShallowWrapper;
    wrapper = shallow(<MovieItem movie={movie} nav={navigation}  />);
  
    it("should render with mock data", () => {
        expect(wrapper).toMatchSnapshot()
    });
  })
  
});