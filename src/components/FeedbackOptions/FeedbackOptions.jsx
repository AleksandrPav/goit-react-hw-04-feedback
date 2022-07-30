import React from "react";
import css from "./FeedbackOptions.module.css";



const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
        <div className={css.feedback}>
            {options.map(option => (
                    <div className={css.feedback__items}  key={option.name}>
                    <button className={css.feedback__btn} name={option.name} onClick={onLeaveFeedback}>
                        {option.text}
                    </button>
                    </div>
                ))}
        </div>
    );
}

export default FeedbackOptions;