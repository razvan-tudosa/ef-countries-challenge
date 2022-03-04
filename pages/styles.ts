import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.screens.desktop};

  padding: ${({ theme }) => theme.sizes.md};
`;
