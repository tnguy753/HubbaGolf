import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 20px; /* Add padding for smaller screens */
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    font-size: 1.2rem;
    margin: 0;
  }
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;

  &:focus {
    outline: none;
    border-color: #3498db;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Select = styled.select`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;

  &:focus {
    outline: none;
    border-color: #3498db;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Stack content vertically on smaller screens */
  margin-bottom: 20px;

  input {
    margin-bottom: 10px; /* Add spacing for checkbox */
  }

  span {
    font-size: 0.9rem;
    color: #666;
  }
`;

const PayButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const LeftSide = styled.div`
  margin-bottom: 20px; /* Add spacing below the image */
  text-align: center; /* Center align the logo on smaller screens */

  img {
    max-width: 100%;
    height: auto;
  }
`;

const PaymentForm = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <FormWrapper>
        <LeftSide>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
            alt="Stripe Logo"
            width={80}
          />
        </LeftSide>
        <Header>
          <h1>Customer</h1>
        </Header>
        <Price>$113.00</Price>
        <Form>
          <Label>Email</Label>
          <Input type="email" placeholder="Email" />

          <Label>Card information</Label>
          <Input type="text" placeholder="1234 1234 1234 1234" />
          <div style={{ display: "flex", gap: "10px" }}>
            <Input type="text" placeholder="MM/YY" style={{ flex: 1 }} />
            <Input type="text" placeholder="CVC" style={{ flex: 1 }} />
          </div>

          <Label>Cardholder name</Label>
          <Input type="text" placeholder="Full name on card" />

          <Label>Country or region</Label>
          <Select>
            <option>Singapore</option>
            <option>Malaysia</option>
            <option>Indonesia</option>
          </Select>

          <CheckboxWrapper>
            {/* <input type="checkbox" id="save-info" /> */}
            <span>
              Securely save my information for 1-click checkout
              <br />
              Pay faster on this site and everywhere Link is accepted.
            </span>
          </CheckboxWrapper>

          <PayButton onClick={() => navigate("/payment/success")}>
            Pay
          </PayButton>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default PaymentForm;
