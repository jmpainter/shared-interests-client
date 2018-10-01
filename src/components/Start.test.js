import React from 'react';
import { shallow } from 'enzyme';

import { Start } from './Start';
// import { Provider } from 'react-redux';
// import initialState from '../setupTests';

// const mockStore = configureStore();

describe('<Start />', () => {
  it('Renders without crashing', () => {
    const callback = jest.fn();
    // const store = mockStore(initialState);
    // shallow(<Provider store={store}><Start /></Provider>);
    shallow(<Start dispatch={callback} />);
  });
});
