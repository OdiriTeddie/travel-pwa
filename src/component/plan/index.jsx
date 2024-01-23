import "./index.styles.scss";
import { FaMapMarkerAlt } from "react-icons/fa";

export const PlanTrip = () => {
  return (
    <section className="plan-trip">
      <div className="container">
        <div className="plan-header">
          <div className="plan-trip__heading">
            <p className="plan-trip__subheading">Dream Vacation Destination</p>
            <h2>Plan the Trip of a Lifetime with Ease</h2>
            <p>
              Whether you are looking for a romantic getaway, a family-friendly
              adventure, or a solo journey to explore the world, a travel agency
              can provide you with a custom-tailored itinerary that exceeds your
              expectations.
            </p>
            <button className="btn">More Info</button>
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
                <button className="btn">Details</button>
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
              <img src="./images/tokyo.jpg" alt="" />
            </div>
            <div className="travel-box__content">
              <div>
                <h2>Tokyo</h2>
                <div className="travel-box__location">
                  <FaMapMarkerAlt />
                  <p>Japan</p>
                </div>
              </div>
              <div>
                <p>
                  Experience the alluring beauty and bustling energy of Tokyo
                  through our immersive tour with a good guide.
                </p>
              </div>
              <div className="travel-box__footer">
                <button className="btn">Details</button>
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
              <img src="./images/califonia.jpg" alt="" />
            </div>
            <div className="travel-box__content">
              <div>
                <h2>Santa Monica</h2>
                <div className="travel-box__location">
                  <FaMapMarkerAlt />
                  <p>California</p>
                </div>
              </div>
              <div>
                <p>
                  This iconic landmark is home to an array of thrilling good
                  attractions and stunning fresh ocean views.
                </p>
              </div>
              <div className="travel-box__footer">
                <button className="btn">Details</button>
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
