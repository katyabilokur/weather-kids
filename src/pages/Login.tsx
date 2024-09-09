import styled from "styled-components";

import { useMoveBack } from "../hooks/useMoveBack";
import Button from "../ui/Button";
import { devices } from "../interfaces/constant";

const Container = styled.div`
  background-color: var(--color-light-base);
  border-radius: var(--border-radius-mg);
  box-shadow: var(--box-shadow-md);
  width: 80rem;
  padding: 4rem 5rem 6rem 5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;

  p {
    font-size: 1.8rem;
    font-weight: 400;
    align-self: flex-start;
  }

  @media ${devices.tablet} {
    width: auto;
    min-width: 60rem;
    max-width: 80rem;
    padding: 3rem 4rem 5rem 4rem;

    p {
      font-size: 1.6rem;
    }
  }

  @media ${devices.phone} {
    width: 95%;
    min-width: auto;
    max-width: 95%;
    padding: 3rem 2.4rem 4rem 2.4rem;

    border-radius: var(--border-radius-hg);
  }

  @media ${devices.xsPhone} {
    width: 97%;
    max-width: 97%;
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
