import http from "./services.js";
class AdminDataService {
  baseUrl = "/performance-t2/";

  
  // getAllAdmins() {
  //   return http.get(this.baseUrl);
  //   //Need to join userRole on users where userRole is admin to display data
  // }
  // get(id) {
  //   return http.get(`/schedule-t2/course/${id}`);
  // }
  // create(data) {
  //   return http.post("/schedule-t2/course", data);
  // }
  // update(id, data) {
  //   return http.put(`/schedule-t2/course/${id}`, data);
  // }
  // delete(id) {
  //   return http.delete(`/schedule-t2/course/${id}`);
  // }
  // deleteAll() {
  //   return http.delete(`/schedule-t2/course`);
  // }
}
export default new EventDataService();
