<template>
  <div id="app" class="container">
    <div class="content">
      <div class="logo">
        <span class="letter m">M</span>
        <span class="letter u">u</span>
        <span class="letter g">g</span>
        <span class="letter a">a</span>
        <span class="letter b">b</span>
        <span class="letter o">o</span>
      </div>
      <div class="search-container">
        <input
          type="text"
          v-model="searchQuery"
          @keyup.enter="handleSearch"
          placeholder="Search Mugabo or type a URL"
          class="search-input google-style"
        />
      </div>
    </div>
    <footer class="footer">
      <div class="footer-nav">
        <a href="#" class="footer-link">Advertising</a>
        <a href="#" class="footer-link">Business</a>
        <a href="#" class="footer-link">About</a>
        <a href="#" class="footer-link">Privacy</a>
        <a href="#" class="footer-link">Terms</a>
      </div>
      <div class="phone-number">Phone: +(250) 794665384</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleSearch() {
      if (this.searchQuery.trim()) {
        const query = encodeURIComponent(this.searchQuery.trim());
        const url = `https://www.google.com/search?q=${query}`;
        window.open(url, "_blank");
      }
    },
  },
};
</script>

<style scoped>
html, body, #app {
  height: 100%;
  margin: 0;
  background-color: #fff;
  font-family: Arial, sans-serif;
  color: #202124;
}

.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
  flex-grow: 1;
}

.logo {
  font-size: 92px;
  font-weight: 700;
  margin-bottom: 40px;
  user-select: none;
  color: #202124;
}

.letter {
  font-weight: 700;
  font-size: 92px;
  display: inline-block;
  margin: 0 4px;
  font-family: 'Product Sans', Arial, sans-serif;
}

.letter.m { color: #4285F4; }
.letter.u { color: #DB4437; }
.letter.g { color: #F4B400; }
.letter.a { color: #4285F4; }
.letter.b { color: #0F9D58; }
.letter.o { color: #DB4437; }

.search-container {
  width: 584px;
  max-width: 90vw;
  margin-bottom: 24px;
}

.search-input {
  width: 100%;
  height: 44px;
  padding: 0 16px;
  font-size: 16px;
  border: 1px solid #dfe1e5;
  border-radius: 24px;
  outline: none;
  box-shadow: none;
  transition: box-shadow 0.2s ease-in-out;
  background-color: white;
  color: black;
}

.search-input:focus {
  box-shadow: 0 0 8px rgba(66, 133, 244, 0.8);
  border-color: #4285F4;
  outline: none;
}

.footer {
  width: 100%;
  padding: 15px 0;
  background-color: #f2f2f2;
  border-top: 1px solid #e4e4e4;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: #70757a;
  user-select: none;
}

.footer-nav {
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
}

.footer-link {
  color: #70757a;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}

.footer-link:hover {
  color: #202124;
  text-decoration: underline;
}

.phone-number {
  font-weight: 600;
}
</style>
