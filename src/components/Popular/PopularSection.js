import React, { useEffect } from "react";
import { getPopular } from "../../actions/animeActions";
import { connect } from "react-redux";
import Anime from "../Home/Anime";
import { Link } from "react-router-dom";
const PopularSection = ({ ownProps, popular, getPopular }) => {
  useEffect(() => {
    getPopular(9, ownProps.match.params.page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ownProps.match.params.page]);

  var pages = Array.from(Array(popular.Page.pageInfo.lastPage).keys());

  return (
    <div className="preview">
      <div className="preview-section">
        {popular.Page.media.map((element) => (
          <Anime key={element.id} animes={element} />
        ))}
      </div>
      <ul className="list-group">
        {pages.map((e) => {
          return (
            <Link key={e} to={`/popular/${e + 1}`} className="list-item">
              {e + 1}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    anime: { popular },
  } = state;
  return {
    popular,
    ownProps,
  };
};

export default connect(mapStateToProps, { getPopular })(PopularSection);
