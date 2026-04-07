export const isMobile = window.matchMedia('(max-width: 767px)').matches;

export const fadeInView = (y = 16, duration = 0.35, delay = 0) =>
  isMobile ? {} : {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration, delay },
  };
