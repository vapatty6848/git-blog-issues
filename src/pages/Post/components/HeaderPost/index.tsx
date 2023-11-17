import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentLink } from "../../../../components/ComponentLink";
import { ContainerHeaderPost } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


export function HeaderPost() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <ContainerHeaderPost>
      <header>
        <ComponentLink
          as="button"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text="Back"
         onClick={goBack}
          variant="iconLeft"
        />
        <ComponentLink text="Ver no GitHub"  href="#" target="_blank"/>
      </header>

      <h1>JavaScript data types and data structures</h1>
      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
           cameronwll
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
            Há 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          5 comentários
        </li>
      </ul>
    </ContainerHeaderPost>
  )
}
