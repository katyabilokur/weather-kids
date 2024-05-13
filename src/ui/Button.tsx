import styled, { css } from "styled-components";

const sizes: any = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
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
    padding: 1.2rem 2.4rem;
    font-weight: 500;
    width: 14rem;
  `,
  huge: css`
    font-size: 1.8rem;
    padding: 3.2rem 1rem;
    font-weight: 500;
  `,
};

interface Props {
  $size: string;
  $color: string;
  $colorHover: string;
  $border: any;
}

const Button = styled.button<Props>`
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  background-color: var(${(props) => props.$color});
  border: var(${(props) => props.$border});

  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;

  ${(props) => sizes[props.$size]};

  &:hover {
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
