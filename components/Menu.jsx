import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import styles from "../styles/Menu.module.css";

export default function Menu(props) {
  const { t } = useTranslation();
  const router = useRouter();

  const changeLang = () => {
    router.push(router.asPath, router.asPath, { locale: "uz" });
  };
  return (
    <div className={styles.menu}>
      <div className={styles.menuTabs}>
        <div className={styles.menuTab}>Maktab haqida</div>
        <div className={styles.menuTab}>Yangiliklar</div>
        <div className={styles.menuTab}>Hujjatlar</div>
        <div className={styles.menuTab}>Besh tashabbus</div>
        <div className={styles.menuTab}>Bog'lanish</div>
      </div>
    </div>
  );
}
