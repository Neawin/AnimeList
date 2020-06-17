import React, { useEffect } from "react";
import { getHighest } from "../../actions/animeActions";
import { connect } from "react-redux";
import Anime from "../Home/Anime";
import { Link } from "react-router-dom";
const HighestSection = ({ ownProps, highest, getHighest }) => {
  useEffect(() => {
    getHighest(9, ownProps.match.params.page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ownProps.match.params.page]);

  var pages = Array.from(Array(20).keys());

  return (
    <div className="preview">
      <div className="preview-section">
        {highest.Page.media.map((element) => (
          <Anime key={element.id} animes={element} />
        ))}
      </div>
      <ul className="list-group">
        {pages.map((e) => {
          return (
            <Link key={e} to={`/highest/${e + 1}`} className="list-item">
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
    anime: { highest },
  } = state;
  return {
    highest,
    ownProps,
  };
};

export default connect(mapStateToProps, { getHighest })(HighestSection);
