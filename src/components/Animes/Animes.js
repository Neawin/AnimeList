import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSingle } from "../../actions/animeActions";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Overview from "./Overview";
import Characters from "./Characters";
import Social from "./Social";
import Stats from "./Stats";
import Staff from "./Staff";

const Animes = ({ single, ownProps, getSingle }) => {
  useEffect(() => {
    getSingle(ownProps.match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const divStyle = {
    backgroundImage: `url(${single.Media.bannerImage})`,
  };
  if (single.Media.nextAiringEpisode != null) {
    let seconds = Number(single.Media.nextAiringEpisode.timeUntilAiring);
    var d = Math.floor(seconds / 86400);
    var h = Math.floor((seconds % 86400) / 3600);
    var m = Math.floor((seconds % 3600) / 60);
  }

  const showEp = () => {
    if (d == null && h == null && m == null) {
      return ``;
    } else if (d === 0 && h !== 0 && m !== 0) {
      return `Ep ${single.Media.nextAiringEpisode.episode} - ${h}h ${m}m`;
    } else if (d !== 0 && h === 0 && m !== 0) {
      return `Ep ${single.Media.nextAiringEpisode.episode} - ${d}d ${m}m`;
    } else if (d !== 0 && h !== 0 && m === 0) {
      return `Ep ${single.Media.nextAiringEpisode.episode} - ${d}d ${h}h`;
    } else if (d === 0 && h === 0 && m !== 0) {
      return `Ep ${single.Media.nextAiringEpisode.episode} - ${m}m`;
    } else if (d !== 0 && h === 0 && m === 0) {
      return `Ep ${single.Media.nextAiringEpisode.episode} - ${d}d`;
    } else if (d === 0 && h !== 0 && m === 0) {
      return `Ep ${single.Media.nextAiringEpisode.episode} - ${h}h`;
    } else {
      return `Ep ${single.Media.nextAiringEpisode.episode} - ${d}d ${h}h ${m}m `;
    }
  };

  return (
    <Router>
      <div className="page-content">
        <div className="header-wrap">
          <div className="banner" style={divStyle}>
            <div className="shadow"></div>
          </div>
          <div className="header">
            <div className="container">
              <div className="cover-wrap">
                <div className="cover-wrap-inner">
                  <img
                    src={single.Media.coverImage.large}
                    alt=""
                    className="cover"
                  />
                  <div className="actions">
                    <div className="list">
                      <div className="add">Add to List</div>
                      <div className="dropdown"></div>
                    </div>
                    <div className="favourite">
                      <i className="fas fa-heart"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content">
                <h1 className="content-header">{single.Media.title.romaji}</h1>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: single.Media.description }}
                ></div>
                <nav className="nav">
                  <Link to={`/animes/${single.Media.id}`} className="link">
                    Overview
                  </Link>
                  <Link
                    to={`/animes/${single.Media.id}/characters`}
                    className="link"
                  >
                    Characters
                  </Link>
                  <Link
                    to={`/animes/${single.Media.id}/staff`}
                    className="link"
                  >
                    Staff
                  </Link>
                  <Link
                    to={`/animes/${single.Media.id}/stats`}
                    className="link"
                  >
                    Stats
                  </Link>
                  <Link
                    to={`/animes/${single.Media.id}/social`}
                    className="link"
                  >
                    Social
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content container">
          <div className="sidebar">
            <div className="rankings">
              {single.Media.rankings[0] != null && (
                <div className="ranking">
                  <i className="fas fa-star fa-xs"></i>
                  <span className="rank-text">
                    #{single.Media.rankings[0].rank}{" "}
                    {single.Media.rankings[0].context}{" "}
                    {single.Media.rankings[0].season}{" "}
                    {single.Media.rankings[0].year}
                  </span>
                </div>
              )}
              {single.Media.rankings[1] != null && (
                <div className="ranking">
                  <i className="fas fa-heart fa-xs"></i>
                  <span className="rank-text">
                    #{single.Media.rankings[1].rank}{" "}
                    {single.Media.rankings[1].context}{" "}
                    {single.Media.rankings[1].season}{" "}
                    {single.Media.rankings[1].year}
                  </span>
                </div>
              )}
            </div>
            <div className="data">
              {single.Media.nextAiringEpisode != null && (
                <div className="data-set">
                  <div className="type">Airing</div>
                  <div className="value">{showEp()}</div>
                </div>
              )}
              {single.Media.format != null && (
                <div className="data-set">
                  <div className="type">Format</div>
                  <div className="value">{single.Media.format}</div>
                </div>
              )}
              {single.Media.episodes != null && (
                <div className="data-set">
                  <div className="type">Episodes</div>
                  <div className="value">{single.Media.episodes}</div>
                </div>
              )}
              {single.Media.duration != null && (
                <div className="data-set">
                  <div className="type">Episodes Duration</div>
                  <div className="value">{single.Media.duration} mins</div>
                </div>
              )}
              {single.Media.status != null && (
                <div className="data-set">
                  <div className="type">Status</div>
                  <div className="value">{single.Media.status}</div>
                </div>
              )}
              {single.Media.season != null && (
                <div className="data-set">
                  <div className="type">Season</div>
                  <div className="value">
                    {single.Media.season} {single.Media.seasonYear}
                  </div>
                </div>
              )}
              {single.Media.averageScore != null && (
                <div className="data-set">
                  <div className="type">Average Score</div>
                  <div className="value">{single.Media.averageScore}%</div>
                </div>
              )}
              {single.Media.meanScore != null && (
                <div className="data-set">
                  <div className="type">Mean Score</div>
                  <div className="value">{single.Media.meanScore}%</div>
                </div>
              )}
              {single.Media.popularity != null && (
                <div className="data-set">
                  <div className="type">Popularity</div>
                  <div className="value">{single.Media.popularity}</div>
                </div>
              )}
              {single.Media.favourites != null && (
                <div className="data-set">
                  <div className="type">Favorites</div>
                  <div className="value">{single.Media.favourites}</div>
                </div>
              )}
              {single.Media.studios.nodes[0].name != null && (
                <div className="data-set">
                  <div className="type">Studios</div>
                  <div className="value">
                    {single.Media.studios.nodes[0].name}
                  </div>
                </div>
              )}
              {single.Media.genres != null && (
                <div className="data-set">
                  <div className="type">Genres</div>
                  <div className="value">
                    {single.Media.genres.map((e, i) => {
                      if (single.Media.genres.length === i + 1) {
                        return e;
                      } else {
                        return `${e}, `;
                      }
                    })}
                  </div>
                </div>
              )}
              {single.Media.source != null && (
                <div className="data-set">
                  <div className="type">Source</div>
                  <div className="value">{single.Media.source}</div>
                </div>
              )}
              {single.Media.hashtag != null && (
                <div className="data-set">
                  <div className="type">Hashtag</div>
                  <div className="value">{single.Media.hashtag}</div>
                </div>
              )}
              {single.Media.title.romaji != null && (
                <div className="data-set">
                  <div className="type">Romaji</div>
                  <div className="value">{single.Media.title.romaji}</div>
                </div>
              )}
              {single.Media.title.english != null && (
                <div className="data-set">
                  <div className="type">English</div>
                  <div className="value">{single.Media.title.english}</div>
                </div>
              )}
              {single.Media.title.native != null && (
                <div className="data-set">
                  <div className="type">Native</div>
                  <div className="value">{single.Media.title.native}</div>
                </div>
              )}
            </div>
            <div className="tags">
              {single.Media.tags.length !== 0 && <h2>Tags</h2>}

              {single.Media.tags.map((e) => {
                return (
                  <div key={e.id} className="tag">
                    <span className="tag-name">{e.name}</span>
                    <div className="tag-value">{e.rank}%</div>
                  </div>
                );
              })}
            </div>
            <div className="external-links">
              {single.Media.tags.length !== 0 && (
                <h2>External & Streaming Links</h2>
              )}

              {single.Media.externalLinks.map((e) => {
                return (
                  <a
                    key={e.id}
                    className="external-link"
                    href={e.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {e.site}
                  </a>
                );
              })}
            </div>
          </div>
          <Switch>
            <Route
              exact
              path={`${useLocation().pathname}`}
              render={(props) => <Overview {...props} />}
            />
            <Route
              exact
              path={`${useLocation().pathname}/characters`}
              component={Characters}
            />
            <Route
              exact
              path={`${useLocation().pathname}/Staff`}
              component={Staff}
            />
            <Route
              exact
              path={`${useLocation().pathname}/Stats`}
              component={Stats}
            />
            <Route
              exact
              path={`${useLocation().pathname}/Social`}
              component={Social}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    anime: { single },
  } = state;
  return {
    single,
    ownProps,
  };
};

export default connect(mapStateToProps, { getSingle })(Animes);
