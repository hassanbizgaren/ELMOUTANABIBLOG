import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";
import { sanityClient } from "@/sanity/lib/client"
import { SimpleBlogCard } from "@/sanity/lib/interface"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link";
async function getData(): Promise<SimpleBlogCard[]> {
  // The document type is 'blog' (lowercase) and we need to match the exact field names
  const query = `*[_type == "blog"] | order(_createdAt desc) {
    title,
    smalldescription,
    "currentSlug": slug.current,
    imageTitle
  }`;
  
  const data = await sanityClient.fetch(query);
  return data;
}
export default async function Home() {
  const data: SimpleBlogCard[] = await getData();
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.length > 0 ? (
        data.map((post, idx) => (
          <Card key={idx} className="overflow-hidden flex flex-col">
            <div className="relative h-[200px] w-full">
              <Image 
                src={urlFor(post.imageTitle).url()} 
                alt={post.title || "Blog post image"} 
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-t-lg object-cover" 
              />
            </div>
            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">{post.smalldescription}</p>
              <Button asChild className="w-full mt-7">
                <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="col-span-full text-center py-10">
          <h2 className="text-xl font-semibold">No blog posts found</h2>
          <p className="text-gray-600 mt-2">Check back later for new content!</p>
        </div>
      )}
      </div>
    </div>
  );
}
