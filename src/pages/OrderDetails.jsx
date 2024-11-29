import React, { useEffect, useState } from "react";
import moment from "moment";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Breadcrumbs, Container } from "../components";

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two columns on larger screens */
  gap: 2rem; /* Space between columns and rows */
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  /* Single column layout for tablets and smaller screens */
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Switch to single column */
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: var(--blue);
  border-bottom: 2px solid var(--blue);
  padding-bottom: 0.5rem;
`;

const Field = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  span {
    font-weight: bold;
  }
`;

const Value = styled.div`
  color: var(--dark);
`;

const DetailsSection = styled.div`
  margin-bottom: 2rem;
`;

const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState(localStorage.getItem("order"));
  const obj = JSON.parse(orderData);
  window.scrollTo(0, 0);

  return (
    <>
      <Header />
      <Container>
        <Breadcrumbs>
          <a href="/">Home</a>
          <span>&gt;</span>
          <a href={`/manage-my-booking`}>Manage My Booking</a>
          <span>&gt;</span>
          <span>{orderId}</span>
        </Breadcrumbs>
        {obj && (
          <PageContainer>
            <div>
              {" "}
              <SectionTitle>Order Details</SectionTitle>
              <DetailsSection>
                <Field>
                  <span>Order Number:</span> <Value>{obj.orderNumber}</Value>
                </Field>
                <Field>
                  <span>Title:</span> <Value>{obj.title}</Value>
                </Field>
                <Field>
                  <span>Description:</span>{" "}
                  <Value>{obj.description || "Not Provided"}</Value>
                </Field>
                <Field>
                  <span>Status:</span>{" "}
                  <Value>{obj.statusRecord || "Not Specified"}</Value>
                </Field>
              </DetailsSection>
            </div>
            <div>
              {" "}
              <SectionTitle>Event Details</SectionTitle>
              <DetailsSection>
                <Field>
                  <span>Event Name:</span> <Value>{obj.name}</Value>
                </Field>
                <Field>
                  <span>Start Date :</span>{" "}
                  <Value> {moment(obj.StartDate).format("MMMM Do YYYY")}</Value>
                  {/* <Value>{new Date(obj.startDate).toLocaleString()}</Value> */}
                </Field>
                {/* <Field>
                  <span>End Date & Time:</span>{" "}
                  <Value>{new Date(obj.endDate).toLocaleString()}</Value>
                </Field> */}
                <Field>
                  <span>All-Day Event:</span>{" "}
                  <Value>{obj.isAllDay ? "Yes" : "No"}</Value>
                </Field>
                <Field>
                  <span>Location:</span>{" "}
                  <Value>{obj.location || "Not Specified"}</Value>
                </Field>
              </DetailsSection>
            </div>

            <div>
              {" "}
              <SectionTitle>Customer Details</SectionTitle>
              <DetailsSection>
                <Field>
                  <span>Name:</span> <Value>{obj.name}</Value>
                </Field>
                <Field>
                  <span>Phone:</span> <Value>{obj.phone}</Value>
                </Field>
                <Field>
                  <span>Email:</span> <Value>{obj.email}</Value>
                </Field>
                <Field>
                  <span>Country:</span> <Value>{obj.country}</Value>
                </Field>
              </DetailsSection>
            </div>
            <div>
              {" "}
              <SectionTitle>Additional Information</SectionTitle>
              <DetailsSection>
                <Field>
                  <span>Number of Players:</span>{" "}
                  <Value>{obj.playerNumber || "Not Specified"}</Value>
                </Field>
                <Field>
                  <span>Course:</span>{" "}
                  <Value>{obj.course || "Not Specified"}</Value>
                </Field>
              </DetailsSection>
            </div>
          </PageContainer>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default OrderDetails;
