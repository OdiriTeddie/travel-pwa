import "./index.styles.scss";
import { IoMdCheckmark } from "react-icons/io";

export const AllServices = () => {
  return (
    <section className="all-services">
      <div className="all-services__overlay">
        <div className="container">
          <div className="all-services__img">
            <img src="./images/service1.jpg" alt="" />
          </div>
          <div>
            <div>
              <p>Adventure Travel</p>
              <h2>Embrace the Thrill of the unknown</h2>
              <p>
                Are you tired of the typical tourist destinations and looking to
                step out of your comfort zone? Adventure travel may be the
                perfect solution for you! Here are four reasons why you should
                book an adventure travel experience :
              </p>
            </div>
            <ul>
              <li>
                <IoMdCheckmark />
                Connect with nature
              </li>
              <li>
                <IoMdCheckmark />
                Connect with nature
              </li>
              <li>
                <IoMdCheckmark />
                Connect with nature
              </li>
            </ul>
            <button>All Services</button>
          </div>
        </div>
      </div>
    </section>
  );
};
