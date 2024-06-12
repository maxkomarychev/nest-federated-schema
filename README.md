= Demo NestJS and federated schemas


Problem: nest js does not generate federated directives.


Run the following commands and observe content of files created with them

|command|output|status|
|-|-|-|
|`npm run start:dev`|[schema-auto.graphql](schema-auto.graphql)|🔴 no federated directives at all|
|`npx ts-node generate-schema-with-docs.ts`|[schema-docs-sdl.graphql](schema-docs-sdl.graphql)|🔴 no federated directives at all|
|`npx ts-node generate-schema-with-tests`|[schema-test-module.graphql](schema-test-module.graphql)|🟡 `@key` directive is present|
|`npx ts-node generate-schema-with-tests-introspection.ts`|[schema-test-module-introspection.graphql](schema-test-module-introspection.graphql)|🟢 the most complete schema|
