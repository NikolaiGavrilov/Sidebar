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
    background-color: ${themeColor === "dark"
      ? "var(--color-sidebar-background-dark-default)"
      : "var(--color-sidebar-background-light-default)"};
    border: 4px solid
      ${themeColor === "dark"
        ? "var(--color-sidebar-background-dark-active)"
        : "var(--color-sidebar-background-light-active)"};
    outline: 1px solid
      ${themeColor === "dark"
        ? "var(--color-sidebar-background-dark-default)"
        : "var(--color-sidebar-background-light-default)"};

    &:not(.opened) .sidebar-toggler {
      background-color: ${themeColor === "dark"
        ? "var(--color-button-background-dark-default)"
        : "var(--color-button-background-light-default)"};
    }
  `;

  const SidebarToggler = styled.div`
    background-color: ${themeColor === "dark"
      ? "var(--color-button-background-dark-active)"
      : "var(--color-button-background-light-active)"};

    color: ${themeColor === "dark"
      ? "var(--color-text-dark-default)"
      : "var(--color-text-light-default)"};

    &:hover .sidebar-toggler__icon {
      color: ${themeColor === "dark"
        ? "var(--color-text-dark-hover)"
        : "var(--color-text-light-hover)"};
    }
  `;

  const Logo = styled.div`
    .logo__title {
      color: ${themeColor === "dark"
        ? "var(--color-text-logo-dark-default)"
        : "var(--color-text-logo-light-default)"};
    }
  `;

  const Route = styled.div`
    .route__icon {
      color: ${themeColor === "dark"
        ? "var(--color-text-dark-default)"
        : "var(--color-text-light-default)"};
    }

    .route__title {
      color: ${themeColor === "dark"
        ? "var(--color-text-dark-default)"
        : "var(--color-text-light-default)"};
    }

    &:hover {
      background-color: ${themeColor === "dark"
        ? "var(--color-sidebar-background-dark-hover)"
        : "var(--color-sidebar-background-light-hover)"};

      .route__icon {
        color: ${themeColor === "dark"
          ? "var(--color-text-dark-hover)"
          : "var(--color-text-light-hover)"};
      }
      .route__title {
        color: ${themeColor === "dark"
          ? "var(--color-text-dark-hover)"
          : "var(--color-text-light-hover)"};
      }
    }

    &.active {
      background-color: ${themeColor === "dark"
        ? "var(--color-sidebar-background-dark-active)"
        : "var(--color-sidebar-background-light-active)"};
      .route__icon {
        color: ${themeColor === "dark"
          ? "var(--color-text-dark-active)"
          : "var(--color-text-light-active)"};
      }
      .route__title {
        color: ${themeColor === "dark"
          ? "var(--color-text-dark-active)"
          : "var(--color-text-light-active)"};
        text-shadow: 1.5px 1.5px 0
            var(
              --color-sidebar-background-${themeColor === "dark" ? "dark" : "light"}-default
            ),
          -1.5px 1.5px 0 var(--color-sidebar-background-${themeColor === "dark" ? "dark" : "light"}-default),
          1.5px -1.5px 0 var(--color-sidebar-background-${themeColor === "dark" ? "dark" : "light"}-default),
          -1.5px -1.5px 0
            var(
              --color-sidebar-background-${themeColor === "dark" ? "dark" : "light"}-default
            ),
          1.5px 0 0
            var(
              --color-sidebar-background-${themeColor === "dark" ? "dark" : "light"}-default
            ),
          -1.5px 0 0 var(--color-sidebar-background-${themeColor === "dark" ? "dark" : "light"}-default),
          0 1.5px 0
            var(
              --color-sidebar-background-${themeColor === "dark" ? "dark" : "light"}-default
            ),
          0 -1.5px 0 var(--color-sidebar-background-${themeColor === "dark" ? "dark" : "light"}-default);
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
      <button className="toggle-theme" onClick={toggleTheme}>Сменить тему</button>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
