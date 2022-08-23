import React from "react";
import PropTypes from "prop-types";
import css from "./StatisticsSection.module.css";

function StatisticsSection({ title, children }) {
    return (<section className={css.container}>
        {title && <h2 className={css.title}>{title}</h2>}
        {children}
    </section>)      
}

StatisticsSection.propTypes = {
    title: PropTypes.string,
};




export default StatisticsSection;