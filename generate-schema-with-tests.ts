import { GraphQLSchemaHost } from "@nestjs/graphql";
import { printSubgraphSchema } from "@apollo/subgraph";
import { writeFileSync } from "fs";
import { Test } from "@nestjs/testing";
import { AppModule } from "./src/app.module";

async function generateSchema() {
  try {
    const app = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    await app.init();

    const gqlSchemaHost = app.get(GraphQLSchemaHost);
    const schema = printSubgraphSchema(gqlSchemaHost.schema) + "\n";
    console.log(schema);
    writeFileSync("with-test.graphql", schema);
  } catch (error) {
    console.error(error);
  }
}

generateSchema();
