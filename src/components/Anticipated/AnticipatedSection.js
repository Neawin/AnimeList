import React, { useEffect } from "react";
import { getAnticipated } from "../../actions/animeActions";
import { connect } from "react-redux";
import Anime from "../Home/Anime";
import { Link } from "react-router-dom";
const AnticipatedSection = ({ ownProps, anticipated, getAnticipated }) => {
  useEffect(() => {
    getAnticipated(9, ownProps.match.params.page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ownProps.match.params.page]);

  var pages = Array.from(Array(anticipated.Page.pageInfo.lastPage).keys());

  return (
    <div className="preview">
      <div className="preview-section">
        {anticipated.Page.media.map((element) => (
          <Anime key={element.id} animes={element} />
        ))}
      </div>
      <ul className="list-group">
        {pages.map((e) => {
          return (
            <Link key={e} to={`/anticipated/${e + 1}`} className="list-item">
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
    anime: { anticipated },
  } = state;
  return {
    anticipated,
    ownProps,
  };
};

export default connect(mapStateToProps, { getAnticipated })(AnticipatedSection);
