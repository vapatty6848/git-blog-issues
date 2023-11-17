import { Profile } from "./components/ProfileBlog";
import { SearchInput } from "./components/SearchInput";
import { ListBlogContainer } from "./styles";
import { BlogPost }  from "./components/Post";
import { useCallback, useState } from "react";
import { api } from "../../lib/axios";


const username = '';
const repoName = '';

interface IPost {
  title: string;
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const getPosts = useCallback(async (query: string = "") => {
    try {
      const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repoName}`)
    } finally {

    }
  }, [posts])
  return (
    <>
      <Profile />
      <SearchInput />
      <ListBlogContainer>
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
        <BlogPost />
      </ListBlogContainer>
    </>
  )
}
