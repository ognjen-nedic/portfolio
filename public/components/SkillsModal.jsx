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
          JavaScript jezik je osnova mnogih od najpopularnijih rešenja za internet stranice i fokus mi je uvek bio na ovom području. Smatram da sam napredovao sa početničkog nivoa i sada se nalazim na srednjem nivou, što je u velikoj meri zbog sposobnosti da primenjujem različite metode za rešavanje složenih problema, kao i zahvaljujući samouverenosti u radu sa klasama, objektima i asinhronim funkcijama.
          </Paragraph>
        </Panel>
        <Panel header={["React", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="2">
          <Paragraph style={{ textAlign: "justify" }}>
          React je kompleksna biblioteka sa meni mnogim neistraženim funkcionalnostima koje stalno otkrivam. Unatoč nedostatku potpunog uvida u njegovu upotrebu, još uvek smatram da sam na početku svog puta. Moj najomiljeniji aspekt React-a jeste upravljanje state-ovima, što sam zavoleo kada sam tražio rešenje za probleme koji su ranije koristili stariji programeri. Moram napomenuti da mi stariji način rešavanja nije po volji.
          </Paragraph>
          <Paragraph style={{ textAlign: "justify" }}>
            Osim toga, React ima veliku zajednicu u kojoj pronalazim odgovore na pitanja koje imam. Upravo ova popularnost React biblioteke je zašto želim da se vratim radu u njoj.
          </Paragraph>
        </Panel>
        <Panel header={["NextJS", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="3">
          <Paragraph style={{ textAlign: "justify" }}>
          NextJS smatram proširenjem React-a i volim ga koristiti u svojim ličnim projektima zbog njegove elegantne navigacije kroz sajt kao Framework (u poređenju sa React-om koji funkcioniše kao biblioteka). Ipak, svestan sam da organizacije ne koriste NextJS u velikom broju projekata koje održavaju.
          </Paragraph>
          <Paragraph style={{ textAlign: "justify" }}>
            Jasno mi je da je poslednja verzija NextJS-a u mnogim segmentima drugačija od prethodne, te skrećem pažnju da sam spreman prilagoditi se verziji koju kompanija koristi.
          </Paragraph>
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["Cypress", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="13">
        Upoznao sam se sa Cypress-om tokom svog rada u ConCordSoft kompaniji, gde je bilo implementirano TDD (Test Driven Development). Smatram da sam uspešno savladao rad sa Cypress-om, iako QA nije područje karijere u kojem želim da se razvijam. Iako imam sklonost prema QA, verujem da posedujem potencijal, znam da posedujem i ambiciju za zaduženja u razvojnoj sferi.
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["Elm", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="4">
          Elm kao programski jezik se kompajluje u JavaScript. Vrlo je povoljan za početnike upravo jer kompajler ispisuje greške u kodu pre nego što se on pokrene, te ne postoje 'runtime errors'. Međutim, krenuo sam u pravcu napuštanja razvoja i rada u ovom jeziku iz mnogo razloga. Najbitniji je nedostatak povoljne dokumentacije, kao i mali učinak korišćenja na tržištu razvoja web stranica i aplikacija.
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["PHP", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="5">
          Uz PHP sam shvatio zašto je nakon učenja jednog jezika (u mom slučaju JS) lakše naučiti sledeći - principi u pisanju koda ostaju isti. Kada sam ga učio, stekao sam utisak da je PHP jezik za backend deo razvoja web sajtova i aplikacija, i nisam želeo da investiram energiju učenja u većoj meri.
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["Symfony", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="6">
          Omiljena funkcionalnost Symfony framework-a jesu entiteti. Njihovo upravljanje i organizacija baze podataka na taj način se meni čini intuitivnom, te sam osnove Symfony-ja savladao vrlo brzo. Međutim, nisam posvetio dovoljno vremena i truda da zaista razumem zašto mi je ovakva organizacija backend-a intuitivnija nego oranizacija u tabelama i relacijama putem njih.
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["SQL", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="7">
          SQL kao upravljanje bazom putem tabela me je mnogo puta podsetio na Excel tabele. Njih sam u prethodnim poslovima, a i tokom studija, koristio u velikoj meri (jedan od mojih prvih poslova tokom studija bio je data entry). Možda isuviše često sam prilikom vežbanja SQL-a koristio jednostavan papir i olovku kako bih tabele i relacije iscrtao, a zanemario tu gotovo istu funkcionalnost koju pruža MySQL. Stavljanje tih relacija u fizički svet mi je mnogo puta pomoglo.
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["MongoDB", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="8">
          MongoDB ima drugačiju terminologiju u odnosu na SQL, ali je logika identična. Priznajem da sam isuviše puta nego što bi trebalo bio tvrdoglav i pokušavao sam da rešim problem u komunikaciji sa bazom umesto da se obratim starijem kolegi, ili kolegi kojem je specijalnost rad u MongoDB. Ovo je greška koju neću ponavljati ubuduće!
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["AntDesign", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "" }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="12">
          AntDesign koristim kako bih izgradio i ovaj sajt! Međutim, njega sam odabrao kao demonstraciju da sam spreman da koristim već gotova rešenja komponenti u NextJS/React, prilagođavam se istima i oblikujem ih da odgovaraju onome što je zamišljeno. Verujem da mnoge kompanije imaju svoj 'boilerplate' koji primene na svakom projektu, te gotove komponente treba koristiti u primenjivanju klijentovih zahteva.
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["Atlassian katalog", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "" }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="9">
          Jira katalog alata (Trello, Jira, Confluence) sam u velikoj meri koristio i cenim njihovu vrednost u asihronom radu u timovima u različitim vremenskim zonama. Trello koristim i za personalne potrebe, ne samo u programiranju (jedan od mojih hobija je kreativno pisanje, i vrlo je koristan alat pri organizovanju informacija u worldbuilding-u). Jiru i Confluence sam koristio i u ulozi QA (koja je imala i delove projekt menadžmenta), i nakon što sam savladao osnove, smatram da je i Confluence moćan alat za kolaboraciju.
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["Figma", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="10">
          Možda ocena 'veštine' upravljanja Figmom nije potrebna jer u ovom kontekstu moje znanje predstavljam isključivo iz perspektive programera. Iako mi dizajn nije stran, nisam do sad koristio Figmu za te potrebe, a nadam se ni da neću jer moje ambicije ne idu u tom smeru.
        </Panel>
        <Panel style={{ textAlign: "justify" }} header={["Adobe katalog", <Steps size="small" responsive={false} current={2} items={[ { title : "" }, { title : "", icon : <AiOutlineClose /> }, { title : "", icon : <AiOutlineClose /> } ]}/>]} key="11">
          Podrazumeva PhotoShop, InDesign & Illustrator. Ponekad je dobro znati da pojedinac koji nema nikakva zaduženja u radu sa alatima ipak zna da radi u njima. Ovo je karakteristika manjih agencija (imao sam iskustva sa tim), te smatram da je ispravno što sam odvojio segment i za ove alate.
        </Panel>
      </Collapse>
      <Title level={4}>Lične veštine</Title>
      <Collapse accordion={true}>
        <Panel style={{ textAlign: "justify" }} header="Komunikativnost" key="1">
            Smatram da je vreme kada je stereotip da programeri ne treba da budu komunikativni deo prošlosti. Kompleksni projekti zahtevaju kolaboraciju i otvoren razgovor kako bi svi članovi tima imali isti zaključak po pitanju rokova, zahteva klijenta, očekivanjima i sl. Moja komunikativnost proizilazi delom iz ličnih osobina, a delom iz rada u marketingu, gde je komunikativnost ključ uspeha. 
        </Panel>
        <Panel style={{ textAlign: "justify" }} header="Samostalnost u radu" key="2">
            Verujem da ovu veštinu cene starije kolege mentori (za šta sam i dobio potvrdu od prethodnih mentora). Međutim, dovoljno sam samosvestan da priznam da ponekat zarad uštede vremena treba zanemariti osećaj potrebe za zamostalnošću i potražiti pomoć. Pod ovu ličnu veštinu smatram i veštinom upravljanja vremenom, koju takođe posedujem (što me je spasilo više puta tokom studentskih dana).
        </Panel>
        <Panel style={{ textAlign: "justify" }} header="Okrenutost ka učenju" key="3">
            Mislim da nikada ranije nije više bilo istina 'Čovek se uči dok je živ'. Poslednji pomaci u tehnologiji kao što su blockchain & AI jednostavno 'teraju' sve zaposlene u tech industrijama da ih izučavaju. Zahvalan sam na činjenici da meni ovo 'moranje' ne pada teško jer mi učenje novih stvari uvek prija i voljan sam da ih podelim sa sadašnjim, a i kolegama s kojima ostajem u kontaktu sa ranijih angažovanja.
        </Panel>
        <Panel style={{ textAlign: "justify" }} header="Određivanje prioriteta" key="4">
            Posao koji mi najmanje prija jeste rad na refaktorisanju većeg dela projekta (npr. prelazak sa klasnih na funkcionalne komponente u React-u). Međutim, svestan sam da ukoliko je prethodni kod prepreka za implementiranje novih funkcionalnosti ili ažuriranje biblioteka, da je refaktorisanje prioritet. Nemali broj puta sam se susreo sa kolegama koji prioritizuju rad na zadacima koji lično preferiraju, nasuprot zadacima koji su prepreka za dalji rad.
        </Panel>
        <Panel style={{ textAlign: "justify" }} header="Prilagodljivost" key="5">
            Isto kao i okrenutost ka učenju, prilagodljivost je veština (urođena ili naučena) koja je neophodna u današnjem radnom okruženju. Ne samo sa tehničke strane, prilagodljivost i novonastalim uslovima rada, zahtevima klijenata i novonastalim rokovima su ključni za uspeh u radu.
        </Panel>
      </Collapse>
    </>
  )
}

export default SkillsModal