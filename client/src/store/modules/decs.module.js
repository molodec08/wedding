import ApiService from "../../services/ApiService";
import { FETCH_DESCRIPTION, UPDATE_DESCRIPTION } from "../actions.type";
import { SET_DESCRIPTION } from "../mutations.type";

const state = {
  header: "",
  desc: "",
  date: ""
};

const getters = {
  desc(state) {
    return state.desc;
  }
};

const actions = {
  [UPDATE_DESCRIPTION](context, data) {
    return new Promise(resolve => {
      ApiService.post("/description-event/create", data)
        .then(({ data }) => {
          console.log(data);
          context.commit(SET_DESCRIPTION, data);
          resolve(data);
        })
        .catch(error => {
          throw new Error(error);
        });
    });
  },
  [FETCH_DESCRIPTION](context) {
    return new Promise(resolve => {
      ApiService.get("/description-event/last-desc")
        .then(({ data }) => {
          context.commit(SET_DESCRIPTION, data);
          resolve(data);
        })
        .catch(error => {
          throw new Error(error);
        });
    });
  }
};

const mutations = {
  [SET_DESCRIPTION](state, data) {
    state.header = data.header;
    state.desc = data.desc;
    state.date = data.date;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
