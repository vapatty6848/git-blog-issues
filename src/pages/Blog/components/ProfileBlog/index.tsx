/* eslint-disable react-hooks/exhaustive-deps */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentLink } from "../../../../components/ComponentLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "../../../../components/Spinner";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

const username = import.meta.env.VITE_GITHUB_USERNAME;

interface ProfileData {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>(
    {} as ProfileData
  );

  const [isLoading, setIsLoading] = useState(true);

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`/users/${username}`);

      setProfileData(response.data);
    } finally {
      getProfileData();
      setIsLoading(false)
    }
  }, [profileData]);

  useEffect(() => {
    getProfileData();
  }, [])

  return (
    <ProfileContainer>
      {isLoading ? (
        <Spinner />
      ) : (
          <>
            <ProfilePicture src={profileData.avatar_url } />

              <ProfileDetails >
                <header>
                <h1>{ profileData.name}</h1>
                <ComponentLink
                    text="Github"
                    href={profileData.html_url}
                    target="_blank"
                />
                </header>
              <p>{ profileData.bio}</p>

                <ul>
                  <li>
                    <FontAwesomeIcon icon={faGithub} />
                   {profileData.login}
                  </li>
                   {profileData?.company && (
                  <li>
                    <FontAwesomeIcon icon={faBuilding} />
                        {profileData.company}
                  </li>
                    )}
                  <li>
                    <FontAwesomeIcon icon={faUserGroup} />
                        {profileData.followers} followers
                  </li>
              </ul>
              </ProfileDetails>

          </>
      )
    }
    </ProfileContainer>
  )
}
