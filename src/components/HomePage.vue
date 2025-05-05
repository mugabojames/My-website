<template>
  <div class="container">
    <div class="logo">
      <span class="letter m">M</span>
      <span class="letter u">U</span>
      <span class="letter g">G</span>
      <span class="letter a">A</span>
      <span class="letter b">B</span>
      <span class="letter o">O</span>
    </div>
    <div class="tad-groups-icon" title="Google apps" aria-label="Google apps" role="button" tabindex="0">
      <svg focusable="false" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <g fill="none" fill-rule="evenodd">
          <circle cx="4.5" cy="4.5" r="2.5" fill="#4285F4"/>
          <circle cx="12" cy="4.5" r="2.5" fill="#DB4437"/>
          <circle cx="19.5" cy="4.5" r="2.5" fill="#F4B400"/>
          <circle cx="4.5" cy="12" r="2.5" fill="#0F9D58"/>
          <circle cx="12" cy="12" r="2.5" fill="#4285F4"/>
          <circle cx="19.5" cy="12" r="2.5" fill="#DB4437"/>
          <circle cx="4.5" cy="19.5" r="2.5" fill="#F4B400"/>
          <circle cx="12" cy="19.5" r="2.5" fill="#0F9D58"/>
          <circle cx="19.5" cy="19.5" r="2.5" fill="#4285F4"/>
        </g>
      </svg>
    </div>

    <div class="search-container">
      <input
        v-model="searchQuery"
        @input="clearError"
        @keyup.enter="handleSearch"
        type="text"
        class="search-input"
        placeholder="Search Google or type a URL"
        aria-label="Search Google or type a URL"
      />
      <button class="voice-search-btn" @click="handleVoiceSearch" aria-label="Voice Search">
        🎤
      </button>
    </div>

    <div class="buttons">
      <button class="btn" @click="handleSearch">Google Search</button>
      <button class="btn" @click="handleAddShortcut">Add Shortcut</button>
      <button class="btn" @click="sayYes">Say Yes</button>
    </div>
    <div v-if="saidYes" class="said-yes-message">Yes</div>

    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

    <div class="footer">
      <nav class="footer-nav">
        <a href="#" class="footer-link">Advertising</a>
        <a href="#" class="footer-link">Business</a>
        <a href="#" class="footer-link">About</a>
        <a href="#" class="footer-link">Privacy</a>
        <a href="#" class="footer-link">Terms</a>
        <a href="#" class="footer-link">Settings</a>
      </nav>
      <div class="footer-info">
        <span>© 2024 Mugabo</span>
        <span class="phone-number">+1 (555) 123-4567</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      saidYes: false,
    };
  },
  methods: {
    sayYes() {
      this.saidYes = true;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
  font-family: Arial, sans-serif;
  color: #e8eaed;
}

.logo {
  font-size: 72px;
  font-weight: 700;
  margin-bottom: 24px;
  user-select: none;
  color: #e8eaed;
}

.letter {
  font-weight: 700;
  font-size: 72px;
  display: inline-block;
  margin: 0 2px;
  font-family: 'Product Sans', Arial, sans-serif;
}

.letter.m { color: #4285F4; }
.letter.u { color: #DB4437; }
.letter.g { color: #F4B400; }
.letter.a { color: #4285F4; }
.letter.b { color: #0F9D58; }
.letter.o { color: #DB4437; }

.tad-groups-icon {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  user-select: none;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;
}

.tad-groups-icon:hover,
.tad-groups-icon:focus {
  background-color: rgba(60, 64, 67, 0.1);
  outline: none;
}
.said-yes-message {
  margin-top: 16px;
  font-size: 24px;
  font-weight: bold;
  color: #0F9D58;
  user-select: none;
}
</style>
