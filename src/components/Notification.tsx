import React from "react";
import styles from "./Notification.module.css";
import { useEffect } from "react";
import { json } from "stream/consumers";
type Props = {
  user: {
    Author: string;
    description: string;
    message?: string;
    link?: string;
    linkSrc?: string;
    createdAt: string;
    picture?: string;
    profileImgSrc: string;
    checked: string;
  };
};
const Notification = (props: Props) => {
  return (
    <div
      className={
        styles.Container +
        (JSON.parse(props.user.checked) ? " " + styles.active : "")
      }
    >
      <img src={props.user.profileImgSrc} alt="" className={styles.Profile} />
      <div className={styles.InnerContainer}>
        <div className={styles.details}>
          <a href="" className={styles.Author}>
            {props.user.Author}
            &nbsp;
          </a>
          <span className={styles.Description}>
            {props.user.description}
            {!props.user.link && JSON.parse(props.user.checked) ? (
              <span className={styles.Checked}></span>
            ) : null}
          </span>
          {props.user.link && (
            <span>
              <a href={props.user.linkSrc}>&nbsp;{props.user.link}</a>
              {JSON.parse(props.user.checked) && (
                <span className={styles.Checked}></span>
              )}
            </span>
          )}{" "}
          <p className={styles.CreatedAt}>{props.user.createdAt}</p>
          {props.user.message && (
            <div className={styles.Message}>{props.user.message}</div>
          )}
        </div>

        {props.user.picture && (
          <div className={styles.InnerHolder}>
            <img
              className={styles.InnerPicture}
              src={props.user.picture}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Notification;
