import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import MissionList from '../missions/MissionList';
import MissionBtn from '../missions/missionbtn';

describe('Test  Mission section functionality ', () => {
  test('snapshot', () => {
    const tree = renderer.create(<Provider store={store}><MissionList /></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('test click ', async () => {
    const handleJoin = jest.fn();
    const join = { };
    render(<MissionBtn handleJoin={handleJoin} join={join} /> );
    await userEvent.click(screen.getByRole('button'));
    expect(handleJoin).toHaveBeenCalled();
  });
  test('test button text ', async () => {
    const handleJoin = jest.fn();
    const join = { };
    render(<MissionBtn handleJoin={handleJoin} join={join} /> );
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('button').textContent).toEqual('Leave Mission');
  });
});
