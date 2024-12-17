import styled, { css } from "styled-components";

const ThemeToggleBtn = styled.div`
  background-color: var(
    --color-sidebar-background-${(props) => props.themeColor}-default
  );
  color: var(--color-text-${(props) => props.themeColor}-default);
  border: 1px solid var(--color-text-${(props) => props.themeColor}-default);
  cursor: pointer;
  border-radius: 10px;
  padding: 5px;
  position: absolute;
  top: 10px;
  left: 300px;

  &:hover {
    background-color: var(
      --color-sidebar-background-${(props) => props.themeColor}-hover
    );
    color: var(--color-text-${(props) => props.themeColor}-hover);
    border: 1px solid var(--color-text-${(props) => props.themeColor}-hover);
  }

  &:active {
    background-color: var(
      --color-sidebar-background-${(props) => props.themeColor}-active
    );
    color: var(--color-text-${(props) => props.themeColor}-active);
    border: 1px solid var(--color-text-${(props) => props.themeColor}-active);
  }
`;

export default ThemeToggleBtn;
