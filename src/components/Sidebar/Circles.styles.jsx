import styled, {css} from "styled-components";

const Circles = styled.div`
opacity: 0;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
gap: 5px;
animation: drop-from-above 0.3s forwards;
animation-fill-mode: forwards;

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

export default Circles;