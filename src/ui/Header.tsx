import { styled } from "styled-components";
import LogoSvg from "../styles/icons/LogoSvg";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: var(--color-grey-600);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-900);

  //max-height: 16rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

function Header() {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <LogoSvg onClickHandler={() => navigate("/home")} />
    </StyledHeader>
  );
}

export default Header;
