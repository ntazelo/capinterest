import CategoryReducer from './CategoryReducer';
import { GET_CATEGORY } from '../Action/ActionType';

describe('homeReducer Test', () => {
  const initialState = [];
  it('Returns the payload', () => {
    const payload = { type: GET_CATEGORY, payload: [{ category: 'music' }] };
    const state = CategoryReducer(initialState, payload);
    expect(state).toEqual(payload.payload);
  });

  it('Returns an empty array with the initial state when type is undefined', () => {
    const payload = { type: 'Undefined', payload: [] };
    const state = CategoryReducer(initialState, payload);
    expect(state).toEqual(initialState);
  });
});
