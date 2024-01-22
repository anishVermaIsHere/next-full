
export const navbarVariants={
    show:{
        opacity:1,
        y:0,
        transition:{
            type:'spring',
            delay:0.3,
            stifness:80
        }
    },
    hidden:{
        opacity:0,
        y:-50,
        transition:{
            type:'spring',
            damping:140,
            stiffness:300
        }
    }
}

export const heroVariants = (staggerChildren, delayChildren) => ({
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
    hidden: {}
  });

  export const textVariant=(delay)=>({
    show:{
        opacity:1,
        y:0,
        transition:{
            type:'spring',
            duration:1.25,
            delay:delay
        }
    },
    hidden:{
        opacity:0,
        y:50
    },
    
  });

  export const slideIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });

export const textContainer = {
    show: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
    }),
    hidden: {
        opacity: 0,
      },
  };

  export const textVariant2 = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'tween',
        ease: 'easeIn',
      },
    },
  };

  export const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });


  
export const planetVariants = (direction) => ({
    hidden: {
      x: direction === 'left' ? '-100%' : '100%',
      rotate: 120,
    },
    show: {
      x: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        duration: 1.8,
        delay: 0.5,
      },
    },
  });
  
  export const zoomIn = (delay, duration) => ({
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  });
  
  export const footerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 140,
      },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        delay: 0.5,
      },
    },
  };
  