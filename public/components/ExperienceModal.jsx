import React from 'react'
import { Card, Typography, Space, Collapse, Steps } from 'antd'
import { IoIosPeople } from "react-icons/io"
import { FaCalendarAlt } from "react-icons/fa"
import { GiMushroomHouse } from "react-icons/gi"
import { BsBuilding } from "react-icons/bs"
import { ImLocation } from "react-icons/im"
import {  useTranslation } from "next-export-i18n";

const ExperienceModal = () => {
  const { Title, Paragraph, Text, Link } = Typography;
  const { Panel } = Collapse

  const { t } = useTranslation();

  return (
    <>
    <Title level={4}>{t('experienceModal.programming')}</Title>
    <Collapse defaultActiveKey={['1']}>
       <Panel header={t('experienceModal.elmProgrammer')} key="1">
        <Paragraph style={{ display : "flex", alignItems : "center" }}><IoIosPeople size="2rem" style={{ marginRight : "7px" }}/>{t('experienceModal.workWithClients')}</Paragraph>
        <Paragraph style={{ display : "flex", alignItems : "center" }}><FaCalendarAlt size="2rem" style={{ marginRight : "7px" }}/> {t('experienceModal.elmProgrammerDuration')}</Paragraph>
        <Paragraph  style={{ display : "flex", alignItems : "center" }} ><GiMushroomHouse size="2rem" style={{ marginRight : "7px" }}/> {t('experienceModal.workFromHome')}</Paragraph>
      </Panel>
      <Panel header="Frontend developer" key="2">
        <Paragraph style={{ display : "flex", alignItems : "center" }}><BsBuilding size="2rem" style={{ marginRight : "7px" }}/> ConCord Soft</Paragraph>
        <Paragraph style={{ display : "flex", alignItems : "center" }}><FaCalendarAlt size="2rem" style={{ marginRight : "7px" }}/> {t('experienceModal.conCordSoftDuration')}</Paragraph>
        <Paragraph style={{ display : "flex", alignItems : "center" }}><ImLocation size="2rem" style={{ marginRight : "7px" }} /> Subotica</Paragraph>
      </Panel>
      <Panel header={t('experienceModal.inspiraInternship')} key="3">
        <Paragraph style={{ display : "flex", alignItems : "center" }}><BsBuilding size="2rem" style={{ marginRight : "7px" }}/> Inspira group</Paragraph>
        <Paragraph style={{ display : "flex", alignItems : "center" }}><FaCalendarAlt size="2rem" style={{ marginRight : "7px" }}/> {t('experienceModal.inspiraDuration')}</Paragraph>
        <Paragraph style={{ display : "flex", alignItems : "center" }}><ImLocation size="2rem" style={{ marginRight : "7px" }} /> Subotica</Paragraph>
      </Panel>
    </Collapse>
    <Title level={4}>Marketing</Title>
    <Collapse >
      <Panel header={t('experienceModal.freelancing')} key="1">
         <Paragraph style={{ display : "flex", alignItems : "center" }}><IoIosPeople size="2rem" style={{ marginRight : "7px" }}/> {t('experienceModal.workWithClients')} </Paragraph>
         <Paragraph style={{ display : "flex", alignItems : "center" }}><FaCalendarAlt size="2rem" style={{ marginRight : "7px" }}/> {t('experienceModal.freelancingDuration')}</Paragraph>
         <Paragraph style={{ display : "flex", alignItems : "center" }}><GiMushroomHouse size="2rem" style={{ marginRight : "7px" }}/> {t('experienceModal.workFromHome')}</Paragraph>
      </Panel>
      <Panel header={t('experienceModal.goodwillPosition')} key="2">
         <Paragraph style={{ display : "flex", alignItems : "center" }}><BsBuilding size="2rem" style={{ marginRight : "7px" }}/> Goodwill Pharma</Paragraph>
         <Paragraph style={{ display : "flex", alignItems : "center" }}><FaCalendarAlt size="2rem" style={{ marginRight : "7px" }}/> {t('experienceModal.goodwillDuration')}</Paragraph>
         <Paragraph style={{ display : "flex", alignItems : "center" }}><ImLocation size="2rem" style={{ marginRight : "7px" }} /> Subotica</Paragraph>
      </Panel>
      <Panel header={t('experienceModal.poshPosition')} key="3">
         <Paragraph style={{ display : "flex", alignItems : "center" }}><BsBuilding size="2rem" style={{ marginRight : "7px" }}/> Posh 33</Paragraph>
         <Paragraph style={{ display : "flex", alignItems : "center" }}><FaCalendarAlt size="2rem" style={{ marginRight : "7px" }}/> {t('experienceModal.poshDuration')}</Paragraph>
         <Paragraph style={{ display : "flex", alignItems : "center" }}><ImLocation size="2rem" style={{ marginRight : "7px" }} /> Subotica</Paragraph>
      </Panel>
    </Collapse>
    </>
  )
}

export default ExperienceModal