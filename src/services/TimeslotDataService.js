import http from "./services.js";
class TimeslotDataService {
  baseUrl = "/performance-t2/eventTimeslot/";

  getAll() {
    return http.get(this.baseUrl);
  }
  get(id) {
    return http.get(`/schedule-t2/eventTimeslot/${id}`);
  }
  create(data) {
    return http.post("/schedule-t2/eventTimeslot", data);
  }
  update(id, data) {
    return http.put(`/schedule-t2/eventTimeslot/${id}`, data);
  }
  delete(id) {
    return http.delete(`/schedule-t2/eventTimeslot/${id}`);
  }
  deleteAll() {
    return http.delete(`/schedule-t2/eventTimeslot`);
  }
}

export default new TimeslotDataService();
