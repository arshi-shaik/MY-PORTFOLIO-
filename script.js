:root {
  --bg-light: #ffffff;
  --text-light: #111111;
  --accent: #6c63ff;
  --btn-bg: #6c63ff;
  --btn-text: #fff;

  --bg-dark: #0f172a;
  --text-dark: #f8fafc;
  --btn-bg-dark: #8c82ff;
}

body {
  background: var(--bg-light);
  color: var(--text-light);
  font-family: 'Poppins', sans-serif;
  margin: 0;
  transition: background 0.3s, color 0.3s;
}
body.dark {
  background: var(--bg-dark);
  color: var(--text-dark);
}

.header {
  position: sticky;
  top: 0;
  background: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  border-bottom: 1px solid #eee;
  z-index: 1000;
}
.header .logo {
  font-weight: 700;
  font-size: 1.4rem;
  color: inherit;
}
.nav a {
  margin-left: 24px;
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  position: relative;
}
.nav a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  left: 0;
  bottom: -4px;
  background-color: var(--accent);
  transition: 0.3s;
}
.nav a:hover::after,
.nav a:focus::after {
  width: 100%;
}
#theme-toggle {
  background: none;
  border: none;
  font-size: 1.2rem;
  margin-left: 20px;
  cursor: pointer;
  color: inherit;
  transition: color 0.3s;
}
#theme-toggle:hover {
  color: var(--accent);
}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 60px 40px;
  flex-wrap: wrap;
}
.hero-text {
  max-width: 520px;
}
.hero-text h1 span {
  color: var(--accent);
}
.facts {
  margin-top: 20px;
  list-style: none;
  padding-left: 0;
  font-size: 1rem;
  color: inherit;
}
.facts li {
  margin-bottom: 8px;
}
.btn {
  display: inline-block;
  background-color: var(--btn-bg);
  color: var(--btn-text);
  padding: 12px 26px;
  margin-top: 20px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;
}
.btn:hover,
.btn:focus {
  background-color: #5750e8;
  outline: none;
}

.hero-img img {
  width: 260px;
  border-radius: 50%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.reveal {
  opacity: 0;
  transform: translateY(25px);
  animation-fill-mode: forwards;
  animation-name: reveal;
  animation-duration: 1s;
}
.delay {
  animation-delay: 0.4s;
}
.delay2 {
  animation-delay: 0.8s;
}
@keyframes reveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section {
  padding: 80px 40px;
  text-align: center;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-top: 40px;
}
.skill-card {
  padding: 24px;
  background: #f8f8f8;
  border-radius: 16px;
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: default;
}
.skill-card h3 {
  margin-bottom: 10px;
  color: var(--accent);
}
.skill-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}
body.dark .skill-card {
  background: #1e293b;
  color: var(--text-dark);
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 15px;
  margin-top: 40px;
}
.gallery img {
  width: 100%;
  border-radius: 12px;
