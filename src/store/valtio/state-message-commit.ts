import { proxy } from "valtio";

import { API_URL } from "@/config";
import { servicesCommit } from "@/services";
import { IServiceMessageCommit, IStateCommit } from "@/types";

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

  // const outputMessage = await servicesCommit({
  //   infinitiveVerbCommit,
  //   objectCommit,
  //   descriptionCommit,
  // });
  const url = `${API_URL}/${infinitiveVerbCommit}/${objectCommit}/${descriptionCommit}`;

  const eventSource = new EventSource(url);

  console.log(eventSource);

  // eventSource.onerror = (error) => {
  //   console.error("Event source 1:", error);
  //   eventSource.close();
  //   storeMessageEntryCommit.streaming = false;
  // };

  // eventSource.onmessage = (event) => {
  //   const { data } = event;

  //   if (data === "[DONE]") {
  //     storeMessageEntryCommit.streaming = false;

  //     eventSource.close();
  //     return;
  //   }
  //   console.log("Hello");

  //   storeMessageEntryCommit.outputMessageCommit = JSON.parse(data);
  // };
};
