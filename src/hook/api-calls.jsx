import { config } from "../assets/config";
import useFetchData from "./fetch-data";

export const fetchBanner = () => {
  const { data: bannerImg, isLoading, error } = useFetchData(config.get_banner);
  return { bannerImg, isLoading, error };
};
export const fetchFacilities = () => {
  const {
    data: facilitiesData,
    isLoading,
    error,
  } = useFetchData(config.get_facilities_article);
  return { facilitiesData, isLoading, error };
};
export const fetchLocation = () => {
  const {
    data: locationData,
    isLoading,
    error,
  } = useFetchData(config.get_locations);
  return { locationData, isLoading, error };
};
export const fetchCourseByCountry = () => {
  const {
    data: courseData,
    isLoading,
    error,
  } = useFetchData(config.get_locations);
  return { courseData, isLoading, error };
};
export const fetchArticlesList = (id) => {
  const {
    data: articles,
    isLoading,
    error,
  } = useFetchData(
    `${config.get_list_article_by_cat_id}${id}`,
    [id] // Adding `id` as a dependency
  );
  return { articles, isLoading, error };
};
export const fetchArticle = (id) => {
  const {
    data: articleContent,
    isLoading,
    error,
  } = useFetchData(
    `${config.get_article}${id}`,
    [id] // Adding `id` as a dependency
  );
  return { articleContent, isLoading, error };
};
export const fetchCourseByCountryID = (id) => {
  const {
    data: courseData,
    isLoading,
    error,
  } = useFetchData(
    `${config.get_all_by_countryId}${id}`,
    [id] // Adding `id` as a dependency
  );
  return { courseData, isLoading, error };
};
export const fetchAllCourse = (typeID, countryId) => {
  const {
    data: courses,
    isLoading,
    error,
  } = useFetchData(
    `${config.get_all_course}typeId=${typeID}&countryId=${countryId}`,
    [typeID, countryId] // Adding both as dependencies
  );
  return { courses, isLoading, error };
};
