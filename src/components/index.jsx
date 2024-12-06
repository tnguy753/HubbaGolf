import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  padding: 2rem 10rem;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1rem;
  }
  @media (max-width: 1024px) {
    padding: 2rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  color: var(--blue);
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;

export const Heading = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;

  color: var(--dark);

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
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
  padding: 1rem 4rem;
  font-size: 1rem;
  color: white;
  background-color: var(--blue);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  height: fit-content;
  width: fit-content;
  &:hover {
    background-color: var(--darkblue);
  }
`;

export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ColumnForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.9rem;
    color: #4a5568;
    margin-bottom: 5px;
  }

  input,
  select,
  textarea {
    padding: 10px;
    font-size: 0.9rem;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    outline: none;
    width: 100%;

    &:focus {
      border-color: #22c55e;
    }
  }

  textarea {
    resize: none;
    height: 100px;
  }
`;

export const TextInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  outline: none;
  width: 100%;

  &:focus {
    border-color: #22c55e;
  }
`;

export const Breadcrumbs = styled.nav`
  font-size: 1rem;

  color: #718096;
  a {
    color: var(--blue);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  span {
    margin: 0 0.5rem;
    color: #a0aec0;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* Align items to the left */
  gap: 1rem;
  width: 100%;
  max-width: 1359px;
  margin-bottom: 2rem;

  /* Center the container itself on the screen */
  margin-left: auto;
  margin-right: auto;
`;

export const CardContainer = styled.div`
  display: grid;
  gap: 1rem;

  /* Desktop: 4 cards per row */
  grid-template-columns: repeat(4, 1fr);

  /* Tablet: 2 cards per row */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  // /* Mobile: 1 card per row */
  // @media (max-width: 500px) {
  //   grid-template-columns: 2fr;
  // }
`;

export const FacilityCard = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 180px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 45%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    color: white;
    padding: 1rem;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;

    @media (max-width: 1024px) {
      font-size: 1.2rem;
      height: auto;
    }
    @media (max-width: 768px) {
      font-size: 0.8rem;
      height: auto;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
`;

export const CardTitle = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
  height: 65px;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
    height: 65px;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    height: auto;
  }
`;

export const CardList = styled.div`
  display: grid;
  gap: 1rem;

  /* Desktop: 4 cards per row */
  grid-template-columns: repeat(3, 1fr);

  /* Tablet: 2 cards per row */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile: 1 card per row */
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
