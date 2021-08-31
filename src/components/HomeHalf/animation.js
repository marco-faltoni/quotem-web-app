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
export const senteceT = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 2.8,
      staggerChildren: 1,
    }
  }
}
export const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5
    }
  }
}
export const letterT = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.8,
      duration: 1.5
    }
  }
}
export const opacity = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5
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
      delay: 2.2,
      duration: 1.8
    }
  }
}
export const slideToRightMbl = {
  hidden: { opacity: 0, x: -200, rotate: 90 },
  visible: {
    opacity: 0.1,
    x: 0,
    rotate: 90,
    transition: {
      delay: 2.2,
      duration: 1.8
    }
  }
}
export const slideToLeft = {
  hidden: { opacity: 0, x: 300 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 2.2,
      duration: 1.8
    }
  }
}

export const slideToLeftMbl = {
  hidden: { opacity: 0, x: 200, rotate: 270 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 270,
    transition: {
      delay: 2.2,
      duration: 1.8
    }
  }
}

export const slideToLeftBig = {
  hidden: { opacity: 0, x: 300 },
  visible: {
    opacity: 0.1,
    x: 0,
    transition: {
      delay: 2.2,
      duration: 1.8
    }
  }
}