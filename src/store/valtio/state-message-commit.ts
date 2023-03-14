import { proxy } from "valtio";

import { API_URL } from "@/config";
import { servicesCommit } from "@/services";
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

  const url = `${API_URL}/${infinitiveVerbCommit}/${objectCommit}/${descriptionCommit}`;
  console.log(url);
  const eventSource = new EventSource(url);
  let message = "";
  // console.log(eventSource);

  eventSource.onerror = (error) => {
    console.error("Event source Onerror:", error);
    eventSource.close();
    storeMessageEntryCommit.streaming = false;
  };

  eventSource.onmessage = (event) => {
    // console.error("Event source event:", event);
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
