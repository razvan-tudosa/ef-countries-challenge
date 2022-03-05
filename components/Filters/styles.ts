import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.sizes.lg} 0;
  display: flex;
  justify-content: space-between;

  .input {
    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 10px;
    }
  }
`;
