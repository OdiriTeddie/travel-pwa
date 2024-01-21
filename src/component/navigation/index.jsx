import "./index.styles.scss";

export const Nav = () => {
  return (
    <nav className="main-nav">
      <ul role="list" className="nav-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Travel</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};
