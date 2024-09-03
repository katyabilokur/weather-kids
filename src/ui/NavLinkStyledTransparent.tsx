import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface Props {
  $color: string;
  $border: string;
  $colorHover: string;
}

const NavLinkStyledTransparent = styled(NavLink)<Props>`
  &:link,
  &:visited {
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(${(props) => props.$border});
    background-color: var(${(props) => props.$color});
    border: 1px solid var(${(props) => props.$border});
    border-radius: var(--border-radius-lg);

    font-size: 2.2rem;
    font-weight: 300;

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
    border-radius: var(--border-radius-hg);
    color: var(${(props) => props.$colorHover});
    border: 1px solid var(${(props) => props.$colorHover});
  }
`;

export default NavLinkStyledTransparent;
