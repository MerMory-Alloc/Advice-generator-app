import './App.css'
import divider  from './assets/pattern-divider-desktop.svg'
import divider_mobile from './assets/pattern-divider-mobile.svg'
import dice from './assets/icon-dice.svg'
import { useEffect, useState } from 'react'
function App() {
  
  const [quote,setQuote] = useState({
    id:0,
    quote:""
  });


  /**
   * Makes a request to the API to fetch a random quote.
   */
  function makRequest() {
    let random= Math.ceil(Math.random() * 224)
    let url=`https://api.adviceslip.com/advice/${random}`
    fetch(url)
      .then(res => res.json())
      .then(random_quot => {
        const v=random_quot.slip
        setQuote(() => ({
          id:v.id,
          quote:v.advice
        }))
      })
  }

  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    /**
     * Handles the resize event.
     */
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  useEffect( () => {
    makRequest();
  },[])

  function changeQuote() {
    makRequest();
  }

  return (
    <div className='container'>
      <div className="q_cont">
        <h2 className="title_id"> Advice #{quote.id} </h2>
        <p className="quote"> &ldquo; {quote.quote} &rdquo; </p>
        <img src={viewportWidth > 600 ? divider : divider_mobile} className='divider'/>
      </div>
      <button type='button' className='rollbtn' onClick={changeQuote}>
         <img  src={dice} /> 
      </button>
    </div>
  )
}



export default App
