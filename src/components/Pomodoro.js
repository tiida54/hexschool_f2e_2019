import React from 'react';

import styles from '../scss/Pomodoro.module.scss';

function Pomodoro() {
  return (
    <div className={styles.main_01}>
      <div className={styles.content_left}>
        <form >
          <input type="text" placeholder="Add a new task..." />
          <button>＋</button>
        </form>
        <div>
          <div className={styles.time_head}>
            <div class="current-task__content-wrapper">
              <h2 class="current-task__name">BBQ in the wilderness</h2>
            </div>
          </div>
          <div class="current-task__highlight">
            <mark className={styles.time_countdown}>00:10</mark>
          </div>
        </div>
      </div>
      <div className={styles.content_center}>
        <div className={styles.content_center_player}>
          <svg className={styles.secondCircle} >
            <circle id="secondCircle" cx="50%" cy="50%" r="260px" stroke-width="26px"></circle>
          </svg>
          <div className={styles.secondCenter}></div>
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
