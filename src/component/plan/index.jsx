import "./index.styles.scss";
import { FaMapMarkerAlt } from "react-icons/fa";

export const PlanTrip = () => {
  return (
    <section className="plan-trip">
      <div className="container">
        <div className="plan-header">
          <div>
            <p>Dream Vacation Destination</p>
            <h2>PlanTrip</h2>
            <p>
              Whether you are looking for a romantic getaway, a family-friendly
              adventure, or a solo journey to explore the world, a travel agency
              can provide you with a custom-tailored itinerary that exceeds your
              expectations.
            </p>
            <button>More Info</button>
          </div>
          <div>
            <img src="./images/map.png" alt="" />
          </div>
        </div>

        <div className="travel-list">
          <div className="travel-box">
            <div className="travel-box__img">
              <img src="./images/trave1.jpg" alt="" />
            </div>
            <div className="travel-box__content">
              <div>
                <h2>Toscany</h2>
                <div className="travel-box__location">
                  <FaMapMarkerAlt />
                  <p>Italy</p>
                </div>
              </div>
              <div>
                <p>
                  Whether you are looking for a romantic tour, Tuscany is the
                  perfect destination for a true Italian experience.
                </p>
              </div>
              <div className="travel-box__footer">
                <button>Details</button>
                <div>
                  <p>
                    <span>From</span>$789
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="travel-box">
            <div className="travel-box__img">
              <img src="./images/trave1.jpg" alt="" />
            </div>
            <div className="travel-box__content">
              <div>
                <h2>Toscany</h2>
                <div className="travel-box__location">
                  <FaMapMarkerAlt />
                  <p>Italy</p>
                </div>
              </div>
              <div>
                <p>
                  Whether you are looking for a romantic tour, Tuscany is the
                  perfect destination for a true Italian experience.
                </p>
              </div>
              <div className="travel-box__footer">
                <button>Details</button>
                <div>
                  <p>
                    <span>From</span>$789
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="travel-box">
            <div className="travel-box__img">
              <img src="./images/trave1.jpg" alt="" />
            </div>
            <div className="travel-box__content">
              <div>
                <h2>Toscany</h2>
                <div className="travel-box__location">
                  <FaMapMarkerAlt />
                  <p>Italy</p>
                </div>
              </div>
              <div>
                <p>
                  Whether you are looking for a romantic tour, Tuscany is the
                  perfect destination for a true Italian experience.
                </p>
              </div>
              <div className="travel-box__footer">
                <button>Details</button>
                <div>
                  <p>
                    <span>From</span>$789
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
