import React from 'react';
import VideoListItem from './video_list_item';

//passed props will arrive as props in function, can access using const videos = props.videos
const VideoList = (props) =>{
    const videoItems = props.videos.map((video)=>{
        return <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video}/>
    });

    return (
        //use className as css class instead of class , because 'class' will conflict.
        //React will regconize is a array or list and render all
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;