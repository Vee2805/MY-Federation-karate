# 🥋 Rwanda Karate Federation (FERWAKA) - Official Website

The official website of the **Fédération Rwandaise de Karaté (FERWAKA)**, built with pure HTML, CSS, and JavaScript. Designed to mirror the professional look and feel of the [World Karate Federation (WKF)](https://www.wkf.net/) website.

## 🌐 Live Site

Hosted on GitHub Pages: `https://yourusername.github.io/rwanda-karate-federation/`

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| **Home** | `index.html` | Hero section, countdown timer, latest news, upcoming events, national rankings preview, stats, partners |
| **Association** | `association.html` | About FERWAKA, governance/leadership, commissions, affiliations (WKF, UFAK, RNOSC), history timeline |
| **Events** | `events.html` | Upcoming events, past events with results, 2026 competition calendar (tabbed interface) |
| **Athletes** | `athletes.html` | Featured athlete profiles, full national rankings (Kumite Men/Women, Kata, Junior - tabbed) |
| **Clubs** | `clubs.html` | 14+ registered clubs across all 5 provinces, filterable by province (tabbed) |
| **News** | `news.html` | News articles with images, dates, and summaries |
| **Contact** | `contact.html` | Contact form, FERWAKA office details, FAQ section |

## ✨ Features

- **WKF-inspired design** — Professional sports federation aesthetic
- **Live countdown timer** — Counts down to the next major event
- **Responsive design** — Works on mobile, tablet, and desktop
- **Tab navigation** — Events, rankings, and clubs filter by category
- **Animated stats counter** — Numbers animate into view on scroll
- **Scroll animations** — Fade-in effects on scroll using Intersection Observer
- **Sticky header** — Navigation stays visible while scrolling
- **Mobile hamburger menu** — Full slide-out navigation for mobile
- **No dependencies** — Pure HTML, CSS, and JavaScript (no frameworks)

## 🚀 Deploying to GitHub Pages

1. **Create a GitHub repository:**
   ```bash
   cd rwanda-karate-federation
   git init
   git add .
   git commit -m "Initial commit - FERWAKA website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/rwanda-karate-federation.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repo on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Select **main** branch and **/ (root)** folder
   - Click **Save**
   - Your site will be live at `https://YOUR_USERNAME.github.io/rwanda-karate-federation/`

## 📁 Project Structure

```
rwanda-karate-federation/
├── index.html          # Homepage
├── association.html    # About FERWAKA
├── events.html         # Events & Championships
├── athletes.html       # Athletes & Rankings
├── clubs.html          # Clubs & Dojos
├── news.html           # News Center
├── contact.html        # Contact page
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript (countdown, tabs, animations)
├── images/             # Image assets (add your images here)
└── README.md           # This file
```

## 🎨 Customization

- **Colors**: Edit CSS variables in `css/style.css` under `:root`
- **Content**: Edit the HTML files directly to update text, names, dates
- **Images**: Replace Unsplash URLs with actual FERWAKA photos
- **Countdown**: Edit the event date in `js/main.js` (line ~10)

## 📋 Technology

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **JavaScript** — Vanilla JS, Intersection Observer API
- **Fonts** — Google Fonts (Inter, Montserrat)

## 📄 License

© 2026 Rwanda Karate Federation (FERWAKA). All rights reserved.
