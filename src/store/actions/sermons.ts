import { normalize, schema } from 'normalizr';
import { Dispatch } from 'redux';

import * as types from '../types';

const sermon = new schema.Entity('sermons', undefined, { idAttribute: 'slug' });
const arrayOfSermons = new schema.Array(sermon);

export const loadSermons = (sermons: any[]) => async (dispatch: Dispatch) => {
  dispatch({
    type: types.LOAD_SERMONS,
    payload: normalize(sermons, arrayOfSermons),
  });
};

export const loadSermon = (incomingSermon: any) => async (
  dispatch: Dispatch,
) => {
  dispatch({
    type: types.LOAD_SERMON,
    payload: {
      sermon: incomingSermon,
    },
  });
};

export const selectSermon = (id: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: types.SELECT_SERMON,
    payload: id,
  });
};
