import { ContainerSearchInput } from "./styles";
import * as z from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>;

interface SearchInputProps {
  postsLength: number;
  getPosts: (query?: string) => Promise<void>;
}

export function SearchInput({ postsLength, getPosts }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query);
  }
  return (
    <ContainerSearchInput  onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h3>Publications</h3>
        <span>{ postsLength} publications</span>
      </header>
      <input type="text" placeholder="Search issues"  {...register("query")} />
    </ContainerSearchInput>
  )
}
