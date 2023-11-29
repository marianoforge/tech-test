import React from "react";
import { useRecoilState } from "recoil";
import { nationalityFilterState } from "../state/filters";
import { MultiSelect } from "@mantine/core";

const NATIONALITIES = ["US", "GB", "FR", "DE", "AU", "BR", "CA"];

const NationalityFilter: React.FC = () => {
  const [nationalityFilter, setNationalityFilter] = useRecoilState(
    nationalityFilterState
  );

  return (
    <MultiSelect
      data={NATIONALITIES}
      value={nationalityFilter}
      onChange={setNationalityFilter}
      placeholder="Filter by nationality"
    />
  );
};

export default NationalityFilter;
