const SpotifyWrapper = require('spotify-wrapper').default;

const spotify = new SpotifyWrapper({
    token: '907b0ba861524e7190d6b376d88852b0'
});

module.exports = spotify;