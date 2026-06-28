// ============================================================
// animations.js — Scroll Reveal & Interactive Animations
// Thêm mới, không ảnh hưởng đến code hiện có
// ============================================================

(function() {
  'use strict';

  // ── INTERSECTION OBSERVER ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Nếu có stagger-children, thêm class cho container
        if (entry.target.classList.contains('stagger-children')) {
          // Class visible sẽ kích hoạt stagger
        }
        // Có thể dừng quan sát sau khi hiển thị để tối ưu
        // observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -30px 0px'
  });

  // Quan sát các phần tử có class animate-on-scroll
  document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-on-scroll, .stagger-children');
    elements.forEach(el => observer.observe(el));

    // Nếu phần tử đã visible ngay khi load (do không có scroll)
    // Kiểm tra ngay lập tức
    setTimeout(() => {
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('visible');
        }
      });
    }, 200);

    // ── HEADER SCROLL EFFECT ──
    const header = document.getElementById('header');
    if (header) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 80) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    }

    // ── SMOOTH SCROLL FOR ANCHOR LINKS (giữ nguyên chức năng cũ, chỉ thêm mượt) ──
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = 80; // chiều cao header
          const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });

    // ── COUNTER ANIMATION (nếu có số liệu) ──
    const counters = document.querySelectorAll('.counter-number');
    if (counters.length) {
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target')) || 0;
            const duration = 1500;
            const startTime = performance.now();

            function updateCounter(time) {
              const progress = Math.min((time - startTime) / duration, 1);
              const current = Math.floor(progress * target);
              el.textContent = current.toLocaleString();
              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                el.textContent = target.toLocaleString();
              }
            }
            requestAnimationFrame(updateCounter);
            counterObserver.unobserve(el);
          }
        });
      }, { threshold: 0.5 });
      counters.forEach(c => counterObserver.observe(c));
    }

    // ── BACK TO TOP BUTTON (nếu chưa có) ──
    const scrollBtn = document.querySelector('.scroll-to-top');
    if (scrollBtn) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
          scrollBtn.style.opacity = '1';
          scrollBtn.style.pointerEvents = 'all';
        } else {
          scrollBtn.style.opacity = '0';
          scrollBtn.style.pointerEvents = 'none';
        }
      });
      // Mặc định ẩn
      scrollBtn.style.opacity = '0';
      scrollBtn.style.pointerEvents = 'none';
      scrollBtn.style.transition = 'opacity 0.3s ease';

      // Sự kiện click
      scrollBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  });

})();