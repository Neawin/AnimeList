import {
  GET_ANIME,
  GET_ANTICIPATED,
  GET_POPULAR,
  GET_HIGHEST,
  GET_SINGLE,
  GET_OVERVIEW,
} from "./types";

export const getAnime = () => {
  return async (dispatch, getState) => {
    const {
      form: {
        searchForm: {
          values: { search },
        },
      },
    } = getState();

    let query = `
    query ($page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (search: $search) {
          id
          title {
            romaji
          }
          episodes
          season
          status
          coverImage {
            large  
          }
          source
          averageScore
          chapters
          volumes
          
        }
        
      }
    }
    `;

    let variables = {
      search: search,
      page: 1,
      perPage: 9,
    };

    let url = "https://graphql.anilist.co",
      options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: query,
          variables: variables,
        }),
      };
    const res = await fetch(url, options);
    const data = await res.json();

    dispatch({
      type: GET_ANIME,
      payload: data,
    });
  };
};

export const getPopular = (perPage, page) => {
  return async (dispatch) => {
    var query = `
    query ($page: Int, $perPage: Int){
      Page(page: $page, perPage: $perPage) {
        pageInfo {
          currentPage
          lastPage
          hasNextPage
          perPage
          total
        }
        media(season: SPRING, seasonYear: 2020, sort: POPULARITY_DESC) {
          id
          title {
            romaji
          }
          season
          seasonYear
          format
          averageScore
          description
          coverImage {
            large
          }
          studios {
            nodes {
              name
            }
          }
          nextAiringEpisode {
            episode
            timeUntilAiring
          }
          genres
        }
      }
    }
    
    `;

    var variables = {
      page: page,
      perPage: perPage,
    };

    var url = "https://graphql.anilist.co",
      options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: query,
          variables: variables,
        }),
      };
    const res = await fetch(url, options);
    const data = await res.json();

    dispatch({
      type: GET_POPULAR,
      payload: data,
    });
  };
};

export const getAnticipated = (perPage, page) => {
  return async (dispatch) => {
    var query = `
    query ($page: Int, $perPage: Int){
      Page(page: $page, perPage: $perPage) {
        pageInfo {
          currentPage
          lastPage
          hasNextPage
          perPage
          total
        }
        media(season: SUMMER, seasonYear: 2020, sort: POPULARITY_DESC) {
          id
          title {
            romaji
          }
          season
          seasonYear
          format
          averageScore
          description
          coverImage {
            large
          }
          studios {
            nodes {
              name
            }
          }
          nextAiringEpisode {
            episode
            timeUntilAiring
          }
          genres
        }
      }
    }
    
    `;

    var variables = {
      page: page,
      perPage: perPage,
    };

    var url = "https://graphql.anilist.co",
      options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: query,
          variables: variables,
        }),
      };
    const res = await fetch(url, options);
    const data = await res.json();

    dispatch({
      type: GET_ANTICIPATED,
      payload: data,
    });
  };
};

export const getHighest = (perPage, page) => {
  return async (dispatch) => {
    var query = `
    query ($page: Int, $perPage: Int){
      Page(page: $page, perPage: $perPage) {
        pageInfo {
          currentPage
          lastPage
          hasNextPage
          perPage
          total
        }
        media(sort: SCORE_DESC, format:TV) {
          id
          title {
            romaji
          }
          format
          seasonYear
          season
          averageScore
          description
          coverImage {
            large
          }
          studios {
            nodes {
              name
            }
          }
          nextAiringEpisode {
            episode
            timeUntilAiring
          }
          genres
        }
      }
    }
    
    `;

    var variables = {
      page: page,
      perPage: perPage,
    };

    var url = "https://graphql.anilist.co",
      options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: query,
          variables: variables,
        }),
      };
    const res = await fetch(url, options);
    const data = await res.json();

    dispatch({
      type: GET_HIGHEST,
      payload: data,
    });
  };
};

export const getSingle = (id) => {
  return async (dispatch) => {
    var query = `
    {
       
        
        Media(id:${id}) {
          id
          title {
            romaji
            english
            native
          }
          nextAiringEpisode{
            timeUntilAiring
            episode
          }
          rankings {
            season
            context
            year
            rank
          }
          description
          bannerImage
          coverImage{
            large
          }  
          popularity
          format
          episodes
          status
          duration
          season
          seasonYear
          startDate {
            year
            month
            day
          }
          averageScore
          meanScore
          popularity
          favourites
          studios{
            nodes {
              name    
            }
            
          }
          source
          genres
          synonyms   
          hashtag  
          tags {
            id
            name
            rank            
          } 
          externalLinks {
            id
            url
            site
          }
          }
        }
    
    `;

    var url = "https://graphql.anilist.co",
      options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: query,
        }),
      };
    const res = await fetch(url, options);
    const data = await res.json();

    dispatch({
      type: GET_SINGLE,
      payload: data,
    });
  };
};

export const getOverview = (id) => {
  return async (dispatch) => {
    var query = `
    {
      Media(id: ${id}) {
        characters {
          edges {
            role
            node {
              name {
                full
              }
              image {
                large
                medium
              }
            }
          }
        }
        relations {
          edges {
            id
            relationType
            node {
              id
              format
              title {
                romaji
              }
              coverImage {
                medium
              }
              status
            }
          }
        }
      }
    }
    `;

    var url = "https://graphql.anilist.co",
      options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query: query,
        }),
      };
    const res = await fetch(url, options);
    const data = await res.json();

    dispatch({
      type: GET_OVERVIEW,
      payload: data,
    });
  };
};
