<template>
  <div class="home_container">
    <div>
      <div class="flex-row logo_container">
        <h2>Spotify</h2>
        <h2 class="insight">Insight</h2>
      </div>
      <div class="info_container">
        <h2>Your Spotify Stats</h2>
        <p>
          Get statistics about your top artists, songs, and genres from Spotify.
          Updated daily. Easy to share.
        </p>
      </div>
    </div>

    <SpotifyLogin />
  </div>
</template>

<script>
import SpotifyLogin from "../components/SpotifyLogin";

export default {
  components: {
    SpotifyLogin,
  },
};
</script>

<style>
.home_container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.home_container .logo_container {
  font-size: 4rem;
}

.info_container {
  margin-top: 75px;
}

.info_container h2 {
  color: #fff;
  font-size: 2rem;
}

.info_container p {
  color: #6f6f6f;
  width: 70%;
}

.home_container button {
  width: 200px;
  height: 40px;

  background: #1db954;
  border-radius: 10px;
  color: #fff;
  margin-top: 30px;
  font-weight: bold;

  border: none;
  outline: none;
}

.home_container button:hover {
  background: #198940;
}

.logo_container h2 {
  color: #ffffff;
  font-weight: 400;
}

.insight {
  padding-left: 10px;
  color: #1db954 !important;
  font-weight: bold !important;
}
</style>
