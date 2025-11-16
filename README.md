# 📘 Bookmark Manager – React + TailwindCSS

A clean and modern Bookmark Manager Application built using **React**, **Vite**, and **TailwindCSS**.  
The project includes Bookmark creation, validation, search, sorting, and dynamic UI features as required in the assignment.

---

## 🚀 Features & Requirements Implemented

### ✅ **1. Dynamic Greeting Message**
- Shows real-time greeting based on the current time:
  - Morning  
  - Noon  
  - Evening  
  - Night  
- Displays formatted date as:  
  **Monday, Nov 10**

---

### ✅ **2. New Bookmark Form**
Users can input:
- Category  
- Website URL  
- Username  
- Password  

On submit, the data appears as a new Bookmark Card below.

---

### ✅ **3. Form Validation**
Validation includes:
- No empty fields allowed  
- Website URL must be valid  
- Password must be at least 6 characters  
- Field-level error messages (each error shows below its field)

---

### ✅ **4. Clear Button**
- Clicking **Clear** resets all form input values.

---

### ✅ **5. Auto Website Name Generation**
- Website Name is automatically extracted from URL.  
  Example:
  - URL → `https://facebook.com`  
  - Generated Name → **Facebook**

---

### ✅ **6. Bookmark Cards**
Each card shows:
- Website **Icon** → First 2 characters of domain with background color  
- Website Name  
- Category  
- Website URL  
- Username  
- Password (hidden as dots)  
- **Reveal button** to toggle password visibility

---

### ✅ **7. Password Reveal Toggle**
- Password appears as dots `"•••••"` initially  
- Clicking **Reveal** shows actual password  
- Clicking again hides it (toggle behavior)

---

### ✅ **8. Search Feature**
- Search by **Name** or **URL**
- Results filter live while typing  
- If search is empty → show all bookmarks  
- If no match → show a styled **“Not Found”** message matching the project theme

---

### ✅ **9. Sorting Feature**
"Sort By" button includes sorting options:
- **Name (A → Z)**  
- **Name (Z → A)**  
- **Date (Newest First)**  
- **Date (Oldest First)**  

Sorting applies instantly to the Bookmark Grid.

---

### ✅ **10. Organized Component Structure**
Project components divided logically:
- `Header`  
- `Greeting`  
- `SearchAndSort`  
- `BookmarkForm`  
- `BookmarkGrid`  
- `BookmarkCard`  
- `NotFound`  

No unnecessary third-party libraries used.

---

## 🛠️ Technologies Used
- React (Vite)
- TailwindCSS
- JavaScript ES6+
- React Hooks (useState, useEffect)
- No 3rd-party plugins or UI libraries

---

## 📂 Project Setup

### 1️⃣ Create Project
```bash
npm create vite@latest bookmark-manager
cd bookmark-manager
