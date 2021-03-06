import styled from "styled-components";

export const Navigation = styled.div`
  margin: ${({ theme }) => theme.sizes.xl} 0;
`;

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: calc(${({ theme }) => theme.sizes.xl} * 2);

  @media screen and (min-width: ${({ theme }) => theme.screens.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Flag = styled.img`
  width: 100%;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.xl};
  font-weight: ${({ theme }) => theme.font.weights.extraBold};

  margin-bottom: ${({ theme }) => theme.sizes.lg};
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.sizes.xl};
`;

export const Col = styled.div``;

export const Item = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes.sm};
`;

export const Label = styled.span`
  font-weight: ${({ theme }) => theme.font.weights.semiBold};
  margin-right: ${({ theme }) => theme.sizes.sm};
`;
export const BorderCountries = styled.div`
  margin-top: ${({ theme }) => theme.sizes.xl};

  button {
    margin-right: ${({ theme }) => theme.sizes.sm};
    margin-bottom: ${({ theme }) => theme.sizes.sm};
  }
`;
