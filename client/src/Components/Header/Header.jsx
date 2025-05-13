import { useEffect, useRef } from "react"
import styles from "./Header.module.css"

const Header = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match container
    const resizeCanvas = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      }
    }

    // Initial resize
    resizeCanvas()

    // Handle window resize
    window.addEventListener("resize", resizeCanvas)

    // Binary digits
    const binary = ["0", "1"]

    // Create columns for binary rain
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    // Array to track the y position of each column
    const drops = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }

    // Animation function
    const draw = () => {
      // Semi-transparent black background to create trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Green text
      ctx.fillStyle = "#4ee1a0"
      ctx.font = `${fontSize}px monospace`

      // Draw binary characters
      for (let i = 0; i < drops.length; i++) {
        // Random binary character
        const text = binary[Math.floor(Math.random() * binary.length)]

        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        // Move the drop down
        drops[i]++

        // Reset drop to top with random offset if it reaches bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
      }
    }

    // Run animation
    const interval = setInterval(draw, 50)

    // Cleanup
    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.mainImageContainer}>
        <canvas ref={canvasRef} className={styles.binaryCanvas} />
      </div>

      <div className={styles.headerTextContainer}>
        <h1>
          Nice to meet you! I'm <span className={styles.h1Gradient}>Luis Manzano</span>
        </h1>
        <p>
          Based in Honduras, I'm a passionate individual enthusiastic about web development and responsive design. I
          have a keen interest in learning new technologies to continuously expand my skill set
        </p>

        <a href="#footer">
          <button>Contact me</button>
        </a>
      </div>

      <div className={styles.bottomLine}></div>
    </header>
  )
}

export default Header
