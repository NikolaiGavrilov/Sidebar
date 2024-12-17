import styled, {css} from "styled-components";

const SidebarToggler = styled.div`
padding: 0px 7px;
border-radius: 50%;
background-color: var(--color-button-background-${(props) => props.themeColor}-active);
color: var(--color-text-${(props) => props.themeColor}-default);
position: absolute;
right: -28px;
transition: background-color 0.3s ease, right 0.3s ease;
animation: appear-from-right 0.5s forwards;
animation-fill-mode: forwards;
animation-delay: 1.5s;
opacity: 0;

.sidebar-toggler__icon {
  transition: transform 0.3s ease;
}

&:hover .sidebar-toggler__icon {
  color: var(--color-text-${(props) => props.themeColor}-hover);
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

export default SidebarToggler;