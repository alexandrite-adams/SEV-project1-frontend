import http from "./services.js";
class EventTimeDataService {
  baseUrl = "/performance-t2/";

  getAll() {
    return http.get(this.baseUrl + "eventTimeslot");
  }
  get(id) {
    return http.get(this.baseUrl + `eventTimeslot/${id}`);
  }
  getByEvent(id) {
    return http.get(this.baseUrl + `eventTimeslot/event/${id}`);
  }
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
export default new EventTimeDataService();
