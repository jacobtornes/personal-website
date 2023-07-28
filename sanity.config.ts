import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";

const config = defineConfig({
    projectId: "o2bm68yy",
    dataset: "production",
    title: "My personal website",
    apiVersion: "2023-06-27",
    basePath: "/admin",
    plugins: [deskTool(), vercelDeployTool()],
    schema: { types: schemas }
})

export default config;