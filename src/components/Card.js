import React from "react";
import "styles/components/Card.scss";
import classNames from "classnames";

export default function Card(props) {
  const cardClass = classNames("card", {
    "card--confirm": props.confirm,
    "card--danger": props.danger,
  });

  return (
    <button className={cardClass} onClick={props.onClick} disabled={props.disabled}>
      {props.children}
    </button>
  );
}
