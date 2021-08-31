export const sentece = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    }
  }
}
export const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 0.3,
    y: 0,
    transition: {
      duration: 1.5
    }
  }
}