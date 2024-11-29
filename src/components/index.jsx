import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1200px) {
    padding: 2rem 10rem;
  }
`;
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
`;
