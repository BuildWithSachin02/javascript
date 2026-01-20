# Custom Toast Notification System--

A lightweight, customizable toast notification library built with vanilla HTML, CSS, and JavaScript. This project provides an easy way to display temporary notification messages with different styles (success, danger, warning, info).

## Features

- **Multiple Toast Types**: Success, Danger, Warning, and Info notifications
- **Smooth Animations**: Slide-in and fade-out effects with progress bar
- **Material Icons**: Google Material Symbols for visual representation
- **Customizable Duration**: Set how long each notification stays visible
- **Auto-dismiss**: Notifications automatically remove after the specified duration
- **Progress Indicator**: Visual progress bar showing time remaining
- **Single Toast at a Time**: Only one notification displays simultaneously
- **Responsive Design**: Works seamlessly on different screen sizes

## Project Structure

```
project/
├── index.html      # HTML markup
├── style.css       # Styling and animations
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## Installation

1. Clone or download the project files
2. Ensure all three files (index.html, style.css, script.js) are in the same directory
3. Open `index.html` in your web browser

## Usage

### Basic Setup

Include the three files in your project:

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

### Displaying a Toast

Use the `showToast()` function with the following syntax:

```javascript
showToast(message, toastType, duration);
```

**Parameters:**
- `message` (string): The notification text to display
- `toastType` (string): Type of toast - `"success"`, `"danger"`, `"warning"`, or `"info"` (default: "info")
- `duration` (number): How long the notification stays visible in milliseconds (default: 5000ms)

### Examples

```javascript
// Success notification
showToast("Article Submitted Successfully", "success", 5000);

// Error notification
showToast("Failed unexpected error", "danger", 5000);

// Info notification
showToast("Do POTD and Earn Coins", "info", 5000);

// Warning notification
showToast("!warning! server error", "warning", 5000);
```

## Toast Types

| Type | Color | Icon | Use Case |
|------|-------|------|----------|
| **success** | Green (#95eab8) | ✓ Check mark | Successful operations |
| **danger** | Red (#efaca5) | ✗ Error | Failed operations |
| **info** | Blue (#bddaed) | ℹ Info | Information messages |
| **warning** | Yellow (#ead994) | ⚠ Warning | Warning messages |

## Customization

### Change Toast Colors

Edit the background colors in `style.css`:

```css
.toast.toast-success {
    background: #95eab8;
}

.toast.toast-danger {
    background: #efaca5;
}

.toast.toast-info {
    background: #bddaed;
}

.toast.toast-warning {
    background: #ead994;
}
```

### Adjust Animation Speed

Modify animation durations in `style.css`:

```css
.toast {
    animation: slideInRight 0.3s ease-in-out forwards,
               fadeOut 0.5s ease-in-out forwards 3s;
}
```

### Change Toast Position

Update the position in `style.css`:

```css
.toast {
    top: 25px;      /* Distance from top */
    right: 25px;    /* Distance from right */
}
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Works on modern mobile browsers

## Dependencies

- **Google Material Symbols**: External CDN link for icons
  - Link: `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:...`

## File Details

### index.html
Contains the basic structure with buttons to trigger different toast notifications and a container for the toast overlay.

### style.css
Includes all styling for:
- Button designs
- Toast appearance and positioning
- Animations (slideInRight, slideOutRight, fadeOut, toastProgress)
- Responsive layout
- Background gradients

### script.js
Implements the core functionality:
- `showToast()` function for creating notifications
- Icon definitions for each toast type
- Event listeners for the four buttons
- Auto-removal of duplicate toasts

## How It Works

1. User clicks a button (Submit, Failed, Information, Warning)
2. Event listener triggers the `showToast()` function with appropriate parameters
3. A new toast element is created dynamically with the message and type
4. Toast animates in from the right side
5. Progress bar animates from full width to zero over the specified duration
6. Toast automatically fades out and removes itself from the DOM

## Tips

- Keep messages short and concise for better UX
- Use appropriate toast types to guide user expectations
- Adjust duration based on message length and importance
- Test animations on different devices for smooth performance

## License

Free to use and modify for personal and commercial projects.

## Support

For questions or improvements, review the code comments and modify as needed for your use case.
