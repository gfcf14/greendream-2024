'use client';

import { useEffect, useState } from 'react';
import styles from './NotFoundContent.module.css';

const NotFoundContent: React.FC = () => {
  const [slidIn, slideIn] = useState(false);
  const [startCountDown, setCountDown] = useState(false);
  const [code, setCode] = useState(404);
  const [shouldAnimate, setAnimate] = useState(false);
  const [fadeWhite, setFadeWhite] = useState(false);

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];

    if (!slidIn) {
      timeouts.push(
        setTimeout(() => {
          slideIn(true);
        }, 500),
      );
    } else if (!startCountDown) {
      timeouts.push(
        setTimeout(() => {
          setCountDown(true);
        }, 2000),
      );
    } else if (code > 200) {
      timeouts.push(
        setTimeout(() => {
          setCode((prevCode) => prevCode - 1);
        }, 12.5),
      );
    } else if (!shouldAnimate) {
      setAnimate(true);
    } else {
      timeouts.push(
        setTimeout(() => {
          setFadeWhite(true);
        }, 5000),
      );
      timeouts.push(
        setTimeout(() => {
          window.location.href = '/';
        }, 10000),
      );
    }

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [code, shouldAnimate, slidIn, startCountDown]);

  const codeStatus =
    code <= 384 && code >= 324
      ? 'warning'
      : code < 324 && code >= 254
        ? 'almost'
        : code < 254 && code >= 200
          ? 'ready'
          : '';

  return (
    <>
      {!fadeWhite && (
        <div
          className={`${styles['text-container']} ${slidIn ? styles.ready : ''}`}
        >
          <div className={`${styles.code} ${styles[codeStatus]}`}>{code}</div>
          <h3 className={styles.text} data-testid="text">
            {`The page you entered doesn't exist. Hyperdrive redirect on 200!`}
          </h3>
        </div>
      )}
      <div className={`${styles.wrapper} ${fadeWhite ? styles.white : ''}`}>
        <div className={styles.scene}>
          <div
            className={`${styles.wrap} ${shouldAnimate ? styles.animate : ''}`}
          >
            <div
              className={`${styles.wall} ${shouldAnimate ? styles.animate : ''} ${styles['wall-right']}`}
            ></div>
            <div
              className={`${styles.wall} ${shouldAnimate ? styles.animate : ''} ${styles['wall-left']}`}
            ></div>
            <div
              className={`${styles.wall} ${shouldAnimate ? styles.animate : ''} ${styles['wall-top']}`}
            ></div>
            <div
              className={`${styles.wall} ${shouldAnimate ? styles.animate : ''} ${styles['wall-bottom']}`}
            ></div>
            <div
              className={`${styles.wall} ${shouldAnimate ? styles.animate : ''} ${styles['wall-back']}`}
            ></div>
          </div>
          <div
            className={`${styles.wrap} ${shouldAnimate ? styles.animate : ''}`}
          >
            <div
              className={`${styles.wall} ${shouldAnimate ? styles.animate : ''} ${styles['wall-right']}`}
            ></div>
            <div
              className={`${styles.wall} ${shouldAnimate ? styles.animate : ''} ${styles['wall-left']}`}
            ></div>
            <div
              className={`${styles.wall} ${shouldAnimate ? styles.animate : ''} ${styles['wall-top']}`}
            ></div>
            <div
              className={`${styles.wall} ${shouldAnimate ? styles.animate : ''} ${styles['wall-bottom']}`}
            ></div>
            <div
              className={`${styles.wall} ${shouldAnimate ? styles.animate : ''} ${styles['wall-back']}`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundContent;
