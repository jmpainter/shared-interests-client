import React from 'react';
import { shallow } from 'enzyme';
import CategoriesInterestsList from './CategoriesInterestsList';
import { initialState } from '../setupTests';
import { BrowserRouter, browserHistory} from 'react-router-dom';

describe('<CategoriesInterestsList />', () => {
  it('Renders without crashing', () => {
    shallow(<CategoriesInterestsList list={[]} />);
  });

  it('Renders a list of interests and users', () => {
    const interestMatches = initialState.user.interestMatches;
    const wrapper = shallow(<BrowserRouter history={browserHistory}><CategoriesInterestsList list={interestMatches} /></BrowserRouter>);
    expect(wrapper.html()).toEqual('<ul class="categoriesInterests"><div><li class="interest">Mountain Biking</li><ul><li><a href="/meet-user/5b9881ec8b887645bc2454a0">amy - Larkspur</a></li></ul></div><div><li class="interest">Mexican cuisine</li><ul><li><a href="/meet-user/5b9881ec8b887645bc2454a0">amy - Larkspur</a></li></ul></div></ul>');
  });
});