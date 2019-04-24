import VideoListEntry from './VideoListEntry.js';
var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(entry => <VideoListEntry video = {entry} click = {props.click} />)}
  </div>

);








// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined. 

export default VideoList;




//  <div className="video-list">
// {props.video.map(video => (
//   <VideoListEntry title = {props.video.snippet.title}
//     description = {props.video.snippet.description} />
// ))}
// </div> 

