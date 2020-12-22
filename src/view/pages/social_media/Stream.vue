<template>
  <div>
    <div class="row">
      <div class="col-xxl-6">
        <div class="d-flex pb-5">
          <b-form inline>
            <label class="sr-only" for="inline-form-input-name">Name</label>
            <b-input
              id="inline-form-input-name"
              class=""
              placeholder="Search by Date"
              size="sm"
            >
            </b-input>
          </b-form>

          <b-form inline>
            <label class="sr-only" for="inline-form-input-name">Name</label>
            <b-input
              id="inline-form-input-name"
              class="ml-2 mr-2"
              placeholder="Search by Status"
              size="sm"
            >
            </b-input>
          </b-form>
          <b-form-select
            v-model="selected"
            :options="options"
            size="sm"
          ></b-form-select>
        </div>
      </div>

      <div class="col-xxl-12">
        <AdvancedTable></AdvancedTable>
      </div>
    </div>
  </div>
</template>

<script>
import AdvancedTable from "@/view/components/sosmed/stream/AdvancedTable.vue";

export default {
  name: "Stream",
  components: {
    AdvancedTable,
  },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Sentimen" },
        { value: "a", text: "Aku ingin makan" },
        { value: "b", text: "ada ibu ibu ges" },
        { value: "c", text: "tutorial minum air dibotol" },
        { value: "d", text: "cara menggunakan garpu" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>