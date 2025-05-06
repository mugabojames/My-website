<template>
  <div id="app" class="container">
    <div class="content">
      <div class="logo">
        <span class="letter M">M</span>
        <span class="letter U">U</span>
        <span class="letter G">G</span>
        <span class="letter A">A</span>
        <span class="letter B">B</span>
        <span class="letter O">O</span>
      </div>
  <div class="search-container">
    <input
      type="text"
      v-model="searchQuery"
      @keyup.enter="handleSearch"
      placeholder="Search Mugabo or type a URL"
      class="search-input google-style"
    />
    <button class="search-icon" @click="handleSearch" aria-label="Search" />
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
  background-image: url('https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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

.letter.M { color: #4285F4; }
.letter.U { color: #DB4437; }
.letter.G { color: #F4B400; }
.letter.A { color: #4285F4; }
.letter.B { color: #0F9D58; }
.letter.O { color: #DB4437; }

.search-container {
  width: 584px;
  max-width: 90vw;
  margin-bottom: 24px;
  position: relative;
}

.search-icon {
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent url("data:image/svg+xml,%3csvg fill='%235f6368' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3e%3c/svg%3e") no-repeat center center;
  background-size: 20px 20px;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 20px;
  height: 20px;
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

/* Responsive styles for mobile devices */
@media (max-width: 600px) {
  .logo {
    font-size: 48px;
    margin-bottom: 20px;
  }

  .letter {
    font-size: 48px;
    margin: 0 2px;
  }

  .search-container {
    width: 100%;
    margin-bottom: 16px;
    padding: 0 10px;
  }

  .search-input {
    height: 40px;
    font-size: 14px;
    padding: 0 12px;
  }

  .footer-nav {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 12px;
  }

  .footer {
    font-size: 12px;
    padding: 10px 0;
  }

  .phone-number {
    font-weight: 600;
    font-size: 12px;
  }
}
</style>
