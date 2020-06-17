import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getOverview } from "../../actions/animeActions";
const Overview = ({ overview, getOverview, ownProps }) => {
  useEffect(() => {
    getOverview(ownProps.match.path.slice(8));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="overview">
      {overview.Media.relations != null && (
        <div className="relations">
          <h2>Relations</h2>
          <div className="grid-wrap">
            {overview.Media.relations.edges.map((e, i) => {
              return (
                <div key={i} className="media-preview-card">
                  <a
                    href="google.com"
                    className="cover"
                    style={{
                      backgroundImage: "url(" + e.node.coverImage.medium + ")",
                    }}
                  ></a>
                  <div className="content">
                    <div className="info-header">
                      <div>{e.relationType}</div>
                    </div>
                    <div className="title">{e.node.title.romaji}</div>
                    <div className="info">
                      {e.node.format} - {e.node.status}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {overview.Media.characters != null && (
        <div className="characters">
          <h2>Characters</h2>
          <div className="grid-wrap">
            {overview.Media.characters.edges.map((e, i) => {
              console.log(e.node.image.medium);
              return (
                <div key={i} className="character-card">
                  <a
                    href="google.com"
                    className="cover"
                    style={{
                      backgroundImage: "url(" + e.node.image.medium + ")",
                    }}
                  ></a>
                  <div className="content">
                    <div className="name">{e.node.name.full}</div>
                    <div className="role">{e.role}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    anime: { overview },
  } = state;
  return {
    overview,
    ownProps,
  };
};

export default connect(mapStateToProps, { getOverview })(Overview);
