import { useState, useCallback, useMemo } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import SidebarContainer from "./SidebarContainer.styles";
import Circles from "./Circles.styles";
import SidebarToggler from "./SidebarToggler.styles";
import Routes from "./Routes.styles";
import ThemeToggleBtn from "./ThemeToggleBtn.styles";
import Logo from "./Logo.styles";
import Route from "./Route.styles";

const routes = [
  { title: "Home", icon: "fa-solid fa-house", path: "/" },
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
  const [themeColor, setThemeColor] = useState(color);
  const containerClassnames = useMemo(() => classnames("sidebar", {
    opened: isOpened,
  }), [isOpened]);

  const goToRoute = useCallback((path) => {
    console.log(`going to "${path}"`);
  }, []);

  const handleRouteClick = useCallback((path) => {
    setActiveRoute(path);
    goToRoute(path);
  }, [goToRoute]);

    const toggleSidebar = useCallback(() => {
        setIsOpened((v) => !v);
    }, []);

  const toggleTheme = useCallback(() => {
    setThemeColor((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return (
    <SidebarContainer
      className={containerClassnames}
      themeColor={themeColor}
      opened={isOpened}
    >
      <Circles className="circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </Circles>
      <Logo themeColor={themeColor} className="logo">
        <img className="logo__img" src={logo} alt="TensorFlow logo" />
        <span className="logo__title">TensorFlow</span>
        <SidebarToggler
          themeColor={themeColor}
          className="sidebar-toggler"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon
            className="sidebar-toggler__icon"
            icon={isOpened ? "angle-left" : "angle-right"}
          />
        </SidebarToggler>
      </Logo>
      <Routes className="routes routes__upper">
        {routes.map((route) => (
          <Route
            themeColor={themeColor}
            className={classnames("route route__upper", {
              active: activeRoute === route.path,
            })}
            key={route.title}
            onClick={() => handleRouteClick(route.path)}
          >
            <FontAwesomeIcon className="route__icon" icon={route.icon} />
            <span className="route__title">{route.title}</span>
          </Route>
        ))}
      </Routes>
      <Routes className="routes routes__bottom">
        {bottomRoutes.map((route) => (
          <Route
              themeColor={themeColor}
            className={classnames("route route__bottom", {
              active: activeRoute === route.path,
            })}
            key={route.title}
            onClick={() => handleRouteClick(route.path)}
          >
            <FontAwesomeIcon className="route__icon" icon={route.icon} />
            <span className="route__title">{route.title}</span>
          </Route>
        ))}
      </Routes>
      <ThemeToggleBtn
          themeColor={themeColor}
        className="toggle-theme"
        onClick={toggleTheme}
      >
        Сменить тему
      </ThemeToggleBtn>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;