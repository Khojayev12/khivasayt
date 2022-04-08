import Head from 'next/head'
import { Layout } from '../components/Layout'
import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function Home() {
  const { t } = useTranslation();

  const router = useRouter();

  const changeLang = () => {
    router.push(router.asPath, router.asPath, { locale: 'en' });
  }

  return (
    <Layout className={styles.container}>
     <h1> Hello World!</h1>
     <button onClick={changeLang}>Change</button>
     <h2>{t('hi')}</h2>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})