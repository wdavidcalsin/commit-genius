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
  const params = req.query.params as string[];
  const verbInfinitive = params[0] ? params[0] : "";
  const commitObject = params[1] ? params[1] : "";
  const commitDescription = params[2] ? params[2] : "";
  // const paramsText = params.join(" ");
  console.log(params);
  const prompt1: string = `Create in standard commit [Infinitive verb] + [Object/work area] + [Description of change],return complete y improved but don't change the infinitive verbs:\n\n${verbInfinitive} ${commitObject} ${commitDescription}`;
  const prompt2: string = `Genera commit eficiente en ingles con buenas practicas [Verbo Infinitivo] + [Objeto/área de trabajo] + [Descripción del cambio] pero no incluyas extension a componentes como home.jsx navbar.js,etc:\n\n${verbInfinitive} ${commitObject} ${
    commitDescription ? "in " + commitDescription : commitDescription
  }.`;
  // console.log(prompt1);

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt2,
    temperature: 0.1,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  if (!completion) return res.status(400).end();

  const textCommit = completion.data.choices[0].text;

  if (!textCommit) return res.status(400).errored;

  // const endIndex = textCommit.indexOf("\n\n");
  // const output = textCommit.substring(endIndex + 2);

  // console.log(textCommit);

  res.status(200).json(textCommit);
}
