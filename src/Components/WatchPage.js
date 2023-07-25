import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utilities/appSlice'

const WatchPage = () => {

    const dispatch = useDispatch();
    useEffect( () => {        
        dispatch(closeMenu());
    }, []);

    const [searchParams, setSearchParams] = useSearchParams();
    const videoId = searchParams.get("v")
    console.log(searchParams.get("v"))
  return (
    <div
    className='p-2 m-2'
    >
        <iframe 
            width="1400" 
            height="700" 
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"         
            allowFullScreen>

        </iframe>
    </div>
  )
}

export default WatchPage