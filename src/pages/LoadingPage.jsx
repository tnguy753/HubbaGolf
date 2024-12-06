import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Spinner animation
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Loading Wrapper
const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 100000;
`;

// Spinner Style
const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #1a4d2e;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingPage = () => {
  return (
    <>
      <LoadingWrapper>
        <Spinner />
      </LoadingWrapper>
    </>
  );
};

export default LoadingPage;
