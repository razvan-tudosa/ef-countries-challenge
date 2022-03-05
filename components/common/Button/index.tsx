import styled from "styled-components";

type ButtonProps = {
  large?: boolean;
};

export const Button = styled.button<ButtonProps>`
  border: 0;
  cursor: pointer;

  background: ${({ theme }) => theme.colors.element};
  color: ${({ theme }) => theme.colors.text};

  box-shadow: ${({ theme }) => theme.shadows.button};

  padding: ${({ theme, large }) => {
    const verticalPadding = large ? theme.sizes.sm : theme.sizes.xs;
    const horizontalPadding = large ? theme.sizes.lg : theme.sizes.md;

    return [verticalPadding, horizontalPadding].join(" ");
  }};

  border-radius: ${({ theme, large }) =>
    large ? theme.borderRadius.normal : theme.borderRadius.sm};
`;
