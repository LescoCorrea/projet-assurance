import React, {useEffect} from 'react'
import './preloader.css'
import { preLoaderAnim } from '../animations'

const Preloader = () => {
    useEffect(()=>{
        preLoaderAnim();
    }, []);

  return (
    <div>
      <div className="preloader">
        <div className="texts-container">
            <span>SUNU</span>
            <span>ASSURANCE</span>
            <span>SN</span>
        </div>
      </div>
    </div>
  )
}

export default Preloader
