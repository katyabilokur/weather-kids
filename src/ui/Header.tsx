import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../styles/icons/Logo";
import { devices } from "../interfaces/constant";

const StyledHeader = styled.header`
  background-color: var(
    ${() =>
      useLocation().pathname === "/"
        ? "--color-main-text-dark"
        : "--color-grey-0"}
  );

  padding: 2.4rem 4.8rem;
  border-bottom: 1px solid
    var(
      ${() =>
        useLocation().pathname === "/" ? "--color-green" : "--color-dark-base"}
    );

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${devices.tablet} {
    padding: 1.8rem 3.6rem;
  }
`;

function Header() {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <Logo onClickHandler={() => navigate("/")} />
    </StyledHeader>
  );
}

export default Header;
