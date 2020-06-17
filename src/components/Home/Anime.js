import React from "react";
import { Link } from "react-router-dom";
const Anime = ({ animes }) => {
  const {
    id,
    title,
    coverImage,
    studios,
    nextAiringEpisode,
    format,
    averageScore,
    description,
    genres,
    season,
    seasonYear,
  } = animes;
  const divStyle = {
    backgroundImage: "url(" + coverImage.large + ")",
  };
  if (nextAiringEpisode != null) {
    let seconds = Number(nextAiringEpisode.timeUntilAiring);
    var d = Math.floor(seconds / 86400);
    var h = Math.floor((seconds % 86400) / 3600);
    var m = Math.floor((seconds % 3600) / 60);
  }
  const showEp = () => {
    if (d == null && h == null && m == null) {
      return `${season} ${seasonYear}`;
    } else if (d === 0 && h !== 0 && m !== 0) {
      return `Ep ${nextAiringEpisode.episode} - ${h}h ${m}m`;
    } else if (d !== 0 && h === 0 && m !== 0) {
      return `Ep ${nextAiringEpisode.episode} - ${d}d ${m}m`;
    } else if (d !== 0 && h !== 0 && m === 0) {
      return `Ep ${nextAiringEpisode.episode} - ${d}d ${h}h`;
    } else if (d === 0 && h === 0 && m !== 0) {
      return `Ep ${nextAiringEpisode.episode} - ${m}m`;
    } else if (d !== 0 && h === 0 && m === 0) {
      return `Ep ${nextAiringEpisode.episode} - ${d}d`;
    } else if (d === 0 && h !== 0 && m === 0) {
      return `Ep ${nextAiringEpisode.episode} - ${h}h`;
    } else {
      return `Ep ${nextAiringEpisode.episode} - ${d}d ${h}h ${m}m `;
    }
  };

  return (
    <div className="anime-container">
      <div className="cover" style={divStyle} href="#">
        <div className="overlay">
          <Link to={`/animes/${id}`} className="title">
            {title.romaji}
          </Link>
          <div className="studio">
            <a className="studio-link" href="www.google.com">
              {studios.nodes[0] != null ? studios.nodes[0].name : "Studio"}
            </a>
          </div>
        </div>
      </div>
      <div className="data">
        <div className="airing-countdown">{showEp()}</div>
        <div
          className="extra"
          style={{ display: averageScore != null ? "grid" : "block" }}
        >
          <div className="extra-inner">{format}</div>
          {averageScore != null ? (
            <div className="extra-inner">{averageScore}%</div>
          ) : (
            <></>
          )}
        </div>
        <div
          className="description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <div className="genres">
          {genres.map((element, i) => {
            if (genres.length === i + 1) {
              return element;
            } else {
              return `${element}, `;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Anime;
