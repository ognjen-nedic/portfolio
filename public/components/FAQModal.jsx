import { Collapse, Typography } from 'antd'
import React from 'react'

const FAQModal = () => {
  const { Title, Paragraph, Text, Link } = Typography;
  const { Panel } = Collapse

  return (
    <>
      <Collapse>
        <Panel header="Zašto sam napustio marketing?" key="1">
          <Paragraph style={{ textAlign: 'justify' }}>
            Motivacija za prelazak iz marketinga u razvoj web sajtova proistekla je iz neusklađenosti osobnih preferencija i potreba radnog okruženja.
          </Paragraph>
          <Paragraph style={{ textAlign: 'justify' }}>
            Kao student marketinških studija, bio sam privučen kreativnim i analitičkim aspektima ovog posla, što me je doveo do odluke da se posvetim ovoj oblasti. Međutim, nakon rada u digitalnom marketingu i u marketing sektoru kompanije, shvatio sam da mi ne odgovara neposredni rad sa klijentima i upravljanje njihovim očekivanjima (i očekivanjima poslodavca). Osim toga, ključni faktor koji me je odvratio od marketinga jeste potreba da se upravlja tuđim novcem, uz nemogućnost garantovanja rezultata koji su očekivani od strane klijenata ili poslodavaca.
          </Paragraph>
          <Paragraph style={{ textAlign: 'justify' }}>
            Tokom perioda pandemije Covid-19, intenzivno sam radio na tehničkim aspektima digitalnog marketingu, kao što su postavljanje GTM tagova i povezivanje analitike, što me je približilo JavaScript jeziku i Python-u, što je rezultiralo u odluci da se okušam u programiranju.
          </Paragraph>
          <Paragraph style={{ textAlign: 'justify' }}>
           Danas radim u industriji razvoja web sajtova i cenim mogućnost da svaki projekat ima opipljive i realne rezultate. Smatram da je upravljanje očekivanjima klijenata važan aspekt ovog posla, ali se ne opterećujem time jer većina kompanija ima jasno definisane uloge u procesu razvoja, a u ovom trenutku to nije moja odgovornost. Ukupno, prelazak u ovu sferu rada bio je ispravna odluka za mene, jer se u njoj osjećam motivisanim i zadovoljnim.
          </Paragraph>
        </Panel>
        <Panel header="Šta sam naučio radeći u Elm programskom jeziku?" key="2">
          <Paragraph style={{ textAlign: 'justify' }}>
            Elm je funkcionalni programski jezik koji koristi strog sistem tipova za sprečavanje uobičajenih grešaka u programiranju i ima ugrađen virtuelni DOM, čineći ga efikasnim za izgradnju korisničkog interfejsa. Ono što me je privuklo radu sa Elm-om jeste činjenica da ne postoje 'statement-i', već su sve ekspresije. To znači da sve funkcije vraćaju neku vrednost, a budući da je Elm funkcionalni jezik, sve je funkcija.
          </Paragraph>
          <Paragraph style={{ textAlign: 'justify' }}>
            U radu sa Elm-om, naučio sam korišćenje HTML 'nodes' za korisnički interfejs. Do sada sam radio sa React-om i NextJS-om, što mi je donekle oduzelo osećaj za čist HTML i njegovo struktuiranje, pa sam kroz Elm ponovo uspostavio taj osećaj. Ovaj sistem potencira važnost apstrakcije i korišćenja ponavljajućih elemenata. Takođe, zbog svojih nedostataka, Elm zahteva korišćenje Web komponenti, što sam shvatio da se na kraju svode na HTML 'nodes' nakon kreiranja.
          </Paragraph>
          <Paragraph style={{ textAlign: 'justify' }}>
            Takođe, radom u Elm-u sam razumeo važnost tipiziranja, kao što se javlja u Typescript-u. Elm pruža mogućnost kreiranja prilagođenih tipova vrednosti, što je odličan način za forsiranje programera da ne zaborave sve varijante koje jedna vrednost može imati.
          </Paragraph>
          <Paragraph style={{ textAlign: 'justify' }}>
            Poslednja važna lekcija koja sam naučio jeste značaj biblioteka iz zajednice. Elm ih ne poseduje, što znači da sam se često oslanjao na Web komponente za stvari koje bi u React-u bile podržane od strane biblioteke ili jednostavno JavaScript koda.
          </Paragraph>
        </Panel>
        <Panel header="Rad od kuće ili iz kancelarije?" key="3">
          <Paragraph style={{ textAlign: 'justify' }}>
            Oba. Na početku rada u kompaniji verujem da je bolje da to bude 100% rad iz kancelarije sa drugim kolegama, sa postepenim prelaskom na hibridni model. Vrlo dobro se snalazim u potpunom radu od kuće, ali verujem da rad iz kancelarije ima svoju vrednost, te bih najzadovoljniji bio kada bih sa drugim kolegama iz tima minimum 2 dana nedeljno proveo iz kancelarije. Takođe, potpun rad iz kancelarije mi nije stran, ali rad od kuće pruža odličnu atmosferu za fokus i stekao sam utisak da sam produktivniji u tom okruženju. U kancelariji sam fizički dostupniji kolegama koji ne umeju najbolje da procene kada je najbolje vreme za kratko pitanje.
          </Paragraph>
        </Panel>
        <Panel header="Zašto sam odabrao da se bavim programiranjem?" key="4">
          <Paragraph style={{ textAlign: 'justify' }}>
            Prešao sam sa karijere u marketingu na programiranje zato što mi se sviđao tehnički aspekt marketinga i otkrio sam potencijal za pisanje koda. Privuklo me je programiranje zbog svojih vidljivih rezultata, mogućnosti da radim na projektima koji koriste društvu i brojnih prilika za rast i specijalizaciju u ovom polju. Takođe, osećam da programiranje pruža jasniju karijernu putanju u odnosu na širi fokus koji sam imao u marketingu.
          </Paragraph>
        </Panel>
        <Panel header="Kako podnosim pritisak i kako se ponašam u stresnom okruženju?" key="5">
          <Paragraph style={{ textAlign: 'justify' }}>
            Bitno je razlikovati vrste pritiska u radu. Najjasniji je vremenski pritisak koji mi ne stvara nelagodnost. Malo manje od toga mi odgovara pritisak rada na delovima projekta koji nisu moja direktna odgovornost ukoliko smatram da postoje osobe koje su stručnije od mene u tom polju. Radije bih odložio rad za neko vreme nego uložio trud da isti zadatak uradim loše. Pritisak koji odbijam da prihvatim jeste svestan rad na malicioznim alatima i rešenjima.
          </Paragraph>
          <Paragraph style={{ textAlign: 'justify' }}>
            U stresnom okruženju preuzimam ulogu organizatora. Drugim rečima preuzimam inicijativu i dajem predloge kako je najbolje da se naprave prioriteti za što bolje alociranje raspoloživog vremena. Moj osećaj i potreba za detaljisanjem iščeznu, te neretko zamolim neke od kolega da moj rad isprate za eventualne greške. Ovo je moja mana na kojoj aktivno radim jer u stresnim situacijama detalji nekad znaju biti ključni za efikasno rešenje krizne situacije.
          </Paragraph>
        </Panel>
        <Panel header="Šta mi kolege najviše zameraju?" key="6">
          <Paragraph style={{ textAlign: 'justify' }}>
            Pošto imam otvorenu komunikaciju sa kolegama, odgovor na ovo pitanje mi je odavno poznat. Kolege mi zameraju na insistiranju na pedantnost. Smatraju da je sasvim u redu što sam pendantan u svom radu, ali da moje insistiranje da iste standarde očekujem od njih ponekad nazivaju apsurdnim. Kompromis do kojeg sam došao sa kolegama jeste da zanemarim pendantnost u komunikaciji sa mnom, ali da je zahtevam u komunikaciji sa klijentima; ili da pedantnost nije neophodna u pisanju komentara na kodu, ali da kod mora poštovati utvrđene standarde pisanja unutar firme.
          </Paragraph>
        </Panel>
      </Collapse>
    </>
  )
}

export default FAQModal