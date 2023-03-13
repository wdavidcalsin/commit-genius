import * as React from "react";
import { Select, SelectProps } from "@chakra-ui/react";

import { infinitiveVerb } from "@/constants";

interface IPropsSelect extends SelectProps {
  name: string;
}

const SelectInfinitiveVerb = React.forwardRef<HTMLSelectElement, IPropsSelect>(
  function SelectInfinitiveVerb({ name, ...props }, ref) {
    return (
      <Select placeholder="Select option" name={name} ref={ref} {...props}>
        {infinitiveVerb.map((verb, index) => (
          <option key={index} value={verb.value}>
            {verb.label}
          </option>
        ))}
      </Select>
    );
  }
);

export default SelectInfinitiveVerb;
