import { requestOpenai } from "@/request";
import { IServiceMessageCommit } from "@/types";
import { removeUnnecessaryWord } from "@/utils";

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

  return removeUnnecessaryWord(messageCommit);
};
