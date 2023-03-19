import { infinitiveVerbRequest } from "@/request/notion/infinitive-verb-request";

export const serviceVerbInfinitive = async () => {
  const propertiesVerbInfinitive = await infinitiveVerbRequest();

  return propertiesVerbInfinitive;
};
