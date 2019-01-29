

var api = "https://api.giphy.com/v1/gifs/random?";
var apiKey = "&api_key=YlUV7N8iyeNsjHktMsS1ei53OxoTF3dh";

var results = document.getElementById('gif-result');
var imageSpot = document.getElementById('rendered')
var searchButton = document.getElementById('search');


searchButton.addEventListener('click', () => {
    var searchTerm = document.getElementById('query').value;
    var query = "&tag=" + searchTerm;
    var url = api + apiKey + query;

    loadImg(url);
});

function loadImg(url, data) {
  fetch(url).then(response => {
  return response.json();
}).then(data => {
  console.log(data);
  var randomGif = data.data.embed_url;
  createImg(randomGif);
}).catch(err => {
  console.log(err);
});

}

function createImg(randomGif) {
  imageSpot.setAttribute("style", "display:block;");
  imageSpot.setAttribute("src", randomGif);
  };
