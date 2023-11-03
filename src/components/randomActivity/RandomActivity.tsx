import { FC, useEffect, useState } from "react";
import Activity from "./types/Activity";
import MyButton from "../myButton/MyButton";
import { link } from "fs";
// import cn from 'classnames'
// import styles from './RandomActivity.module.css'

const RandomActivity: FC = () => {
  const initialValue: Activity = {
    accessibility: 0,
    activity: "",
    key: "",
    link: "",
    participants: 0,
    price: 0,
    type: "",
  };

  const [activity, setActivity] = useState<Activity>(initialValue);
  async function loadActivity(): Promise<void> {
    const res = await fetch("https://www.boredapi.com/api/activity");
    const data = await res.json();
    setActivity(data);
  }
  useEffect(() => {
    loadActivity();
  }, []);

  return (
    <div>
      <h1>RandomActivity</h1>
      <p>Try: {activity.activity}</p>

      {activity?.link && (
        <p>
          To learn more:{" "}
          <a target="_blank" href={activity.link} rel="noreferrer">
            {activity.link}
          </a>
        </p>
      )}
      <MyButton onClick={loadActivity} text="new Activity!" />
    </div>
  );
};

export default RandomActivity;
