// Film Wagera — minimal interaction layer.

// Fade-in reveal for pillars, slates, and founder cards as they scroll into view.
const revealTargets = document.querySelectorAll('.pillar, .slate, .founder, .desk-card');
if ('IntersectionObserver' in window && revealTargets.length) {
  revealTargets.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((el) => io.observe(el));
}

// Remove the iris overlay from the accessibility tree once its animation finishes.
const iris = document.querySelector('.iris-overlay');
if (iris) {
  iris.addEventListener('animationend', () => {
    iris.style.display = 'none';
  });
}
