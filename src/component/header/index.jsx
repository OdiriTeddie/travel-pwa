import "./index.styles.scss";
import { Nav } from "../navigation";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src="./images/logo.png" alt="site-logo" />
        </div>

        <Nav />
        <button className="btn search-btn">Search Travel</button>
      </div>
    </header>
  );
};
