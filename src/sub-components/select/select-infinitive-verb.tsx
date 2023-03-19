import * as React from "react";
import { Box, Select, SelectProps } from "@chakra-ui/react";
import { useSnapshot } from "valtio";

import { Loading } from "../loading";

import { setInfinitiveVerbs, storeVerbInfinitive } from "@/store";

interface IPropsSelect extends SelectProps {
  name: string;
}

const SelectInfinitiveVerb = React.forwardRef<HTMLSelectElement, IPropsSelect>(
  function SelectInfinitiveVerb({ name, ...props }, ref) {
    const { infinitiveVerbs, streamingVerbs } =
      useSnapshot(storeVerbInfinitive);

    React.useEffect(() => {
      void setInfinitiveVerbs();
    }, []);

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
        {streamingVerbs ? (
          <option>
            <Box display={"grid"} placeItems="center" width={"100%"}>
              <Loading />
            </Box>
          </option>
        ) : (
          infinitiveVerbs.map((verb, index) => (
            <option key={index} value={verb.value}>
              {verb.name}
            </option>
          ))
        )}
      </Select>
    );
  }
);

export default SelectInfinitiveVerb;
