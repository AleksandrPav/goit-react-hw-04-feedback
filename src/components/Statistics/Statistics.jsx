import React from "react";
import css from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, positive, total }) => {
        return (
            <div>
                <h2 className={css.title}>Statistics</h2>
                <table className={css.table}>
                    <tbody className={css.tbody}>
                        <tr className={css.tr}>
                            <td className={css.td}>Good: </td>
                            <td className={css.td_text}>{good}</td>
                        </tr>
                        <tr className={css.tr}>
                            <td className={css.td}>Neutral: </td>
                            <td className={css.td_text}>{neutral}</td>
                        </tr>
                        <tr className={css.tr}>
                            <td className={css.td}>Bad: </td>
                            <td className={css.td_text}>{bad}</td>
                        </tr>
                        <tr className={css.tr}>
                            <td className={css.td}>Total: </td>
                            <td className={css.td_text}>{total}</td>
                        </tr>
                        <tr className={css.tr}>
                            <td className={css.td}>Positive feedback: </td>
                            <td className={css.td_text}>{positive}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
}
export default Statistics;