export const slideUp = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay:0.5,
      duration: 2,
      staggerChildren: 0.3
    }
  }
}