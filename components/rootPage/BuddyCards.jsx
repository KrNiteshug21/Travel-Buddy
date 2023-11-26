import Image from "next/image";
import styles from "./page.module.css";

const BuddyCards = ({ user }) => {
  return (
    <article className={styles.buddyCard}>
      <Image src={user.profilepic} alt={user.name} width={350} height={300} />
      <div className={styles.buddyCardDesc}>
        <h2>{user.name}</h2>
        <p>{user.desc}</p>
        <p>destination:- {user.destination}</p>
        <p>Travel Month:- {user.month}</p>
        <a href="#">
          <button className={styles.joinBtn}>Join trip</button>
        </a>
      </div>
    </article>
  );
};

export default BuddyCards;
