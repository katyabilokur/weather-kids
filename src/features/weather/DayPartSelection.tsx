import styled from "styled-components";
import React from "react";
import Select from "../../ui/Select";
import { devices, timeRanges } from "../../interfaces/constant";
import Heading from "../../ui/Heading";

const StyledDayPartSelection = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-end;

  @media ${devices.phone} {
    gap: 1rem;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

interface DayPartSelectionProps {
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const viewOptions = timeRanges.map((range) => range.text);

function DayPartSelection({ children, onChange }: DayPartSelectionProps) {
  return (
    <StyledDayPartSelection>
      <Heading as="h3">{children}</Heading>
      <Select options={viewOptions} onChange={onChange} />
    </StyledDayPartSelection>
  );
}

export default DayPartSelection;
