import {
  GraphQLSchemaBuilderModule,
  GraphQLSchemaFactory,
} from "@nestjs/graphql";
import { writeFileSync } from "fs";
import { NestFactory } from "@nestjs/core";
import { printSchema } from "graphql";
import { UsersResolver } from "./src/users/users.resolver";

async function generateSchema() {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);
  await app.init();
  const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
  const schema = await gqlSchemaFactory.create(
    [
        UsersResolver,
    ],
  );
  const stringSchema = printSchema(schema);
  console.log(stringSchema);
  writeFileSync("schema-docs-sdl.graphql", stringSchema);
}

generateSchema();
