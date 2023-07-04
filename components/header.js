import { useState } from "react"

export default function Header(props) {
    const [active, setActive] = useState(false);

    //感情分析モードをカメラに変更
    function changeCameraMode() {
        props.changeEmotionRecognitionMode('camera')
    }

    //感情分析モードをマイクに変更
    function changeMicMode() {
        props.changeEmotionRecognitionMode('mic')
    }

    //ヘッダーアイコンの表示切替
    function toggleVisibilityIcon() {
        setActive(!active)
    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
            </div>

            <div className={active ? "animate-slide-bck-left avater px-4" : "animate-slide-bck-right avater px-4"}>
                <div className="w-12 h-12 rounded-full">
                    <button onClick={changeCameraMode}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
                            <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className={active ? "animate-slide-bck-left avater px-4" : "animate-slide-bck-right avater px-4"}>
                <div className="w-12 h-12 rounded-full">
                    <button onClick={changeMicMode}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className={active ? "animate-slide-bck-left avater px-4" : "animate-slide-bck-right avater px-4"}>
                <div className="w-12 h-12 rounded-full">
                    <button onClick={() => window.usage_modal.showModal()}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label className="btn btn-circle swap swap-rotate px-4">

                        <input type="checkbox" onClick={toggleVisibilityIcon} />

                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                    </label>
                </div>
            </div>

            <dialog id="usage_modal" className="modal modal-bottom sm:modal-middle">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg text-center">使い方(usage)</h3>
                    <p className="py-4"><span className="font-bold">璃奈ちゃんボード にっこりん! web版璃奈ちゃんボードへようこそ!</span><br></br>このwebサイトでは以下の2種類の方法で感情分析を行い、ボードの表情が読み取った感情に合わせた表情に変化します。</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-12">
                        <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <p className="py-4"><span className="font-bold">表情認識モード</span>:webカメラから表情を読み取り、ボードに反映します。</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                    </svg>
                    <p className="py-4"><span className="font-bold">音声認識モード</span>:音声入力から感情分析を行い、ボードに反映します。</p>

                    <div className="modal-action">
                        <button className="btn">Close</button>
                    </div>
                </form>
            </dialog>

        </div>
    )
}