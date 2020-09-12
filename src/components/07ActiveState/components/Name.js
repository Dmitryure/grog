import React, { useState } from "react";
import style from "./Name.module.css";

export const Name = (props) => {
  const { name, func, color } = props;
  return color ? (
    <div
      className={style.active}
      onClick={() => {
        func(name);
      }}
    >
      {name}
    </div>
  ) : (
    <div
      className={style.notActive}
      onClick={() => {
        func(name);
      }}
    >
      {name}
    </div>
  );
};
