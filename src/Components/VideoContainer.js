import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utilities/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        getVideos();
    },[])

    const getVideos = async() => {
        const data = await fetch(YOUTUBE_API);
        const jsonData = await data.json();
       // console.log(jsonData.items);
        setVideos(jsonData.items)

    }

  return (
    <div className='flex flex-wrap justify-center'>
        {videos.map(
            (videoItem) => (

                <Link
                key = {videoItem?.id}
                to= {"/watch?v=" + videoItem?.id}>
                    <VideoCard 
                    
                    info = {videoItem} />
                </Link>
            )
        )}
        
    </div>
  )
}

export default VideoContainer