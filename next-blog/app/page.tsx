import { Button } from "@/components/ui/button"
async function getData() {
  const query = `*[_type == "Blog"] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current
  }`;
  return query;
}
export default function Home() {
  return (
    <>
      
      <main>
        <h1>Welcome to My Blog</h1>

    <div>
      <Button>Click me</Button>
    </div>
      </main>
    </>
  );
}
