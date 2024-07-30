import PropTypes from "prop-types";

function Card({ name = "Guest", job = "unknown" }) {
  //default value
  return (
    <div className="card">
      <img
        className="card-image"
        src="https://via.placeholder.com/150"
        alt="profile picture"
      />
      <h2 className="card-title">{name}</h2>
      <p className="card-text">{job}</p>
      <hr />
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
};

export default Card;
