import * as types from '../../store/types';

const initialState = {
  allResources: {},
  selectedResourceId: null,
};

export const resourcesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.LOAD_RESOURCES:
      return {
        ...state,
        allResources: action.payload.entities.resources,
      };

    case types.LOAD_RESOURCE:
      const { resource } = action.payload.resource;
      return {
        ...state,
        allResources: {
          ...state.allResources,
          [resource?.slug]: {
            ...resource,
          },
        },
      };
    case types.SELECT_RESOURCE:
      return {
        ...state,
        selectedResourceId: action.payload,
      };

    default:
      return state;
  }
};

type Type = 'jewish' | 'article';

export const getResourcesByType = (allResources: any, type: Type) => {
  return Object.values(allResources)
    .filter((node: any) => node?.resourceType === type)
    .sort((a: any, b: any) => (a?.order > b?.order) as any);
};

export const getResourcesByCategory = (allResources: any, category: string) => {
  return Object.values(allResources)?.filter(
    (node: any) => node?.category === category
  );
};

export const searchResources = (allResources: any, query: string) => {
  const results: any[] = [];

  if (!query) {
    return results;
  }

  Object.values(allResources).map((node: any) => {
    if (node?.title?.toLowerCase().indexOf(query?.toLowerCase()) > -1) {
      results.push(node);
    }
  });

  return results;
};
