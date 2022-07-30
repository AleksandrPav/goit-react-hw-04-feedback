import React from "react";



const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
        <div>
            <h2>Give feedback</h2>
            {options.map(option => (
                    <div key={option.name}>
                    <button name={option.name} onClick={onLeaveFeedback}>
                        {option.text}
                    </button>
                    </div>
                ))}
        </div>
    );
}

export default FeedbackOptions;