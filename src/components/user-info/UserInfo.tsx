import { useAuth } from "../../context/AuthContext";
import styles from "./UserInfo.module.css";

export const UserInfo = () => {
  const { user } = useAuth();

  if (!user) return null;

  const avatarPath = user.avatar?.tmdb?.avatar_path;
  const avatarUrl = avatarPath
    ? `https://image.tmdb.org/t/p/w45${avatarPath}`
    : null;
  const initials = (user.name || user.username || "?")[0].toUpperCase();

  return (
    <div className={styles.container}>
      {avatarUrl ? (
        <img src={avatarUrl} alt={user.username} className={styles.avatarImg} />
      ) : (
        <div className={styles.avatar}>{initials}</div>
      )}
      <span className={styles.name}>{user.name || user.username}</span>
    </div>
  );
};
