import { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import "./Sidebar.scss";

const routes = [
  { title: "Home", icon: "fas-solid fa-house", path: "/" },
  { title: "Sales", icon: "chart-line", path: "/sales" },
  { title: "Costs", icon: "chart-column", path: "/costs" },
  { title: "Payments", icon: "wallet", path: "/payments" },
  { title: "Finances", icon: "chart-pie", path: "/finances" },
  { title: "Messages", icon: "envelope", path: "/messages" },
];

const bottomRoutes = [
  { title: "Settings", icon: "sliders", path: "/settings" },
  { title: "Support", icon: "phone-volume", path: "/support" },
];

const Sidebar = (props) => {
  const { color } = props;
  const [isOpened, setIsOpened] = useState(true);
  const [activeRoute, setActiveRoute] = useState(null);
  const containerClassnames = classnames("sidebar", {
    opened: isOpened,
  });

  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  const handleRouteClick = (path) => {
    setActiveRoute(path);
    goToRoute(path);
  };

  const toggleSidebar = () => {
    setIsOpened((v) => !v);
  };

  return (
    <div className={containerClassnames}>
      <div className="circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="logo">
        <img className="logo__img" src={logo} alt="TensorFlow logo" />
        <span className="logo__title">TensorFlow</span>
        <div className="sidebar-toggler" onClick={toggleSidebar}>
          <FontAwesomeIcon className="sidebar-toggler__icon" icon={isOpened ? "angle-left" : "angle-right"} />
        </div>
      </div>
      <div className="routes routes__upper">
        {routes.map((route) => (
          <div
            className={classnames("route route-upper", {
              active: activeRoute === route.path,
            })}
            key={route.title}
            onClick={() => handleRouteClick(route.path)}
          >
            <FontAwesomeIcon className="route__icon" icon={route.icon} />
            <span className="route__title">{route.title}</span>
          </div>
        ))}
      </div>
      <div className="routes routes__bottom">
        {bottomRoutes.map((route) => (
          <div
            className={classnames("route route-bottom", {
              active: activeRoute === route.path,
            })}
            key={route.title}
            onClick={() => handleRouteClick(route.path)}
          >
            <FontAwesomeIcon className="route__icon" icon={route.icon} />
            <span className="route__title">{route.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
