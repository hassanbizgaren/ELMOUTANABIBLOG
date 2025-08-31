/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card";
import { sanityClient } from "@/sanity/lib/client"
import { SimpleBlogCard } from "@/sanity/lib/interface"
async function getData(): Promise<SimpleBlogCard[]> {
  const query = `*[_type == "Blog"] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    "imageTitle": image.title
  }`;
  const data = await sanityClient.fetch(query);
  console.log(data);
  return data;
}
export default async function Home() {
  const data: SimpleBlogCard[] = await getData();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mt-5">
      {data.map((post, idx) => (
          <Card key={idx}></Card>
        ))}
    </div>
  );
}
