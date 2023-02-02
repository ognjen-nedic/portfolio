import React from 'react'
import { useState, useEffect } from 'react'
import { Card } from 'antd'
import { RxQuestionMarkCircled, RxExternalLink } from "react-icons/rx"
import { Typography } from "antd"

const ProjectsCarousel = () => {
  const { Link } = Typography;
  const { Meta } = Card;
  return (
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
      title="Astrologija"
    />
    </Card>
  )
}

export default ProjectsCarousel