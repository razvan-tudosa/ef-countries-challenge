import styled from "styled-components";

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.sizes.lg} 0;
  margin-bottom: ${({ theme }) => theme.sizes.md};
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

  .input input,
  .input input:focus,
  .menu,
  .ui.menu .dropdown.item .menu {
    border: 0;

    background-color: ${({ theme }) => theme.colors.element};
    border-radius: ${({ theme }) => theme.borderRadius.normal};
    box-shadow: ${({ theme }) => theme.shadows.element};
  }

  .ui.menu .dropdown.item .menu {
    transform: translateY(4px);
  }

  .input,
  .input input:focus,
  .input input,
  .menu .item,
  .menu .dropdown.item:hover,
  .ui.menu .dropdown.item .menu,
  .ui.menu .ui.dropdown .menu > .selected.item,
  .ui.menu .ui.dropdown .menu > .item {
    color: ${({ theme }) => theme.colors.text}!important;
  }

  .ui.simple.active.dropdown > .menu,
  .ui.simple.dropdown:hover > .menu {
    display: none;
  }
`;
