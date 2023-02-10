import React from 'react'
import { Steps, Typography, Collapse } from 'antd'
import { AiOutlineClose } from "react-icons/ai"
import {  useTranslation } from "next-export-i18n";

const SkillsModal = () => {
  const { Title, Paragraph, Text, Link } = Typography;
  const { Panel } = Collapse;

  const { t } = useTranslation();

  return (
    <>    
      <Title level={4}>{t('skillsModal.hardSkills')}</Title>
      <Collapse accordion={true} expandIconPosition="justify">
        <Panel header={["JavaScript", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "" }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="1">
          <Paragraph style={{ textAlign: "justify" }}>
            {t('skillsModal.javaScriptParagraph')}
          </Paragraph>
        </Panel>
        <Panel header={["React", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="2">
          <Paragraph style={{ textAlign: "justify" }}>
            {t('skillsModal.reactParagraphOne')}
          </Paragraph>
          <Paragraph style={{ textAlign: "justify" }}>
            {t('skillsModal.reactParagraphTwo')}
          </Paragraph>
        </Panel>
        <Panel header={["NextJS", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="3">
          <Paragraph style={{ textAlign: "justify" }}>
            {t('skillsModal.nextJSParagraphOne')}
          </Paragraph>
          <Paragraph style={{ textAlign: "justify" }}>
            {t('skillsModal.nextJSParagraphTwo')}
          </Paragraph>
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["Cypress", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="13">
          {t('skillsModal.cypressParagraph')}
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["Elm", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="4">
          {t('skillsModal.elmParagraph')}
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["PHP", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="5">
          {t('skillsModal.phpParagraph')}
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["Symfony", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="6">
          {t('skillsModal.symfonyParagraph')}
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["SQL", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="7">
          {t('skillsModal.sqlParagraph')}
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["MongoDB", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="8">
          {t('skillsModal.mongoDBParagraph')}
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["AntDesign", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "" }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="12">
          {t('skillsModal.antDesignParagraph')}
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={[`${t('skillsModal.atlassianTitle')}`, <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "" }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="9">
          {t('skillsModal.atlassianParagraph')}
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["Figma", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="10">
          {t('skillsModal.figmaParagraph')}
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={[`${t('skillsModal.adobeTitle')}`, <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="11">
          {t('skillsModal.adobeParagraph')}
        </Panel>
      </Collapse>
      <Title level={4}>{t('skillsModal.softSkills')}</Title>
      <Collapse accordion={true}>
        <Panel style={{ textAlign: "justify" }} header={t('skillsModal.communicativenessTitle')} key="1">
            {t('skillsModal.communicativenessParagraph')}
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={t('skillsModal.independenceTitle')} key="2">
            {t('skillsModal.independenceParagraph')}
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={t('skillsModal.learningTitle')} key="3">
            {t('skillsModal.learningParagraph')}
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={t('skillsModal.prioritizationTitle')} key="4">
            {t('skillsModal.prioritizationParagraph')}
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={t('skillsModal.adaptabilityTitle')} key="5">
            {t('skillsModal.adaptabilityParagraph')}
        </Panel>
      </Collapse>
    </>
  )
}

export default SkillsModal