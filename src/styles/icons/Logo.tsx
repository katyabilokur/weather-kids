import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

const StyledLogoDiv = styled.div`
  clip-path: polygon(
    24% 0%,
    28% 11%,
    34% 19%,
    43% 23%,
    54% 23%,
    64% 18%,
    80% 0%,
    99% 31%,
    90% 48%,
    76% 41%,
    83% 87%,
    2% 98%,
    22% 45%,
    9% 51%,
    1% 12%
  );
  height: 8rem;
  width: 8rem;
  background: linear-gradient(
    -45deg,
    var(--color-green),
    var(--color-yellow),
    var(--color-pink)
  );
  background-size: 300% 300%;
  animation: gradient 7s ease infinite;

  div {
    height: 8rem;
    width: 8rem;

    color: var(
      ${() =>
        useLocation().pathname === "/"
          ? "--color-main-text-dark"
          : "--color-grey-0"}
    );
    font-weight: 500;
    font-size: 4rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  :hover {
    background: linear-gradient(
      -45deg,
      var(--color-green-light),
      var(--color-pink-light)
    );
    cursor: pointer;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

interface LogoProps {
  onClickHandler: React.MouseEventHandler<HTMLDivElement>;
}

function Logo({ onClickHandler }: LogoProps) {
  return (
    <StyledLogoDiv onClick={onClickHandler}>
      <div>?</div>
    </StyledLogoDiv>
  );
}

export default Logo;
