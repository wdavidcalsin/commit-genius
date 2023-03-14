import { proxy } from "valtio";

import { API_URL } from "@/config";
import { serviceEventSourceCommit } from "@/services";
import { IServiceMessageCommit, IStateCommit } from "@/types";
import { removeUnnecessaryWord } from "@/utils";

export const storeMessageEntryCommit = proxy<IStateCommit>({
  entryMessageCommit: {
    infinitiveVerbCommit: "",
    objectCommit: "",
    descriptionCommit: "",
  },
  outputMessageCommit: "",
  streaming: false,
});

export const setMessageEntryCommit = async (
  entryMessageCommit: IServiceMessageCommit
) => {
  storeMessageEntryCommit.streaming = true;

  storeMessageEntryCommit.entryMessageCommit = entryMessageCommit;

  const { infinitiveVerbCommit, objectCommit, descriptionCommit } =
    storeMessageEntryCommit.entryMessageCommit;

  const eventSource = serviceEventSourceCommit({
    infinitiveVerbCommit,
    objectCommit,
    descriptionCommit,
  });
  let message = "";

  eventSource.onerror = (error) => {
    console.error("Event source Onerror:", error);
    eventSource.close();
    storeMessageEntryCommit.streaming = false;
  };

  eventSource.onmessage = (event) => {
    const { data } = event;
    console.log(data);
    if (data === "[DONE]") {
      storeMessageEntryCommit.streaming = false;

      eventSource.close();
      return;
    }
    message += JSON.parse(data);
    storeMessageEntryCommit.outputMessageCommit =
      removeUnnecessaryWord(message);
  };
};
