




/*------------------------------------Carrousel Infinito-----------------------------------*/

/*------------------------------------Netflix-----------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".custom-carousel-track");
  
    // Datos de las cards (nombre, precio y URL de la imagen)
    const cardsData = [
        { name: "Card 1", image: "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABR5jAPn5IbmE1_iAH6OWFzja75ynN39Eii_Yq3bxELhEliIbdf6yTQezElZAFK26GMblHzbYYodYoL6bW4vS9LRwidQJ3YX7O5Jm5dPWPH68Uyll8hQSf-FjZmIuRVWt0oTvDw.jpg?r=201" },
        { name: "Card 2", image: "https://bollynewsuk.com/wp-content/uploads/2023/07/heart-of-stone-uk-netflix-poster-2.jpg" },
        { name: "Card 3", image: "https://www.indiewire.com/wp-content/uploads/2017/09/imperial-dreams-2014.jpg?w=426" },
        { name: "Card 4", image: "https://images.squarespace-cdn.com/content/v1/63bb3e8a824d7e2f7eedf0d3/6dabf093-d7ea-4c67-ae7d-a88b5230cbf7/Scoop+3.jpeg" },
        { name: "Card 5", image: "https://static1.tribute.ca/poster/660x980/money-heist-netflix-144238.jpg" },
        { name: "Card 6", image: "https://cdn01.justjared.com/wp-content/uploads/2020/08/enola-poster/millie-bobby-brown-enola-holmes-poster-06.jpg" },
        { name: "Card 7", image: "https://64.media.tumblr.com/eacd7bc6999b55477cf2dc9f20c318e6/abcb2dee99d386d3-81/s2048x3072/f97d62eb3a4aad1547b25f28b20286c165896a0a.jpg" },
        { name: "Card 8", image: "https://i0.wp.com/screen-connections.com/wp-content/uploads/2021/10/Red.Notice-Official.One_.Sheet_.Poster-01.jpg?resize=691%2C1024&ssl=1" },
        { name: "Card 9", image: "https://m.media-amazon.com/images/M/MV5BMWQ4YWYxYTAtZTlhNC00Nzc3LWE3OWUtZjY5MThlNWNiYTBiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
        { name: "Card 10", image: "https://i.pinimg.com/550x/0e/4c/e0/0e4ce03e5efed43efe2986faa47dd8f8.jpg" },
        { name: "Card 11", image: "https://www.watchpro.com/cloud/2023/08/14/Heart-Of-Stone-Rachel-Stone-Hublot-poster.jpeg" },
        { name: "Card 12", image: "https://lh4.googleusercontent.com/proxy/qUl42PQfO4b-J3EbGk3W12Jwblwywtkm9j8wDCHhQ6qtKtePFb9pIvIiS66lRxJ44ERX8Jh7GMkkf6rZPY56StULVj-iA9ezcfDC9yIlvmdbXcC93ahdUMrNx9LjY9OLumZQDdRBgOzsMAcr9kgq0WnzO02sL1lcuqx7RtUtS24D9WdSov8twZAz5gpsfz7IvIBvPCxPLaE" },
        { name: "Card 13", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Stranger_Things_5_title_card.webp/1200px-Stranger_Things_5_title_card.webp.png" },
        { name: "Card 14", image: "https://m.media-amazon.com/images/M/MV5BNGM1ZjY5MGQtMGNmNy00ZjVmLTkyNTYtMTQwOGEyMTU4NzgxXkEyXkFqcGc@._V1_.jpg" },
      ];
  
    // Crear dos sets de cards para un carrusel infinito
    for (let i = 0; i < cardsData.length * 2; i++) {
      const cardData = cardsData[i % cardsData.length];
      const card = createCard(cardData.name, cardData.price, cardData.image);
      track.appendChild(card);
    }
  
    // Función para crear una card
    function createCard(name, price, imageUrl) {
      const card = document.createElement("div");
      card.classList.add("custom-card"); // Usamos la clase correcta: custom-card
  
      // Contenido de la card (nombre e imagen)
      const cardContent = document.createElement("div");
      cardContent.classList.add("custom-card-content");
  
      // Nombre de la card
    //   const cardName = document.createElement("p");
    //   cardName.textContent = name;
    //   cardContent.appendChild(cardName);
  
      // Imagen de la card
      const cardImage = document.createElement("img");
      cardImage.src = imageUrl;
      cardImage.alt = name;
      cardContent.appendChild(cardImage);
  
      card.appendChild(cardContent);
      return card;
    }
  });

  
/*------------------------------------HBO Max-----------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".custom-carousel-track2");
  
    // Datos de las cards (nombre, precio y URL de la imagen)
    const cardsData = [
        { name: "Card 1", image: "https://hips.hearstapps.com/hmg-prod/images/el-pacificador-675d82490dcfd.jpg?crop=1xw:1xh;center,top&resize=980:*" },
        { name: "Card 2", image: "https://deadline.com/wp-content/uploads/2024/07/BTLBTL_VERT_MAIN_2764x4096_DOM_REV.jpg?w=800" },
        { name: "Card 3", image: "https://blarneystone.ca/wp-content/uploads/2021/07/fb8617a064d7dee0e01b7335d9769a49ac-23-friends-cover-story-lede-mobile.rvertical.w570.jpg" },
        { name: "Card 4", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58SWVu9JDx5l3z46gqqM-ruGfI9usZlSKhw&s" },
        { name: "Card 5", image: "https://www.originalfilmart.com/cdn/shop/files/mad_max_fury_road_2015_teaser_original_film_art_c9c892f0-ea2e-42df-ad47-c6e841fface3_5000x.webp?v=1696019855" },
        { name: "Card 6", image: "https://filmartgallery.com/cdn/shop/files/Dune-Part-Two-Vintage-Movie-Poster-Original-1-Sheet-27x41_195889ac-3cc9-44c1-a67d-67a0010bbe05.jpg?v=1713927920"},
        { name: "Card 7", image: "https://m.media-amazon.com/images/I/71P+4DslKmL._AC_UF1000,1000_QL80_.jpg" },
        { name: "Card 8", image: "https://img.posterstore.com/zoom/wb0081-8thebigbangtheory-gang50x70.jpg" },
        { name: "Card 9", image: "https://cdn.mos.cms.futurecdn.net/p7LYq5FN4SAHk7sYp6zZog.jpg" },
        { name: "Card 10", image: "https://i.ebayimg.com/images/g/QLAAAOSwQTxgH52g/s-l1200.jpg" },
        { name: "Card 11", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlEUS33P4XPyQ0irE5Ww-fyt7KcQ_y56Qaw&s" },
        { name: "Card 12", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjChxBZArnmcp8PrPmgpoZRL8JjaDmJgSSwBQnsLlS4HZXPl78z7N2U3Zulvf_clZbu8v2eQ1vkLhgr5fHhk5R_HBHX_Am2togxZhYjBGBWheC2yyDEjESGM3sBVf2PMKORHjDcjtxbO8lADQmT-PWeEJdnvGQ5qifl8yHZQE54DjK7HNyKjNvxAY3EQhQ/s1068/pasajeros-2016.jpg" },
        { name: "Card 13", image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7894212_b_v10_ab.jpg" },
        { name: "Card 14", image: "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
      ];
  
    // Crear dos sets de cards para un carrusel infinito
    for (let i = 0; i < cardsData.length * 2; i++) {
      const cardData = cardsData[i % cardsData.length];
      const card = createCard(cardData.name, cardData.price, cardData.image);
      track.appendChild(card);
    }
  
    // Función para crear una card
    function createCard(name, price, imageUrl) {
      const card = document.createElement("div");
      card.classList.add("custom-card"); // Usamos la clase correcta: custom-card
  
      // Contenido de la card (nombre e imagen)
      const cardContent = document.createElement("div");
      cardContent.classList.add("custom-card-content");
  
      // Nombre de la card
    //   const cardName = document.createElement("p");
    //   cardName.textContent = name;
    //   cardContent.appendChild(cardName);
  
      // Imagen de la card
      const cardImage = document.createElement("img");
      cardImage.src = imageUrl;
      cardImage.alt = name;
      cardContent.appendChild(cardImage);
  
      card.appendChild(cardContent);
      return card;
    }
  });









/*------------------------------------Prime video----------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".custom-carousel-track3");
  
    // Datos de las cards (nombre, precio y URL de la imagen)
    const cardsData = [
        { name: "Card 1", image: "https://m.media-amazon.com/images/M/MV5BNzE0NjU1MmUtZWUzMS00ZWRiLWE5ZjYtODk3NmRlMmExYWI1XkEyXkFqcGc@._V1_.jpg" },
        { name: "Card 2", image: "https://fc04.deviantart.net/fs71/f/2014/045/a/2/interstellar_by_visuasys-d6ibj30.jpg" },
        { name: "Card 3", image: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg" },
        { name: "Card 4", image: "https://play-lh.googleusercontent.com/BKwe3zCIes_26Uk0104aN043AHyHLjwaHnREp9XtBTpHHTLuJom94WE0CSO8ss5Egx_8ttzRG82XNxOlbw" },
        { name: "Card 5", image: "https://tomatazos.buscafs.com/2023/03/maravilloso-desastre.jpg" },
        { name: "Card 6", image: "https://m.media-amazon.com/images/M/MV5BYTJhNzkzZjktMzZmMC00NGNiLWFjNmItNjI1N2E0ODAxM2RhXkEyXkFqcGc@._V1_QL75_UY281_CR4,0,190,281_.jpg" },
        { name: "Card 7", image: "https://m.media-amazon.com/images/M/MV5BYzgzNGJiMDItZmEwNS00ZjY2LTgzMWMtMTRlMjhhZjk3YThmXkEyXkFqcGc@._V1_.jpghttps://m.media-amazon.com/images/M/MV5BYzgzNGJiMDItZmEwNS00ZjY2LTgzMWMtMTRlMjhhZjk3YThmXkEyXkFqcGc@._V1_.jpg" },
        { name: "Card 8", image: "https://m.media-amazon.com/images/M/MV5BN2Y4ZjkzMWUtMGQyMy00MWRjLWE4YTYtNWY0YmNlYWMzYTBmXkEyXkFqcGc@._V1_.jpg" },
        { name: "Card 9", image: "https://www.lavanguardia.com/peliculas-series/images/serie/poster/2021/10/w1280/nHTZ24v1DeaBs4CUSHl8HWi4fKm.jpg" },
        { name: "Card 10", image: "https://play-lh.googleusercontent.com/0PbsFq6MxQaHELGiTdmGRzhieQEYt4qPHhaIGQsHQxTLxzR7HdFkH_LsbkDaOZNuMuq-sV9eNmRjyVv46Hw" },
        { name: "Card 11", image: "https://m.media-amazon.com/images/S/pv-target-images/09b1b08a2650b786db14bbd2eac1ff699e93c119d9af4912859beea9ff7a4c7b.jpg" },
        { name: "Card 12", image: "https://i.pinimg.com/736x/6e/63/9f/6e639f1ff5503e64b7fccc326fcd2469.jpg" },
        { name: "Card 13", image: "https://www.uphe.com/sites/default/files/styles/scale__344w_/public/2023/02/MEGAN_DVD_PosterArt_191329221716.jpg?itok=RS9RWdVg" },
        { name: "Card 14", image: "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
      ];
  
    // Crear dos sets de cards para un carrusel infinito
    for (let i = 0; i < cardsData.length * 2; i++) {
      const cardData = cardsData[i % cardsData.length];
      const card = createCard(cardData.name, cardData.price, cardData.image);
      track.appendChild(card);
    }
  
    // Función para crear una card
    function createCard(name, price, imageUrl) {
      const card = document.createElement("div");
      card.classList.add("custom-card"); // Usamos la clase correcta: custom-card
  
      // Contenido de la card (nombre e imagen)
      const cardContent = document.createElement("div");
      cardContent.classList.add("custom-card-content");
  
      // Nombre de la card
    //   const cardName = document.createElement("p");
    //   cardName.textContent = name;
    //   cardContent.appendChild(cardName);
  
      // Imagen de la card
      const cardImage = document.createElement("img");
      cardImage.src = imageUrl;
      cardImage.alt = name;
      cardContent.appendChild(cardImage);
  
      card.appendChild(cardContent);
      return card;
    }
  });

/*------------------------------------Disney+-----------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".custom-carousel-track4");
  
    // Datos de las cards (nombre, precio y URL de la imagen)
    const cardsData = [
        { name: "Card 1", image: "https://lumiere-a.akamaihd.net/v1/images/p_disneyplusoriginals_safety_poster_rebrand_da7e71ac.jpeg" },
        { name: "Card 2", image: "https://lumiere-a.akamaihd.net/v1/images/p_snowwhiteandthesevendwarfs_19871_806c8934.jpeg" },
        { name: "Card 3", image: "https://lumiere-a.akamaihd.net/v1/images/unknown_029c9370.png?region=0,0,968,1446" },
        { name: "Card 4", image: "https://cdn.marvel.com/content/1x/bb_payoff_dom_online_1-sht_v7_lg.jpg" },
        { name: "Card 5", image: "https://m.media-amazon.com/images/I/81CIXJxQ3TL._AC_UF1000,1000_QL80_.jpg" },
        { name: "Card 6", image: "https://i.pinimg.com/736x/bf/19/1f/bf191f8a6cd1c4ac13e486aa54e313f7.jpg" },
        { name: "Card 7", image: "https://www.micechat.com/wp-content/uploads/2020/02/Iron-Man-Movie-Poster-Disney-MiceChat.jpg" },
        { name: "Card 8", image: "https://lumiere-a.akamaihd.net/v1/images/p_ladyandthetramp_19879_a178c3df.jpeg?region=0%2C0%2C540%2C810" },
        { name: "Card 9", image: "https://lumiere-a.akamaihd.net/v1/images/p_guardiansofthegalaxy_21001_0bc56a15.jpeg" },
        { name: "Card 10", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYKdf_JDzmsoAx_BYCyH17LdF2R3C1urQuww&s" },
        { name: "Card 11", image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p11408531_b_v8_aa.jpg" },
        { name: "Card 12", image: "https://m.media-amazon.com/images/I/81bNtJ5JODL.jpg" },
        { name: "Card 13", image: "https://whatsondisneyplus.b-cdn.net/wp-content/uploads/2023/05/FwRnr4hagAAzMCh.jpg" },
        { name: "Card 14", image: "https://www.tfaw.com/media/catalog/product/cache/bd1c9e7ac3d7154f1ee4979ec7ffffb0/S/E/SEP240142.jpg" },
      ];
  
    // Crear dos sets de cards para un carrusel infinito
    for (let i = 0; i < cardsData.length * 2; i++) {
      const cardData = cardsData[i % cardsData.length];
      const card = createCard(cardData.name, cardData.price, cardData.image);
      track.appendChild(card);
    }
  
    // Función para crear una card
    function createCard(name, price, imageUrl) {
      const card = document.createElement("div");
      card.classList.add("custom-card"); // Usamos la clase correcta: custom-card
  
      // Contenido de la card (nombre e imagen)
      const cardContent = document.createElement("div");
      cardContent.classList.add("custom-card-content");
  
      // Nombre de la card
    //   const cardName = document.createElement("p");
    //   cardName.textContent = name;
    //   cardContent.appendChild(cardName);
  
      // Imagen de la card
      const cardImage = document.createElement("img");
      cardImage.src = imageUrl;
      cardImage.alt = name;
      cardContent.appendChild(cardImage);
  
      card.appendChild(cardContent);
      return card;
    }
  });

/*------------------------------------Paramount-----------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".custom-carousel-track5");
  
    // Datos de las cards (nombre, precio y URL de la imagen)
    const cardsData = [
        { name: "Card 1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44UzUHwXozLGKLZ_nhO932LLEUg5MgFcDyQ&s" },
        { name: "Card 2", image: "https://m.media-amazon.com/images/M/MV5BYjIyOTY5ZGItYWYwNC00OThjLTkxODAtNDk0NWFjNTNjMWQ0XkEyXkFqcGc@._V1_.jpg" },
        { name: "Card 3", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6j5bFyToN8130-qtTHdD1vEyTN3QX_PRIUw&s" },
        { name: "Card 4", image: "https://assets1.ignimgs.com/2015/11/10/south-park-ob1jpg-a808ca.jpg" },
        { name: "Card 5", image: "https://rchsprowler.com/wp-content/uploads/2021/03/AAAABc-wQAEei1RxZCT3mXe9uSMVuMBX6Fon2-rBwDHi3xfuIzsYWP-k95ht8bVw-1hJBblsFHV5aGKC719cAZip11wBapBmAhxSw.jpg" },
        { name: "Card 6", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbW3AUcrKqAqTbxBoTwGRZr8OUQ59vbBMKUQ&s" },
        { name: "Card 7", image: "https://dx35vtwkllhj9.cloudfront.net/paramountpictures/transformers-rise-of-the-beasts-coppa/images/regions/us/onesheet.jpg" },
        // { name: "Card 8", image: "https://via.placeholder.com/150" },
        // { name: "Card 9", image: "https://via.placeholder.com/150" },
        // { name: "Card 10", image: "https://via.placeholder.com/150" },
        // { name: "Card 11", image: "https://via.placeholder.com/150" },
        // { name: "Card 12", image: "https://via.placeholder.com/150" },
        // { name: "Card 13", image: "https://via.placeholder.com/150" },
        // { name: "Card 14", image: "https://via.placeholder.com/150" },
      ];
  
    // Crear dos sets de cards para un carrusel infinito
    for (let i = 0; i < cardsData.length * 2; i++) {
      const cardData = cardsData[i % cardsData.length];
      const card = createCard(cardData.name, cardData.price, cardData.image);
      track.appendChild(card);
    }
  
    // Función para crear una card
    function createCard(name, price, imageUrl) {
      const card = document.createElement("div");
      card.classList.add("custom-card"); // Usamos la clase correcta: custom-card
  
      // Contenido de la card (nombre e imagen)
      const cardContent = document.createElement("div");
      cardContent.classList.add("custom-card-content");
  
      // Nombre de la card
    //   const cardName = document.createElement("p");
    //   cardName.textContent = name;
    //   cardContent.appendChild(cardName);
  
      // Imagen de la card
      const cardImage = document.createElement("img");
      cardImage.src = imageUrl;
      cardImage.alt = name;
      cardContent.appendChild(cardImage);
  
      card.appendChild(cardContent);
      return card;
    }
  });


/*------------------------------------Crunchyroll-----------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".custom-carousel-track6");
  
    // Datos de las cards (nombre, precio y URL de la imagen)
    const cardsData = [
        { name: "Card 1", image: "https://m.media-amazon.com/images/M/MV5BYjYxMWFlYTAtYTk0YS00NTMxLWJjNTQtM2E0NjdhYTRhNzE4XkEyXkFqcGc@._V1_.jpg" },
        { name: "Card 2", image: "https://m.media-amazon.com/images/M/MV5BNzgxMzI3NzgtYzE2Zi00MzlmLThlNWEtNWVmZWEyZjNkZWYyXkEyXkFqcGc@._V1_.jpg" },
        { name: "Card 3", image: "https://i.pinimg.com/564x/cd/22/9f/cd229f9fe47f3c408ccd66155962a8cb.jpg" },
        { name: "Card 4", image: "https://m.media-amazon.com/images/M/MV5BMWU1OGEwNmQtNGM3MS00YTYyLThmYmMtN2FjYzQzNzNmNTE0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
        { name: "Card 5", image: "https://images.squarespace-cdn.com/content/v1/571abd61e3214001fb3b9966/a8902c91-e813-40fc-b39c-d7c7bf0d8d95/Jujutsu+Kaisen+Key+Animation+Vol.+2.jpg" },
        { name: "Card 6", image: "https://m.media-amazon.com/images/M/MV5BNjY4MDQxZTItM2JjMi00NjM5LTk0MWYtOTBlNTY2YjBiNmFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
        { name: "Card 7", image: "https://m.media-amazon.com/images/M/MV5BMDkwNmU2NzYtYzA4ZS00NTRhLWIzN2ItNWI5M2Q4OGYwNTQ5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
        // { name: "Card 8", image: "https://via.placeholder.com/150" },
        // { name: "Card 9", image: "https://via.placeholder.com/150" },
        // { name: "Card 10", image: "https://via.placeholder.com/150" },
        // { name: "Card 11", image: "https://via.placeholder.com/150" },
        // { name: "Card 12", image: "https://via.placeholder.com/150" },
        // { name: "Card 13", image: "https://via.placeholder.com/150" },
        // { name: "Card 14", image: "https://via.placeholder.com/150" },
      ];
  
    // Crear dos sets de cards para un carrusel infinito
    for (let i = 0; i < cardsData.length * 2; i++) {
      const cardData = cardsData[i % cardsData.length];
      const card = createCard(cardData.name, cardData.price, cardData.image);
      track.appendChild(card);
    }
  
    // Función para crear una card
    function createCard(name, price, imageUrl) {
      const card = document.createElement("div");
      card.classList.add("custom-card"); // Usamos la clase correcta: custom-card
  
      // Contenido de la card (nombre e imagen)
      const cardContent = document.createElement("div");
      cardContent.classList.add("custom-card-content");
  
      // Nombre de la card
    //   const cardName = document.createElement("p");
    //   cardName.textContent = name;
    //   cardContent.appendChild(cardName);
  
      // Imagen de la card
      const cardImage = document.createElement("img");
      cardImage.src = imageUrl;
      cardImage.alt = name;
      cardContent.appendChild(cardImage);
  
      card.appendChild(cardContent);
      return card;
    }
  });


  /*--------------------------Botones------------------------------------------*/

  function showCarousel(id) {
    // Ocultar todas las secciones y títulos
    var containers = document.querySelectorAll('.custom-carousel-container');
    var titles = document.querySelectorAll('h2');
    containers.forEach(function(container) {
      container.style.display = 'none';
    });
    titles.forEach(function(title) {
      title.style.display = 'none';
    });
  
    // Mostrar la sección y título correspondientes al botón clicado
    document.querySelector('.custom-carousel-container-' + id).style.display = 'block';
    document.querySelector('#title-' + id).style.display = 'block'
}

  /*-----------------------------Carrousel Infinito--------------*/


  
var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev" // Corregido aquí
    }
});

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev" // Corregido aquí
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        520: {
            slidesPerView: 2
        },
        950: {
            slidesPerView: 3
        }
    }
});



function E(selector, parent) {
    if (selector instanceof HTMLElement) {
        return selector;
    }
    return (parent || document).querySelectorAll(selector);
}

function hasClass(element, className) {
    return element.classList.contains(className);
}

function radioClass(element, className) {
    E("." + className).forEach(elem => {
        elem.classList.remove(className);
    });
    element.classList.toggle(className);
}

function tabs(nav) {
    let navElem = E(nav)[0];
    navElem.addEventListener("click", (e) => {
        let target = e.target;
        if (hasClass(target, "tab")) {
            radioClass(target, "active");
            let linkedTab = E("." + target.id)[0];
            radioClass(linkedTab, "visible");
        }
    });

    let active = E(".tab.active")[0];
    if (active) {
        radioClass(E("." + active.id)[0], 'visible');
    }
}

tabs(".menu-nav");





let loadMoreBtn1 = document.querySelector('#load-more-1');
let currentItem1 = 4;

loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-1 .box-1')];
    for (var i = currentItem1; i < currentItem1 + 4 && i < boxes.length; i++) {
        boxes[i].style.display = 'inline-block';
    }

    currentItem1 += 4;
    if (currentItem1 >= boxes.length) {
        loadMoreBtn1.style.display = 'none';
    }
}

let loadMoreBtn2 = document.querySelector('#load-more-2');
let currentItem2 = 4;

loadMoreBtn2.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-2 .box-2')];
    for (var i = currentItem2; i < currentItem2 + 4 && i < boxes.length; i++) {
        boxes[i].style.display = 'inline-block';
    }

    currentItem2 += 4;
    if (currentItem2 >= boxes.length) {
        loadMoreBtn2.style.display = 'none';
    }
}

let loadMoreBtn3 = document.querySelector('#load-more-3');
let currentItem3 = 4;

loadMoreBtn3.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-3 .box-3')];
    for (var i = currentItem3; i < currentItem3 + 4 && i < boxes.length; i++) {
        boxes[i].style.display = 'inline-block';
    }

    currentItem3 += 4;
    if (currentItem3 >= boxes.length) {
        loadMoreBtn3.style.display = 'none';
    }
}

let loadMoreBtn4 = document.querySelector('#load-more-4');
let currentItem4 = 4;

loadMoreBtn4.onclick = () => {
    let boxes = [...document.querySelectorAll('.box-container-4 .box-4')];
    for (var i = currentItem4; i < currentItem4 + 4 && i < boxes.length; i++) {
        boxes[i].style.display = 'inline-block';
    }

    currentItem4 += 4;
    if (currentItem4 >= boxes.length) {
        loadMoreBtn4.style.display = 'none';
    }
}


