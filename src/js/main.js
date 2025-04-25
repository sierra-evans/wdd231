import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

const hero_title = document.querySelector(".hero-banner_title");
hero_title.innerHTML = parkData.name;

const hero_image = document.querySelector(".hero-banner > img");
hero_image.src = parkData.images[0].url;
hero_image.alt = parkData.images[0].altText;

function parkInfoTemplate(info) {
    return `
    <a href="/" class="hero-banner_title">${info.name}</a>
    <p class="hero-banner_subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}

const hero_content = document.querySelector(".hero-banner_content");
// const content = parkInfoTemplate(parkData);
hero_content.innerHTML = parkInfoTemplate(parkData);