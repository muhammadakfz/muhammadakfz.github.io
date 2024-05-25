'use client'

import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import styles from "./styles/Home.module.css";

export default function Home() {
  const welcomeRef = useRef(null);

  useEffect(() => {
    if (welcomeRef.current) {
      const typed = new Typed(welcomeRef.current, {
        strings: ["もしもし!", "Hello World!👋", "I am Fahrur"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
      })

      return () => {
        typed.destroy()
      }
    }
  }, [welcomeRef])

  return (
    <>
      <title>Home</title>
      <div id="muhammadakfz" className={styles.page}>
        <div className={styles.container}>
          <div className={styles.welcome}>
            <span ref={welcomeRef} className="welcome">
            </span>
          </div>
          <h1 className={styles.description}>
            Competitive Programming Enthusiast | Non-stop learner!
          </h1>
        </div>
      </div>
      <div id="about" className={styles.page2}> 
      </div>
    </>
  )
}