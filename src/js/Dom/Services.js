

const main_services__container = document.getElementById(
  "main_services__container"
);

//template para crear servicios con programacion funcional
const createServices = (
  img,
  title,
  description,
) => {
  const template = `  

     <img src="${img}" alt="Baner de Frontend">
    <div class="services__card__info">
     <h4>${title}</h4>
     <p>${description}  
     </p>

 </div>`;

  // const fragment = document.createDocumentFragment();
  const div = document.createElement("div");
  div.innerHTML = template;
  div.classList.add('services__card')
  // fragment.appendChild(div);
  return div
};



const printServices= (targett) => {

  const errorMessage = document.createElement('p')
  errorMessage.classList.add('services_error')

  errorMessage.textContent='...:ERROR, no hay contenido para mostrar:...'
  const tempDom = document.createDocumentFragment()
  fetch('/src/localApi/services.json')
  .then(element=>element.json())
  .then(({services})=>{
      try{
        services.map(({img,title,desc})=>{
          const newService = createServices(img,title,desc)
          tempDom.appendChild(newService)
        })
      }catch{
        console.log('error')
      }
  })
  .finally(()=>targett.appendChild(tempDom))
  .catch(error=>targett.appendChild(errorMessage))
}
printServices(main_services__container)