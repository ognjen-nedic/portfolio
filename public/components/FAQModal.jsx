import { Collapse, Typography } from 'antd'
import React from 'react'
import {  useTranslation } from "next-export-i18n";

const FAQModal = () => {
  const { Title, Paragraph, Text, Link } = Typography;
  const { Panel } = Collapse

  const { t } = useTranslation();

  return (
    <>
      <Collapse>
        <Panel header={t('FAQModal.firstQuestion.title')} key="1">
          <Paragraph style={{ textAlign: 'justify' }}>
            {t('FAQModal.firstQuestion.paragraphOne')}
          </Paragraph>
          <Paragraph style={{ textAlign: 'justify' }}>
            {t('FAQModal.firstQuestion.paragraphTwo')}
          </Paragraph>
          <Paragraph style={{ textAlign: 'justify' }}>
            {t('FAQModal.firstQuestion.paragraphThree')}
          </Paragraph>
          <Paragraph style={{ textAlign: 'justify' }}>
            {t('FAQModal.firstQuestion.paragraphFour')}
          </Paragraph>
        </Panel>
        <Panel header={t('FAQModal.secondQuestion.title')} key="2">
          <Paragraph style={{ textAlign: 'justify' }}>
            {t('FAQModal.secondQuestion.paragraphOne')}
          </Paragraph>
          <Paragraph style={{ textAlign: 'justify' }}>
            {t('FAQModal.secondQuestion.paragraphTwo')}
          </Paragraph>
          <Paragraph style={{ textAlign: 'justify' }}>
            {t('FAQModal.secondQuestion.paragraphThree')}
          </Paragraph>
          <Paragraph style={{ textAlign: 'justify' }}>
            {t('FAQModal.secondQuestion.paragraphFour')}
          </Paragraph>
        </Panel>
        <Panel header={t('FAQModal.thirdQuestion.title')} key="3">
          <Paragraph style={{ textAlign: 'justify' }}>
            {t('FAQModal.thirdQuestion.paragraphOne')}
          </Paragraph>
        </Panel>
        <Panel header={t('FAQModal.fourthQuestion.title')} key="4">
          <Paragraph style={{ textAlign: 'justify' }}>
            {t('FAQModal.fourthQuestion.paragraphOne')}
          </Paragraph>
        </Panel>
        <Panel header={t('FAQModal.fifthQuestion.title')} key="5">
          <Paragraph style={{ textAlign: 'justify' }}>
            {t('FAQModal.fifthQuestion.paragraphOne')}
          </Paragraph>
          <Paragraph style={{ textAlign: 'justify' }}>
            {t('FAQModal.fifthQuestion.paragraphTwo')}
          </Paragraph>
        </Panel>
      </Collapse>
    </>
  )
}

export default FAQModal