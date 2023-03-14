import * as React from "react";
import { Select, SelectField, SelectProps } from "@chakra-ui/react";

import { infinitiveVerb } from "@/constants";

interface IPropsSelect extends SelectProps {
  name: string;
}

const SelectInfinitiveVerb = React.forwardRef<HTMLSelectElement, IPropsSelect>(
  function SelectInfinitiveVerb({ name, ...props }, ref) {
    return (
      <Select
        placeholder="Select option"
        name={name}
        ref={ref}
        {...props}
        styles={{
          control: {
            border: "2px solid pink !important",
          },
        }}
        size="lg"
        height={"3.5rem"}
      >
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
