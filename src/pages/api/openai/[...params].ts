import type { NextApiRequest, NextApiResponse } from "next";

import { API_URL_OPENAI } from "@/config";

const { OPENAI_API_KEY, PROMPT_SEND } = process.env;

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") return res.status(405).end();

  const params = req.query.params as string[];

  const commitVerbInfinitive = params[0] ? params[0] : "";
  const commitObject = params[1] ? params[1] : "";
  const commitDescription = params[2] ? params[2] : "";

  const promptToSend: string = `Generate commit in English using good practices [Infinitive Verb] + [Object/Work area] + [Description of the change]:  \n\n${commitVerbInfinitive} ${commitObject} in ${commitDescription}\n\n`;

  const response = await fetch(API_URL_OPENAI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: promptToSend,
      stream: true,
      temperature: 0.39,
    }),
  });

  if (!response.ok) {
    console.error(response.statusText);
    return res.status(500).json({ error: "Something went wrong Response" });
  }

  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*",
    Connection: "keep-alive",
    "Cache-Control": "no-cache, no-transform",
    "Content-Encoding": "none",
    "Content-Type": "text/event-stream; charset=utf-8",
  });

  const reader = response.body?.getReader();

  if (!reader) {
    console.log(reader);
    return res.status(500).json({ error: "Something went wrong in Reader" });
  }

  let chunk = "";

  while (true) {
    const { done, value } = await reader.read();

    if (done) break;

    chunk += new TextDecoder().decode(value);

    const output = chunk
      .split("\n")
      .filter(Boolean)
      .map((line) => line.replace("data: ", "").trim());

    for (const data of output) {
      if (data === "[DONE]") {
        return res.end("data: [DONE]\n\n");
      }
      try {
        const outputJson = JSON.parse(data);
        const { text } = outputJson?.choices[0];

        res.write(`data: ${JSON.stringify(text)}\n\n`);

        chunk = "";
      } catch (error) {
        console.log(error);
      }
    }
  }
}

export default handler;
