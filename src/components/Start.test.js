import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import Start from './Start';
import { Provider } from 'react-redux';
import initialState from '../setupTests';

const mockStore = configureStore();

describe('<Start />', () => {
  it('Renders without crashing', () => {
    const store = mockStore(initialState);
    shallow(<Provider store={store}><Start /></Provider>);
  });
});
