import reducer from '../dragons/dragons';

describe('Test dragons ', () => {
  test('Test fetch Data ', () => {
    const fetchData = 'rocketStore/rockets/fetchDragon';
    const state = [];
    const dragons = reducer(state, {
      type: fetchData,
      payload: [{
        id: 'item1', name: 'dragon 1', type: 'Big', flickr_images: 'url', description: 'great dragon',
      }],
    });
    expect(dragons[0].id).toEqual('item1');
    expect(dragons[0].name).toEqual('dragon 1');
    expect(dragons[0].type).toEqual('Big');
    expect(dragons[0].flickr_images).toEqual('url');
    expect(dragons[0].description).toEqual('great dragon');
    expect(dragons[0].reserved).toEqual(false);
  });
  test('Test reserve button ', () => {
    const state = [{ id: 'item1', reserved: false }];
    const reserve = 'rocketStore/rockets/reserve';
    const dragons = reducer(state, { type: reserve, payload: { id: 'item1', reserved: false } });
    expect(dragons[0].reserved).toEqual(true);
  });
});
