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
import { useSnapshot } from "valtio";

import { setMessageEntryCommit, storeMessageEntryCommit } from "@/store";
import { SelectInfinitiveVerb } from "@/sub-components";

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
                    variant="filled"
                    placeholder="Object"
                    {...register("objectCommit", { required: true })}
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
                    variant="filled"
                    placeholder="Description"
                    {...register("descriptionCommit", { required: true })}
                  />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Box display={"grid"} placeItems="center">
          <Button type="submit" variant="outline">
            Generate Commit
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default EntryForm;
