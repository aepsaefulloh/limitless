<template>
  <!--begin::Advance Table Widget 9-->
  <div class="card card-custom card-stretch gutter-b">
    <!--begin::Header-->
    <div class="card-header border-0 py-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label font-weight-bolder text-dark"
          >Post Populer</span
        >
        <span class="text-muted mt-3 font-weight-bold font-size-md"
          >Post dengan engagement terbanyak</span
        >
      </h3>
      <div class="card-toolbar">
        <a href="#" class="btn btn-outline-info font-weight-bolder font-size-md"
          >Export</a
        >
      </div>
    </div>
    <!--end::Header-->
    <!--begin::Body-->
    <div class="card-body pt-0 pb-3">
      <div class="tab-content">
        <!--begin::Table-->
        <div class="table-responsive">
          <table
            class="table table-head-custom table-vertical-center table-head-bg table-borderless"
          >
            <thead>
              <tr class="text-left">
                <th class="text-dark-75">
                  <span class="text-dark-75">Post</span>
                </th>
                <th>Followers</th>
                <th>Like</th>
                <th>Comment</th>
                <th>Share</th>
                <th>Status</th>
                <th>Tanggal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(item, i) in list">
                <tr v-bind:key="i">
                  <td style="max-width: 200px">
                    <a
                      href="#"
                      class="text-dark-75 font-weight-bolder text-hover-primary mb-2 font-size-md"
                      >{{ item.name }}</a
                    ><span class="text-muted font-weight-bold d-block">{{
                      item.caption
                    }}</span>
                  </td>
                  <td>
                    <span class="text-muted font-weight-bold">{{
                      item.followers
                    }}</span>
                  </td>
                  <td>
                    <span class="text-muted font-weight-bold">{{
                      item.like
                    }}</span>
                  </td>
                  <td>
                    <span class="text-muted font-weight-bold">{{
                      item.comment
                    }}</span>
                  </td>
                  <td>
                    <span class="text-muted font-weight-bold">{{
                      item.share
                    }}</span>
                  </td>
                  <td>
                    <span class="text-muted font-weight-bold">{{
                      item.status
                    }}</span>
                  </td>
                  <td>
                    <span class="text-muted font-weight-bold">{{
                      item.date
                    }}</span>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
        <!--end::Table-->
      </div>
    </div>
    <!--end::Body-->
  </div>
  <!--end::Advance Table Widget 9-->
</template>

<script>
export default {
  name: "AdvancedTable",
  data() {
    return {
      list: [
        {
          name: "@billymonday",
          caption:
            "Euismod nisl a est facilisi massa urna laoreet, Lorem Ipsum domo de atire nisl a est facilisi.",
          followers: 128.251,
          like: 11.245,
          comment: 20.123,
          share: 1230,
          status: "Positive",
          status2: "Negative",
          status3: "Netral",
          date: "12 Dec 2020",
        },
      ],
    };
  },
};
</script>
