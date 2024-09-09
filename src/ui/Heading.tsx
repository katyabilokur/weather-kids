import styled, { css } from "styled-components";
import { devices } from "../interfaces/constant";

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

      @media ${devices.tablet} {
        font-size: 3rem;
        font-weight: 500;
      }

      @media ${devices.phone} {
        font-size: 2.6rem;
      }
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

      @media ${devices.phone} {
        font-size: 2rem;
      }
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2rem;
      font-weight: 300;
      text-align: center;
      color: var(--color-grey-400);
      margin-bottom: 4rem;

      @media ${devices.tablet} {
        font-size: 1.8rem;
        font-weight: 200;
        margin-bottom: 1rem;
      }

      @media ${devices.phone} {
        font-size: 1.6rem;
        margin-bottom: 0.8rem;
      }
    `}

  line-height: 1.4;
`;

export default Heading;
