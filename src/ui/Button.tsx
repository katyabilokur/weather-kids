import styled, { css } from "styled-components";
import { devices } from "../interfaces/constant";

const sizes: any = {
  small: css`
    font-size: 1.2rem;
    width: 10rem;
    padding: 0.4rem 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;

    @media ${devices.tablet} {
      width: 7rem;
      padding: 0.4rem 0.8rem;
      font-weight: 600;
      font-size: 1rem;
    }

    @media ${devices.phone} {
      width: 5rem;
      padding: 0.2rem 0.4rem;
      font-weight: 600;
      font-size: 0.8rem;
    }
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.8rem;
    padding: 1.2rem 4rem;
    font-weight: 500;
    width: 20rem;
    color: var(--color-dark-base);

    @media ${devices.tablet} {
      font-weight: 400;
      padding: 1rem 2rem;
      width: 16rem;
    }
  `,
  huge: css`
    width: 20rem;
    font-size: 1.8rem;
    padding: 2rem 1rem;
    font-weight: 400;

    @media ${devices.tablet} {
      width: 16rem;
    }

    @media ${devices.phone} {
      width: 12rem;
    }
  `,
};

interface Props {
  $size: string;
  $color: string;
  $border: string;
  $colorHover: string;
  $hoverBorderRadius: string;
}

const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-main-text-dark);
  background-color: var(${(props) => props.$color});
  border: var(${(props) => props.$border});
  border-radius: var(--border-radius-lg);

  font-size: 2.2rem;
  font-weight: 500;

  text-decoration: none;
  cursor: pointer;

  transition: all 0.3s;
  letter-spacing: 1px;

  ${(props) => sizes[props.$size]};

  &:hover {
    border-radius: var(${(props) => props.$hoverBorderRadius});
    background-color: var(${(props) => props.$colorHover});
  }

  &:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
  }
`;

Button.defaultProps = {
  $color: "--color-green-main",
  $colorHover: "--color-green-main-dark",
  $size: "medium",
  $border: "--border-none",
};

export default Button;
