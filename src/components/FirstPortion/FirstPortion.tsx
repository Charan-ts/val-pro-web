import { useState } from 'react'
import Typewriter from 'typewriter-effect'
import HeartButton from '../Button/HeartButton'
import InputField from '../Input/InputField'
import HeartLoader from '../Loader/HeartLoader'
import Name from '../Names/Name'
import './first-portion.scss'

const FirstPortion = (props: any) => {
  const [showName, setShowName] = useState(false)
  const [typeMsg, setTypeMsg] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showHeartBtn, setShowHeartBtn] = useState<boolean>(false)

  const onHeartClick = () => {
    setIsLoading(true)
    setShowHeartBtn(false)
    setTimeout(() => {
      onNameShown()
    }, 2000)
  }

  const onNameShown = () => {
    setIsLoading(false)
    setShowName(true)
    props.onShowBackGroundPic()
  }

  const onTyingCmplt = () => {
    setShowHeartBtn(true)
  }

  return (
    <>
      {isLoading && <HeartLoader />}

      {!isLoading && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'center',
            flexDirection: 'column',
          }}>
          {showName && <Name />}
          {!typeMsg && <InputField setEnableMsg={setTypeMsg} />}
        </div>
      )}

      {!isLoading && !showName && typeMsg && (
        <>
          <div className='type-writer'>
            <Typewriter
              onInit={typewriter => {
                typewriter
                  .typeString(
                    'Hoooo en madam eno type maadtha idera... Name uh🤔?. '.toUpperCase()
                  )
                  .pauseFor(1000)
                  .typeString(
                    'Matte type maadu yaake, type maadake agthilva maya agoita bangari😂, '.toUpperCase()
                  )
                  .pauseFor(1000)
                  .typeString(
                    'Eno nin name nange gottilla anno thara idhu maadiradhe ninge nayi a box sumne ninge chamak kodake, Ninge Noora entu name naane ittideni tm kelgade iro heart❤️ press maadu. Jorag press maadbeda novagutte aste😜.'.toUpperCase()
                  )
                  .start()
                  .callFunction(onTyingCmplt)
              }}
            />
          </div>
          {showHeartBtn && <HeartButton onHeartClick={onHeartClick} />}
        </>
      )}
    </>
  )
}

export default FirstPortion
