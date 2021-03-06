import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  padding: 10px;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
  border: 2px solid transparent;
  cursor: pointer;
  border-color: ${(props: { selected?: boolean }) =>
    props.selected ? "green" : "transparent"};
`;
