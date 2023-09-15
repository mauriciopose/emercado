document.addEventListener("DOMContentLoaded", () => {
  let contenidoIndex = localStorage.getItem("EmailPersona");
  let emailPersona = document.getElementById("emailPersona");
  emailPersona.innerHTML = `Perfil: ${contenidoIndex}`;

  const estrellita1 = document.getElementById("estrellita1");
  let variableeste = 0;
  estrellita1.addEventListener("click", () => {
    estrellita1.classList.add("claseEstrella");
    estrellita2.classList.add("claseEstrellaWhite");
    estrellita3.classList.add("claseEstrellaWhite");
    estrellita4.classList.add("claseEstrellaWhite");
    estrellita5.classList.add("claseEstrellaWhite");
    variableeste = 1
  });

  const estrellita2 = document.getElementById("estrellita2");

  estrellita2.addEventListener("click", () => {
    estrellita1.classList.add("claseEstrella");
    estrellita2.classList.add("claseEstrella");
    estrellita2.classList.remove("claseEstrellaWhite");

    estrellita3.classList.add("claseEstrellaWhite");
    estrellita4.classList.add("claseEstrellaWhite");
    estrellita5.classList.add("claseEstrellaWhite");
    variableeste = 2
  });
  const estrellita3 = document.getElementById("estrellita3");

  estrellita3.addEventListener("click", () => {
    estrellita1.classList.add("claseEstrella");
    estrellita2.classList.add("claseEstrella");
    estrellita3.classList.add("claseEstrella");
    estrellita2.classList.remove("claseEstrellaWhite");
    estrellita3.classList.remove("claseEstrellaWhite");
    estrellita4.classList.add("claseEstrellaWhite");
    estrellita5.classList.add("claseEstrellaWhite");
    variableeste = 3
  });

  const estrellita4 = document.getElementById("estrellita4");

  estrellita4.addEventListener("click", () => {
    estrellita1.classList.add("claseEstrella");
    estrellita2.classList.add("claseEstrella");
    estrellita3.classList.add("claseEstrella");
    estrellita4.classList.add("claseEstrella");
    estrellita2.classList.remove("claseEstrellaWhite");
    estrellita3.classList.remove("claseEstrellaWhite");
    estrellita4.classList.remove("claseEstrellaWhite");
    estrellita5.classList.add("claseEstrellaWhite");
    variableeste = 4
  });
  const estrellita5 = document.getElementById("estrellita5");

  estrellita5.addEventListener("click", () => {
    estrellita5.classList.add("claseEstrella");
    estrellita4.classList.add("claseEstrella");
    estrellita3.classList.add("claseEstrella");
    estrellita2.classList.add("claseEstrella");
    estrellita1.classList.add("claseEstrella");
    estrellita2.classList.remove("claseEstrellaWhite");
    estrellita3.classList.remove("claseEstrellaWhite");
    estrellita4.classList.remove("claseEstrellaWhite");
    estrellita5.classList.remove("claseEstrellaWhite");
    variableeste = 5
  });

  const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";

  const numeroProd = localStorage.getItem("selectedProduct");
  const content = PRODUCT_INFO_URL + numeroProd + ".json";
  var contenidoDePag = document.getElementById("contenidoDePag");
  fetch(content)
    .then((response) => response.json())
    .then(
      (data) =>
      (

        contenidoDePag.innerHTML = `
                
        <div>
        <h1 class="contenedor1">${data.name}</h1>
        <hr />
                
        <p class="cat1">Precio:<p>${data.currency} ${data.cost}</p>
        <p class="cat1">Descripción:</p><p>${data.description}</p>
        <p class="cat1">Categoría:</p><p>${data.category}</p>
        <p class="cat1">Cantidad vendidos:</p><p>${data.soldCount}</p>
        <p class="cat1">Imágenes: </p>

        <div class="galeria">
        <div class="imagenesgas">
        <img src="${data.images[0]}"></img>
        </div>
        <div class="imagenesgas">
        <img src="${data.images[1]}"></img>
        </div>
        <div class="imagenesgas">
        <img src="${data.images[2]}"></img>
        </div>
        <div class="imagenesgas">
        <img src="${data.images[3]}"></img>
        </div>
                
        </div>
        </div>
        `
      )
    );

    function calificacion(score) {
      if (score == "5") {
        return `
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        `;
      } else if (score == "4") {
        return `
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
        `;
      } else if (score == "3") {
        return `
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        `;
      } else if (score == "2") {
        return `
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        `;
      } else if (score == "1") {
        return `
          <i class="fas fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        `;
      }else if (score == "0") {
        return `
          Sin calificación.
        `;
      }
      return "Puntuación no válida";
    }
  
    let comments = PRODUCT_INFO_COMMENTS_URL + numeroProd + ".json";
    let infocomentarios = document.querySelector("#comments");
    fetch(comments)
    .then((response) => response.json())
    .then((data) => {
      infocomentarios.innerHTML = `
        <div class="container"> 
          <h4>Comentarios</h4>
          <ul class="list-group" id="lista1">
            ${data.map((comment) => `
              <li class="list-group-item">
                <strong>${comment.user}</strong>
                <p>${comment.dateTime}</p>
                <p>${calificacion(comment.score || comment.variableeste)}</p> 
                <p>${comment.description}</p>
              </li>
            `).join('')}
          </ul>
        </div>`;


    });
    let botonEnvio = document.getElementById("botonEnvio")
    const Fecha = new Date();
    console.log(Fecha.getDate())

        botonEnvio.addEventListener("click", ()=>{
          console.log("Envio")
          
          const inputTextArea = document.getElementById("textArea").value
          
          let año = Fecha.getFullYear()
          console.log(año)
          let mes = Fecha.getMonth()+1
          console.log(mes)
          let dia = Fecha.getDate()
          console.log(dia)

          let hora =Fecha.getHours()
          let minutos = Fecha.getMinutes()
          let segundos = Fecha.getSeconds()
          const nuevoElemento = `<li class="list-group-item"><strong>${contenidoIndex}</strong><p>${año}-${mes}-${dia} ${hora}:${minutos}:${segundos} </p> <p>${calificar(variableeste)} </p> <p>${inputTextArea}</p></li>` 
          let lista1 = document.getElementById("lista1")
          lista1.innerHTML += nuevoElemento


          function calificar (area){
          if (area == "5") {
            return `
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            `;
          } else if (area == "4") {
            return `
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            `;
          } else if (area == "3") {
            return `
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            `;
          } else if (area == "2") {
            return `
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            `;
          } else if (area == "1") {
            return `
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            `;
          }
          else if (area == "0") {
            return `
              Sin calificación.
            `;
          }
        }

        
        
        
      })})