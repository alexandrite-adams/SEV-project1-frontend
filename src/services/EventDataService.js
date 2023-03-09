import http from "./services.js";
class EventDataService {
  baseUrl = "/performance-t2/event/";

  getAll() {
    return http.get(this.baseUrl);
  }
  getGTEDate(date) {
    return http.get(this.baseUrl + `date/${date}`);
  }
  getCritiques(eventId) {
    return http.get(this.baseUrl + eventId + "/critiques");
  }
}
export default new EventDataService();
