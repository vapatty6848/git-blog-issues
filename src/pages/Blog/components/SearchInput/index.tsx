import { ContainerSearchInput } from "./styles";


export function SearchInput() {
  return (
    <ContainerSearchInput>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>
      <input  type="text" placeholder="Search issues" />
    </ContainerSearchInput>
  )
}
