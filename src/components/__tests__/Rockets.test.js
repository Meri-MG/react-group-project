import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import * as ReactRedux from 'react-redux';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import store from '../../redux/configureStore';
import Rockets from '../Rockets/Rockets';
import ReserveBtn from '../Rockets/ReserveBtn';

// useDispatch returns a function which we are mocking here
const mockDispatch = jest.fn();

beforeAll(() => {
  ReactRedux.useDispatch = jest.fn().mockImplementation(() => mockDispatch);
});

beforeEach(() => {
  ReactRedux.useDispatch.mockClear();
});

describe('Rockets Component test', () => {
  it('Renders Rocket Page', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Rockets />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
  it('test click ', async () => {
    const rocket = {
      data: {
        reserve: false,
        id: 'item1',
      },
    };
    const handleReserve = jest.fn();
    render(
      <ReserveBtn
        reserve={rocket.data.reserve}
        id={rocket.data.id}
        handleReserve={handleReserve}
      />,
    );
    await userEvent.click(screen.getByRole('button'));
    expect(handleReserve).toHaveBeenCalled();
  });
  it('Button Text', async () => {
    const rocket = {
      data: {
        reserve: true,
        id: 'item1',
      },
    };
    const handleReserve = jest.fn();
    render(
      <ReserveBtn
        reserve={rocket.data.reserve}
        id={rocket.data.id}
        handleReserve={handleReserve}
      />,
    );
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button').textContent).toEqual('Cancel Reservation');
  });
});
