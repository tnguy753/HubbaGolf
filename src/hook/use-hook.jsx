import { useEffect, useState } from "react";
import { config } from "../assets/config";

export const fetchBanner = () => {
  const [bannerImg, setBannerImg] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      fetch(config.get_banner, {
        method: "GET",
      })
        .then((res) => res.json()) // Parse the response to JSON
        .then((data) => setBannerImg(data)) // Log the data
        .catch((err) => console.log(err));
    };
    fetchMenu();
  }, []);
  return { bannerImg };
};

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

export const fetchFacilities = () => {
  const [facilitiesData, setFacilitiesData] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      fetch(config.get_facilities_article, {
        method: "GET",
      })
        .then((res) => res.json()) // Parse the response to JSON
        .then((data) => setFacilitiesData(data)) // Log the data
        .catch((err) => console.log(err));
    };
    fetchMenu();
  }, []);
  return { facilitiesData };
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

export const fetchArticlesList = (id) => {
  const [articles, setArticles] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`${config.get_list_article_by_cat_id}${id}`, {
        method: "GET",
      })
        .then((res) => res.json()) // Parse the response to JSON
        .then((data) => setArticles(data)) // Log the data
        .then(() => setIsLoading(false))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [id]);
  return { articles, isLoading };
};

export const fetchArticle = (id) => {
  const [articleContent, setArticleContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`${config.get_article}${id}`, {
        method: "GET",
      })
        .then((res) => res.json()) // Parse the response to JSON
        .then((data) => setArticleContent(data)) // Log the data
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);
  return { articleContent };
};

export const fetchCourseByCountryID = (id) => {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`${config.get_all_by_countryId}${id}`, {
        method: "GET",
      })
        .then((res) => res.json()) // Parse the response to JSON
        .then((data) => setCourseData(data)) // Log the data
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [id]);
  return { courseData };
};

export const fetchAllCourse = (typeID, countryId) => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      fetch(`${config.get_all_course}typeId=${typeID}&countryId=${countryId}`, {
        method: "GET",
      })
        .then((res) => res.json()) // Parse the response to JSON
        .then((data) => setCourses(data)) // Log the data
        .then(() => setIsLoading(false))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, [countryId]);
  return { courses, isLoading };
};
