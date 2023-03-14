import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoMdSend } from "react-icons/io";
import { useSnapshot } from "valtio";

import { infinitiveVerb } from "@/constants";
import { setMessageEntryCommit, storeMessageEntryCommit } from "@/store";
import { CustomPopover, Loading, SelectInfinitiveVerb } from "@/sub-components";

type Inputs = {
  infinitiveVerbCommit: string;
  objectCommit: string;
  descriptionCommit: string;
};

const EntryForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const snap = useSnapshot(storeMessageEntryCommit);

  const onSubmit: SubmitHandler<Inputs> = ({
    descriptionCommit,
    infinitiveVerbCommit,
    objectCommit,
  }) => {
    setMessageEntryCommit({
      descriptionCommit,
      infinitiveVerbCommit,
      objectCommit,
    });
  };

  return (
    <Box>
      <FormControl
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        marginTop="4rem"
        display={"flex"}
        flexDirection="column"
        gap={"2rem"}
      >
        <Stack spacing={"2.5rem"}>
          <Box display={"flex"} flexDirection={["column", "row"]}>
            <FormLabel
              fontWeight={"bold"}
              display={"flex"}
              alignItems="center"
              gap=".5rem"
              width={["100%", "15rem"]}
            >
              Infinitive Verb
              <CustomPopover>
                {infinitiveVerb.map(({ label, description }, index) => (
                  <Box
                    key={index}
                    fontSize=".7rem"
                    whiteSpace={"normal"}
                    fontWeight="normal"
                    lineHeight={"1rem"}
                  >
                    <span style={{ fontWeight: "bold" }}>{label}</span>:{" "}
                    {description}
                  </Box>
                ))}
              </CustomPopover>
            </FormLabel>
            <SelectInfinitiveVerb
              {...register("infinitiveVerbCommit", { required: true })}
              borderWidth="1px"
              borderColor={"rgba(256,256,256, .5)"}
              focusBorderColor="#9D9FA2"
            />
          </Box>
          <Box display={"flex"} flexDirection={["column", "row"]}>
            <FormLabel
              fontWeight={"bold"}
              display={"flex"}
              alignItems="center"
              gap=".5rem"
              width={["100%", "15rem"]}
            >
              Object
              <CustomPopover>
                <Box whiteSpace={"normal"} fontWeight="normal">
                  This indicates the type of change being made to the code
                </Box>
              </CustomPopover>
            </FormLabel>
            <Input
              variant="outline"
              placeholder="Object"
              {...register("objectCommit", { required: true })}
              size="lg"
              height={"3.5rem"}
              borderWidth="1px"
              borderColor={"rgba(256,256,256, .5)"}
              focusBorderColor="#9D9FA2"
            />
          </Box>
          <Box display={"flex"} flexDirection={["column", "row"]}>
            <FormLabel
              fontWeight={"bold"}
              display={"flex"}
              alignItems="center"
              gap=".5rem"
              width={["100%", "15rem"]}
            >
              Description
              <CustomPopover>
                <Box whiteSpace={"normal"} fontWeight="normal">
                  This indicates where the specific change is being made.
                </Box>
              </CustomPopover>
            </FormLabel>
            <Input
              variant="outline"
              placeholder="Description"
              {...register("descriptionCommit", { required: true })}
              size="lg"
              height={"3.5rem"}
              borderWidth="1px"
              borderColor={"rgba(256,256,256, .5)"}
              focusBorderColor="#9D9FA2"
            />
          </Box>
          <Box display={"grid"} placeItems="center">
            <Button
              fontSize={"1.1rem"}
              type="submit"
              variant="outline"
              rightIcon={snap.streaming ? <Loading /> : <IoMdSend />}
            >
              Generate Commit
            </Button>
          </Box>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default EntryForm;
