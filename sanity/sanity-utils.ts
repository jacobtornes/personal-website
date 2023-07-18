import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";



export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: "o2bm68yy",
        dataset: "production",
        apiVersion: "2023-06-27",
    });

    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}

