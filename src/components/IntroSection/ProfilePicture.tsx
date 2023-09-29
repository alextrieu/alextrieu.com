import styles from "./ProfilePicture.module.css";

export default function ProfilePicture() {
  return (
    <article className={styles.profileCard}>
      <div className={styles.imageContainer}>
        <img src="https://avatars.githubusercontent.com/u/97376381?v=4" alt="Picture of Alex" />
      </div>
    </article>
  );
}
