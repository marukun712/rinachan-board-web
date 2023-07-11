"use client"
import { useEffect } from "react"

export default function testPage() {
    async function emotionRecognitionFromText() {
        var url = await "https://marukun-dev.com/emotion-api/analyze_emotion"

        var body = await {
            text: "しらけた"
        }

        var headers = await {
            'Content-Type': 'application/json'
        }

        var post = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body),
        });

        var emotionRecognitionResult = await post.json();

        console.log(emotionRecognitionResult)

        var expressionsArray = await Object.entries(emotionRecognitionResult.emotions)

        //スコアが高い順にソート
        await expressionsArray.sort((a, b) => {
            return b[1] - a[1]
        })

        //感情を取得
        var expressions = await expressionsArray[0][0]
    }

    useEffect(() => {
        emotionRecognitionFromText();
    })

    return (
        <div></div>
    )
}