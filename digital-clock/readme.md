# Digital Clock

A simple and elegant real-time digital clock that displays the current day, hours, minutes, and seconds with a modern gradient background and sleek black display panel.

## ✨ Features:

- **Real-time Updates**: Clock updates every second automatically
- **Day Display**: Shows current day of the week (SUN, MON, TUE, WED, THUR, FRI, SAT)
- **Time Display**: Shows hours, minutes, and seconds in 24-hour format
- **Padded Numbers**: Leading zeros for hours, minutes, and seconds
- **Modern Design**: Gradient background with black clock panel
- **Responsive Layout**: Flexbox layout that centers perfectly
- **Clean UI**: Minimalist design with clear typography

## 📁 Project Structure

```-
digital-clock/
├── index.html     # HTML markup
├── style.css      # CSS styling
├── script.js      # JavaScript logic
└── README.md      # Documentation
```

## 🚀 Installation

1. Download or clone the project files
2. Ensure all three files are in the same directory:
   - index.html
   - style.css
   - script.js
3. Open `index.html` in your web browser
4. The clock will automatically start displaying the current time

**No dependencies or build process required!**

## 🎯 How It Works

### HTML Structure
The page displays four units showing:
- **Day**: Current day of the week
- **Hours**: Current hour (00-23)
- **Minutes**: Current minute (00-59)
- **Seconds**: Current second (00-59)

### JavaScript Logic

The `digitaclock()` function performs the following steps:

1. **Gets Current Time**
   ```javascript
   let now = new Date();
   ```

2. **Extracts Time Components**
   - Gets day using `now.getDay()` (returns 0-6)
   - Gets hours using `now.getHours()`
   - Gets minutes using `now.getMinutes()`
   - Gets seconds using `now.getSeconds()`

3. **Maps Day Number to Name**
   ```javascript
   let day = ["SUN","MON","TUE","WED","THUR","FRI","SAT"];
   let Dayname = day[now.getDay()];
   ```

4. **Adds Leading Zeros** (using ternary operator)
   ```javascript
   hrs = hrs < 10 ? "0" + hrs : hrs;
   mins = mins < 10 ? "0" + mins : mins;
   secs = secs < 10 ? "0" + secs : secs;
   ```

5. **Updates DOM Elements**
   - Sets innerText of each element to display the time

6. **Refreshes Every Second**
   ```javascript
   setInterval(digitaclock, 1000); // Runs every 1000ms
   ```

## 🎨 Design Details

### Color Scheme
- **Gradient Background**: Purple (#7e8df1) to Pink (#e4a1b3)
- **Clock Panel**: Black background
- **Text**: White text
- **Opacity**: 0.6 for labels (DAY, HOURS, MINUTES, SECONDS)

### Layout
- **Display**: Flexbox for centering and spacing
- **Gap**: 40px between each unit
- **Padding**: 30px (top/bottom) × 50px (left/right)
- **Border Radius**: 15px for rounded corners
- **Height**: Full viewport height (100vh)

### Typography
- **Font**: Arial, sans-serif
- **Time Size**: 45px (h2)
- **Label Size**: 12px (p)

## 📱 Responsive Design

The clock is centered on all screen sizes using flexbox:
- Works on desktop, tablet, and mobile devices
- Maintains aspect ratio and readability
- Adjusts automatically to viewport changes

## 🔧 Key JavaScript Concepts Used

1. **Date Object**: `new Date()` for getting current time
2. **Array Indexing**: Day names mapped to day numbers
3. **Ternary Operator**: Quick conditional for padding zeros
4. **DOM Manipulation**: `getElementById()` and `innerText`
5. **setInterval()**: Repeating function every 1000 milliseconds
6. **Callback Function**: Anonymous function running periodically

## 📝 Code Explanation

### Variable Declarations
```javascript
const days = document.getElementById("day");      // DOM element for day
const hr = document.getElementById("hours");      // DOM element for hours
const min = document.getElementById("minutes");   // DOM element for minutes
const sec = document.getElementById("seconds");   // DOM element for seconds
```

### Time Extraction
```javascript
let now = new Date();           // Current date/time
let hrs = now.getHours();       // 0-23
let mins = now.getMinutes();    // 0-59
let secs = now.getSeconds();    // 0-59
```

### Zero Padding Example
```javascript
hrs = hrs < 10 ? "0" + hrs : hrs;
// If hrs is 5, result is "05"
// If hrs is 15, result is "15"
```

### Update Interval
```javascript
setInterval(digitaclock, 1000); // Call digitaclock() every 1000ms
digitaclock();                  // Call once immediately on page load
```

## 🌟 Features Breakdown

| Feature | Details |
|---------|---------|
| Day Display | Shows current day abbreviated (3 letters) |
| Hour Format | 24-hour format with leading zero |
| Minute Display | Updated every second |
| Second Display | Updated every second |
| Auto Refresh | Updates without page reload |
| No External APIs | Uses native JavaScript Date object |

## 🎓 Learning Outcomes

This project teaches:
- JavaScript Date/Time manipulation
- DOM selection and updating
- Array mapping and indexing
- Ternary operators for conditional logic
- setInterval for repetitive tasks
- CSS Flexbox layout
- CSS Gradients and styling
- Responsive web design principles

## 🖥️ Browser Compatibility

- ✅ Chrome (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (all versions)
- ✅ Edge (all versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 How to Customize

### Change Colors
Edit the gradient in `style.css`:
```css
background: linear-gradient(135deg, #YourColor1, #YourColor2);
```

### Change Clock Panel Color
```css
.clock {
  background: #YourColor;  /* Change from black */
}
```

### Adjust Clock Size
```css
.unit h2 {
  font-size: 45px;  /* Change this value */
}
```

### Change Gap Between Units
```css
.clock {
  gap: 40px;  /* Change spacing */
}
```

### Modify Day Names
In `script.js`, change the day array:
```javascript
let day = ["SUNDAY", "MONDAY", "TUESDAY", ...];
```

## 📋 File Details

### index.html
Contains the basic HTML structure with:
- Clock container div
- Four unit divs for day, hours, minutes, seconds
- Element IDs for JavaScript selection
- Links to CSS and JavaScript files

### style.css
Styling includes:
- Body full-height flexbox centering
- Gradient background
- Clock panel design
- Unit typography and spacing
- Responsive properties

### script.js
JavaScript functionality:
- digitaclock() function definition
- Time extraction from Date object
- Day name mapping
- Zero padding logic
- setInterval for continuous updates

## 🐛 Troubleshooting

### Clock not updating?
- Ensure JavaScript file is linked in HTML
- Check browser console for errors (F12 → Console)
- Verify script.js is in the same directory

### Wrong time displayed?
- Check your system clock
- Browser uses device time
- Verify timezone settings

### Display looks misaligned?
- Clear browser cache
- Try different browser
- Check CSS file is loaded

## 💡 Tips

- This clock uses your device's local time
- Time format is 24-hour (military time)
- setInterval runs indefinitely until page is closed
- The function is called immediately on page load

## 🔮 Possible Enhancements

- Add 12-hour format option with AM/PM
- Include date display (DD/MM/YYYY)
- Add different theme options
- Include timezone selection
- Add alarm functionality
- Create customizable time zones
- Add digital/analog clock toggle
- Include weather information

## 📄 License

Free to use and modify for personal and educational purposes.

## 🙌 Credits

Built with vanilla JavaScript using native Date object and CSS Flexbox.

---

**Enjoy your real-time digital clock! ⏰**
