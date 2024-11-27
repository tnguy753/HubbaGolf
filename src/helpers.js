export function getDetailCourse(data, id) {
  return data.find((courseDetail) => courseDetail.id == id); // Match the courseDetail by id
}
