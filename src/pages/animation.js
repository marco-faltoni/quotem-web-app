export const pageAnimation = {
  hidden: { opacity: 1},
  exit: {
    opacity: 0,
    transition: {
      duratiom: 2,
      staggerChildren: 0.25,
      when: "beforeChildren",
    }
  }
}
export const slider = {
  hidden: { x: "-130%"},
  exit: {
    x: "100%",
    transition: {ease: "easeOut", duration: 1.2}
  }
}
export const slider2 = {
  hidden: { x: "-130%"},
  exit: {
    x: "100%",
    transition: {ease: "easeOut", duration: 1.2, delay: 0.1}
  }
}
export const slider3 = {
  hidden: { x: "-130%"},
  exit: {
    x: "100%",
    transition: {ease: "easeOut", duration: 1.2, delay: 0.2}
  }
}
export const slider4 = {
  hidden: { x: "-130%"},
  exit: {
    x: "100%",
    transition: {ease: "easeOut", duration: 1.2, delay: 0.3}
  }
}
export const sliderContainer = {
  hidden: { opacity: 1},
  exit: {
    opacity: 1,
    transition: { staggerChildren: 0.3, ease: "easeOut" }
  }
}
export const sentece = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
      when: "beforeChildren",
    }
  }
}
export const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    }
  }
}
export const SlideUp = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 0,
    transition: {
      duration: 1.5,
      delay: 3
    }
  }
}