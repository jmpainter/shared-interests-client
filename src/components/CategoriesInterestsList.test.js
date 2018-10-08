import React from 'react';
import { shallow, mount } from 'enzyme';
import CategoriesInterestsList from './CategoriesInterestsList';
import { initialState } from '../setupTests';
import { BrowserRouter, browserHistory} from 'react-router-dom';

describe('<CategoriesInterestsList />', () => {
  it('Renders without crashing', () => {
    shallow(<CategoriesInterestsList list={[]} />);
  });

  it('Renders a list of interests', () => {
    const interestMatches = initialState.user.interestMatches;
    const wrapper = mount(<BrowserRouter history={browserHistory}><CategoriesInterestsList list={interestMatches} /></BrowserRouter>);
    const interests = wrapper.find('.interest');
    expect (interests.length).toEqual(interestMatches.length);
    interests.forEach((interest, index) => {
      expect(interest.text()).toEqual(interestMatches[index].interest);
    });
  });

  it('Renders a list of users', () => {
    const interestMatches = initialState.user.interestMatches;
    const userList = [];
    interestMatches.forEach(interest => userList.push(...interest.users));
    const wrapper = mount(<BrowserRouter history={browserHistory}><CategoriesInterestsList list={interestMatches} /></BrowserRouter>);
    const users = wrapper.find('Link');
    users.forEach((user, index) => {
      expect(user.text()).toEqual(userList[index].screenName + ' - ' + userList[index].location);
    });
  });
});