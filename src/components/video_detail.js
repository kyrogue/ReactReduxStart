import React from 'react';
//always think if component need state? if only properties just use function component else, class component.
//we use shorthand {video}
const VideoDetail = ({video})=>{
    //handle null
    if(!video){
        return <div>Loading...</div>
    }

    const videoId = video.id.videoId;
    //string literal
    const url=`https://www.youtube.com/embed/${videoId}`;

    return(
        <div className="video-detail col-md-8">
             <div className="embed-responsive embed-responsive-16by9">
                <iframe classname="embed-responive-item" src={url}></iframe>
             </div>
             <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
             </div>
        </div>
    );
};

export default VideoDetail;