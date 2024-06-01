const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");


const data = {
  title:
    "A MELHOR WEB RÁDIO",
  artist: "© Copyright 2018",
  cover: "https://i.imgur.com/HQXAjT2.jpeg",
  file: ""
};

cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
title.innerText = data.title;
artist.innerText = ` ${data.artist}`;
