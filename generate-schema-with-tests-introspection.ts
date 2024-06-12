import { GraphQLSchemaHost } from "@nestjs/graphql";
import { writeFileSync } from "fs";
import { Test } from "@nestjs/testing";
import { AppModule } from "./src/app.module";
import { printIntrospectionSchema } from "@apollo/subgraph/dist/printSubgraphSchema";

async function generateSchema() {
  try {
    const app = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    await app.init();

    const gqlSchemaHost = app.get(GraphQLSchemaHost);
    // const schema = printSchema(gqlSchemaHost.schema) + "\n";
    const schema = printIntrospectionSchema(gqlSchemaHost.schema) + "\n";
    console.log(schema);
    writeFileSync("schema-test-module-introspection.graphql", schema);
  } catch (error) {
    console.error(error);
  }
}

generateSchema();
