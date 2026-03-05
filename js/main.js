/* ============================================
   RWANDA KARATE FEDERATION - JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // ---- Countdown Timer ----
  function updateCountdown() {
    // Next event: Rwanda National Karate Championship 2026 - April 15, 2026
    const eventDate = new Date('2026-04-15T09:00:00');
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
      document.querySelectorAll('.countdown-unit .number').forEach(el => el.textContent = '00');
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('countdown-days');
    const hoursEl = document.getElementById('countdown-hours');
    const minsEl = document.getElementById('countdown-mins');
    const secsEl = document.getElementById('countdown-secs');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, '0');
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ---- Sticky Header ----
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // ---- Mobile Navigation ----
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navOverlay = document.querySelector('.nav-overlay');

  function openMobileNav() {
    navMenu.classList.add('open');
    if (navOverlay) navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    navMenu.classList.remove('open');
    if (navOverlay) navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', openMobileNav);
  }

  const mobileClose = document.querySelector('.mobile-close');
  if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileNav);
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', closeMobileNav);
  }

  // Close mobile nav on link click
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });

  // ---- Tab Functionality ----
  function initTabs(tabContainerSelector) {
    const containers = document.querySelectorAll(tabContainerSelector);
    containers.forEach(container => {
      const buttons = container.querySelectorAll('.tab-btn');
      buttons.forEach(btn => {
        btn.addEventListener('click', function () {
          const target = this.dataset.tab;
          const parent = this.closest('.section, .tab-section, main, .page-content') || document;

          // Deactivate all tabs & buttons in this group
          buttons.forEach(b => b.classList.remove('active'));
          parent.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));

          // Activate selected
          this.classList.add('active');
          const targetEl = parent.querySelector(`#${target}`);
          if (targetEl) targetEl.classList.add('active');
        });
      });
    });
  }

  initTabs('.events-tabs');
  initTabs('.ranking-tabs');

  // ---- Scroll to Top ----
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    });

    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Fade In on Scroll (Intersection Observer) ----
  const fadeElements = document.querySelectorAll('.fade-in');
  if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));
  }

  // ---- Active Navigation Highlight ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ---- Simple Search Toggle ----
  const searchBtn = document.querySelector('.nav-search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', function () {
      const query = prompt('Search Rwanda Karate Federation:');
      if (query && query.trim()) {
        alert(`Search results for "${query}" - Feature coming soon!`);
      }
    });
  }

  // ---- Contact Form Handler ----
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      const name = formData.get('name');
      alert(`Thank you ${name}! Your message has been received. We will get back to you shortly.`);
      this.reset();
    });
  }

  // ---- Smooth Anchor Scrolling ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Counter Animation ----
  function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.count);
      const duration = 2000;
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = target + (counter.dataset.suffix || '');
          clearInterval(timer);
        } else {
          counter.textContent = Math.floor(current) + (counter.dataset.suffix || '');
        }
      }, 16);
    });
  }

  // Trigger counter animation when stats section is visible
  const statsSection = document.querySelector('.stats-row');
  if (statsSection && 'IntersectionObserver' in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  }

});
