import { Posts } from "@prisma/client";

interface PostsProps {
  post: Posts;
}

export default function Post({ post }: PostsProps) {
  return <div>{post.author}</div>;
}
