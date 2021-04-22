<template>
  <div class="container max-w-7xl px-6 py-8">
    <h4 class="text-gray-600 mb-5">Редактирование блока описания свадьбы</h4>
    <label class="text-gray-700" for="header">Заголовок</label>
    <input
      v-model="form.header"
      id="header"
      type="text"
      class="w-full mt-3 mb-3 rounded-md focus:border-indigo-600"
    />
    <label class="text-gray-700" for="desc">Описание</label>
    <textarea
      v-model="form.desc"
      id="desc"
      rows="12"
      class="w-full mt-3 resize-none border rounded-md"
    ></textarea>
    <div class="flex flex-start mt-5">
      <button
        @click="addDesc(form)"
        class="px-3 py-2 bg-gray-800 rounded-md text-white font-medium tracking-wide hover:bg-gray-600"
      >
        Сохранить
      </button>
    </div>
  </div>
</template>

<script>
import { FETCH_DESCRIPTION, UPDATE_DESCRIPTION } from "../store/actions.type";
import { mapState } from "vuex";

export default {
  mounted() {
    this.fetchDesc();
  },
  data() {
    return {
      form: { header: "", desc: "" }
    };
  },
  methods: {
    fetchDesc() {
      this.$store
        .dispatch(FETCH_DESCRIPTION, this.form)
        .then(() => this.writeLocalForm);
    },
    addDesc(form) {
      this.$store.dispatch(UPDATE_DESCRIPTION, form);
    }
  },
  computed: {
    ...mapState({
      desc: state => state.desc.desc,
      header: state => state.desc.header,
      writeLocalForm() {
        this.form.header = this.header;
        this.form.desc = this.desc;
      }
    })
  }
};
</script>
