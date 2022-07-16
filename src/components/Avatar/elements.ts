import styled, { css } from "styled-components";
import Image from "next/future/image";

export const Container = styled.div`
  --img-blur: 42px;
  --img-scale: 1.5;
  --img-transition-duration: 1.2s;
  --img-aspect-ratio: 1;
  display: block;
  width: 12.8rem;
  height: 12.8rem;
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  border-radius: 50%;
  padding-bottom: var(--img-aspect-ratio);
`;

export const Placeholder = styled.div`
  position: absolute;
  display: block;
  max-width: 100%;
  width: 100%;
  height: 100%;
  inset: 0;
  filter: blur(var(--img-blur));
  transform: scale(var(--img-scale));
`;

export const Img = styled(Image)<{ $visible: boolean }>(
  ({ $visible }) => css`
    position: absolute;
    display: block;
    max-width: 100%;
    width: 100%;
    height: 100%;
    inset: 0;
    font-size: 0;
    opacity: 0;
    object-fit: cover;
    object-position: center center;
    box-shadow: 0rem 0.6rem 1.2rem 0.2rem hsl(0deg 0% 2% / 40%);
    filter: blur(var(--img-blur));
    transform: scale(var(--img-scale));

    @media (prefers-reduced-motion: no-preference) {
      transition: var(--img-transition-duration) ease;
      transition-property: filter, opacity, transform;
      will-change: filter, transform;
    }

    ${$visible
      ? css`
          opacity: 1;
          transform: scale(1);
          filter: blur(0);
        `
      : ``}
  `
);
