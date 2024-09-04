import styled from "styled-components";

import { useMoveBack } from "../hooks/useMoveBack";
import Button from "../ui/Button";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <div className="container-block">
        <p>Sorry, there is no page like this</p>
        <Button
          onClick={moveBack}
          $size="large"
          $color="--color-green"
          $border="--border-main"
          $colorHover="--color-green"
          $hoverBorderRadius="--border-radius-hg"
        >
          &larr; Go back
        </Button>
      </div>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
