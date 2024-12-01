import { useEffect, useState } from "react";
import { config } from "../assets/config";

export const fetchMenuData = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      fetch(config.get_menu, {
        method: "GET",
      })
        .then((res) => res.json()) // Parse the response to JSON
        .then((data) => setMenuData(data)) // Log the data
        .catch((err) => console.log(err));
    };
    fetchMenu();
  }, []);
  return { menuData };
};

export const fetchLocation = () => {
  const [locationData, setLocationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch(config.get_locations, {
        method: "GET",
      })
        .then((res) => res.json()) // Parse the response to JSON
        .then((data) => setLocationData(data)) // Log the data
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);
  return { locationData };
};

export const fetchCourseByCountry = () => {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch(config.get_locations, {
        method: "GET",
      })
        .then((res) => res.json()) // Parse the response to JSON
        .then((data) => setCourseData(data)) // Log the data
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);
  return { courseData };
};
