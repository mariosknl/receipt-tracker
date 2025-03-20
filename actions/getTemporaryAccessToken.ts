"use server";

import { currentUser } from "@clerk/nextjs/server";

import { SchematicClient } from "@schematichq/schematic-typescript-node";

const apiKey = process.env.SCHEMATIC_API_KEY;
const client = new SchematicClient({ apiKey });

export async function getTemporaryAccessToken() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  console.log("issuing temporary access token for user: ", user.id);
  const resp = await client.accesstokens.issueTemporaryAccessToken({
    resourceType: "company",
    lookup: {
      id: user.id,
    },
  });

  console.log(
    "temporary access token issued: ",
    resp.data ? "Token received" : "No token in response",
  );

  return resp;
}
