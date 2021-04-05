<template>
  <form @submit.prevent="onSubmit($emit('close'))" class="flex flex-col pb-3">
    <div class="flex flex-col px-6 mt-3">
      <label class="text-gray-700" for="fio">ФИО</label>
      <input
        class="w-full mt-2 rounded-md focus:border-indigo-600"
        type="text"
        id="fio"
        v-model="form.name"
      />
    </div>

    <div class="flex flex-col px-6 mt-3">
      <label class="text-gray-700" for="phone">Профессия</label>
      <input
        class="w-full mt-2 rounded-md focus:border-indigo-600"
        type="text"
        id="phone"
        v-model="form.desc"
      />
    </div>

    <div class="flex flex-col px-6 mt-3">
      <label class="text-gray-700" for="photo">Фото</label>
      <input
        @change="fileUpload"
        ref="file"
        type="file"
        id="photo"
        class="w-full mt-2 rounded-md focus:border-indigo-600"
      />
    </div>

    <div class="flex flex-col px-6 mt-3">
      <label class="text-gray-700" for="status">Статус</label>
      <select
        id="status"
        v-model="form.active"
        class="w-full mt-2 rounded-md focus:border-indigo-600"
      >
        <option value="false">Выключен</option>
        <option value="true">Включён</option>
      </select>
    </div>
    <div class="flex justify-between mt-3 px-6">
      <button
        @click="$emit('close')"
        class="px-3 py-2 bg-gray-800 rounded-md text-white font-medium tracking-wide hover:bg-gray-600"
      >
        Закрыть
      </button>
      <button
        class="px-3 py-2 bg-gray-800 rounded-md text-white font-medium tracking-wide hover:bg-gray-600"
      >
        Добавить
      </button>
    </div>
  </form>
</template>

<script>
import { FILE_UPLOAD, INSERT_GUEST } from "../../store/actions.type";

export default {
  emits: ["close"],
  data() {
    return {
      formData: new FormData(),
      form: { name: "", desc: "", img: "", active: "" }
    };
  },
  methods: {
    fileUpload() {
      let file = this.$refs.file.files[0];
      this.formData.append("file", file);
      this.$store
        .dispatch(FILE_UPLOAD, this.formData)
        .then(data => (this.form.img = data));
    },
    onSubmit(emit) {
      this.$store.dispatch(INSERT_GUEST, this.form);
      emit;
    }
  }
};
</script>
