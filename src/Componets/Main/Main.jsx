import React, { useContext } from 'react';
import './main.css';
import { assets } from '../../assets/assets';
import { context } from '../../Context/Context';



const Main = () => {
    const { Input, setInput, onSent, resultData, showResult, resultSearch, loading } = useContext(context);
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-container">
                {!showResult ? <>
                    <div className="greet">
                        <p><span>Hello, Developer ALi Atef</span></p>
                        <p>How Can I help you today?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest beautiful places to see on an upcoming road trip</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Briefly summarize this concept: urban planning</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Brainstorm team bonding activities for our work retreat</p>
                            <img src={assets.message_icon} alt="" />
                        </div>
                        <div className="card">
                            <p>Tell me about React js and React native</p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                    </div>
                </> : <div className='result'>
                    <div className='result-title'>
                        <img src={assets.user_icon} alt="" />
                        <p>{resultSearch}</p>
                    </div>
                    <div className='result-data'>
                        <img src={assets.gemini_icon} alt="" />
                        {loading ? <div className='looder'>
                            <div id="wifi-loader">
                                <svg class="circle-outer" viewBox="0 0 86 86">
                                    <circle class="back" cx="43" cy="43" r="40"></circle>
                                    <circle class="front" cx="43" cy="43" r="40"></circle>
                                    <circle class="new" cx="43" cy="43" r="40"></circle>
                                </svg>
                                <svg class="circle-middle" viewBox="0 0 60 60">
                                    <circle class="back" cx="30" cy="30" r="27"></circle>
                                    <circle class="front" cx="30" cy="30" r="27"></circle>
                                </svg>
                                <svg class="circle-inner" viewBox="0 0 34 34">
                                    <circle class="back" cx="17" cy="17" r="14"></circle>
                                    <circle class="front" cx="17" cy="17" r="14"></circle>
                                </svg>
                                <div class="text" data-text="Searching"></div>
                            </div>
                        </div> : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>}

                    </div>
                </div>}
                <div className="main-button">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={Input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="button-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
