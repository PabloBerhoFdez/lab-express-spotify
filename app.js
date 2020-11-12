require('dotenv').config();

const express       = require('express');
const hbs           = require('hbs');
const chalk         = require('chalk')
const SpotifyWebApi = require('spotify-web-api-node');
const PORT    = 3000


const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
});

// Retrieve an access token
spotifyApi
  .clientCredentialsGrant()
  .then(data => spotifyApi.setAccessToken(data.body['access_token']))
  .catch(error => console.log('Something went wrong when retrieving an access token', error));


app.get('/', (req, res, next)=>{
  res.render('home')
})

app.get('/artist-search', (req, res, next)=>{
  
})


app.listen(PORT, () => console.log(chalk.blue.inverse.bold(`My Spotify project running on port ${PORT} 🎧 🥁 🎸 🔊`)))