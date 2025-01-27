function getCharacters() {
  return fetch("https://swapi.dev/api/people/")
    .then((response) => response.json())
    .then((data) => data.results);
}

export async function showCharacters() {
  const charactersSwiper = document.querySelector("#swiper-wrapper");
  const characters = await getCharacters();
  characters.forEach((character) => {
    const characterElement = document.createElement("div");
    characterElement.innerHTML = `
      <div class="card-character px-5">
        <h2>${character.name}</h2>
        <p>Año de nacimiento: 
          <span class="span-data">
            ${character.birth_year}
          </span>
        </p>
        
        <p class="card__height">Estatura: <span class="span-data">${character.height}</span></p>
        <p>Color de ojos: <span class="span-data">${character.eye_color}</span></p>
        <p>Color de pelo: <span class="span-data">${character.hair_color}</span></p>
      </div>
      `;
    characterElement.classList.add("swiper-slide");
    console.log(characterElement);
    charactersSwiper.appendChild(characterElement);
  });
}
