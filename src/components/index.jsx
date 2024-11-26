import styled from "styled-components";

export const SubTitle = styled.p`
  font-size: 1rem;
  color: var(--blue);
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: var(--dark);
`;

export const OutlinedButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: transparent;
  color: var(--blue);
  border: 2px solid var(--blue);
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: var(--blue);
    color: white;
  }
`;
export const ContainedButton = styled.button`
  padding: 12px;
  font-size: 1rem;
  color: white;
  background-color: var(--blue);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  height: fit-content;
  &:hover {
    background-color: var(--darkblue);
  }
`;

export const Container = styled.section``;
