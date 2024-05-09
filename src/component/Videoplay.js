import React, { useState } from 'react';
import { First } from './asset';
import { Hdata, Vdata } from '../constants';


export function Videoplay() {
  const currentUrl = window.location.href
  console.log(currentUrl);
  const currentid= currentUrl.split('video')[1].split('')[1]
  console.log(currentUrl.split('video'));
  const [playing, setPlaying] = useState(false);

  const handleVideoClick = () => {
    setPlaying(!playing); 
  };
  const filterData = Hdata.filter((item) =>
  item.id === currentid
);
console.log(filterData);

  return (
    <div>
      <video
        className='w-[100% aspect-video]'
        onClick={handleVideoClick}
        controls
        src={filterData[0].video}
        autoPlay={playing} // Use autoPlay instead of playing
      />
    </div>
  );
}
