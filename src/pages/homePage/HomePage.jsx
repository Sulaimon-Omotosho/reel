import SearchBar from '../../components/SearchBar/SearchBar'
import './homePage.scss'

function HomePage() {
  return (
    <div className='homePage'>
      <div className='text'>
        <div className='wrapper'>
          <h1 className='title'>
            Find Real Estate Easy & Get Your Dream Place
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facilis
            libero a nesciunt rem, beatae maiores incidunt recusandae rerum
            quasi quibusdam? Illo voluptatem sunt distinctio, molestiae cumque
            velit error facere vitae eligendi nulla.
          </p>
          <SearchBar />
          <div className='boxes'>
            <div className='box'>
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className='box'>
              <h1>200+</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className='box'>
              <h1>1200+</h1>
              <h2>Property Disbursed</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='image'>
        <img src='/bg.png' alt='bg' />
      </div>
    </div>
  )
}

export default HomePage
