import React from 'react'
import { useState, useEffect } from 'react'
import { Card, Space } from 'antd'
import { RxQuestionMarkCircled, RxExternalLink } from "react-icons/rx"
import { Typography } from "antd"
import {  useTranslation } from "next-export-i18n";

const ProjectsCarousel = () => {
  const { Link } = Typography;
  const { Meta } = Card;
  
  const { t } = useTranslation();

  return (
    <Space className="overflowScroll">
      <Card
      style={{ width: 300 }}
      cover={
          <img
            alt="astrology site splash photo"
            src="/portfolio/astrology-card-pic.jpg"
          />
        }
      actions=
      {
        [
          <RxQuestionMarkCircled />
          , <Link href="https://ognjen-nedic.github.io/astrology/" target="_blank"><RxExternalLink /></Link>
        ]
      }
      >
      <Meta 
        title={t('astrology')}
      />
      </Card>
    </Space>
  )
}

export default ProjectsCarousel