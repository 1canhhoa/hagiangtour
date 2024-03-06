import React, { useEffect, useState } from 'react'
import { motion, useInView, useAnimation, useScroll } from 'framer-motion'
import { useRef } from 'react'
interface RevealProps {
  children: React.ReactNode;
  direction: 'left' | 'up' | 'right' | 'scale' | undefined
  // Thêm các prop khác nếu cần
}
const Reveal = ({ children, direction }: RevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mainControls = useAnimation()
  const [currentVari, setCurrentVari] = useState<{}>({});
  // console.log("isInView", isInView);
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    } else {
      mainControls.start("hidden")
    }
  }, [isInView, mainControls])



  const variUp = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 }
  }
  const variLeft = {
    hidden: { opacity: 0, x: 75 },
    visible: { opacity: 1, x: 0 }
  }
  const variScale = {
    hidden: { opacity: 0, x: 75, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1 }
  }
  const variRight = {
    hidden: { opacity: 0, x: -75 },
    visible: { opacity: 1, x: 0 }
  }

  const handleVari = () => {
    if (direction === 'left') {
      return variLeft
    } else if (direction === 'up') {
      return variUp
    } else if (direction === 'right') {
      return variRight
    } else if (direction === 'scale') {
      return variScale
    }
  }
  return (
    <div
      className='relative'
      ref={ref}
    >
      <motion.div
        variants={handleVari()}
        transition={{ duration: 0.8, delay: 0 }}
        initial="hidden"
        animate={mainControls}
        data-ao
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal
