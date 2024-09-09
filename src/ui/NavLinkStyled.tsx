import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { devices } from "../interfaces/constant";

interface Props {
  $color: string;
}

const NavLinkStyled = styled(NavLink)<Props>`
  &:link,
  &:visited {
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--color-main-text-dark);
    background-color: var(${(props) => props.$color});
    border: 1px solid var(${(props) => props.$color});
    border-radius: var(--border-radius-lg);

    font-size: 2.2rem;
    font-weight: 500;

    text-decoration: none;
    cursor: pointer;

    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
    letter-spacing: 1px;

    @media ${devices.tablet} {
      font-size: 1.8rem;
      font-weight: 400;
      padding: 1rem 2rem;
      width: 16rem;
    }
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    border-radius: var(--border-radius-hg);
  }
`;

export default NavLinkStyled;
