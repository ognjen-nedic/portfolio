import { Avatar, Button, FloatButton, Layout, Space, Switch, Tooltip, Typography, Modal } from 'antd';
import { Grid } from 'antd';
import { UserOutlined, FileTextOutlined, MailOutlined, PhoneFilled } from '@ant-design/icons';
import { ConfigProvider, theme } from 'antd'
import React, { useState } from 'react';
const { Header, Content, Footer } = Layout;
import Head from 'next/head'
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs"
import { GrDocumentPdf } from "react-icons/gr"
import { VscFilePdf } from "react-icons/vsc"
import ExperienceModal from '../public/components/ExperienceModal';
import SkillsModal from '../public/components/SkillsModal';
import FAQModal from '../public/components/FAQModal';

export default function Home() {
  const { Title, Paragraph, Text, Link } = Typography;
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isExperienceModalOpen, setIsExperienceModalOpen] = useState(false);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState(false);
  const [isFAQModalOpen, setIsFAQModalOpen] = useState(false);


  const changeThemeOnClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };
  

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
      <ConfigProvider 
        theme={{
          token: {
            "colorPrimary": "#1abac4"
            , "wireframe": true
            , "colorSuccess": "#82ff44"
            , "colorWarning": "#fa6014"
            , "colorError": "#ff0004"
            , "colorInfo": "#1172f9"
          },
          algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <Layout className="layout">
          <Header className="header">
          <h4 style={{ color: "white" }}>Portfolio & CV</h4>
          <Switch 
              checkedChildren={<BsFillSunFill />}
              unCheckedChildren={<BsFillMoonFill />} 
              onChange={changeThemeOnClick}
            />
          </Header>
          <Content className="content">
            <Space 
              direction={ Object.entries(screens)[1]?.includes(true) ? "horizontal" : "vertical" }
              align="center"
              className="nameAndPicture" >
              <Avatar  
                icon={<UserOutlined />}
                size={{ xs: 100, sm: 100, md: 100, lg: 200, xl: 200, xxl: 200 }}
                src="/avatar-picture.jpg"
                style={{ border : "solid 5px #1abac4" }}
              />
              <Space align="center" direction="vertical">
                <Title 
                style={{ margin : 0 }}
                level={1}
                >
                  Ognjen Nedić
                </Title>
                <Space direction="horizontal">
                  <Tooltip title="LinkedIn">
                    <Button 
                      shape="circle"
                      type="primary"
                      icon=<FaLinkedinIn />
                      href="https://www.linkedin.com/in/ognjen-nedi%C4%87/"
                      target='_blank'
                      size='large'
                    />
                  </Tooltip>
                  <Tooltip title="CV">
                    <Button 
                      shape="circle"
                      type="primary"
                      icon=<GrDocumentPdf className="pdfIcon" />
                      size='large'
                    />
                  </Tooltip>
                  <Tooltip title="ognjen.n94@gmail.com">
                    <Button 
                      shape="circle"
                      type="primary"
                      icon=<MailOutlined />
                      size='large'
                    />
                  </Tooltip>
                  <Tooltip title="+38163588547">
                    <Button 
                      shape="circle"
                      type="primary"
                      icon=<PhoneFilled />
                      size='large'
                      href="tel:+38163588549"
                    />
                  </Tooltip>
                </Space>
              </Space>
            </Space>
            <Space 
              className={ Object.entries(screens)[1]?.includes(true) ? "expSkillFAQButtons" : "expSkillFAQButtons overflowScroll" }
              size="large">
              <Button
                type="primary"
                block
                onClick={() => setIsExperienceModalOpen(true)}
              >
                Iskustvo
              </Button>
              <Button
                type="primary"
                block
                onClick={() => setIsSkillsModalOpen(true)}
              >
                Veštine
              </Button>
              <Button
                type="primary"
                block
                onClick={() => setIsFAQModalOpen(true)}
              >
                Česta pitanja
              </Button>
            </Space>
            <Space>
              <Title level={3}>Projekti</Title>
            </Space>
          </Content>
          <Footer style={{ color: theme.useToken().colorPrimary }} className="footer">
            <Paragraph>2023 | Ognjen Nedić</Paragraph>
          </Footer >
          <FloatButton 
            tooltip={Object.entries(screens)[1]?.includes(true) ? <span>Skini CV u PDF formatu</span> : <span>Pozovi</span>}
            type="primary"
            icon={Object.entries(screens)[1]?.includes(true) ? <GrDocumentPdf className="pdfIcon" /> : <PhoneFilled /> }
            href={Object.entries(screens)[1]?.includes(true) ? "" : "tel:+38163588547" }
            />
        </Layout>
            <Modal title="Iskustvo" open={isExperienceModalOpen} onCancel={() => setIsExperienceModalOpen(false)} footer={null}>
              <ExperienceModal />
            </Modal>
            <Modal title="Veštine" open={isSkillsModalOpen} onCancel={() => setIsSkillsModalOpen(false)} footer={null}>
              <SkillsModal />
            </Modal>
            <Modal title="Često postavljana pitanja" open={isFAQModalOpen} onCancel={() => setIsFAQModalOpen(false)} footer={null}>
              <FAQModal />
            </Modal>
      </ConfigProvider>
    </>
  )
}