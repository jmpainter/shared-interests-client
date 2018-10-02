import React from 'react';
import { shallow } from 'enzyme';
import { deleteInterestAndUpdateUser } from '../actions/intererests';

import DeleteInterest from './DeleteInterest';

describe('<DeleteInterest />', () => {
  
  it('Renders without crashing', () => {
    shallow(<DeleteInterest key="1" id="1"name="fake" />);
  });

  // it('Sends the message', () => {
  //   const dispatch = jest.fn();
  //   const wrapper = shallow(<SendMessage dispatch={dispatch} editorState={editorState} conversationId={'fake'} />);
  //   const form = wrapper.find('form');
  //   form.simulate('submit');
  //   expect(dispatch.mock.calls[dispatch.mock.calls.length - 1][0].toString()).toEqual(addMessageAndGetConversations(dispatch).toString());
  // });

  it('Renders the interest to be deleted', () => {
    const wrapper = shallow(<DeleteInterest key="1" id="1"name="fake" />);
    expect(wrapper.html()).toEqual('<li>fake <button class=\"delete-interest\">delete</button></li>');
  });

  it('Deletes the interest', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<DeleteInterest dispatch={dispatch} key="1" id="1"name="fake" />);
    wrapper.find('.delete-interest').simulate('click');
    // check that the first call to dispatch is for the correct action
    expect(dispatch.mock.calls[0][0].toString()).toEqual(deleteInterestAndUpdateUser(dispatch).toString());
  });

});