import { ComponentProps, ReactNode } from "react";
import { LinkContainer } from "./styles";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type LinkProps = ComponentProps<typeof LinkContainer> & {
  text: string;
  icon?: ReactNode;
  variant?: "iconLeft";
}

export function ComponentLink({ text, icon, ...rest }: LinkProps) {
  return (
    <LinkContainer{...rest} >
      {text}
      {
        icon ?? <FontAwesomeIcon icon={ faUpRightFromSquare} />
      }
    </LinkContainer>
  )
}
