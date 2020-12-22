<template>
  <div>
    <div class="row">
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
};
</script>

<style lang="scss" scoped>
</style>