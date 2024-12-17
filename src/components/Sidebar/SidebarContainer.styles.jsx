import styled, { css } from "styled-components";

const SidebarContainer = styled.div`
  background-color: var(
    --color-sidebar-background-${(props) => props.themeColor}-default
  );
  max-width: 166px;
  padding: 15px;
  max-height: 706px;
  border-radius: 20px;
  border: 4px solid
    var(--color-sidebar-background-${(props) => props.themeColor}-active);
  outline: 1px solid
    var(--color-sidebar-background-${(props) => props.themeColor}-default);
  transition: max-width 0.3s ease, padding 0.3s ease;

  &:not(.opened) {
    max-width: 40px;
  }

  &:not(.opened) .sidebar-toggler {
    background-color: var(
      --color-button-background-${(props) => props.themeColor}-default
    );
  }

  &:not(.opened) .logo__title {
    display: none;
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

export default SidebarContainer;
