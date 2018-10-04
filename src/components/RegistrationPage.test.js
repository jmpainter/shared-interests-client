import React from 'react';
import { shallow } from 'enzyme';
import { RegistrationPage } from './RegistrationPage';
import { BrowserRouter, browserHistory} from 'react-router-dom';

describe('<RegistrationForm />', () => {
  
  it('Renders without crashing', () => {
    const dispatch = jest.fn();
    shallow(<RegistrationPage loggedIn={false} dispatch={dispatch} />);
  });
  
  it('Redirects when a user is logged in', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(
      <BrowserRouter history={browserHistory}>
        <RegistrationPage loggedIn={true} dispatch={dispatch} />
      </BrowserRouter>
    );
    expect(wrapper.html()).toEqual('');
  });

});
