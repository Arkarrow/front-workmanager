import axios from 'axios'

export default {
  auth: {
    me: () => axios.get("http://api.work-manager.tsaei.fr/auth/me"),
    login: data =>
      axios.post("http://api.work-manager.tsaei.fr/auth/login", data),
    register: data =>
      axios.post("http://api.work-manager.tsaei.fr/auth/register", data),
    google: data =>
      axios.post("http://api.work-manager.tsaei.fr/auth/google", data),
    pay: data => axios.post("http://api.work-manager.tsaei.fr/auth/pay", data)
  }
};
