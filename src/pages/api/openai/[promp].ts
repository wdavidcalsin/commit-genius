// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.API_KEY_OPENAI,
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt:
      "Create in standar commit [Infinitive verb] + [Object/work area] + [Description of change],return improved but don't change the infinitive verbs:\n\nfix component navbar in the icons",
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  const textCommit = completion.data.choices[0].text;

  if (!textCommit) return res.status(400).errored;

  const endIndex = textCommit.indexOf("\n\n"); // Busca el índice del primer salto de línea doble en el texto generado
  const output = textCommit.substring(endIndex + 2);
  res.status(200).json(output);
}
