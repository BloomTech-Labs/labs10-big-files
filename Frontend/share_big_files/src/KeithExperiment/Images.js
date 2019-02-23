import React from 'react'


var testImages = [
    "http://static.ddmcdn.com/gif/lightning-gallery-18.jpg",
    "http://static.ddmcdn.com/gif/lightning-gallery-19.jpg",
    "http://static.ddmcdn.com/gif/lightning-gallery-20.jpg",
    "http://static.ddmcdn.com/gif/lightning-gallery-17.jpg"];

function randImg() {
    var size = images.length
    var x = Math.floor(size * Math.random())
    document.getElementById('image').src = images[x];
}

randImg();

export default testImages