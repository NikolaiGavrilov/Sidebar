import styled, { css } from "styled-components";

const Logo = styled.div`
  opacity: 0;
  animation: drop-from-above 0.3s forwards;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
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
    color: var(--color-text-logo-${(props) => props.themeColor}-default);
    font-weight: 700;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
`;

export default Logo;
