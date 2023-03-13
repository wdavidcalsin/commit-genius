import { requestOpenai } from "@/request";
import { IServiceMessageCommit } from "@/types";

export const servicesCommit = async ({
  infinitiveVerbCommit,
  objectCommit,
  descriptionCommit,
}: IServiceMessageCommit) => {
  const messageCommit = await requestOpenai({
    infinitiveVerbCommit,
    objectCommit,
    descriptionCommit,
  });

  return messageCommit;
};
