
import styled, {css} from "styled-components";

const Route = styled.div`
background-color: var(--color-sidebar-background-${(props) => props.themeColor}-default);
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
  color: var(--color-text-${(props) => props.themeColor}-default);
  transition: color 0.3s ease, box-shadow 0.3s ease;
}
.route__title {
  color: var(--color-text-${(props) => props.themeColor}-default);
  opacity: 1;
  transition: color 0.3s ease, text-shadow 0.3s ease, opacity 0.3s ease;
}

&:hover {
  background-color: var(--color-sidebar-background-${(props) => props.themeColor}-hover);
  cursor: pointer;
  .route__icon {
    color: var(--color-text-${(props) => props.themeColor}-hover);
  }
  .route__title {
    color: var(--color-text-${(props) => props.themeColor}-hover);
  }
}

&.active {
  background-color: var(--color-sidebar-background-${(props) => props.themeColor}-active);
  .route__icon {
    color: var(--color-text-${(props) => props.themeColor}-active);
  }
  .route__title {
    color: var(--color-text-${(props) => props.themeColor}-active);
    text-shadow: 1.5px 1.5px 0
        var(--color-sidebar-background-${(props) => props.themeColor}-default),
      -1.5px 1.5px 0 var(--color-sidebar-background-${(props) => props.themeColor}-default),
      1.5px -1.5px 0 var(--color-sidebar-background-${(props) => props.themeColor}-default),
      -1.5px -1.5px 0 var(--color-sidebar-background-${(props) => props.themeColor}-default),
      1.5px 0 0 var(--color-sidebar-background-${(props) => props.themeColor}-default),
      -1.5px 0 0 var(--color-sidebar-background-${(props) => props.themeColor}-default),
      0 1.5px 0 var(--color-sidebar-background-${(props) => props.themeColor}-default),
      0 -1.5px 0 var(--color-sidebar-background-${(props) => props.themeColor}-default);
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
    animation-fill-mode: forwards;
  }
  &:nth-child(2) {
    animation: drop-from-above 0.4s forwards;
    animation-delay: 0.6s;
    animation-fill-mode: forwards;
  }
  &:nth-child(3) {
    animation: drop-from-above 0.4s forwards;
    animation-delay: 0.7s;
    animation-fill-mode: forwards;
  }
  &:nth-child(4) {
    animation: drop-from-above 0.4s forwards;
    animation-delay: 0.8s;
    animation-fill-mode: forwards;
  }
  &:nth-child(5) {
    animation: drop-from-above 0.4s forwards;
    animation-delay: 0.9s;
    animation-fill-mode: forwards;
  }
  &:last-child {
    animation: drop-from-above 0.4s forwards;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
}

&.route__bottom {
  opacity: 0;
  &:first-child {
    animation: drop-from-below 0.4s forwards;
    animation-delay: 1.2s;
    animation-fill-mode: forwards;
  }
  &:last-child {
    animation: drop-from-below 0.4s forwards;
    animation-delay: 1.3s;
    animation-fill-mode: forwards;
  }
}
`;

export default Route;