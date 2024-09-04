import { styled } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../styles/icons/Logo";

const StyledHeader = styled.header`
  background-color: var(
    ${() =>
      useLocation().pathname === "/home"
        ? "--color-main-text-dark"
        : "--color-grey-0"}
  );

  padding: 2.4rem 4.8rem;
  border-bottom: 1px solid
    var(
      ${() =>
        useLocation().pathname === "/home"
          ? "--color-green"
          : "--color-dark-base"}
    );

  display: flex;
  align-items: center;
  justify-content: center;
`;

function Header() {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <Logo onClickHandler={() => navigate("/home")} />
    </StyledHeader>
  );
}

export default Header;
