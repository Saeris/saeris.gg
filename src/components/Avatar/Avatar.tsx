import React from "react";
import type { IGetPlaiceholderReturn } from "plaiceholder";
import { Container, Img, Placeholder } from "./elements";

interface AvatarProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  placeholder: IGetPlaiceholderReturn["css"];
}

export const Avatar: React.FC<AvatarProps> = ({
  alt,
  src,
  placeholder,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <Container>
      <Placeholder style={placeholder} />
      <Img
        $visible={isLoaded}
        alt={alt}
        src={src}
        {...props}
        onLoad={() => setIsLoaded(true)}
      />
    </Container>
  );
};
