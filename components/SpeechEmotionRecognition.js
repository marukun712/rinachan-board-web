import "regenerator-runtime";
import { useEffect } from "react";
import { useState } from "react";

export default function SpeechEmotionRecognition() {
    const [expressions, setExpressions] = useState("neutral")

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

        setExpressions(expressions)
    }

    useEffect(() => {
        const speech = new webkitSpeechRecognition();
        speech.lang = 'ja-JP';

        const btn = document.getElementById('btn');
        const content = document.getElementById('content');

        btn.addEventListener('click', function () {
            speech.start();
        });

        speech.onresult = function (e) {
            speech.stop();
            if (e.results[0].isFinal) {
                var resultText = e.results[0][0].transcript

                content.innerHTML += '<div>' + resultText + '</div>';

                emotionRecognitionFromText(resultText)
            }
        }

        speech.onend = () => {
            speech.start()
        };
    })

    return (
        <div>
            <button id="btn">start</button>
            <div id="content"></div>
            <h1>{expressions}</h1>
        </div>
    )
}