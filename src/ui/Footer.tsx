import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(
    ${() =>
      useLocation().pathname === "/"
        ? "--color-main-text-dark"
        : "--color-grey-0"}
  );
  padding: 2.4rem 4.8rem;
  border-top: 1px solid
    var(
      ${() =>
        useLocation().pathname === "/" ? "--color-green" : "--color-dark-base"}
    );
  color: var(
    ${() =>
      useLocation().pathname === "/"
        ? "--color-green-light"
        : "--color-green-dark"}
  );
  font-weight: 200;

  display: flex;
  gap: 2.4rem;
  align-items: flex-end;
  justify-content: flex-start;

  min-height: 12rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>&copy; Created with love by Kateryna Bilokur</p>
    </StyledFooter>
  );
}

export default Footer;
