import { normalize, schema } from 'normalizr';
import { Dispatch } from 'redux';

import * as types from '../types';

const resource = new schema.Entity('resources', undefined, {
  idAttribute: 'slug',
});
const arrayOfResources = new schema.Array(resource);

export const loadResources = (resources: any[]) => async (
  dispatch: Dispatch,
) => {
  dispatch({
    type: types.LOAD_RESOURCES,
    payload: normalize(resources, arrayOfResources),
  });
};

export const loadResource = (incomingResource: any) => async (
  dispatch: Dispatch,
) => {
  dispatch({
    type: types.LOAD_RESOURCE,
    payload: {
      resource: incomingResource,
    },
  });
};

export const selectResource = (id: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: types.SELECT_RESOURCE,
    payload: id,
  });
};
