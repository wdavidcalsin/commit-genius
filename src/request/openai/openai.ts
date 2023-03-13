import { API_URL } from "@/config";
import { IServiceMessageCommit } from "@/types";

export const requestOpenai = async ({
  infinitiveVerbCommit,
  objectCommit,
  descriptionCommit,
}: IServiceMessageCommit) => {
  const response = await fetch(
    `${API_URL}/${infinitiveVerbCommit}/${objectCommit}/${descriptionCommit} `
  );
  const commitMessage = await response.json();

  return commitMessage;
};
