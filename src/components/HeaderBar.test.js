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
    const wrapper = shallow(<BrowserRouter history={browserHistory}><HeaderBar loggedIn={false} /></BrowserRouter>);
    expect(wrapper.html()).toEqual('<header role=\"banner\" class=\"top-nav\"><div class=\"container header\"><div class=\"row\"><div class=\"col-12\"><a class=\"logo-link\" href=\"/\"><img src=\"logo.png\" class=\"logo\" alt=\"Shared Interests logo\"/><span class=\"logo-type\">Shared Interests</span></a><nav><ul class=\"nav-links\"><span><li><a href=\"/\">Home</a></li><li><a href=\"/register\">Sign Up</a></li><li><a href=\"/login\">Log In</a></li></span></ul></nav><a class=\"toggle-button\">≡</a></div></div></div></header>');
  });

  it('Renders the right menu when a user is logged in', () => {
    const wrapper = shallow(<BrowserRouter history={browserHistory}><HeaderBar loggedIn={true} /></BrowserRouter>);
    expect(wrapper.html()).toEqual('<header role=\"banner\" class=\"top-nav\"><div class=\"container header\"><div class=\"row\"><div class=\"col-12\"><a class=\"logo-link\" href=\"/\"><img src=\"logo.png\" class=\"logo\" alt=\"Shared Interests logo\"/><span class=\"logo-type\">Shared Interests</span></a><nav><ul class=\"nav-links\"><span><li><a href=\"/\">Home</a></li><li><a href=\"/profile\">Profile</a></li><li><a class=\"logout-link\">Log Out</a></li></span></ul></nav><a class=\"toggle-button\">≡</a></div></div></div></header>');
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