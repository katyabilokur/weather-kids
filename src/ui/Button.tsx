import styled, { css } from "styled-components";

const sizes: any = {
  small: css`
    font-size: 1.2rem;
    width: 10rem;
    padding: 0.4rem 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
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
  `,
  huge: css`
    font-size: 1.8rem;
    padding: 2rem 1rem;
    font-weight: 400;
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
  width: 20rem;
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
