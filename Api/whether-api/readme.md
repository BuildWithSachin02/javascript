--------------------------------------------------------------------------------------------------
# 🌤️ Weather App

#OUTPUT <BR>
#LINK: https://buildwithsachin02.github.io/weatherApp/
<BR>
<BR>
A beautiful, responsive weather application that shows real-time weather information for any city worldwide.



## 📸 Preview

```
┌──────────────────────────────────────────┐
│  🔍 [Search city...]     [Search]       │
│                                          │
│  📍 New York, USA        Friday, Jan 6  │
│                                          │
│  16°C                         ☀️        │
│  Storm with Rain                        │
│  💨 2.4 km/h    💧 70%                  │
│                                          │
│  12° 14° [16°] 18° 22°                  │
│                                          │
│  Fri 🌧 16°                              │
│  Sat ❄ 10°                               │
│  Sun ☀ 22°                               │
└──────────────────────────────────────────┘
```

---

## ✨ Features

### 🔍 **Search Any City**
- Search weather for any city worldwide
- Get instant weather updates
- Error handling for invalid cities

### 🌡️ **Weather Information**
- **Current Temperature** in Celsius
- **Weather Condition** (Clear, Rain, Snow, etc.)
- **Wind Speed** in km/h
- **Humidity Percentage**
- **Location** with country code

### 🎨 **Dynamic Themes**
App automatically changes background based on:
- **Time of Day** (Day/Night)
- **Weather Conditions** (Clear, Rain, Snow)

#### Day Themes:
- ☀️ **Summer** - Orange/Yellow gradient (Clear sky)
- 🌧️ **Rain** - Dark blue gradient
- ❄️ **Snow** - Cool blue gradient

#### Night Theme:
- 🌙 **Winter** - Dark gradient (All weather types)

### 📊 **Visual Features**
- **Animated Weather Icons** - Floating animation
- **Hourly Temperature Display** - Quick temperature overview
- **Weekly Forecast** - Next 4 days preview

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure and content |
| **CSS3** | Styling and animations |
| **JavaScript (ES6)** | API calls and interactivity |
| **OpenWeather API** | Real-time weather data |

---

## 📁 File Structure

```
weather-app/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and themes
├── script.js           # JavaScript logic
└── assets/             # Weather images
    ├── summer.png
    ├── winter.png
    ├── rain.png
    └── snow.png
```

---

## 🚀 How to Use

### **Step 1: Download Files**
Download all project files in one folder.

### **Step 2: Get API Key**
1. Go to [OpenWeather](https://openweathermap.org/api)
2. Sign up for free account
3. Get your API key

### **Step 3: Add Your API Key**
Open `script.js` and replace the API key:

```javascript
const API_KEY = "YOUR_API_KEY_HERE";
```

### **Step 4: Open in Browser**
Simply open `index.html` in your web browser!

### **Step 5: Search City**
1. Type city name in search box
2. Click "Search" button
3. View weather information!

---

## 🎯 How It Works

### **1. User Input**
```javascript
// User types city name
const cityName = cityInput.value;
```

### **2. API Call**
```javascript
// Fetch weather data from OpenWeather
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}`)
```

### **3. Process Data**
```javascript
// Extract temperature, humidity, wind speed
temp.innerText = data.main.temp;
humidity.innerText = data.main.humidity;
```

### **4. Update UI**
```javascript
// Change background and weather icon
setTheme(data.weather[0].main, isDay);
```

---

## 📊 Code Breakdown

### **HTML (index.html)**
**Purpose:** Page structure

**Key Sections:**
- Search box (input + button)
- Header (location + date)
- Main weather display (temp, condition, wind, humidity)
- Weather icon/image
- Hourly temperature preview
- Weekly forecast sidebar

---

### **CSS (style.css)**
**Purpose:** Styling and themes

**Features:**
- **Grid Layout** - Responsive design
- **4 Theme Classes** - winter, summer, rain, snow
- **Animations** - Floating weather icons
- **Glassmorphism** - Blurred transparent effects
- **Responsive** - Mobile-friendly

**Theme System:**
```css
.app.winter { background: linear-gradient(145deg, #0f2027, #203a43); }
.app.summer { background: linear-gradient(145deg, #ff8008, #ffc837); }
.app.rain   { background: linear-gradient(145deg, #141e30, #243b55); }
.app.snow   { background: linear-gradient(145deg, #3a6073, #16222a); }
```

---

### **JavaScript (script.js)**
**Purpose:** Functionality and API integration

#### **Main Functions:**

**1. `setDate(timestamp)`**
- Converts API timestamp to readable date
- Format: "Friday, Jan 6"

```javascript
const d = new Date(timestamp * 1000);
return d.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short"
});
```

**2. `isDayTime(current, sunrise, sunset)`**
- Checks if it's day or night
- Compares current time with sunrise/sunset

```javascript
return current >= sunrise && current < sunset;
```

**3. `setTheme(weather, isDay)`**
- Changes background based on weather
- Changes weather icon
- Day/Night logic

```javascript
if (isDay) {
    if (weather === "clear") {
        app.classList.add("summer");
    }
} else {
    app.classList.add("winter");
}
```

**4. `fetchApi()`**
- Main function that calls OpenWeather API
- Gets weather data
- Updates all UI elements

```javascript
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}`)
    .then(res => res.json())
    .then(data => {
        // Update UI with weather data
    });
```

---

## 🔌 API Integration

### **OpenWeather API**

**Endpoint:**
```
https://api.openweathermap.org/data/2.5/weather
```

**Parameters:**
- `q` - City name
- `appid` - Your API key
- `units` - metric (for Celsius)

**Response Data Used:**
```json
{
  "name": "New York",
  "sys": {
    "country": "US",
    "sunrise": 1234567890,
    "sunset": 1234567890
  },
  "main": {
    "temp": 16.5,
    "humidity": 70
  },
  "weather": [{
    "main": "Rain",
    "description": "light rain"
  }],
  "wind": {
    "speed": 2.4
  },
  "dt": 1234567890
}
```

---

## 🎨 Customization

### **Change Colors**

Edit theme gradients in `style.css`:

```css
/* Winter theme */
.app.winter { 
  background: linear-gradient(145deg, #YOUR_COLOR1, #YOUR_COLOR2); 
}
```

### **Change Temperature Unit**

In API call, change `units` parameter:
```javascript
// For Fahrenheit
units=imperial

// For Celsius (default)
units=metric
```

### **Add More Weather Icons**

1. Add images to `assets/` folder
2. Update `setTheme()` function in `script.js`

---

## 📱 Responsive Design

**Desktop View:**
- Grid layout with sidebar
- Large weather display
- Horizontal hourly forecast

**Mobile View:**
- Single column layout
- Stacked elements
- Scrollable forecast

**Breakpoint:** 768px

---

## 🐛 Common Issues & Solutions

### **Problem: "City not found" error**
**Solution:** 
- Check spelling of city name
- Try searching with country name (e.g., "London, UK")

### **Problem: Weather data not loading**
**Solution:**
- Check your API key is correct
- Make sure you're connected to internet
- Check browser console (F12) for errors

### **Problem: Images not showing**
**Solution:**
- Make sure `assets/` folder exists
- Check image file names match code
- Verify image file paths

### **Problem: API key error**
**Solution:**
- Get new API key from OpenWeather
- Wait 10-15 minutes after creating new key
- Check key is correctly pasted in code

---

## 🎓 Learning Points

This project teaches:

✅ **API Integration** - Fetching data from external APIs  
✅ **Async JavaScript** - Using fetch() and promises  
✅ **DOM Manipulation** - Updating HTML elements with JS  
✅ **Date Handling** - Working with timestamps  
✅ **Conditional Logic** - Day/Night and weather checks  
✅ **CSS Grid** - Modern layout techniques  
✅ **Responsive Design** - Mobile-first approach  
✅ **Error Handling** - Try-catch and validation  

---

## 🔮 Future Enhancements

Ideas to improve this project:

- [ ] Add 7-day detailed forecast
- [ ] Add weather maps
- [ ] Save favorite cities
- [ ] Add geolocation (auto-detect user location)
- [ ] Add more weather conditions (fog, mist, etc.)
- [ ] Add temperature unit toggle (°C/°F)
- [ ] Add dark/light mode toggle
- [ ] Add weather alerts
- [ ] Add historical weather data
- [ ] Add multiple city comparison

---

## 📝 Practice Tasks

Try these to improve your skills:

**Beginner:**
1. Change color scheme
2. Add more cities to favorites
3. Change temperature to Fahrenheit

**Intermediate:**
4. Add 5-day forecast with real API data
5. Add search history feature
6. Add loading spinner

**Advanced:**
7. Add auto-complete for city names
8. Add weather charts with Chart.js
9. Add voice search feature

---

## 🤝 Contributing

Want to improve this project?

1. Fork the repository
2. Make your changes
3. Test thoroughly
4. Create pull request

---

## 📧 Contact

**Author:** Sachin Yadav  
**Email:** yadavsachin3166@gmail.com  
**GitHub:** [@BuildWithSachin02](https://github.com/BuildWithSachin02)

---

## 📄 License

Free to use for learning and practice! 🎉

---

## 🙏 Credits

- **OpenWeather API** - Weather data provider
- **Weather Icons** - Custom illustrations
- **Inspiration** - Modern weather app designs

---

## 💡 Tips for Beginners

1. **Read the code comments** - They explain every line
2. **Console.log everything** - See what data looks like
3. **Break it and fix it** - Best way to learn
4. **Experiment with CSS** - Change colors, sizes, animations
5. **Add your own features** - Make it unique!

---

**Made with ❤️ for learning purposes**

*Keep practicing, keep building! 🚀*

---

## 🔗 Useful Resources

- [OpenWeather API Docs](https://openweathermap.org/api)
- [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

- [Date Object in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)



















