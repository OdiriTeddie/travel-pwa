import "./index.styles.scss";
import { FaSearch } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaAnchor } from "react-icons/fa";

export const SearchTrip = () => {
  return (
    <section className="search-trip">
      <div className="container">
        <div className="search-trip__header">
          <p>Choose your Trip</p>
          <h2>Start your Vacation Now</h2>
          <p>
            Looking for your dream vacation destination but do not know where to
            start? With the help of experienced and knowledgeable travel agents,
            you can plan the trip of a lifetime with ease.
          </p>
        </div>
        <form className="search-form">
          <div className="form-group">
            <div className="form-group__icon">
              <FaSearch />
            </div>
            <div className="form-group__input">
              <label htmlFor="search">Search</label>
              <input type="text" placeholder="Insert Keyword" />
            </div>
          </div>

          <div className="form-group">
            <div className="form-group__icon">
              <IoLocationSharp />
            </div>
            <div className="form-group__input">
              <label htmlFor="places">Destination</label>
              <select id="places" name="fruit">
                <option value="italy">Italy</option>

                <option value="spain">Spain</option>

                <option value="russia">Russia</option>

                <option value="australia">Australia</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <div className="form-group__icon">
              <FaAnchor />
            </div>
            <div className="form-group__input">
              <label htmlFor="places">Activities</label>
              <select id="places" name="fruit">
                <option value="all-activities">All Activities</option>

                <option value="family-friendly">Family Friendly</option>

                <option value="heritage-tours">Heritage Tours</option>

                <option value="road-trips">Road Trips</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <button>Search</button>
          </div>
        </form>
      </div>
    </section>
  );
};
