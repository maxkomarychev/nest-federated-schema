# Demo NestJS and federated schemas


Problem: nest js does not generate federated directives.


Run the following command:

- `npm run start:dev`
- `npx ts-node generate-schema-with-docs.ts`
- `npx ts-node generate-schema-with-tests`
- `npx ts-node generate-schema-with-tests-introspection.ts`


Observe produced results are incomplete for the first 3 scripts and only contain 
correct federated schema for the last one.