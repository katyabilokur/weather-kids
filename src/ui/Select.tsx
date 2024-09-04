import styled from "styled-components";
import React from "react";

const StyledSelect = styled.select`
  font-size: 1%.6;
  color: var(--color-dark-base);
  padding: 0.8rem 2.4rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  max-width: 30rem;
`;

interface selectProps {
  options: Array<string>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Select({ options, onChange }: selectProps) {
  return (
    <StyledSelect onChange={onChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
