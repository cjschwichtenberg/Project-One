
var youtubeURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&relevanceLanguage=en&regionCode=US&q=' + bandInfo + '&key=AIzaSyDLaes9_vXmELG_d5SGPPGNelBrWiHIkLM&type=video';
$.ajax({ url: youtubeURL, method: "GET" }).then(function (response) {
    console.log(response);
    console.log(response.items[1].id.videoId);
    var playerId = response.items[1].id.videoId;
    $("#player").append('<iframe width="500" height="315" src="http://www.youtube.com/embed/' + playerId + '" frameborder="0" allowfullscreen></iframe> ');
})
