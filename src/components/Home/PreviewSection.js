import React, { useEffect } from "react";
import { connect } from "react-redux";
import Anime from "./Anime";
import { getPopular } from "../../actions/animeActions";
import { getHighest } from "../../actions/animeActions";
import { getAnticipated } from "../../actions/animeActions";
import { Link } from "react-router-dom";

const PreviewSection = ({
  highest,
  anticipated,
  popular,
  getPopular,
  getHighest,
  getAnticipated,
}) => {
  useEffect(() => {
    getPopular(6, 1);
    getAnticipated(6, 1);
    getHighest(6, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Link to="/popular/1" className="hero-heading">
        Popular This Season
      </Link>
      <div className="preview-section">
        {popular.Page.media.map((element) => (
          <Anime key={element.id} animes={element} />
        ))}
      </div>
      <Link to="/anticipated/1" className="hero-heading">
        Highly Anticipated Next Season
      </Link>
      <div className="preview-section">
        {anticipated.Page.media.map((element) => (
          <Anime key={element.id} animes={element} />
        ))}
      </div>
      <Link to="/highest/1" className="hero-heading">
        Highest Rated All Time
      </Link>
      <div className="preview-section">
        {highest.Page.media.map((element) => (
          <Anime key={element.id} animes={element} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  anime: state.anime.anime,
  popular: state.anime.popular,
  anticipated: state.anime.anticipated,
  highest: state.anime.highest,
});

export default connect(mapStateToProps, {
  getPopular,
  getHighest,
  getAnticipated,
})(PreviewSection);
