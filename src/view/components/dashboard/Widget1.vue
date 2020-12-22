<template>
  <!--begin::List Widget 1-->
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0">
      <h3 class="card-title font-weight-bolder text-dark">
        Followers talk about
      </h3>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-2">
      <template v-for="(item, i) in list">
        <!--begin::Item-->
        <div class="d-flex align-items-center mb-10" v-bind:key="i">
          <!--begin::Symbol-->
          <div
            class="symbol symbol-40 mr-0"
            v-bind:class="`symbol-light-${item.style}`"
          >

          </div>
          <!--end::Symbol-->
          <!--begin::Text-->
          <div class="d-flex flex-column font-weight-bold">
            <a href="#" class="text-dark text-hover-primary mb-1 font-size-lg">
              {{ item.title }}
            </a>
            <span class="text-muted float-right">
              {{ item.desc }}
            </span>
          </div>
          <!--end::Text-->
        </div>
        <!--end::Item-->
      </template>
    </div>
    <!--end::Body-->
  </div>
  <!--end: List Widget 1-->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "widget-1",
  data() {
    return {
      list: [
        {
          title: "Suzuki",
          desc: "Project Manager",
        },
        {
          title: "Pridon",
          desc: "Art Director",
        },
        {
          title: "Honda",
          desc: "Lead Developer",
        },
        {
          title: "Jeffery Dut",
          desc: "DevOps",
        },
        {
          title: "Natal",
          desc: "QA Managers",
        },
        {
          title: "Makanan",
          desc: "Jepri Makan",
        },
      ],
    };
  },
  components: {},
  computed: {
    ...mapGetters(["layoutConfig"]),
  },
};
</script>
