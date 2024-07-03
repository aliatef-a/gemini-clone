import React, { useContext, useState } from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { context } from "../../Context/Context";

const Sidebar = () => {
    const [extended, setextended] = useState(false);

    const { newChat , onSent, recentSearch, setResultSearch ,setRececntSearch} = useContext(context);


    return (
        <div className="sidebar">
            <div className="top">
                <img
                    onClick={() => setextended((perv) => !perv)}
                    className="menu"
                    src={assets.menu_icon}
                />
                <div onClick={() => newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ? (
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {recentSearch.map((recent) => {
                            return (
                                <div className="recent-entry">
                                    <img src={assets.message_icon} alt="" />
                                    <p>{recent.slice(0 ,18)}</p>
                                </div>
                            );
                        })}
                    </div>
                ) : null}
            </div>
            <div className="bottom">
                <div className="bottom-items recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-items recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-items recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Setting</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
