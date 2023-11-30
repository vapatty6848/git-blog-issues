/* eslint-disable react-hooks/exhaustive-deps */
import { Profile } from "./components/ProfileBlog";
import { SearchInput } from "./components/SearchInput";
import { ListBlogContainer } from "./styles";
import { BlogPost }  from "./components/Post";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Spinner } from "../../components/Spinner";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: string;
  user: {
    login: string;
  }
}

export function Blog() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        setIsLoading(true);

        const response = await api.get(
          `/search/issues?q=${query}%20label:public%20repo:${username}/${repoName}`
        );
              console.log(response)
        setPosts(response.data.items);
      } finally {
        setIsLoading(false);
      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      {isLoading ? (
        <Spinner />
      ) : (
        <ListBlogContainer>
          {posts.map((post) => (
            <BlogPost key={post.number} post={post} />
          ))}
        </ListBlogContainer>
      )}
    </>
  );
}
