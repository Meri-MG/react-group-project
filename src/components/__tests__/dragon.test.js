import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import Dragon from '../Dragons/Dragon';
import Reserve from '../Dragons/Reserve';

describe('Test Dragon section functionality ', () => {
  test('snapshot', () => {
    const tree = renderer.create(<Provider store={store}><Dragon /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('test click ', async () => {
    const reserveHandler = jest.fn();
    const el = { reserved: false };
    render(<Reserve
      reserveHandler={
        () => reserveHandler(el)
      }
      content={el.reserved ? 'Cancel reservation' : 'Reserve dragon'}
    />);
    await userEvent.click(screen.getByRole('button'));
    expect(reserveHandler).toHaveBeenCalled();
  });
  test('test button text ', async () => {
    const reserveHandler = jest.fn();
    const el = { reserved: true };
    render(<Reserve
      reserveHandler={
        () => reserveHandler(el)
      }
      content={el.reserved ? 'Cancel reservation' : 'Reserve dragon'}
    />);
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button').textContent).toEqual('Cancel reservation');
  });
});
