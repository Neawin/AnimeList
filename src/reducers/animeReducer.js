import {
  GET_ANIME,
  GET_HIGHEST,
  GET_POPULAR,
  GET_ANTICIPATED,
  GET_SINGLE,
  GET_OVERVIEW,
} from "../actions/types";

const initialState = {
  anime: {
    Page: {
      media: [],
    },
  },
  single: {
    Media: {
      title: {},
      coverImage: {},
      rankings: [0, 1],
      nextAiringEpisode: {},
      studios: {
        nodes: [0],
      },
      genres: [],
      tags: [],
      externalLinks: [],
    },
  },
  popular: {
    Page: {
      media: [],
      pageInfo: [],
    },
  },
  anticipated: {
    Page: {
      media: [],
      pageInfo: [],
    },
  },
  highest: {
    Page: {
      media: [],
      pageInfo: [],
    },
  },
  overview: {
    Media: {
      characters: {
        edges: [
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
          { node: { name: {}, image: {} } },
        ],
      },
      relations: {
        edges: [
          {
            node: {
              coverImage: {},
              title: {},
            },
          },
          {
            node: {
              coverImage: {},
              title: {},
            },
          },
          {
            node: {
              coverImage: {},
              title: {},
            },
          },
          {
            node: {
              coverImage: {},
              title: {},
            },
          },
          {
            node: {
              coverImage: {},
              title: {},
            },
          },
          {
            node: {
              coverImage: {},
              title: {},
            },
          },
          {
            node: {
              coverImage: {},
              title: {},
            },
          },
          {
            node: {
              coverImage: {},
              title: {},
            },
          },
          {
            node: {
              coverImage: {},
              title: {},
            },
          },
          {
            node: {
              coverImage: {},
              title: {},
            },
          },
          {
            node: {
              coverImage: {},
              title: {},
            },
          },
        ],
      },
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ANIME:
      return {
        ...state,
        anime: action.payload.data,
      };
    case GET_POPULAR:
      return {
        ...state,
        popular: action.payload.data,
      };
    case GET_HIGHEST:
      return {
        ...state,
        highest: action.payload.data,
      };
    case GET_ANTICIPATED:
      return {
        ...state,
        anticipated: action.payload.data,
      };
    case GET_SINGLE:
      return {
        ...state,
        single: action.payload.data,
      };
    case GET_OVERVIEW:
      return {
        ...state,
        overview: action.payload.data,
      };
    default:
      return state;
  }
};
