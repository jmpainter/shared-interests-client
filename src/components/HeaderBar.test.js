// Project requirements for component testing: 
// Smoke tests,
// Component rendering based on props and state,
// Testing callbacks and events

import React from 'react';
import { shallow, mount } from 'enzyme';
import { HeaderBar } from './HeaderBar';
import { clearAuth } from '../actions/auth';
import { toggleMainMenu } from '../actions/misc';
import { BrowserRouter, browserHistory} from 'react-router-dom';

describe('<HeaderBar />', () => {
  
  it('Renders without crashing', () => {
    shallow(<HeaderBar />);
  });

  it('Renders the right menu when a user is not logged in', () => {
    const wrapper = mount(<BrowserRouter history={browserHistory}><HeaderBar loggedIn={false} /></BrowserRouter>);
    const links = wrapper.find('Link');
    expect(links.at(1).getElement().props.to).toEqual('/');
    expect(links.at(2).getElement().props.to).toEqual('/register');
    expect(links.at(3).getElement().props.to).toEqual('/login');
  });

  it('Renders the right menu when a user is logged in', () => {
    const wrapper = mount(<BrowserRouter history={browserHistory}><HeaderBar loggedIn={true} /></BrowserRouter>);
    const links = wrapper.find('Link');
    expect(links.at(1).getElement().props.to).toEqual('/');
    expect(links.at(2).getElement().props.to).toEqual('/profile');
    expect(wrapper.find('a').at(3).text()).toEqual('Log Out');
  });

  it('Renders the right class for nav links when menu is open', () => {
    const wrapper = shallow(<BrowserRouter history={browserHistory}><HeaderBar mainMenuOpen={true} /></BrowserRouter>);
    expect(wrapper.html()).toEqual(expect.stringContaining('responsive'));
  });
  
  it('Dispatches clearAuth when the logout link is clicked', () => {
    const dispatch = jest.fn();
    const component = mount(<BrowserRouter history={browserHistory}><HeaderBar dispatch={dispatch} loggedIn={true} /></BrowserRouter>);
    const link = component.find('.logout-link');
    link.simulate('click');
    expect(dispatch).toHaveBeenCalledWith(clearAuth());
  });

  it('Dispatches toggleMainMenu toggle menu button is clicked', () => {
    const dispatch = jest.fn();
    const component = mount(<BrowserRouter history={browserHistory}><HeaderBar dispatch={dispatch} mainMenuOpen={false} loggedIn={true} /></BrowserRouter>);
    const button = component.find('.toggle-button');
    button.simulate('click');
    expect(dispatch).toHaveBeenCalledWith(toggleMainMenu());
  });

  it('Dispatches toggleMainMenu if a link is clicked when the menu is open', () => {
    const dispatch = jest.fn();
    const component = mount(<BrowserRouter history={browserHistory}><HeaderBar dispatch={dispatch} mainMenuOpen={true} loggedIn={true} /></BrowserRouter>);
    const link = component.find('.logout-link');
    link.simulate('click');
    expect(dispatch).toHaveBeenCalledWith(toggleMainMenu());
  });
  
});