import { Link as ReactLink } from "react-router-dom";
import React from "react";

export default class Link extends React.Component {
  parseTo(to) {
    let parser = document.createElement("a");
    parser.href = to;
    return parser;
  }

  isInternal(to) {
    if (to.indexOf("://") === -1) return true;

    const toLocation = this.parseTo(to);
    return window.location.hostname === toLocation.hostname;
  }

  render() {
    const { to, children, ...rest } = this.props;
    const isInternal = this.isInternal(to);

    if (isInternal) {
      return (
        <ReactLink to={to} {...rest}>
          {children}
        </ReactLink>
      );
    } else {
      return (
        <a href={to} target="_blank" {...rest}>
          {children}
        </a>
      );
    }
  }
}
