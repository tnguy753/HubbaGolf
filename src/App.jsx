import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import ViewAllNews from "./pages/ViewAllNews";
import NewsDetail from "./pages/NewsDetail";
import ContactPage from "./pages/Contact";
import ViewAllCourses from "./pages/ViewAllCourses";
import GolfCoursePage from "./pages/ViewDetailCourse";
import BookingForm from "./pages/BookingForm";
import Tracking from "./pages/Tracking";
import OrderDetails from "./pages/OrderDetails";
import PaymentResponse from "./pages/PaymentResponse";
import ViewAllCoursesByProvince from "./pages/ViewAllCoursesByProvince";
import PaymentStripe from "./pages/PaymentStripe";

const App = () => {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/:country" element={<Home />} />

        {/* <Route path="/payment/:orderId" element={<PaymentResponse />} /> */}
        <Route path="/payment" element={<PaymentStripe />} />
        <Route path="/payment/success" element={<PaymentResponse />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Courses Page */}

        <Route path="/:country/:type" element={<ViewAllCourses />} />
        <Route
          path="/:country/:type/:province/:provinceID"
          element={<ViewAllCoursesByProvince />}
        />
        <Route path="/:country/:type/:courseID" element={<GolfCoursePage />} />

        <Route
          path="/courses/:province/:courseID/booking"
          element={<BookingForm />}
        />
        <Route path="/manage-my-booking" element={<Tracking />} />
        <Route path="/manage-my-booking/:orderId" element={<OrderDetails />} />

        {/* News Page */}
        {/* <Route path="/blogs" element={<ViewAllNews />} /> */}
        <Route path="/blogs/:catId/:id" element={<NewsDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
