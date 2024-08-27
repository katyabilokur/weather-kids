import styled from "styled-components";
import React from "react";
import Select from "../../ui/Select";

const StyledDayPartSelection = styled.div``;

interface DayPartSelectionProps {
  children: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const viewOptions = ["All day", "Morning", "Day", "Evening"];

function DayPartSelection({ children, onChange }: DayPartSelectionProps) {
  return (
    <StyledDayPartSelection>
      {children} <Select options={viewOptions} onChange={onChange} />
    </StyledDayPartSelection>
  );
}

export default DayPartSelection;
