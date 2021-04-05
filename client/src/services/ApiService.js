import api from "./api";

const ApiService = {
  get(resource, slug = "") {
    return api()
      .get(`${resource}/${slug}`)
      .catch(error => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
  },

  post(resource, params, headers) {
    return api().post(`${resource}`, params, headers);
  },

  update(resource, slug, params) {
    return api().put(`${resource}/${slug}`, params);
  },

  delete(resource, slug) {
    return api().delete(`${resource}/${slug}`);
  }
};

export default ApiService;
