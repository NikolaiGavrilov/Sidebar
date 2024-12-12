import { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import "./Sidebar.scss";
import styled from "styled-components";

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
  const [themeColor, setThemeColor] = useState(color);

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

  const toggleTheme = () => {
    themeColor === "light" ? setThemeColor("dark") : setThemeColor("light");
  };

  const SidebarContainer = styled.div`
    background-color: var(--color-sidebar-background-${themeColor}-default);
    border: 4px solid var(--color-sidebar-background-${themeColor}-active);
    outline: 1px solid var(--color-sidebar-background-${themeColor}-default);

    &:not(.opened) .sidebar-toggler {
      background-color: var(--color-button-background-${themeColor}-default);
    }
  `;

  const SidebarToggler = styled.div`
    background-color: var(--color-button-background-${themeColor}-active);
    color: var(--color-text-${themeColor}-default);

    &:hover .sidebar-toggler__icon {
      color: var(--color-text-${themeColor}-hover);
    }
  `;

  const Logo = styled.div`
    .logo__title {
      color: var(--color-text-logo-${themeColor}-default);
    }
  `;

  const Route = styled.div`
    background-color: var(--color-sidebar-background-${themeColor}-default);
    .route__icon {
      color: var(--color-text-${themeColor}-default);
    }
    .route__title {
      color: var(--color-text-${themeColor}-default);
    }

    &:hover {
      background-color: var(--color-sidebar-background-${themeColor}-hover);
      .route__icon {
        color: var(--color-text-${themeColor}-hover);
      }
      .route__title {
        color: var(--color-text-${themeColor}-hover);
      }
    }

    &.active {
      background-color: var(--color-sidebar-background-${themeColor}-active);
      .route__icon {
        color: var(--color-text-${themeColor}-active);
      }
      .route__title {
        color: var(--color-text-${themeColor}-active);
        text-shadow: 1.5px 1.5px 0
            var(--color-sidebar-background-${themeColor}-default),
          -1.5px 1.5px 0 var(--color-sidebar-background-${themeColor}-default),
          1.5px -1.5px 0 var(--color-sidebar-background-${themeColor}-default),
          -1.5px -1.5px 0 var(--color-sidebar-background-${themeColor}-default),
          1.5px 0 0 var(--color-sidebar-background-${themeColor}-default),
          -1.5px 0 0 var(--color-sidebar-background-${themeColor}-default),
          0 1.5px 0 var(--color-sidebar-background-${themeColor}-default),
          0 -1.5px 0 var(--color-sidebar-background-${themeColor}-default);
      }
    }
  `;

  return (
    <SidebarContainer className={containerClassnames}>
      <div className="circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <Logo className="logo">
        <img className="logo__img" src={logo} alt="TensorFlow logo" />
        <span className="logo__title">TensorFlow</span>
        <SidebarToggler className="sidebar-toggler" onClick={toggleSidebar}>
          <FontAwesomeIcon
            className="sidebar-toggler__icon"
            icon={isOpened ? "angle-left" : "angle-right"}
          />
        </SidebarToggler>
      </Logo>
      <div className="routes routes__upper">
        {routes.map((route) => (
          <Route
            className={classnames("route route-upper", {
              active: activeRoute === route.path,
            })}
            key={route.title}
            onClick={() => handleRouteClick(route.path)}
          >
            <FontAwesomeIcon className="route__icon" icon={route.icon} />
            <span className="route__title">{route.title}</span>
          </Route>
        ))}
      </div>
      <div className="routes routes__bottom">
        {bottomRoutes.map((route) => (
          <Route
            className={classnames("route route-bottom", {
              active: activeRoute === route.path,
            })}
            key={route.title}
            onClick={() => handleRouteClick(route.path)}
          >
            <FontAwesomeIcon className="route__icon" icon={route.icon} />
            <span className="route__title">{route.title}</span>
          </Route>
        ))}
      </div>
      <button className="toggle-theme" onClick={toggleTheme}>
        Сменить тему
      </button>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
