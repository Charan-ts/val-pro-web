import { useEffect, useMemo, useState } from 'react'
import img1 from '../../Images/Pictures/1.jpg'
import img11 from '../../Images/Pictures/11.jpg'
import img12 from '../../Images/Pictures/12.jpg'
import img14 from '../../Images/Pictures/14.jpg'
import img15 from '../../Images/Pictures/15.jpg'
import img17 from '../../Images/Pictures/17.jpg'
import img2 from '../../Images/Pictures/2.jpg'
import img4 from '../../Images/Pictures/4.jpg'
import img5 from '../../Images/Pictures/5.jpg'
import img9 from '../../Images/Pictures/9.jpg'
import HeartLoader from '../Loader/HeartLoader'
import TypingText from '../Text/TypingText'
import './photo-view.scss'

import img10 from '../../Images/Pictures/10.jpg'
import img13 from '../../Images/Pictures/13.jpg'
import img18 from '../../Images/Pictures/18.png'
import img7 from '../../Images/Pictures/7.jpg'
import img8 from '../../Images/Pictures/8.jpg'

export interface Image {
  src: string
  alt: string
}

const images: Image[] = [
  { src: img5, alt: 'Baby Doll' },
  { src: img4, alt: 'Cap Queen' },
  { src: img11, alt: 'Dressed to kill' },
  { src: img1, alt: 'Shy Chick' },
  { src: img9, alt: 'Cutiepie' },
  { src: img2, alt: 'Electric Eyes' },
  { src: img12, alt: 'Joyful Jam' },
  { src: img17, alt: 'Sleeping Beauty' },
  { src: img15, alt: 'Natural Beauty' },
  { src: img14, alt: 'Eating Monkey' },
  { src: img7, alt: 'Dashing' },
  { src: img8, alt: 'Princess' },
  { src: img10, alt: 'Lovable Lady' },
  { src: img13, alt: 'Cool Girl' },
  { src: img18, alt: 'Adventurous' },
]

const YesPhotoView = () => {
  const [lightboxImage, setLightboxImage] = useState('')
  const [lightboxAltImage, setLightboxAltImage] = useState('')
  const [image, setImage] = useState('../images/image1.jpg')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000)
  }, [])

  // const openLightbox = (src: string, alt: string) => {
  //   setImage(src)
  //   setLightboxImage(src)
  //   setLightboxAltImage(alt)
  // }

  // const closeLightbox = () => {
  //   setLightboxImage('')
  //   setLightboxAltImage('')
  // }

  // return (
  //   <>
  //     <div className='gallery'>
  //       {images.map((image, index) => (
  //         <div className='gallery__item' key={index}>
  //           <img className='gallery__image' src={image.src} alt={image.alt} />
  //         </div>
  //       ))}
  //     </div>
  //   </>
  // )

  // return (
  //   // <div style={{ backgroundImage: `url(${require('../images/image2.jpg')})`, backgroundSize: 'cover',
  //   // backgroundRepeat: 'no-repeat', }}>
  //   <>
  //     {/* {isLoading ? (
  //       <HeartLoader />
  //     ) : ( */}
  //     <div style={{ backgroundColor: '#e49cbf' }}>
  //       <div
  //         className='gallery'
  //         style={{ filter: lightboxImage ? 'blur(20px)' : 'blur(0px)' }}>
  //         {images.map((image, index) => (
  //           <div
  //             tabIndex={1}
  //             className='gallery__item'
  //             key={index}
  //             onClick={() => openLightbox(image.src, image.alt)}>
  //             <img className='gallery__image' src={image.src} alt={image.alt} />
  //           </div>
  //         ))}
  //       </div>

  //       {lightboxImage && (
  //         <div className='lightbox'>
  //           <img
  //             className='lightbox__image'
  //             src={lightboxImage}
  //             alt={lightboxAltImage}
  //           />
  //         </div>
  //       )}
  //     </div>
  //     {/* )} */}
  //   </>
  // )

  function shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = array.slice() // Create a shallow copy of the original array

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)) // Generate a random index
      ;[shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ] // Swap elements
    }

    return shuffledArray
  }

  const getImages = useMemo(() => {
    const shuffledImages = shuffleArray(images)
    // const shuffledImages = images;
    return shuffledImages.map((image, index) => (
      <div className='wrap'>
        <div tabIndex={1} className='gallery__item' key={index}>
          <img src={image.src} alt={image.alt} loading='lazy' />
        </div>
        <div className='photo-label'>
          <TypingText property={image.alt} />
        </div>
      </div>
    ))
  }, [])

  return (
    <>
      {isLoading ? (
        <HeartLoader />
      ) : (
        <div
          style={{ overflowY: 'scroll', height: '97vh', overflowX: 'hidden' }}>
          <div className='gallery'>{getImages}</div>
          <div className='wrapper'>
            <p>Y</p>
            <p>A</p>
            <p>Y</p>

            {/* <p>M</p>
            <p>Y</p>
            <p> </p>
            <p>G</p>
            <p>A</p>
            <p>L</p>
            <p>L</p>
            <p>E</p>
            <p>R</p>
            <p>Y</p> */}
          </div>
        </div>
      )}
    </>
  )
}

export default YesPhotoView
