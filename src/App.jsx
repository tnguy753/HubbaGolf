import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ViewAllNews from "./pages/ViewAllNews";
import NewsDetail from "./pages/NewsDetail";
import ContactPage from "./pages/Contact";
import ViewAllCourses from "./pages/ViewAllCourses";
import GolfCoursePage from "./pages/ViewDetailCourse";
import BookingForm from "./pages/BookingForm";
import Tracking from "./pages/Tracking";
import OrderDetails from "./pages/OrderDetails";
import PaymentResponse from "./pages/PaymentResponse";

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        <Route path="/payment/:orderId" element={<PaymentResponse />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contract" element={<ContactPage />} />

        <Route
          path="/courses/:province/:courseID"
          element={<GolfCoursePage />}
        />

        <Route
          path="/courses/:province/:courseID/booking"
          element={<BookingForm />}
        />

        {/* Courses Page */}
        <Route path="/courses/:province" element={<ViewAllCourses />} />

        <Route path="/manage-my-booking" element={<Tracking />} />
        <Route path="/manage-my-booking/:orderId" element={<OrderDetails />} />

        {/* News Page */}
        <Route path="/news" element={<ViewAllNews />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
