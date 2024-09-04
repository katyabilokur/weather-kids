import styled from "styled-components";

import { useMoveBack } from "../hooks/useMoveBack";
import Button from "../ui/Button";

const Container = styled.div`
  background-color: var(--color-light-base);
  border-radius: var(--border-radius-mg);
  box-shadow: var(--box-shadow-md);
  width: 100rem;
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

function Login() {
  const moveBack = useMoveBack();

  return (
    <Container>
      <p>
        Functionality for logged-in users with extra features and options is yet
        to come. Please be patient and enjoy using the free Guest option 😜
      </p>
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
  );
}

export default Login;
