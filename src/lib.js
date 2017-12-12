import videojs from 'video.js';
// These does not work, because the dependency is set to video js 5
// import 'videojs-contrib-hls/dist/videojs-contrib-hls.min.js';
// import 'videojs-contrib-quality-levels/dist/videojs-contrib-quality-levels.min.js';
// import 'videojs-hls-quality-selector/dist/videojs-hls-quality-selector.min.js';
import 'videojs-contrib-hls';
// Need to copy file from node module, as video js 6 is not in dependency now
// cp node_modules/videojs-contrib-quality-levels/dist/videojs-contrib-quality-levels.min.js src
// cp videojs-hls-quality-selector/dist/videojs-hls-quality-selector.min.js src
import './videojs-contrib-quality-levels.min.js';
import './videojs-hls-quality-selector.min.js';


// For debugging
window.vjs = videojs;
module.exports = videojs;
