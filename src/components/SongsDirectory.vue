<template>
  <div class="songs-directory">
    <h1>Songs Directory</h1>
    <p v-if="!query">No search query provided.</p>
    <div v-else>
      <p>Showing results for: <strong>{{ query }}</strong></p>
      <ul>
        <li v-for="(song, index) in filteredSongs" :key="index" class="song-item">
          <div class="song-info">
            <strong>{{ song.title }}</strong> by {{ song.artist }}
          </div>
          <button @click="playSong(song)" class="play-btn">Play</button>
        </li>
      </ul>
      <p v-if="filteredSongs.length === 0">No songs found matching your query.</p>
    </div>
    <audio ref="audioPlayer" controls style="width: 100%; margin-top: 20px;" />
  </div>
</template>

<script>
export default {
  name: "SongsDirectory",
  props: {
    query: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      songs: [
        { title: "Echoes of Tomorrow", artist: "Skylar James", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
        { title: "Neon Dreams", artist: "Luna Hart", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
        { title: "Midnight Run", artist: "Jaxon Cole", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
        { title: "City Lights", artist: "Harper Quinn", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
        { title: "Golden Hour", artist: "Mason Lee", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" }
      ],
      currentSongUrl: null,
    };
  },
  computed: {
    filteredSongs() {
      if (!this.query.trim()) {
        return [];
      }
      const q = this.query.toLowerCase();
      return this.songs.filter(
        song =>
          song.title.toLowerCase().includes(q) ||
          song.artist.toLowerCase().includes(q)
      );
    },
  },
  methods: {
    playSong(song) {
      this.currentSongUrl = song.url;
      this.$refs.audioPlayer.src = this.currentSongUrl;
      this.$refs.audioPlayer.play();
    },
  },
};
</script>

<style scoped>
.songs-directory {
  max-width: 600px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
  color: #333;
}

.song-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
}

.play-btn {
  background-color: #4285F4;
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s ease-in-out;
}

.play-btn:hover {
  background-color: #3367d6;
}
</style>
