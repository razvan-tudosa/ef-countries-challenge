import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.element};
  box-shadow: ${({ theme }) => theme.shadows.element};
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: ${({ theme }) => theme.sizes.lg};
  max-width: ${(props) => props.theme.screens.desktop};
  width: 100%;

  & > div:first-child {
    font-weight: ${({ theme }) => theme.font.weights.extraBold};
    font-size: ${({ theme }) => theme.font.sizes.xl};
  }
`;

export const ToggleThemeButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.text};

  svg {
    margin-right: ${({ theme }) => theme.sizes.sm};
  }
`;
