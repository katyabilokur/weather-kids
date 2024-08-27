import styled from "styled-components";
import React from "react";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid;
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
