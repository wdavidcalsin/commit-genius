import { proxy } from "valtio";

import { servicesCommit } from "@/services";
import { IServiceMessageCommit, IStateCommit } from "@/types";

export const storeMessageEntryCommit = proxy<IStateCommit>({
  entryMessageCommit: {
    infinitiveVerbCommit: "",
    objectCommit: "",
    descriptionCommit: "",
  },
  outputMessageCommit: "",
});

export const setMessageEntryCommit = async (
  entryMessageCommit: IServiceMessageCommit
) => {
  storeMessageEntryCommit.entryMessageCommit = entryMessageCommit;

  const { infinitiveVerbCommit, objectCommit, descriptionCommit } =
    storeMessageEntryCommit.entryMessageCommit;

  const outputMessage = await servicesCommit({
    infinitiveVerbCommit,
    objectCommit,
    descriptionCommit,
  });

  storeMessageEntryCommit.outputMessageCommit = outputMessage;
};
