import { styled } from "styled-components";
import LogoSvg from "../styles/icons/LogoSvg";

const StyledHeader = styled.header`
  background-color: var(--color-grey-600);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-900);

  //max-height: 16rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    position: relative;
    z-index: 20;
    height: 8rem;
    width: 8rem;
    fill: var(--color-grey-0);
    // stroke: var(--color-magenta-main);
    //  stroke-width: 2px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <LogoSvg />
    </StyledHeader>
  );
}

export default Header;
