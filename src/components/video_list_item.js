import React from 'react';
//can replace props with {video} along with const line.
const VideoListItem=(props)=>{
    //passed from video_list as video.
    const video = props.video;
    const onVideoSelect = props.onVideoSelect;
    const imageUrl = video.snippet.thumbnails.default.url;
    console.log(video);

    return (
    <li onClick={()=> onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src={imageUrl}/>
            </div>
            <div className="media-body">
                <div className="media-heaing">{video.snippet.title}</div>
            </div>
        </div>
    </li>
    );
};

export default VideoListItem;