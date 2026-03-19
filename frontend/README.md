# OnnDmnd (Frontend)

A modern, responsive single-page React application for OnnDmnd � a home services platform offering on-demand cleaning, plumbing, electrician, carpentry, handyman, and more.

---

## ? Key Features

- **Responsive landing page** with hero section, service cards, and contact form
- **Smooth in-page navigation** (Home / Services / Contact)
- **Form validation + toast notifications** for instant user feedback
- **Google Sheets submission** via Apps Script (backend-free contact capture)
- **Reusable components** (Navbar, Footer, Toast, Services cards)

---

## ?? Tech Stack

- **React** + **Vite**
- **Bootstrap 5**
- **React Icons**

---

## ?? Getting Started

### 1) Install dependencies

`ash
npm install
`

### 2) Start development server

`ash
npm run dev
`

### 3) Open in browser

Visit: **http://localhost:5173**

---

## ??? Project Structure

- src/ � Main source code
  - components/ � Reusable UI components
    - Navbar.jsx, Footer.jsx, Toast.jsx
    - Landing/ � Sections used on the home page (Header, Services, Contact)
  - App.jsx � Root component
  - main.jsx � Application bootstrap entry

---

## ?? Customization Guide

- **Update services list**: src/components/Landing/Services.jsx
- **Update hero section text / tags**: src/components/Landing/Header.jsx
- **Update contact form behavior**: src/components/Landing/Contact.jsx

---

## ?? Production Build

`ash
npm run build
`

---

## ?? Contact

For feedback or improvements, use the contact form in the app or open an issue.

---

Made with ?? for OnnDmnd.
