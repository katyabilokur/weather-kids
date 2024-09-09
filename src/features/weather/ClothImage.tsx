import styled from "styled-components";
import React from "react";
import { devices } from "../../interfaces/constant";

const StyledClothImage = styled.div`
  width: 15rem;
  height: 15rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    border: var(--border-main);
    border-radius: var(--border-radius-lg);
  }

  @media ${devices.phone} {
    width: 12rem;
    height: 12rem;

    img {
      width: 12rem;
      height: 12rem;
    }
  }
`;

interface ClothImageProp {
  url: string;
}

function ClothImage({ url }: ClothImageProp) {
  return (
    <StyledClothImage>
      <img src={url} />
    </StyledClothImage>
  );
}

export default ClothImage;
