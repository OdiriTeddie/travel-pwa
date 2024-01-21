import "./index.styles.scss";
import { FaSearch } from "react-icons/fa";

export const SearchTrip = () => {
  return (
    <section className="search-trip">
      <div className="container">
        <div>
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
              <FaSearch />
            </div>
            <div className="form-group__input">
              <label htmlFor="search">Search</label>
              <input type="text" placeholder="Insert Keyword" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
