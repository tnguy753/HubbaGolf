import moment from "moment";

export function getCurrency() {
  const location = sessionStorage.getItem("location") || "Singapore";

  // Map location to its corresponding currency
  const currencyMap = {
    Singapore: "SGD",
    Malaysia: "MYR",
    Indonesia: "IDR",
  };

  return currencyMap[location] || "SGD";
}

export function formatDate(date) {
  return moment(date).format("MMMM Do YYYY");
}

export function formatUrlPath(name) {
  return name.toLocaleLowerCase().replace(/ /g, "-");
}

export function removeHash(name) {
  return name.replace(/-/g, " ");
}

export function getDetailCourse(data, id) {
  return data.find((courseDetail) => courseDetail.id == id);
}

export function capitalizeFirstLetter(str) {
  return str?.replace(/\b\w/g, (c) => c.toUpperCase());
}

export function getProvinceID(locations, name) {
  for (const location of locations) {
    const province = location.provinces.find(
      (province) => province.name.toLowerCase() == name
    );
    if (province) {
      return province.id;
    }
  }
  return null; // Return null if no match is found
}

export function getProvinceName(locations, id) {
  for (const location of locations) {
    const province = location.provinces.find((province) => province.id == id);
    if (province) {
      return province.name;
    }
  }
  return null; // Return null if no match is found
}

export function getCountryID(data, name) {
  const cat = data.find(
    (courseDetail) => courseDetail.countryName.toLowerCase() == name
  );
  if (cat) {
    return cat.countryId;
  }
}

export function getCategoryName(data, id) {
  const cat = data.find((courseDetail) => courseDetail.categoryId == id);
  if (cat) {
    return cat.title;
  }
}

export function getCategoryID(data, name) {
  const cat = data.find((courseDetail) => courseDetail.title == name);
  if (cat) {
    return cat.categoryId;
  }
}

const typeNameMapping = {
  packages: "Travel Packages",
  shopping: "Golf Equipment",
  simulator: "Golf Simulator",
  default: "Golf Courses", // Fallback
};

export const getTypeName = (type) => {
  for (const key in typeNameMapping) {
    if (type.includes(key)) {
      return typeNameMapping[key];
    }
  }
  return typeNameMapping.default; // Return default if no match is found
};
