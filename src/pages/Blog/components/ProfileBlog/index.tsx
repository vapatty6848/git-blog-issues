import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentLink } from "../../../../components/ComponentLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";


export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/vapatty6848.png" />

      <ProfileDetails >
        <header>
          <h1>Vânia Patrícia</h1>
          <ComponentLink text="github" href="#"/>
        </header>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit.
          Nunc, volutpat pulvinar vel mass
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            vapatty6848
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Hight CiTY
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            123 seguidores
          </li>
     </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}
