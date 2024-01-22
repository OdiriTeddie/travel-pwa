import "./index.styles.scss";

export const Adventure = () => {
  return (
    <section className="adventure">
      <div className="container">
        <div className="adventure__header">
          <p>Choose your Trip</p>
          <h2>Start your Vacation Now</h2>
          <p>
            Looking for your dream vacation destination but do not know where to
            start? With the help of experienced and knowledgeable travel agents,
            you can plan the trip of a lifetime with ease.
          </p>
        </div>

        <div className="adventure__destination_box">
          <div className="adventure__destination">
            <div className="adventure__destination_overlay">
              <h2>USA</h2>
              <p>Here is filled with diverse cultures & cities</p>
              <button>All Package</button>
            </div>
          </div>
          <div className="adventure__destination">
            <div className="adventure__destination_overlay">
              <h2>USA</h2>
              <p>Here is filled with diverse cultures & cities</p>
              <button>All Package</button>
            </div>
          </div>
          <div className="adventure__destination">
            <div className="adventure__destination_overlay">
              <h2>USA</h2>
              <p>Here is filled with diverse cultures & cities</p>
              <button>All Package</button>
            </div>
          </div>
          <div className="adventure__destination">
            <div className="adventure__destination_overlay">
              <h2>USA</h2>
              <p>Here is filled with diverse cultures & cities</p>
              <button>All Package</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
