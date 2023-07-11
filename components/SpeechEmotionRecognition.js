import "regenerator-runtime";
import { useEffect } from "react";
import { useContext } from 'react';
import { useState } from "react";
import { currentExpressions } from '@/app/page';

export default function SpeechEmotionRecognition() {
    const { expressions, setExpressions } = useContext(currentExpressions)
    const [speechRecognitions, setSpeechRecognitions] = useState([])

    async function emotionRecognitionFromText(text) {
        var url = await "https://marukun-dev.com/emotion-api/analyze_emotion" //感情分析APIのURL

        var body = await { //RequestBody
            text: text
        }

        var headers = await { //HTTPHeader
            'Content-Type': 'application/json'
        }

        var post = await fetch(url, { //Post
            method: "POST",
            headers: headers,
            body: JSON.stringify(body),
        });

        var emotionRecognitionResult = await post.json(); //結果をJsonに変換

        var expressionsArray = await Object.entries(emotionRecognitionResult.emotions) //配列に変換

        //スコアが高い順にソート
        await expressionsArray.sort((a, b) => {
            return b[1] - a[1]
        })

        //感情を取得
        var expressions = await expressionsArray[0][0]

        //face-apiの感情名に合わせてset
        switch (expressions) {
            case "Joy":
                setExpressions("happy")
                break;
            case "Sadness":
                setExpressions("sad")
                break;
            case "Surprise":
                setExpressions("surprised")
                break;
            case "Anger":
                setExpressions("angry")
                break;
            case "Fear":
                setExpressions("fearful")
                break;
            case "Disgust":
                setExpressions("disgusted")
                break;
            case "Anticipation":
                setExpressions("happy")
                break;
            case "Trust":
                setExpressions("happy")
                break;
        }
    }

    useEffect(() => {
        //Web Speech APIの設定
        const speech = new webkitSpeechRecognition();
        speech.lang = 'ja-JP';

        const btn = document.getElementById('btn');

        //ボタンクリックで音声認識を開始
        btn.addEventListener('click', function () {
            speech.start();
        });

        //結果を取得して感情分析を実行
        speech.onresult = function (e) {
            speech.stop();
            if (e.results[0].isFinal) {
                var resultText = e.results[0][0].transcript

                setSpeechRecognitions(prevState => [...prevState, [resultText]])

                emotionRecognitionFromText(resultText)
            }
        }

        speech.onend = () => {
            speech.start()
        };
    })

    return (
        <div className='px-10'>
            <button id="btn" className="btn py-5">start</button>

            <div className="overflow-y-scroll h-16 py-5 w-64">
                {speechRecognitions.map((value) => {
                    return (
                        <h1>{value}</h1>
                    )
                })}
            </div>

            <h1>{expressions}</h1>
        </div>
    )
}