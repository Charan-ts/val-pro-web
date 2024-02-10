import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import './slider.scss'

const Slider = ({ imageLists, stories }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nxtBtnDisabled, setNxtBtnDisabled] = useState(false)
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false)

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageLists.length) % imageLists.length);
  };
  
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageLists.length);
  };

  useEffect(() => {
    const handleNext = () => {
      const slideElement = document.getElementById('slide')
      const lists = document.querySelectorAll('.slide-item')

      if (slideElement && lists.length > 0) {
        if (currentImageIndex === lists.length - 1) {
          // Stop rendering when the image reaches the last element
          setNxtBtnDisabled(true)
          return
        }
        setPrevBtnDisabled(false)
        slideElement.appendChild(lists[0])
      }
    }

    const handlePrev = () => {
      const slideElement = document.getElementById('slide')
      const lists = document.querySelectorAll('.slide-item')

      if (slideElement && lists.length > 0) {
        if (currentImageIndex === 0) {
          // Stop rendering when the image is at the first element
          setPrevBtnDisabled(true)
          return
        }
        setNxtBtnDisabled(false)
        slideElement.prepend(lists[lists.length - 1])
      }
    }

    const nextButton = document.getElementById('next')
    const prevButton = document.getElementById('prev')

    if (nextButton) {
      nextButton.addEventListener('click', handleNext)
    }

    if (prevButton) {
      prevButton.addEventListener('click', handlePrev)
    }

    return () => {
      // Cleanup: Remove event listeners when the component unmounts
      if (nextButton) {
        nextButton.removeEventListener('click', handleNext)
      }

      if (prevButton) {
        prevButton.removeEventListener('click', handlePrev)
      }
    }
  }, [imageLists, currentImageIndex]) // Dependency array updated to include imageLists and currentImageIndex

  return (
    <>
      <div className='slider-container'>
        <div id='slide'>
          {imageLists.map((image: any, i: number) => (
            <div
              key={i}
              className={`slide-item ${i === currentImageIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}>
              <div className='slide-content'>
                <div className='slide-name'>{stories?.[i]?.[0]}</div>
                <div
                  className='des'
                  dangerouslySetInnerHTML={{ __html: stories?.[i]?.[1] ?? '' }} />
              </div>
            </div>
          ))}
        </div>
        <div className='buttons'>
          <button
            id='prev'
            onClick={handlePrevClick}
            disabled={prevBtnDisabled}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button id='next' onClick={handleNextClick} disabled={nxtBtnDisabled}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </>
  )
}

export default Slider
