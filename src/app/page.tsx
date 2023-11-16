import Post from "@/components/post";
import prisma from "@/lib/prisma";

export default async function Home() {
  const posts = await prisma.posts.findMany({});

  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
}
