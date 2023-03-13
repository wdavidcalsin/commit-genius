import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const { OPENAI_API_KEY } = process.env;

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).end();

  const params = req.query.params as string[];

  const commitVerbInfinitive = params[0] ? params[0] : "";
  const commitObject = params[1] ? params[1] : "";
  const commitDescription = params[2] ? params[2] : "";

  const promptToSend: string = `Genera commit en ingles con buenas practicas [Verbo Infinitivo] + [Objeto/área de trabajo] + [Descripción del cambio]:  \n\n${commitVerbInfinitive} ${commitObject} ${commitDescription}\n\n`;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: promptToSend,
    temperature: 0.39,
    max_tokens: 640,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  if (!completion) return res.status(400).end();

  const textCommit = completion.data.choices[0].text;

  if (!textCommit) return res.status(400).errored;

  const endIndex = textCommit.indexOf("\n");
  const output = textCommit.substring(endIndex + 1);

  res.status(200).json(output);
}

export default handler;
