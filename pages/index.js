import Head from 'next/head'
import { Layout } from '../components/Layout'
import styles from '../styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <Layout className={styles.container}>
     <h1> Hello World!</h1>
     <h2>{t('hi')}</h2>
    </Layout>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
})