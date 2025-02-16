import { useEffect, useState } from 'react'
import './App.scss'
import img1 from './Images/1.png'
import img10 from './Images/10.jpg'
import img2 from './Images/2.jpg'
import img3 from './Images/3.jpg'
import img4 from './Images/4.jpg'
import img5 from './Images/5.jpg'
import img6 from './Images/6.jpg'
import img7 from './Images/7.jpg'
import img8 from './Images/8.jpg'
import img9 from './Images/9.jpg'
import img12 from './Images/12.jpg'
import FirstPortion from './components/FirstPortion/FirstPortion'
import HeartLoader from './components/Loader/HeartLoader'
import YesPhotoView from './components/Photos/YesPhotoView'

import beauty from './Images/Pictures/saree.jpg'
import Slider from './components/Slider/Slider'

const images: any[] = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img12,
  img6,
  img7,
  img8,
  img9,
  img10,
]
const stories: any[] = [
  [
    'Story (Ondh Kathe Hel la😉)',
    'Hey Puttu, Idhondhu chick story. E picture galu adhke ondhu roles thara nin lazy brain ge artha agli antha. Ninge bari helidre artha agalla alva adhke picture jothe heltha ideni ivagadru a lazy brain ge artha agli onchooru correct agli work maadli antha😂. So start maadana...</br> </br> Neen nanna artha maadkolo a moment indha nam love inna sakathagi start agutte like we made for each other anno thara, illi ninna yaaru judge maadalla expections irutte chik chik dhu adhen maadak agalla love id kade jagla expectation bejaru ivella irodhe so avella hange nodkondu hogtha irbeku. Aaaan amele naav otge suthado time spend maaado time hinge nin kai bid de ella kade karkondu hogbeku, suthbeku ninna magu thara nodkobeku neen nan jothe iddagella. Naanu swalp careless eh atara annisdhaga neenu ondhu thalege bittu chanagi nodko saalthilla anbeku aste simple alva just best friends things ivaglunu amelenu.',
  ],
  [
    'Nam Madve (Madveno Madve🤞)',
    'E range ge Thajmahal mundhe agoalla antha gottu adre Thajmahal ge otge hogbodhu preethiya sanketha alva. Nam Madve adre hengirutte antha gottilla jagla, munisu, opsoke podbekiro kasta ivella neen jothegidre enu ansodhe illa, naav bekiroru namge bekiroru jothegidaga and naavu nijvagluve ago efforts akidre true agi universe eh namge help maadutte antha yaavdho movie li nodid nenpu, incase adre grand agi no simple agi no, ondhe salakke nin joithe agbeku aste. I really wish nammibru madve agli antha. </br> </br> Neen ankobodhu inven yavaglu hinge adthane antha and ninge madve li insterest illa anthanu gottu, adre nange ella thara kushi kasta eradunnu nin jothe life long anubhvisbeku antha ase aste.',
  ],
  [
    'Hugs and Kisses (Hug maadana ba🤗)',
    `Nam madve agi ella settle adhemele namma 1st hug matte kiss. May be tight agi <i><b> there is no tommarrow </b></i> anno thara ondhu hug. A hug indha ninge helokirodh en andre <i><b>I'am Here For You Until The Last Breath, In All Sadness And Happyness And I'm Completely Yours❤️...</b></i></br> Especially nange hugs andre thumba ista so ninna bidodhe illa naanu aste. <i><b>So always you complete me with a tight hug❤️...</b></i></br></br> Ninna magu thara nodkobeku naanu nan ella love matte care na complete agi ninge kone thanka kodbeku, <i><b>You will be always my beldhiro baby😘</b></i>.`,
  ],
  [
    'Travelling Together (Suttak Hogbeku😃)',
    `Basically nangu ningu suthdhu andre ista, So naavu agaga otge ellodru suttak hogbeku. Nin kai naan idkondu ninna karkondu hogbeku adhe thara neenunu, hosa hosa plan jothe barbeku suthak hogana ba antha. </br>Kwatle kodbeku, kapi thara adbeku nin ella nachke bittu full chill agi enjoy maadkondu irbeku aste. </br><i><b>Life Partner, Bestfriend and Travelling partner neene agbeku.</b></i> So Basically you will be my everything, ellodru nange antkondu nan jothene irbeku.`,
  ],
  [
    'Fights and Arguments (Jagla Maadlebeka🤔)',
    `Idhu nammibrigu agdhe iro visya but still happens, Elli love irutte alli chick expectations irutte, Elli expectations irutte alli chik chick arguments and fights idde irutte. Not only expectations ella visyadhallu barbodhu because <i><b>Love is Direactly or Indireactly Propotional to Fights.</b></i></br></br> E Fights and Arguments adhaga ive namna actually inn athra and artha maadsake try maadodhu ondondhu sala joragi ondhondhu sala methge otnalli ningenadru naan barthini alli ninthkothini ninna samadhana maadthini, Ninge time beku andre adhu kodthini adre ninna bittu elligu hogalla. Even nin worst allu nin jothe ne irbeku nange.</br><i><b>You Will Be Special In All Situation For Me.</b></i>`,
  ],
  [
    'Our Time (Together forever🙌)',
    `E jagla, family, arguments, kopa, bejaru idhelladru madya namdhe agiro our time irutte, alli naavibru e world na marthu happy agirthivi like e jagathalli naavibre irodhu anno thara namma last trip alli last seat alli a night naavidhvalla a thara. Illi naavu obbranobru regusthivi, otge maja maadkondu movie nodthvi, and moreover neenu naanu otge obrunobru bittirdhe otge irthivi, alli naanu neenu nam preethi aste. </br>Keliddhe alva heng nodkotya nanna antha, neenu nan magu, neen bejar allidhaga ninge joker ninna nagsake, neen kushi agidhaga nin jothe kushi pado well wisher, and neen kastadhallidre nin jothene irbeku anno selfish. Illi neen ene maadidru nadiyutte nin jothege naan irthini ivattunu mundhenu <i><b>You Wil Be My Everything...</b></i>`,
  ],
  [
    'Family (💕)',
    `Family - A group of two or more persons related by birth, marriage, or adoption who live together.</br> Nodu family andre google meaning iste... <i><b>But Family andre love, care, trust, never give up on someone you love, happiness, sadness, fights, arguments, childrens, parents, relatives, friends, staying with them until you die, etc etc...</b></i> hinge hogtha irutte. </br></br> Namdhu hangene ivella seriro ondhu put prapancha agirutte. Magu incase naav yochne maddi beku andre atara adrunu naan e hindhe heldhange nam magukinna jaasthi ninne ista padodhu, <i><b>You Will Be My Beatifull Cute Baby As Always, and Haagene nodkobeku ninna🫰.</i></b>`,
  ],
  [
    'Festivals (Ayyayyo Habba Banthu😛)',
    `Usually naan festival kind of person all yaakandre nammane yaavdhu astondhu grand agi maadalla so festivals always will be simple. The way house women needed nammane festivals yavaglunu haage irutte burdden agiralla. Adre it will be special alva a busy schedule alli jothege spend maadake jaasthi time sigutte so naav enen maadbeku ankothivo mikidu timne bitre e time alli maadbodhu. </br></br><i><b>So you will be my festival always neen jothegidre daily festival eh namge</i></b>. </br></br>Bayalle pataki itkondu suththa irtya agaga pataki oditha iru... JK😂`,
  ],
  [
    'Hustle (Kelsak Hogbeku😬)',
    `Idh ondhe time alli nodu nange boss bere avr agiradhu mikidh time ella neen agirtya😂. </br>Ninge work maadbeka adhu nin ista ninge bekiro freedome ella irutte adre ninge provider agi naan irbeku. Stress irutte kopa barutte koogadthini swalp hottu adhmele magu thara puna nin hathrane barthini, because in the end <i><b>All I Need Is You. You Give Me Peace Now And Also In The Future💕</i></b>, Peacefull living ge est beku ast duddidre saaku alva...</br> So Nangene adru neen irtya, ningene adru naan irthini aste🤞.`,
  ],
  [
    'Old Age (Vayasaytu😌)',
    `Aaaaan Vayasagogutte time hogadhe gottagalla, bekadhavru jotegidre ella kansu andhage agogutte. Matte naavellaru maklu ago time, Matte magu thara ado time, Ellrgu irritate maado time.</br> Naavu madve li ako 7 hejje li idhe 1st janma ankondre a 1 hejje complete ago time. Konege time hogtha hogtha ellargu naavu memories ago time.</br> So konege nammibru hallu udrogi thinnake matadake kasta agthidru avaglu ninna iste ista padthini and the time we realize nammatra jaasthi time illa adre iro thanka yaargu bhaara agdhe otge irona anno time. </br> <i><b>En andre ista padoru jothege idre vayasagoytu annodhu asten kasta annisalla alva🤭...</i></b>`,
  ],
  [
    'Happy Ending (Story Illige Mugitu🤭)',
    `<i><b>I adore you so much, I adore you so much your smile, your hands, your talk. I adore you so much that staring into your eyes seem like my favorite hobby. I adore you so much that even if I feel low I'll cheer up if that's what makes you happy. I adore you so much that every fligt I take I wish the destination is you, but until then I'm glad you're the first person I text. I adore you so much I can spend hours doing nothing with you. I adore you so much that I'll take evry opportunity to call you mine, I know you hate cliches but will you be my valentine?...</i></b></br></br>Mugithu aste matte sigona mundhina jhanmadhalli...😘 
    </br>(Alli Melgade pic alliro close button press maddu)`,
  ],
]

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [showPic, setShowPic] = useState<boolean>(false)
  const [showFirstPortion, setShowFirstPortion] = useState<boolean>(true)
  const [showImageSlider, setShowImageSlider] = useState<boolean>(false)

  useEffect(() => {
    timeOutFunction(2000, false)
  }, [])

  const timeOutFunction = (seconds: number, isLoading: boolean) => {
    setTimeout(() => setIsLoading(isLoading), seconds)
  }

  const withoutPic = {
    backgroundColor: 'pink',
    width: '219vh',
    margin: '0 5px 0 5px',
  }

  const withPic = {
    backgroundImage: `url(${beauty})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    margin: '10px',
    width: '219vh',
  }

  const onShowBackGroundPic = () => {
    console.log('Showing image')
    setShowPic(true)
    setTimeout(() => {
      timeOutFunction(1000, true)
      timeOutFunction(1000, false)
      setShowFirstPortion(false)
      setShowImageSlider(true)
      setShowPic(false)
    }, 12000)
  }

  const onCloseSlider = () => {
    setIsLoading(true)
    setTimeout(() => {
      setShowImageSlider(false)
      setIsLoading(false)
      setShowPic(false)
      setShowFirstPortion(false)
    }, 1000)
  }

  return (
    <>
      <div className='App'>
        <div
          className={showPic ? 'App-header bounce-in' : 'App-header'}
          style={showPic ? withPic : withoutPic}>
          {isLoading && <HeartLoader />}

          {!isLoading && !showImageSlider && showFirstPortion && (
            <FirstPortion onShowBackGroundPic={onShowBackGroundPic} />
          )}

          {!isLoading && showImageSlider && !showFirstPortion && (
            <div>
              <Slider
                imageLists={images}
                stories={stories}
                onCloseSlider={onCloseSlider}
              />
            </div>
          )}

          {!isLoading && !showImageSlider && !showFirstPortion && (
            <YesPhotoView />
          )}
        </div>
      </div>
    </>
  )
}

export default App
