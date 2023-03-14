import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoMdSend } from "react-icons/io";
import { useSnapshot } from "valtio";

import { setMessageEntryCommit, storeMessageEntryCommit } from "@/store";
import { Loading, SelectInfinitiveVerb } from "@/sub-components";

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
        <TableContainer>
          <Table variant="simple">
            <Tbody>
              <Tr>
                <Td>
                  <FormLabel fontWeight={"bold"} width="auto">
                    Infinitive Verb
                  </FormLabel>
                </Td>
                <Td>
                  <SelectInfinitiveVerb
                    {...register("infinitiveVerbCommit", { required: true })}
                    borderWidth="1px"
                    borderColor={"rgba(256,256,256, .5)"}
                    focusBorderColor="#9D9FA2"
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <FormLabel fontWeight={"bold"} width="auto">
                    Object
                  </FormLabel>
                </Td>
                <Td>
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
                </Td>
              </Tr>
              <Tr>
                <Td>
                  <FormLabel fontWeight={"bold"} width="auto">
                    Description
                  </FormLabel>
                </Td>
                <Td>
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
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
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
      </FormControl>
    </Box>
  );
};

export default EntryForm;
