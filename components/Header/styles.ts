import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: ${({ theme }) => theme.shadow};
  box-sizing: border-box;
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

  &:first-child {
    font-weight: ${({ theme }) => theme.font.weights.extraBold};
    font-size: ${({ theme }) => theme.font.sizes.lg};
  }
`;
