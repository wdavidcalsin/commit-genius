import { API_URL } from "@/config";
import { IServiceMessageCommit } from "@/types";

export const serviceEventSourceCommit = ({
  infinitiveVerbCommit,
  objectCommit,
  descriptionCommit,
}: IServiceMessageCommit) => {
  const url = `${API_URL}/${infinitiveVerbCommit}/${objectCommit}/${descriptionCommit}`;

  const eventSource = new EventSource(url);
  return eventSource;
};
