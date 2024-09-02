import styled from "styled-components";
import React from "react";

const StyledClothImage = styled.div`
  width: 18rem;
  height: 18rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    border-radius: var(--border-radius-lg);
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
