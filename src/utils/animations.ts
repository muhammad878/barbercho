// Smooth scroll animation utility
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all elements with animate-on-scroll class
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach((el) => observer.observe(el));
};

// Initialize when DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
}
