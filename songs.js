'use strict'
// songs.js

const fetch = require('node-fetch');
const audition_API_KEY = '1F_iYFgAakxmRB-BDVHb2w';

function getSongInfo(search,resp){
	let search1 = search
    fetch(`https://audition-v2.umusic.com/api/v1/search/?q=${search1}&token=1F_iYFgAakxmRB-BDVHb2w`)
    .then(function(data) {
        return data.json();
    }).then(function(parsed){
        
         const song1 = parsed.tracks[0].formatted_title
		 const artist1 = parsed.tracks[0].artist_name
		 const song2 = parsed.tracks[1].formatted_title
		 const artist2 = parsed.tracks[1].artist_name
		 const song3 = parsed.tracks[2].formatted_title
		 const artist3 = parsed.tracks[2].artist_name
		 const song4 = parsed.tracks[3].formatted_title
		 const artist4 = parsed.tracks[3].artist_name
		 const song5 = parsed.tracks[4].formatted_title
		 const artist5 = parsed.tracks[4].artist_name

	 	const list = {"fulfillmentText": `Here are your songs!
	 	\n${song1} by ${artist1}
	    \n${song2} by ${artist2}
	    \n${song3} by ${artist3}
	    \n${song4} by ${artist4}
	    \n${song5} by ${artist5}
	      	`
	  };
        resp(list);
    });
}


module.exports = getSongInfo;
