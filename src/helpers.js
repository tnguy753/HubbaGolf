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
