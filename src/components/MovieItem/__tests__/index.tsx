import React from 'react';
import MovieItem from '../';
import { MockItem } from '../mockData';
import { render, fireEvent } from 'react-native-testing-library';

  describe("Movie item", () => {
    let wrapper: any = null;
    let item = MockItem;
    const movie={item}
    const navigate = jest.fn();
    const navigation: any = {
      navigate,
      state: {
        params: {
          itemId: 'tt2620204',
        },
      },
    };

    beforeEach(() => {
      wrapper = render(
        <MovieItem movie={movie} nav={navigation} />
      );
    });

    test('Movie item should render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });