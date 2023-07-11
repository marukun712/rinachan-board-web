import * as faceapi from 'face-api.js';
import { useEffect } from 'react';
import { useState } from 'react';

export default function FERpage() {
    const [isExpressionsRecognized, setIsExpressionsRecognized] = useState(false);
    const [expressions, setExpressions] = useState("neutral");

    useEffect(() => {
        const video = document.getElementById("video");

        async function loadModel() {
            await faceapi.nets.tinyFaceDetector.loadFromUri("./") //顔検出model
            await faceapi.nets.faceExpressionNet.loadFromUri("./") //表情認識model
        }

        //カメラ映像の認識を開始
        function startVideo() {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then(function (stream) {
                    video.srcObject = stream;
                })
                .catch(function (err) {
                    console.error(err);
                });
        }

        video.addEventListener("play", async () => {
            async function detectExpressions() {
                try {
                    //表情認識を開始
                    const detectionsWithExpressions = await faceapi
                        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
                        .withFaceExpressions();

                    //表情オブジェクトを配列に変換
                    var expressionsArray = Object.entries(detectionsWithExpressions[0].expressions)

                    //スコアが高い順にソート
                    expressionsArray.sort((a, b) => {
                        return b[1] - a[1]
                    })

                    //感情を取得
                    var expressions = expressionsArray[0][0]

                    setExpressions(expressions)
                    setIsExpressionsRecognized(true)

                } catch (err) {
                    setIsExpressionsRecognized(false)
                }

                requestAnimationFrame(detectExpressions)
            }

            detectExpressions();
        });

        loadModel();

        startVideo();
    });

    return (
        <div>
            <h1 className='px-10'>{isExpressionsRecognized ? expressions : "表情を認識中..."}</h1>

            <video id="video" width={500} height={500} autoPlay muted className='hidden'></video>
            <img src={`/images/rinachan-board-${expressions}.png`} width={1000} height={1000} alt='rinachan-board' className='m-auto'></img>
        </div >
    )
}
