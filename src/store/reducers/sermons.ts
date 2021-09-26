import * as types from '../../store/types';

const initialState = {
  allSermons: {},
  selectedSermonId: null,
};

export const sermonsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.LOAD_SERMON:
      const { sermon } = action.payload.sermon;
      return {
        ...state,
        allSermons: {
          ...state.allSermons,
          [sermon.slug]: {
            ...sermon,
          },
        },
      };

    case types.LOAD_SERMONS:
      return {
        ...state,
        allSermons: action.payload.entities.sermons,
      };

    case types.SELECT_SERMON:
      return {
        ...state,
        selectedSermonId: action.payload,
      };

    default:
      return state;
  }
};

export const getSermonsByCategory = (allSermons: any, category: string) => {
  return Object.values(allSermons)?.filter(
    (node: any) => node?.category === category
  );
};

export const searchSermons = (allSermons: any, query: string) => {
  const results: any[] = [];

  if (!query) {
    // if query is an empty string or otherwise falsey,
    // return results, which is an empty array
    return results;
  }

  Object.values(allSermons).map((node: any) => {
    if (node.title.toLowerCase().indexOf(query.toLowerCase()) > -1) {
      results.push(node);
    }
    return [];
  });

  return results;
};
