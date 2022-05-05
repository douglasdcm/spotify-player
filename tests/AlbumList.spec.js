require('jsdom-global')()
var expect = require('chai').expect;
var renderAlbums = require('../src/AlbumList').renderAlbums;
// var spotify = require('../src/Spotify.js')

describe('AbumList', () => {
    const data = [{
        "album_type": "album",
        "artists": [{
            "name": "Incubus"
        }],
        "id": "6peEdPVO73WtgGah5sEhX4",
        "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/59a536f0bf0ddaa427e4c7",
            "width": 640
        }, {
            "height": 640,
            "url": "https://i.scdn.co/image/59a536f0bf0ddaa427e4c7",
            "width": 640
        }, {
            "height": 640,
            "url": "https://i.scdn.co/image/59a536f0bf0ddaa427e4c7",
            "width": 640
        }],
        "name": "The Essential Incubus",
        "type": "album",
    }]

    const data2 = [{
        "album_type": "album",
        "artists": [{
            "name": "Incubus"
        }],
        "id": "6peEdPVO73WtgGah5sEhX4",
        "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/59a536f0bf0ddaa427e4c7",
            "width": 640
        }, {
            "height": 640,
            "url": "https://i.scdn.co/image/59a536f0bf0ddaa427e4c7",
            "width": 640
        }, {
            "height": 640,
            "url": "https://i.scdn.co/image/59a536f0bf0ddaa427e4c7",
            "width": 640
        }],
        "name": "The Essential Incubus",
        "type": "album",
    }, {
        "album_type": "album",
        "artists": [{
            "name": "Incubus"
        }],
        "id": "6peEdPVO73WtgGah5sEhX4",
        "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/59a536f0bf0ddaa427e4c7",
            "width": 640
        }, {
            "height": 640,
            "url": "https://i.scdn.co/image/59a536f0bf0ddaa427e4c7",
            "width": 640
        }, {
            "height": 640,
            "url": "https://i.scdn.co/image/59a536f0bf0ddaa427e4c7",
            "width": 640
        }],
        "name": "The Essential Incubus",
        "type": "album",
    }]


    const markup = `
    <div class="list-item">
        <img src="${data[0].images[2].url}" alt="${data[0].name}">
        <div class="list-description">
            <p class="list-title">${data[0].name}</p>
            <p class="list-subtitle">${data[0].artists[0].name}</p>
        </div>
    </div>`;

    const markup2 = `
    <div class="list-item">
        <img src="${data[0].images[2].url}" alt="${data[0].name}">
        <div class="list-description">
            <p class="list-title">${data[0].name}</p>
            <p class="list-subtitle">${data[0].artists[0].name}</p>
        </div>
    </div>
    <div class="list-item">
        <img src="${data[0].images[2].url}" alt="${data[0].name}">
        <div class="list-description">
            <p class="list-title">${data[0].name}</p>
            <p class="list-subtitle">${data[0].artists[0].name}</p>
        </div>
    </div>`;

    it('should exist', () => {
        expect(renderAlbums).to.exist;
    });
    it('should create and append the markup given a correct data', () => {
        const element = document.createElement('div');
        renderAlbums(data, element);
        expect(element.innerHTML).to.be.eql(markup)

    })
    it('should create and append the when more then 1 album', () => {
        const element2 = document.createElement('div');
        renderAlbums(data2, element2);
        expect(element2.innerHTML).to.be.eql(markup2)
    })

})

