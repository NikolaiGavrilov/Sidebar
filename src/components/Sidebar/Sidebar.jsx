import { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
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
    max-width: 166px;
    padding: 15px;
    max-height: 706px;
    border-radius: 20px;
    border: 4px solid var(--color-sidebar-background-${themeColor}-active);
    outline: 1px solid var(--color-sidebar-background-${themeColor}-default);
    transition: max-width 0.3s ease, padding 0.3s ease;

    &:not(.opened) {
      max-width: 40px;
    }

    &:not(.opened) .sidebar-toggler {
      background-color: var(--color-button-background-${themeColor}-default);
    }

    &:not(.opened) .logo__title {
      opacity: 0;
      animation: disappear 0.2s forwards;
    }

    &:not(.opened) .route__title {
      display: none;
      opacity: 0;
      animation: disappear 0.3s forwards;
    }

    @keyframes disappear {
      0% {
        opacity: 1;
        transform: translate(0, 0);
      }
      20% {
        opacity: 0.9;
        transform: translate(5px, 0);
      }
      40% {
        opacity: 0.8;
        transform: translate(10px, 0);
      }
      60% {
        opacity: 0.6;
        transform: translate(15px, 0);
      }
      80% {
        opacity: 0.3;
        transform: translate(20px, 0);
      }
      100% {
        opacity: 0;
        transform: translate(30px, 0);
      }
    }
  `;

  const SidebarToggler = styled.div`
    padding: 0px 7px;
    border-radius: 50%;
    background-color: var(--color-button-background-${themeColor}-active);
    color: var(--color-text-${themeColor}-default);
    position: absolute;
    right: -28px;
    transition: background-color 0.3s ease, right 0.3s ease;
    animation: appear-from-right 0.5s forwards;
    animation-delay: 1.5s;
    opacity: 0;

    .sidebar-toggler__icon {
      transition: transform 0.3s ease;
    }

    &:hover .sidebar-toggler__icon {
      color: var(--color-text-${themeColor}-hover);
    }

    @keyframes appear-from-right {
      0% {
        opacity: 0;
        transform: translate(50px, 0);
      }
      100% {
        opacity: 1;
        transform: translate(0, 0);
      }
    }

    .sidebar.opened .sidebar-toggler__icon {
      transform: rotate(-360deg);
    }

    .sidebar:not(.opened) .sidebar-toggler__icon {
      transform: rotate(360deg);
    }
  `;

  const Circles = styled.div`
    opacity: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 5px;
    animation: drop-from-above 0.3s forwards;

    .circle {
      cursor: pointer;
      height: 7px;
      width: 7px;
      border-radius: 50%;

      &:first-child {
        background-color: #ec6a5e;
        border: 1px solid #ec6a5e;
        &:hover {
          border: 1px solid #e94d3f;
        }
      }

      &:nth-child(2) {
        background-color: #f5bf4f;
        border: 1px solid #f5bf4f;
        &:hover {
          border: 1px solid #f3b32d;
        }
      }

      &:nth-child(3) {
        background-color: #61c554;
        border: 1px solid #61c554;
        &:hover {
          border: 1px solid #4dbd3d;
        }
      }
    }
  `;

  const Logo = styled.div`
    opacity: 0;
    animation: drop-from-above 0.3s forwards;
    animation-delay: 0.2s;
    cursor: pointer;
    position: relative;
    padding: 25px 0px 0px 4px;
    gap: 10px;
    display: flex;
    justify-content: left;
    align-items: center;

    .logo__img {
      width: 30px;
      height: 30px;
    }

    .logo__title {
      color: var(--color-text-logo-${themeColor}-default);
      font-weight: 700;
      opacity: 1;
      transition: opacity 0.3s ease;
      // pointer-events: none;
    }
  `;

  const Routes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    &.routes__upper {
      margin-top: 35px;
    }

    &.routes__bottom {
      margin-top: 190px;
    }
  `;

  const Route = styled.div`
    background-color: var(--color-sidebar-background-${themeColor}-default);
    font-weight: 500;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    border-radius: 10px;
    transition: background-color 0.3s ease;

    .route__icon {
      padding: 10px;
      max-width: 20px;
      color: var(--color-text-${themeColor}-default);
      transition: color 0.3s ease, box-shadow 0.3s ease;
    }
    .route__title {
      color: var(--color-text-${themeColor}-default);
      opacity: 1;
      transition: color 0.3s ease, text-shadow 0.3s ease, opacity 0.3s ease;
    }

    &:hover {
      background-color: var(--color-sidebar-background-${themeColor}-hover);
      cursor: pointer;
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

    @keyframes drop-from-above {
      0% {
        opacity: 0;
        transform: translate(0, -50px);
      }
      100% {
        opacity: 1;
        transform: translate(0, 0);
      }
    }

    @keyframes drop-from-below {
      0% {
        opacity: 0;
        transform: translate(0, 50px);
      }
      100% {
        opacity: 1;
        transform: translate(0, 0);
      }
    }

    &.route__upper {
      opacity: 0;
      &:first-child {
        animation: drop-from-above 0.4s forwards;
        animation-delay: 0.5s;
      }
      &:nth-child(2) {
        animation: drop-from-above 0.4s forwards;
        animation-delay: 0.6s;
      }
      &:nth-child(3) {
        animation: drop-from-above 0.4s forwards;
        animation-delay: 0.7s;
      }
      &:nth-child(4) {
        animation: drop-from-above 0.4s forwards;
        animation-delay: 0.8s;
      }
      &:nth-child(5) {
        animation: drop-from-above 0.4s forwards;
        animation-delay: 0.9s;
      }
      &:last-child {
        animation: drop-from-above 0.4s forwards;
        animation-delay: 1s;
      }
    }

    &.route__bottom {
      opacity: 0;
      &:first-child {
        animation: drop-from-below 0.4s forwards;
        animation-delay: 1.2s;
      }
      &:last-child {
        animation: drop-from-below 0.4s forwards;
        animation-delay: 1.3s;
      }
    }
  `;

  const ThemeToggleBtn = styled.div`
    background-color: var(--color-sidebar-background-${themeColor}-default);
    color: var(--color-text-${themeColor}-default);
    border: 1px solid var(--color-text-${themeColor}-default);
    cursor: pointer;
    border-radius: 10px;
    padding: 5px;
    position: absolute;
    top: 10px;
    left: 300px;

    &:hover {
      background-color: var(--color-sidebar-background-${themeColor}-hover);
      color: var(--color-text-${themeColor}-hover);
      border: 1px solid var(--color-text-${themeColor}-hover);
    }

    &:active {
      background-color: var(--color-sidebar-background-${themeColor}-active);
      color: var(--color-text-${themeColor}-active);
      border: 1px solid var(--color-text-${themeColor}-active);
    }
  `;

  return (
    <SidebarContainer className={containerClassnames}>
      <Circles className="circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </Circles>
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
      <Routes className="routes routes__upper">
        {routes.map((route) => (
          <Route
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
      <ThemeToggleBtn className="toggle-theme" onClick={toggleTheme}>
        Сменить тему
      </ThemeToggleBtn>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
