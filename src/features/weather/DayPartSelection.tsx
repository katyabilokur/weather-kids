import styled from "styled-components";
import React from "react";
import Select from "../../ui/Select";
import { timeRanges } from "../../interfaces/constant";
import Heading from "../../ui/Heading";

const StyledDayPartSelection = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-end;
`;

interface DayPartSelectionProps {
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const viewOptions = timeRanges.map((range) => range.text);

function DayPartSelection({ children, onChange }: DayPartSelectionProps) {
  return (
    <StyledDayPartSelection>
      <Heading as="h2">{children}</Heading>
      <Select options={viewOptions} onChange={onChange} />
    </StyledDayPartSelection>
  );
}

export default DayPartSelection;
