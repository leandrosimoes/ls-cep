function isVimeoUrl(url) {
	if(!url) return false;
	
	return /^(http\:\/\/|https\:\/\/)?(www\.)?(vimeo\.com\/)([0-9]+)$/.test(url);
}

function getVimeoVideoId(url) {
	if (!isVimeoUrl(url)) return null;
	
	return url.match(/\d{9}/);
}

function vimeoLoadingData(url) {
	if(!isVimeoUrl(url)) return null;
	
	var videoId = getVimeoVideoId(url),
		url = "http://vimeo.com/api/v2/video/" + videoId + ".json";
      
	$.ajax({
		type:'GET',
		url: url,
		dataType: 'json',
		success: function(data) {
			if(!!data && data.length > 0) {
				return data[0];
			} else {
				return null;
			}
		}
	});
}

function appendVimeoVideo(src, width, height, locationId) {
	if(!isVimeoUrl(src)) throw 'src is required';
	
	var videoId = getVimeoVideoId(src),
		newSrc = 'https://player.vimeo.com/video/' + videoId + '?color=ffffff',
        location = document.getElementById(locationId) || document.body;
      
	var iframe = document.createElement('iframe');
    iframe.id = 'yt-iframe-' + new Date().getTime();
    iframe.width = width || 640;
    iframe.height = height || 360;
    iframe.src = newSrc;
    iframe.frameBorder = 0;
	iframe.webkitallowfullscreen = true;
	iframe.mozallowfullscreen = true; 
	iframe.allowfullscreen = true;

    location.appendChild(iframe);
}

{"id":197047485,"title":"FLUSHED","description":"Private moments. Public toilets. #PracticeSafeTexts","url":"https://vimeo.com/197047485","upload_date":"2016-12-25 16:30:55","thumbnail_small":"https://i.vimeocdn.com/video/609695829_100x75.jpg","thumbnail_medium":"https://i.vimeocdn.com/video/609695829_200x150.jpg","thumbnail_large":"https://i.vimeocdn.com/video/609695829_640.jpg","user_id":2417485,"user_name":"Grace June","user_url":"https://vimeo.com/gracejc","user_portrait_small":"https://i.vimeocdn.com/portrait/7176122_30x30","user_portrait_medium":"https://i.vimeocdn.com/portrait/7176122_75x75","user_portrait_large":"https://i.vimeocdn.com/portrait/7176122_100x100","user_portrait_huge":"https://i.vimeocdn.com/portrait/7176122_300x300","stats_number_of_likes":629,"stats_number_of_plays":76849,"stats_number_of_comments":60,"duration":254,"width":1920,"height":1080,"tags":"Short film, BFI Future Film, Daily short picks, IBS, Social Media, Women in film, snapchat, facebook, Bathroom, NYE, hashtag, Comedy, Toilet, Film Shortage, MILLENNIAL, Satire, IOS, #, Sony FS7","embed_privacy":"anywhere"}