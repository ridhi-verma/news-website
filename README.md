
# 📰 News-Fast: React News Aggregator

**News-Fast** is a responsive and modern news aggregator web application built with **ReactJS**. It fetches the latest headlines and topic-based articles from the **NewsAPI**, and even includes a weather widget based on your geolocation.

---

## 🌟 Features

- 🔎 **Search Functionality**: Find articles by keywords.
- 📂 **Category Filtering**: Choose from categories like Technology, Business, and Sports.
- 🌍 **Real-time Weather**: Displays local weather using geolocation and OpenWeather API.
- 📱 **Responsive Design**: Mobile-friendly and clean UI using Bootstrap.
- ⚡ **Animations**: Interactive news cards using Framer Motion.
- 🦶 **Sticky Footer**: Social media links and branding.

---

## 📁 Project Structure

```
src/
├── App.jsx            # Root component
├── components/
│   ├── Navbar.jsx     # Navigation bar with weather + search
│   ├── NewsBoard.jsx  # Handles fetching & displaying articles
│   ├── NewsItem.jsx   # Individual news card component
│   ├── Footer.jsx     # Footer with branding & social links
│   └── SearchBar.jsx  # (Optional) Standalone search bar
├── assets/
│   └── news.jpg       # Fallback image
```

---

## 🔑 Environment Variables

Create a `.env` file in the root of your project and add:

```env
VITE_API_KEY=your_newsapi_key
VITE_WEATHER_API_KEY=your_openweather_key
```

You can get your API keys from:
- 📰 [NewsAPI](https://newsapi.org/)
- ☁️ [OpenWeather](https://openweathermap.org/api)

---

## 🚀 Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run the App**

   ```bash
   npm run dev
   ```

3. Visit `http://localhost:5173` in your browser.

---

## 📦 Tech Stack

- React JS
- Bootstrap 5
- Axios
- Framer Motion
- OpenWeather API
- NewsAPI





