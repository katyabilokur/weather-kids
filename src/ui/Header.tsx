import { styled } from "styled-components";
import LogoSvg from "../styles/icons/LogoSvg";
import { useNavigate } from "react-router-dom";
import Logo from "../styles/icons/Logo";

const StyledHeader = styled.header`
  background-color: var(--color-main-text-dark);
  padding: 2.4rem 4.8rem;
  border-bottom: 1px solid var(--color-green);

  //max-height: 16rem;

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
