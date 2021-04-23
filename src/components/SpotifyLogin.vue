<template>
  <button @click="login">Log in With Spotify</button>
</template>

<script>
export default {
  beforeCreate() {
    let token = window.location.hash
      .substr(1)
      .split("&")[0]
      .split("=")[1];
    if (token) {
      window.opener.spotifyCallback(token);
    }
  },

  methods: {
    async login() {
      const CLIENT_ID = "93273aad01354593adcd973f3687ca25";
      const REDIRECT_URI = "http://localhost:8080/";

      let url =
        "https://accounts.spotify.com/authorize?client_id=" +
        CLIENT_ID +
        "&redirect_uri=" +
        encodeURIComponent(REDIRECT_URI) +
        "&scope=" +
        encodeURIComponent("user-top-read") +
        "&response_type=token";

      let popup = window.open(url, "Spotify", "width=600, height=1000");

      window.spotifyCallback = (token) => {
        popup.close();
        localStorage.setItem("token", token);

        this.$router.push("/stats/artists/short");
      };
    },
  },
};
</script>

<style></style>
