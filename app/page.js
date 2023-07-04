"use client"
import Header from "@/components/header"
import FERpage from "@/components/FERpage"
import { useState } from "react"

export default function Home() {
  const [emotionRecognitionMode, setEmotionRecognitionMode] = useState('camera')

  function changeEmotionRecognitionMode(mode) {
    setEmotionRecognitionMode(mode)
  }

  //感情分析モードに応じてページの切り替え
  if (emotionRecognitionMode === 'camera') {
    return (
      <div>
        <Header changeEmotionRecognitionMode={changeEmotionRecognitionMode} />
        <FERpage />
      </div>
    )
  } else if (emotionRecognitionMode === 'mic') {
    return (
      <div>
        <Header changeEmotionRecognitionMode={changeEmotionRecognitionMode} />
        <h1>TODO</h1>
      </div>
    )
  }

}
