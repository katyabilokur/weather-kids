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

const Container = styled.div`
  background-color: var(--color-light-base);
  border-radius: var(--border-radius-mg);
  box-shadow: var(--box-shadow-md);
  width: 80rem;
  padding: 4rem 4rem 6rem 6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;

  p {
    font-size: 2rem;
    font-weight: 400;
    align-self: flex-start;
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Container>
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
      </Container>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
