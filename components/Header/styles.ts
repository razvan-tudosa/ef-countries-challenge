import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.sizes.md};
  background-color: ${({ theme }) => theme.colors.element};
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: ${(props) => props.theme.screens.desktop};
  width: 100%;
`;
