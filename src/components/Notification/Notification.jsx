import React, { Component } from "react";
import PropTypes from "prop-types";
import css from "./Notification.module.css";

class Notification extends Component {
  render({ message} = this.props) {
    return (
      <div className="notification">
        <p className={css.message}>{message}</p>
      </div>
    );
  }
}


Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notification;