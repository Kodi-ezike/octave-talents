import React, {useState} from 'react';
import { MdDoubleArrow } from "react-icons/md";
import "./home-footer.css"


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <div className='scrollTop' onClick={scrollTop} style={{height: 40, color: "#0b63a9", display: showScroll ? 'flex' : 'none'}}>
      
        <MdDoubleArrow  className='scroll'/>
    </div>
  );
}

export default ScrollArrow;