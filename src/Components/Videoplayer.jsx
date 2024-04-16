import React, { useRef } from 'react'
import '../styles/Videoplayer.css'
import video from '../assets/vide.mp4'
const Videoplayer = ({playState, setPlayState}) => {
    const player = useRef(null)
    const closePlayer =()=>{
        if(e.target === player.current){
            setPlayState(false)
        }
    }
  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player} onClick={closePlayer}><video src={video} autoPlay muted controls></video></div>
  )
}

export default Videoplayer