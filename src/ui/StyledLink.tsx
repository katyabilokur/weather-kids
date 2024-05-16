import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  margin-top: 3rem;
  text-align: center;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  background-color: var(--color-green-main);
  border: var(--border-none);

  font-size: 1.8rem;
  padding: 1.2rem 2.4rem;
  font-weight: 500;
  width: 14rem;

  &:hover {
    background-color: var(--color-green-main-dark);
  }

  &:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
  }
`;

export default StyledLink;
