-------------------------------------------------------------------------------
# ⚡ N8N Workflow Dashboard

A simple web dashboard to view and manage N8N automation workflows.



## 📌 What is this?

Ye ek **web page** hai jo N8N workflows ko display karta hai. Aap search kar sakte ho, filter laga sakte ho, aur workflow details dekh sakte ho.

**N8N** ek automation tool hai jaise Zapier - jo different apps ko connect karke automatic tasks karta hai.

--

## 🎯 What can you do?

✅ View all workflows in one place  
✅ Search workflows by name  
✅ Filter by trigger type, complexity, category  
✅ See workflow details (nodes, integrations)  
✅ Download workflow JSON  
✅ View workflow diagrams  

---

## 📁 Files

```
project-folder/
│
├── index.html       # Main page
├── style.css        # Design styling
└── script.js        # JavaScript code (functionality)
```

---

## 🚀 How to use?

### **Method 1: Simple Demo (No Backend Needed)**

1. **Download all files** in one folder
2. **Open `index.html`** in your browser
3. That's it! Demo will show sample workflows

### **Method 2: With Real Backend**

Agar aapke paas N8N backend hai with API:

1. Files ko web server pe upload karo
2. Backend API ko connect karo
3. Real workflows dikhengi

---

## 🎨 Features

### **Dashboard Stats**
- Total Workflows count
- Active Workflows count  
- Total Nodes used
- Total Integrations

### **Search & Filter**
- Search by workflow name
- Filter by trigger type (Webhook, Scheduled, Manual)
- Filter by complexity (Low, Medium, High)
- Filter by category
- Show only active workflows

### **Workflow Cards**
Each card shows:
- Workflow name
- Description
- Status (Active/Inactive)
- Number of nodes
- Trigger type
- Integrations used

---

## 🖼️ Screenshots

**Dashboard View:**
```
┌─────────────────────────────────────┐
│  ⚡ N8N Workflow Studio             │
│                                     │
│  [156]    [89]    [1,247]    [42]  │
│  Total   Active    Nodes     Int.   │
└─────────────────────────────────────┘
```

**Workflow Card:**
```
┌──────────────────────────┐
│ ● 12 nodes  [Webhook]    │
│                          │
│ Email Automation         │
│ Auto-respond to emails   │
│                          │
│ [Gmail] [OpenAI] [Slack] │
└──────────────────────────┘
```

---

## 🔧 Tech Stack

**Frontend Only:**
- HTML5
- CSS3 (Custom styling)
- JavaScript (Vanilla JS)

**No frameworks needed!** Pure HTML, CSS, JS.

---

## 💡 Understanding the Code

### **HTML (index.html)**
Ye page structure define karta hai:
- Header section (title, stats)
- Search and filters
- Workflow cards grid
- Modal for details

### **CSS (style.css)**
Ye page ko design karta hai:
- Colors and themes
- Card layouts
- Animations and hover effects
- Responsive design for mobile

### **JavaScript (script.js)**
Ye functionality provide karta hai:
- API calls to backend
- Search functionality
- Filtering workflows
- Displaying data in cards
- Modal popup for details

---

## 📊 How It Works (Simple Flow)

```
1. Page loads
   ↓
2. Fetch workflows from API
   ↓
3. Display workflow cards
   ↓
4. User searches "email"
   ↓
5. Show only matching workflows
   ↓
6. User clicks a card
   ↓
7. Show full details in modal
```

---

## 🎓 Learning Points

Agar aap beginner ho, ye project aapko sikhata hai:

✅ **HTML Structure** - How to organize a web page  
✅ **CSS Styling** - Modern design with gradients, animations  
✅ **JavaScript** - API calls, DOM manipulation, event handling  
✅ **Responsive Design** - Mobile-friendly layouts  
✅ **Search & Filter** - Data filtering logic  

---

## 🐛 Common Issues

### **Problem: Page shows "Loading..." forever**
**Solution:** Backend API nahi connected hai. Demo mode use karo.

### **Problem: Cards not showing**
**Solution:** Check browser console (F12) for errors.

### **Problem: Search not working**
**Solution:** Make sure JavaScript file is properly linked.

---

## 🔗 APIs Used (Backend)

Agar backend hai, ye APIs use hote hain:

- `GET /api/workflows` - Get all workflows
- `GET /api/stats` - Get statistics
- `GET /api/categories` - Get categories list
- `GET /api/workflows/{filename}` - Get single workflow
- `GET /api/workflows/{filename}/diagram` - Get diagram

---

## 📝 To-Do (Future Ideas)

- [ ] Add workflow editing
- [ ] Add workflow creation
- [ ] Add dark/light theme toggle
- [ ] Add export to PDF
- [ ] Add workflow execution logs
- [ ] Add user authentication

---

## 🤝 Contributing

Agar aap improve karna chahte ho:

1. Fork the project
2. Make changes
3. Test properly
4. Create pull request

---

## 📧 Contact

**Author:** Sachin Yadav  
**Email:** yadavsachin3166@gmail.com  
**GitHub:** [@BuildWithSachin02](https://github.com/BuildWithSachin02)

---

## 📄 License

Free to use for learning and personal projects! 🎉

---

## 💬 Need Help?

Agar kuch samajh nahi aaya ya problem aa rahi hai:

1. GitHub pe issue create karo
2. Email karo (yadavsachin3166@gmail.com)
3. Code ko line-by-line padho aur samjho

**Remember:** Practice se hi seekhoge! Keep coding! 💪

---

**Made with ❤️ by Sachin Yadav**

*Happy Learning! 🚀*
