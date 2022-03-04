import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.sizes.lg};
  position: fixed;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: ${(props) => props.theme.screens.desktop};
  width: 100%;
`;
