import { API_URL, API_URL_NOTION } from "@/config";
import { IPropertiesInfinitiveVerb, IServiceMessageCommit } from "@/types";

export const infinitiveVerbRequest = async () => {
  const response = await fetch(`${API_URL_NOTION}`);
  const propertiesVerbInfinitive =
    (await response.json()) as IPropertiesInfinitiveVerb[];

  return propertiesVerbInfinitive;
};
