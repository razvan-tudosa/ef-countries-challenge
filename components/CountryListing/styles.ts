import styled from "styled-components";

export const ListingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: ${({ theme }) => theme.sizes.xl};
`;

export const Card = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  background-color: ${({ theme }) => theme.colors.element};

  overflow: hidden;

  box-shadow: ${({ theme }) => theme.shadow};
`;

export const Flag = styled.img`
  height: 160px;
  object-fit: cover;
  width: 100%;
`;

export const Info = styled.div`
  padding: ${({ theme }) => theme.sizes.md};
`;

export const Name = styled.div`
  font-weight: ${({ theme }) => theme.font.weights.extraBold};
  font-size: ${({ theme }) => theme.font.sizes.lg};
  margin-bottom: ${({ theme }) => theme.sizes.md};
`;
export const DataRow = styled.div``;
export const Label = styled.span`
  margin-right: ${({ theme }) => theme.sizes.xs};
  font-weight: ${({ theme }) => theme.font.weights.semiBold};
`;
export const DataValue = styled.span``;
