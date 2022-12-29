addEventListener('load',() => {
  const main_proyects_proyects = document.getElementById(
    "main_proyects_proyects"
  );
  const proyects__header_sections = document.getElementById(
    "proyects__header_sections"
  );
  const createProyect = (img, title, description, repo, links, category) => {
    const template = `  
             <div class="proyect_box__content  " >
              <!-- Icons and links -->
              <ul class="box__content_boxLinks">
                  <li><a href="${repo}" target="_blank"> <img src="/src/imgs/icons/githubicon.svg" alt="Repositorio"/> </a></li>
                  <li><a href="${links}" target="_blank"><img src="/src/imgs/icons/eyeicon.png" alt="Ver Proyecto"></a></li>
              </ul>
              <img class="proyect_box__img" src="${img}" alt="Imagen de proyecto" />
              <div class="proyect_box__info">
                  <h4 class="box__info__title">${title}</h4>
                  <p class="box__info_description"  >${description}</p>
              </div>
             </div>
         `;
  
    const div = document.createElement("div");
    div.innerHTML = template;
    div.classList.add("proyect_box");
    div.classList.add(`box__content_${category}`);
  
    return div;
  };
  
  const printProyects = (target) => {
    const fragment = document.createDocumentFragment();
  
    fetch("/src/localApi/proyects.json")
      .then((e) => e.json())
      .then(({ proyects }) => {
        try {
          proyects.map(({ img, title, desc, links, category }) => {
            const newProyect = createProyect(
              img,
              title,
              desc,
              links.github,
              links.link,
              category
            );
            fragment.appendChild(newProyect);
          });
        } catch {
          console.log("a");
        }
      })
      .finally((e) => main_proyects_proyects.appendChild(fragment));
  };
  printProyects();
  // si no tiene categoria mandalo a todos
  //Creare un eventClick dinamico que detectara apartir del atributo
  //name, que elementos debe ocultar y cuales mostrar
  proyects__header_sections.addEventListener("click", (element) => {
    //si el elemento clickeado es un li
    if (element.target.tagName == "LI") {
  //removemos el color morado a los  apartados ocultos
  
  Array.from(element.target.parentNode.children).map(section=>section.classList.remove("activeProyects"))
     element.target.classList.add('activeProyects')
  
      const category = element.target.getAttribute("name");
          // obtenemos un array con todos los divs proyect
      const proyects = Array.from(main_proyects_proyects.children);
      
      if (category) {
        proyects.map(proyectDiv =>{
          //verificamos cuales son los elementos con la class box__content
          // y el prefijo que seleccionamos
      if(Array.from(proyectDiv.classList).includes(`box__content_${category}`)){
          proyectDiv.style.display='block'
      }else{
          proyectDiv.style.display='none'
      }
      })
          } else  {
  
  
  
              proyects.map(proyectDiv =>{
                 
                  proyectDiv.style.display='block'
            
              })
  
      }
    }
  });
})