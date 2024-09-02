import styled from "styled-components";
import React from "react";
import { useCloth } from "../../hooks/useCloth";
import { useSelection } from "../selection/SelectionContext";
import ClothImage from "./ClothImage";

const StyledCloth = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

interface ClothProps {
  minTemp: number;
  maxTemp: number;
  precipitation: number;
}

function Cloth({ minTemp, maxTemp, precipitation }: ClothProps) {
  const { gender } = useSelection();
  const { isLoading, clothData } = useCloth(
    minTemp,
    maxTemp,
    gender,
    precipitation
  );

  return (
    <StyledCloth>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <>
          {clothData?.map((el) => (
            <ClothImage key={el.url} url={el.url} />
          ))}
        </>
      )}
    </StyledCloth>
  );
}

export default Cloth;
