import React from 'react'


var testImages = [
    "Canvas.jpg",
    "Sky.jpg",
    "Grapes.jpg"
];

function randImg() {
    var size = testImages.length
    var x = Math.floor(size * Math.random())
    document.getElementById('image').src = testImages[x];
}

// randImg();

export default randImg