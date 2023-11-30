import { IPost } from "../..";
import { ContainerBlogPost } from "./styles";

interface PostProps {
  post: IPost;
}

export function BlogPost({ post }: PostProps) {
  return (
    <ContainerBlogPost to={`/post/${post.number}`} >
      <div>
        <strong>{ post.title }</strong>
        <span>{ post.created_at}</span>
      </div>
      <p>
       {post.body}
      </p>
    </ContainerBlogPost>
  )
}
