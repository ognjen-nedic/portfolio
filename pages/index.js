import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { DatePicker, Layout, Menu } from 'antd';
import React, { useState } from 'react';
const { Header, Sider, Content } = Layout;
import Head from 'next/head'
import Image from 'next/image';

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Head>
        <title>Ognjen Nedić | Portfolio & CV</title>
        <meta name="description" content="Sajt koji sadrži portfolio i poslovne informacije Ognjena Nedić."></meta>
        <meta property="og:title" content="Ognjen Nedić | Portfolio & CV" key="title" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Dobrodošli na moju ličnu veb stranicu! Ovde možete pronaći informacije o mom radnom iskustvu, obrazovanju i veštinama. Uključio sam svoje portfolio sajtove tako da možete pogledati neke od mojih prethodnih projekata. Nadam se da ćete uživati u poseti."></meta>
        <meta property="og:image" content="/portfolio/og-image-portfolio.jpg" />
        <meta property="og:url" content="ognjen-nedic.com/portfolio" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
      </Head>
      <Layout className="layout">

      </Layout>
    </>
  )
}