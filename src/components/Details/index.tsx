import styles from './Details.module.css';

interface DetailsProps {
  details: string[];
}

const Details: React.FC<DetailsProps> = ({ details }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title} data-testid="details-title">
        <p>Details</p>
      </div>
      <ul className={styles.content} data-testid="details-list">
        {details?.map((detail, i) => (
          <li className={styles.detail} key={`detail-${i}`}>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
