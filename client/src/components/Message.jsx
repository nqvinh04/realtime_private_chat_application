import React from "react";
import "../style.scss";

const Message = () => {
    return (
        <div className="message owner">
            <div className="messageInfo">
                <img src="https://images.pexels.com/photos/11500401/pexels-photo-11500401.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                     alt=""
                />
                <span>Just now</span>
            </div>
            <div className="messageContent">
                <img src="https://images.pexels.com/photos/11500401/pexels-photo-11500401.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                     alt=""
                />
                <p>Content</p>
            </div>
        </div>
    );
};

export default Message;