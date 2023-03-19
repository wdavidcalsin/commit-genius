import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

import { RootObject } from "@/types";

const { NOTION_SECRET, NOTION_DATABASE_ID } = process.env;

const notion = new Client({ auth: NOTION_SECRET });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!NOTION_SECRET || !NOTION_DATABASE_ID)
    throw new Error("Missing notion secret or DB-ID");

  const query = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
  });

  const rows = query.results.map((resItem) => resItem as Partial<RootObject>);

  const rowsStructured = rows.map(({ properties }) => ({
    name: properties?.name.title[0].text.content,
    value: properties?.value.rich_text[0].text.content,
    description: properties?.description.rich_text[0].text.content,
  }));

  res.status(200).send(JSON.stringify(rowsStructured));
}
