const cover = document.querySelector(".card-image");



const data = {
  cover: "https://i.imgur.com/kSqwkDR.jpeg",
};

cover.style.background = `url('${data.cover}') no-repeat center center / cover`;
title.innerText = data.title;
artist.innerText = ` ${data.artist}`;
