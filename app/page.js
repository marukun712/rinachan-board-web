"use client"
import Header from "@/components/header"
import FER from "@/components/FER"
import SpeechEmotionRecognition from "@/components/SpeechEmotionRecognition"
import { useState } from "react"
import { createContext } from "react";

export const currentExpressions = createContext();

export default function Home() {
  const [isUseCamera, setIsUseCamera] = useState(true)
  const [expressions, setExpressions] = useState("neutral")

  //感情分析モードの切り替え
  function changeIsUseCamera(bool) {
    setIsUseCamera(bool)
  }

  return (
    <div>
      <currentExpressions.Provider value={{ expressions, setExpressions }}>
        <Header changeIsUseCamera={changeIsUseCamera} />

        {isUseCamera ? <FER /> : <SpeechEmotionRecognition />}

        <img src={`/images/rinachan-board-${expressions}.png`} width={1000} height={1000} alt='rinachan-board' className='m-auto'></img>

      </currentExpressions.Provider>
    </div>
  )
}
