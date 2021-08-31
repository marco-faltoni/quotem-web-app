
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

export const slideToLeftBig = {
  hidden: { opacity: 0, x: 300 },
  visible: {
    opacity: 0.1,
    x: 0,
    transition: {
      delay:1.7,
      duration: 1.8
    }
  }
}

export const opacityFast = {
  hidden: { opacity: 0,},
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}
export const slideToRight = {
  hidden: { opacity: 0, x: -300 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.7,
      duration: 1.8
    }
  }
}