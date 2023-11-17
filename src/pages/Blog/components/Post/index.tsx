import { ContainerBlogPost } from "./styles";


export function BlogPost() {
  return (
    <ContainerBlogPost to="/post/1" >
      <div>
        <strong>JavaScript data types and data structure</strong>
        <span> Há 1 dia</span>
      </div>
      <p>
        Programming languages all have built-in data structures, but these often differ from one language to another.
        These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn in...
      </p>
    </ContainerBlogPost>
  )
}
