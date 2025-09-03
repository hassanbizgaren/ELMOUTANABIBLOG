import { fullBlog } from "@/sanity/lib/interface"
import {sanityClient as client} from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

async function getData(slug: string) {
    const query = `*[_type == "blog" && slug.current == $slug][0]{
        title,
        smalldescription,
        "currentSlug": slug.current,
        imageTitle,
        content
    }`;

    const data = await client.fetch(query, { slug });
    return data;
}

export default async function BlogArticle({ params }: { params: { slug: string } }) {
    const data: fullBlog = await getData(params.slug);
    return (
        <div className="mt-8">
            <h1>
                <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">ELMOUTANABI - BLOG</span>
                <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">{data.title}</span>
            </h1>
            <Image src={urlFor(data.imageTitle).url()} width={800} height={800} priority alt='Image for Article' className="mt-8 rounded-lg border"/>
            <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary"> 
                {/* prose from tailwind css */}
                <PortableText value={data.content} />
            </div>
        </div>
    );
}