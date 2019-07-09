import React from 'react';

import styles from '../scss/Pomodoro.module.scss';

function Pomodoro() {
  return (
    <div className={styles.main_01}>
      <div className={styles.content_left}>
      <input type="text" className={styles.add_mission} name="addMission" placeholder="add a new mission…"/>
      </div>
      <div className={styles.content_center}>
        <div className={styles.content_center_player}>
          <svg className={styles.secondCircle} >
            <circle id="secondCircle" cx="50%" cy="50%" r="260px" stroke-width="26px"></circle>
          </svg>
          {/* <span id="secondText" class="time">00</span><span class="time-info">s</span> */}
        </div>
      </div>

      <div className={styles.content_right}>
        <div className={styles.content_right_list}>
          <i className="material-icons">list</i>
          <i className="material-icons">insert_chart</i>
          <i className="material-icons">library_music</i>
          <span>POMODORO</span>
        </div>
      </div>

    </div>
  );
}


export default Pomodoro;
