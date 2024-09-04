import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      letter-spacing: 1.5px;
      font-family: "Lora", serif;
      font-size: 3.8rem;
      font-weight: 600;
      text-align: center;
      color: var(--color-grey-50);
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-family: "Lora", serif;
      font-size: 2.4rem;
      font-weight: 500;
      color: var(--color-dark-base);
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2rem;
      font-weight: 300;
      text-align: center;
      color: var(--color-grey-400);
      margin-bottom: 4rem;
    `}

  line-height: 1.4;
`;

export default Heading;
