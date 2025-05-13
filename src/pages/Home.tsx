import { Swiper } from 'swiper/types'
import Header from '../components/header/Header'
import Zone from '../components/Zone/Zone'
import Landing from './Landing'
// import Test from './Test2'
import GallerySwiper from '../components/GallerySwiper'



function Home() {
  return (
    <>
      <Header />
      <Zone />
      <Landing />
      {/* <Test /> */}
      <GallerySwiper />
      
    </>
  )
}

export default Home
