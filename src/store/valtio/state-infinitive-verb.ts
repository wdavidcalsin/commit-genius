import { proxy } from "valtio";

import { serviceVerbInfinitive } from "@/services";
import { IStateInfinitiveVerb } from "@/types";

export const storeVerbInfinitive = proxy<IStateInfinitiveVerb>({
  infinitiveVerbs: [],
  streamingVerbs: false,
});

export const setInfinitiveVerbs = async () => {
  storeVerbInfinitive.streamingVerbs = true;

  storeVerbInfinitive.infinitiveVerbs = await serviceVerbInfinitive();

  storeVerbInfinitive.streamingVerbs = false;
};
