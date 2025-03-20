"use client";

import { SchematicEmbed as SchematicEmbedComponent } from "@schematichq/schematic-components";
import { IssueTemporaryAccessTokenResponse } from "@schematichq/schematic-typescript-node/api";

function SchematicEmbed({
  componentId,
  accessToken,
}: {
  componentId: string;
  accessToken: IssueTemporaryAccessTokenResponse;
}) {
  return (
    <SchematicEmbedComponent
      id={componentId}
      accessToken={accessToken.data.token}
    />
  );
}
export default SchematicEmbed;
