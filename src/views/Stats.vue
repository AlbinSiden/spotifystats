<template>
  <div>
    <div class="outer-wrapper">
      <div class="top-wrapper flex-row">
        <div class="flex-row logo_container">
          <h2>Spotify</h2>
          <h2 class="insight">Insight</h2>
        </div>
      </div>

      <div class="category-wrapper flex-row" :class="type">
      <!-- Really ugly but works (: -->
        <router-link
          tag="button"
          :to="{ name: 'Stats', params: { type: 'artists', time: time } }"
          >Your Top Artists</router-link
        >
        <router-link
          tag="button"
          :to="{ name: 'Stats', params: { type: 'tracks', time: time } }"
          >Your Top Tracks</router-link
        >
      </div>

      <div class="info-wrapper" :class="time">
        <div class="time-wrapper flex-row">
        <!-- Really ugly but works (: -->
          <router-link
            tag="button"
            :to="{ name: 'Stats', params: { type: type, time: 'short' } }"
            >Last Month</router-link
          >
          <router-link
            tag="button"
            :to="{ name: 'Stats', params: { type: type, time: 'medium' } }"
            >Last 6 Months</router-link
          >
          <router-link
            tag="button"
            :to="{ name: 'Stats', params: { type: type, time: 'long' } }"
            >All Time</router-link
          >
        </div>
      </div>
      <div class="stats-wrapper">
        <ArtistsStats :information="information" v-if="type == 'artists'" />
        <TracksStats :information="information" v-if="type == 'tracks'" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import ArtistsStats from "../components/ArtistsStats";
import TracksStats from "../components/TracksStats";

export default {
  components: {
    ArtistsStats,
    TracksStats,
  },

  data() {
    return {
      type: this.$route.params.type,
      time: this.$route.params.time,
      information: [],
    };
  },

  async beforeMount() {
    let token = localStorage.getItem("token");

    let response = await axios.get(
      `https://api.spotify.com/v1/me/top/${this.type}?time_range=${this.time}_term&limit=50&offset=0`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    this.information = response.data.items;
  },
};
</script>

<style>
.outer-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: #121212;
  width: 50%;
  min-height: 100%;
  padding-left: 50px;
  padding-right: 50px;
}

.top-wrapper {
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.top-wrapper .logo_container {
  font-size: 2.5rem;
}

.logout:hover {
  color: #198940;
  cursor: pointer;
}

.category-wrapper {
  width: 100%;
  justify-content: space-between;
  margin-top: 100px;
}

.category-wrapper button {
  flex: 0.46;
  height: 40px;
  border-radius: 10px;
  outline: none;
  border: none;

  background: #282828;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
}

.category-wrapper button:hover {
  background: #198940;
}

.artists button:nth-child(1) {
  background: #1db954 !important;
}

.tracks button:nth-child(2) {
  background: #1db954 !important;
}

.info-wrapper {
  background: #282828;
  margin-top: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.time-wrapper {
  justify-content: space-between;
}

.time-wrapper button:nth-child(1) {
  border-top-left-radius: 10px;
}

.time-wrapper button:nth-child(3) {
  border-top-right-radius: 10px;
}

.time-wrapper button {
  flex: 1;
  background: #313131;
  border: none;
  outline: none;
  color: #fff;
  font-weight: 600;
  height: 50px;
  cursor: pointer;
}

.short button:nth-child(1) {
  background: #565656;
}

.medium button:nth-child(2) {
  background: #565656;
}

.long button:nth-child(3) {
  background: #565656;
}

.stats-wrapper {
  background: #282828;
}

.stats-wrapper img {
  max-width: 128px;
  max-height: 128px;
  align-self: center;
}

.artist-wrapper {
  padding: 30px;
}

.artist-wrapper:nth-child(even) {
  background: #313131;
}

.artist-wrapper p {
  color: #fff;
  font-size: 24px;
  align-self: center;
  margin-right: 30px;
}

.artist-info {
  margin-left: 20px;
}

.artist-info a {
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  font-size: 2rem;
}

.artist-info span {
  color: #989898;
}
</style>
