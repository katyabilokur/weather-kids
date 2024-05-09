import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface Props {
  $color: string;
  $hover: string;
}

const NavLinkStyled = styled(NavLink)<Props>`
  &:link,
  &:visited {
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-grey-600);
    background-color: var(${(props) => props.$color});
    border: 2px solid var(${(props) => props.$color});
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-sm);

    font-size: 2.2rem;
    font-weight: 600;

    text-decoration: none;
    cursor: pointer;

    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    letter-spacing: 1px;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(${(props) => props.$hover});
    border-color: var(${(props) => props.$hover});

    color: var(--color-grey-50);
    font-size: 2.2rem;
  }
`;

NavLinkStyled.defaultProps = {
  $color: "--color-green-main-light",
  $hover: "--color-green-main",
};

export default NavLinkStyled;
