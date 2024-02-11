import { Link } from "react-router-dom";
import "./index.styles.scss";

export const Adventure = () => {
  return (
    <section className="adventure">
      <div className="container">
        <div className="adventure__header">
          <p className="subheading">Choose your Trip</p>
          <h2>Travel Destinations Available Worldwide</h2>
          <p>
            We have compiled a list of top destinations across the globe,
            scoured the world for the most alluring and fascinating places to
            visit. From the beautiful beaches of the Caribbean to the majestic
            mountains of Europe and the vibrant cities of Asia, our destination
            list has something for everyone.
          </p>
        </div>

        <div className="adventure__destination_box">
          <div className="adventure__destination">
            <div className="adventure__destination_overlay">
              <h2>USA</h2>
              <p>Here is filled with diverse cultures & cities</p>
              <Link to="/packages" className="btn">
                All Package
              </Link>
            </div>
          </div>
          <div className="adventure__destination destination2">
            <div className="adventure__destination_overlay">
              <h2>Japan</h2>
              <p>The top culture of the Land of the Rising Sun</p>
              <Link to="/packages" className="btn">
                All Package
              </Link>
            </div>
          </div>
          <div className="adventure__destination destination3">
            <div className="adventure__destination_overlay">
              <h2>California</h2>
              <p>Explore the vibrant and natural cities and cloud</p>
              <Link to="/packages" className="btn">
                All Package
              </Link>
            </div>
          </div>
          <div className="adventure__destination destination4">
            <div className="adventure__destination_overlay">
              <h2>Italy</h2>
              <p>Taste the cuisine and all charming cities, towns</p>
              <Link to="/packages" className="btn">
                All Package
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
