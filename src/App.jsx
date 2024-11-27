import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ViewAllNews from "./pages/ViewAllNews";
import NewsDetail from "./pages/NewsDetail";
import ContactPage from "./pages/Contact";
import ViewAllCourses from "./pages/ViewAllCourses";
import GolfCoursePage from "./pages/ViewDetailCourse";
import BookingForm from "./pages/BookingForm";

const App = () => {
  return (
    <Router future={{ v7_startTransition: true }}>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/courses/:city/:id" element={<GolfCoursePage />} />

        <Route path="/courses/:city/:id/booking" element={<BookingForm />} />

        {/* Courses Page */}
        <Route path="/courses/:city" element={<ViewAllCourses />} />

        {/* News Page */}
        <Route path="/news" element={<ViewAllNews />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
