// TracksStats and ArtistsStats are basically the same but the response objects are different.
// I Tried making a single component and used v-if's to determine what to display for the different objects but that was even messier.

<template>
  <div>
    <div
      v-for="(item, index) in information"
      :key="item.id"
      class="artist-wrapper flex-row"
    >
      <p>{{ index + 1 }}.</p>
      <img :src="item.album.images[0].url" />
      <div class="artist-info">
        <a :href="item.external_urls.spotify" target="_blank">{{
          item.name
        }}</a>
        <div>
          <p>Artists:</p>
          <div class="genre-wrapper">
            <div v-for="artist in item.artists" :key="artist">
              <span>{{ artist.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["information"],
};
</script>

<style></style>
