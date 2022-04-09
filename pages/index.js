import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/Layout";
import s from "../styles/Home.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import HeroImg from "../public/Media/heroImg.svg";

export default function Home() {
  const { t } = useTranslation();

  const router = useRouter();

  const changeLang = () => {
    router.push(router.asPath, router.asPath, { locale: "en" });
  };

  return (
    <Layout className={s.container}>
      <div className={s.heroImageDiv}>
        <Image
          src={HeroImg}
          className={s.HeroImg}
          alt=""
          layout="fill"
        />
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
