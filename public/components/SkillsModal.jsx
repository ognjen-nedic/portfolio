import React from 'react'
import { Steps, Typography, Collapse } from 'antd'
import { AiOutlineClose } from "react-icons/ai"

const SkillsModal = () => {
  const { Title, Paragraph, Text, Link } = Typography;
  const { Panel } = Collapse;
  return (
    <>    
      <Title level={4}>Tehničke veštine</Title>
      <Collapse accordion={true} expandIconPosition="justify">
        <Panel header={["JavaScript", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "" }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="1">
          <Paragraph style={{ textAlign: "justify" }}>
            JavaScript jezik kao osnova najpopularnijih rešenja za internet stranice je svakako nešto na čemu mi je fokus bio i na 
            početku, i ostao i dalje. Verujem da više nisam na potpuno početničkom nivou, već na osrednjem, jer uspevam da primenim 
            metode za rešavanje mnogih 'ivičastih' (eng. edge) problema, kao i zbog činjenice da sam samouveren u radu sa klasama, 
            objektima, asinhronim funkcijama...
          </Paragraph>
        </Panel>
        <Panel header={["React", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="2">
          <Paragraph style={{ textAlign: "justify" }}>
            React je opširana biblioteka u kojoj svaki put pronađem nove, neistražene funkcionalnosti. Budući da nemam uvid u potpunu 
            njegovu upotrebu, stečem utisak da sam još uvek na početku. Omiljena React funkcionalnost je upravljanje state-ovima, što 
            sam zavoleo jednom prilikom kada sam hteo saznati kako su stariji programeri rešavali isti problem (P.S. definitivno mi se 
            ne sviđa).
          </Paragraph>
          <Paragraph style={{ textAlign: "justify" }}>
            Osim toga, React ima dosta dobru zajednicu u kojoj pronalazim odgovore na pitanja koje imam. Upravo ova popularnost React 
            biblioteke je zašto želim da se vratim radu u njoj.
          </Paragraph>
        </Panel>
        <Panel header={["NextJS", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="3">
          <Paragraph style={{ textAlign: "justify" }}>
            NextJS vidim kao produžetak React-a, i u ličnim projektima preferiram da koristim njega, jer kao Framework (nasuprot React-a
            koji je biblioteka) vrlo elegantno rešava problem navigacije kroz sajt. Međutim, svestan sam da u organizacijama nema mnogo 
            projekata u održavanju koji se zasnivaju na NextJS.
          </Paragraph>
          <Paragraph style={{ textAlign: "justify" }}>
            Jasno mi je da je poslednja verzija NextJS-a u mnogim segmentima drugačija od prethodne, te skrećem pažnju da ... ja obraćam pažnju
            na taj detalj.
          </Paragraph>
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["Cypress", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="13">
          Sa Cypress-om sam se upoznao dok sam radio u ConCordSoft kompaniji koja je pokušavala da uvede TDD (Test Driven Development).
          Smatram da sam se uspešno snašao u radu sa njim, međutim, QA nije pravac u kojem bih hteo da nastavim svoju karijeru.
          Iako imam tendencije ka QA, verujem da posedujem potencijal (i odgovarajuću ambiciju) u razvojnoj sferi.
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["Elm", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="4">
          Elm kao programski jezik se kompajluje u JavaScript. Vrlo je povoljan za početnike upravo jer kompajler ispisuje greške u kodu
          pre nego što se on pokrene, te ne postoje 'runtime errors'. 
        </Panel>
        <Panel header={["PHP", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="5">
          
        </Panel>
        <Panel header={["Symfony", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="6">
          
        </Panel>
        <Panel header={["SQL", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="7">
          
        </Panel>
        <Panel header={["MongoDB", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="8">
          
        </Panel>
        <Panel header={["AntDesign", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "" }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="12">
          
        </Panel>
        <Panel header={["Jira katalog", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "" }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="9">
          
        </Panel>
        <Panel header={["Figma", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="10">
          
        </Panel>
        <Panel header={["Adobe katalog", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="11">
          
        </Panel>
      </Collapse>
      <Title level={4}>Lične veštine</Title>
      <Collapse accordion={true}>
        <Panel header="Orijentisanost ka detaljima" key="1">
            
        </Panel>
        <Panel header="" key="2">
            
        </Panel>
      </Collapse>
    </>
  )
}

export default SkillsModal