<template>
  <ul class="menu-nav">
    <router-link
      to="/dashboard"
      v-slot="{ href, navigate, isActive, isExactActive }"
    >
      <li
        aria-haspopup="true"
        data-menu-toggle="hover"
        class="menu-item"
        :class="[
          isActive && 'menu-item-active',
          isExactActive && 'menu-item-active',
        ]"
      >
        <a :href="href" class="menu-link" @click="navigate">
          <i class="menu-icon flaticon2-architecture-and-city"></i>
          <span class="menu-text">Dashboard</span>
        </a>
      </li>
    </router-link>
    <li
      aria-haspopup="true"
      data-menu-toggle="hover"
      class="menu-item menu-item-submenu"
      v-bind:class="{
        'menu-item-open': hasActiveChildren('/social-media'),
      }"
    >
      <a href="#" class="menu-link menu-toggle">
        <i class="menu-icon fab fa-medapps"></i>
        <span class="menu-text"> Social Media </span>
        <i class="menu-arrow"></i>
      </a>
      <div class="menu-submenu menu-submenu-classic menu-submenu-right">
        <ul class="menu-subnav">
          <router-link
            to="/social-media/overview"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text"> Overview </span>
              </a>
            </li>
          </router-link>
          <router-link
            to="/social-media/content"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text"> Content </span>
              </a>
            </li>
          </router-link>
          <router-link
            to="/social-media/community"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text"> Community </span>
              </a>
            </li>
          </router-link>
          <router-link
            to="/social-media/campaign"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text"> Campaign </span>
              </a>
            </li>
          </router-link>
          <router-link
            to="/social-media/conversation"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text"> Conversation </span>
              </a>
            </li>
          </router-link>
          <router-link
            to="/social-media/comparison"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text"> Comparison </span>
              </a>
            </li>
          </router-link>
          <router-link
            to="/social-media/stream"
            v-slot="{ href, navigate, isActive, isExactActive }"
          >
            <li
              aria-haspopup="true"
              data-menu-toggle="hover"
              class="menu-item"
              :class="[
                isActive && 'menu-item-active',
                isExactActive && 'menu-item-active',
              ]"
            >
              <a :href="href" class="menu-link" @click="navigate">
                <i class="menu-bullet menu-bullet-dot"><span></span></i>
                <span class="menu-text"> Stream </span>
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "KTMenu",
  methods: {
    hasActiveChildren(match) {
      return this.$route["path"].indexOf(match) !== -1;
    },
  },
};
</script>
