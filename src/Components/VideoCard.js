import React from 'react'

const VideoCard = (props) => {
    const {info} = props;
    
  return (
    <div 
    className='border border-gray-200 w-60  p-2 m-2 shadow-sm  '
    >
        <img 
        className='h-40 w-52   text-center  rounded-lg'
        alt='thumbnail_video' src={info?.snippet?.thumbnails?.medium?.url} />
        <ul>
        <li
        className=' w-48 font-bold p-1 m-1'
        >{info?.snippet?.title}</li>
        <li
        className=' w-48 text-sm  p-1 m-1'
        >{info?.snippet?.channelTitle}</li>
        <li
        className=' w-48 text-sm  p-1 m-1'
        >{info?.statistics?.viewCount} Views</li>
        </ul>
    </div>
  )
}

export default VideoCard