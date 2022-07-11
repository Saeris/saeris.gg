import styled from "styled-components";
import { Link } from "../../components/Link";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
  height: 100%;
  background-image: url("/waves.png");
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji";
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: inherit;
  width: 100%;
  max-width: 80ch;
  height: fit-content;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Cell = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 80ch;
  margin: 0;
  padding: 0;
  padding-inline: 2.4rem;
  height: fit-content;
`;

export const Profile = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  width: 100%;
  height: fit-content;
  padding-top: 6.4rem;
  padding-bottom: 3.2rem;
`;

export const Avatar = styled.img`
  position: relative;
  width: 12.8rem;
  height: 12.8rem;
  border-radius: 50%;
  object-fit: cover;
  object-position: center center;
`;

export const About = styled.figcaption`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  width: 100%;
  height: fit-content;
`;

export const Name = styled.h1`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
  color: hsla(0, 0%, 100%, 0.9);
  font-size: 3.6rem;
  font-weight: 600;
  letter-spacing: calc((7 / 100) * 1em);
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  padding: 0;
  color: hsla(0, 0%, 100%, 0.69);
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: calc((10 / 100) * 1em);
`;

export const SocialLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2.4rem;
  width: 100%;
  padding-inline: 2.4rem;
  padding-block: 0.8rem;
  border: 0.1rem solid hsla(0, 0%, 100%, 0.15);
  border-radius: 0.8rem;
  background-blend-mode: luminosity;
  color: hsla(225, 6%, 96%, 0.9);
  font-size: 3.6rem;
  font-weight: 600;
  letter-spacing: calc((10 / 100) * 1em);
  text-transform: uppercase;
  mix-blend-mode: screen;
  transition: 0.2s ease-in-out;
  will-change: color, background-color, border-color;

  &:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: hsla(0, 0%, 90%, 0.05);
    backdrop-filter: blur(5px);
  }

  svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  &:hover,
  &:focus {
    color: hsla(225, 6%, 96%, 1);
    border-color: hsla(0, 0%, 100%, 0.25);
    background-color: hsla(0, 0%, 90%, 0.1);
  }

  &:focus {
    outline: none;
  }
`;
