import React from 'react'
import { Card, Typography, Space, Collapse, Steps } from 'antd'
import { IoIosPeople } from "react-icons/io"
import { FaCalendarAlt } from "react-icons/fa"
import { GiMushroomHouse } from "react-icons/gi"
import { BsBuilding } from "react-icons/bs"
import { ImLocation } from "react-icons/im"

const ExperienceModal = () => {
  const { Title, Paragraph, Text, Link } = Typography;
  const { Panel } = Collapse
  return (
    <>
    <Title level={4}>Programiranje</Title>
    <Collapse defaultActiveKey={['1']}>
       <Panel header="Elm programer" key="1">
        <Paragraph style={{ display : "flex", alignItems : "center" }}><IoIosPeople size="2rem" style={{ marginRight : "7px" }}/> Rad sa više klijenata</Paragraph>
        <Paragraph style={{ display : "flex", alignItems : "center" }}><FaCalendarAlt size="2rem" style={{ marginRight : "7px" }}/> Oktobar 2022 - trenutno</Paragraph>
        <Paragraph  style={{ display : "flex", alignItems : "center" }} ><GiMushroomHouse size="2rem" style={{ marginRight : "7px" }}/> Rad od kuće</Paragraph>
      </Panel>
      <Panel header="Frontend developer" key="2">
        <Paragraph style={{ display : "flex", alignItems : "center" }}><BsBuilding size="2rem" style={{ marginRight : "7px" }}/> ConCord Soft</Paragraph>
        <Paragraph style={{ display : "flex", alignItems : "center" }}><FaCalendarAlt size="2rem" style={{ marginRight : "7px" }}/> Avgust 2022 - Oktobar 2022</Paragraph>
        <Paragraph style={{ display : "flex", alignItems : "center" }}><ImLocation size="2rem" style={{ marginRight : "7px" }} /> Subotica</Paragraph>
      </Panel>
      <Panel header="Stažiranje" key="3">
        <Paragraph style={{ display : "flex", alignItems : "center" }}><BsBuilding size="2rem" style={{ marginRight : "7px" }}/> Inspira grupa</Paragraph>
        <Paragraph style={{ display : "flex", alignItems : "center" }}><FaCalendarAlt size="2rem" style={{ marginRight : "7px" }}/> Decembar 2021 - Jun 2022</Paragraph>
        <Paragraph style={{ display : "flex", alignItems : "center" }}><ImLocation size="2rem" style={{ marginRight : "7px" }} /> Subotica</Paragraph>
      </Panel>
    </Collapse>
    <Title level={4}>Marketing</Title>
    <Collapse >
      <Panel header="Frilenserski rad" key="1">
         <Paragraph style={{ display : "flex", alignItems : "center" }}><IoIosPeople size="2rem" style={{ marginRight : "7px" }}/> Rad sa više kliejnata</Paragraph>
         <Paragraph style={{ display : "flex", alignItems : "center" }}><FaCalendarAlt size="2rem" style={{ marginRight : "7px" }}/> Mart 2020 - Jun 2021</Paragraph>
         <Paragraph style={{ display : "flex", alignItems : "center" }}><GiMushroomHouse size="2rem" style={{ marginRight : "7px" }}/> Rad od kuće</Paragraph>
      </Panel>
      <Panel header="Marketing asistent" key="2">
         <Paragraph style={{ display : "flex", alignItems : "center" }}><BsBuilding size="2rem" style={{ marginRight : "7px" }}/> Goodwill Pharma</Paragraph>
         <Paragraph style={{ display : "flex", alignItems : "center" }}><FaCalendarAlt size="2rem" style={{ marginRight : "7px" }}/> Mart 2019 - Mart 2020</Paragraph>
         <Paragraph style={{ display : "flex", alignItems : "center" }}><ImLocation size="2rem" style={{ marginRight : "7px" }} /> Subotica</Paragraph>
      </Panel>
      <Panel header="Menadžer društvenih mreža" key="3">
         <Paragraph style={{ display : "flex", alignItems : "center" }}><BsBuilding size="2rem" style={{ marginRight : "7px" }}/> Posh 33</Paragraph>
         <Paragraph style={{ display : "flex", alignItems : "center" }}><FaCalendarAlt size="2rem" style={{ marginRight : "7px" }}/> Mart 2018 - Septembar 2018</Paragraph>
         <Paragraph style={{ display : "flex", alignItems : "center" }}><ImLocation size="2rem" style={{ marginRight : "7px" }} /> Subotica</Paragraph>
      </Panel>
    </Collapse>
    </>
  )
}

export default ExperienceModal