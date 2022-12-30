const main_navbar = document.getElementById("main_navbar");
const links = Array.from(document.querySelectorAll("#links li "));
const sections = Array.from(document.getElementsByTagName("section"));
const ismatchResponsive = matchMedia("(min-width:1050px)");

let intersection_options = {
  root: null,
  rootMargin: "0px",

  threshold: ismatchResponsive.matches ? 0.5 : 0.2,
};

scrollWaitChanges(ismatchResponsive);

activeColorNavItems(intersection_options);

function activeColorNavItems(options) {
  const intersectionCallback = (data) => {
    if (data[0].isIntersecting) {
      sections.map((element, position) => {
        if (element === data[0].target) {
          links[position].classList.add("active");
        } else {
          links[position].classList.remove("active");
        }
      });
    }
  };

  let observe = new IntersectionObserver(intersectionCallback, options);
  // Observamos todas las sections
  sections.map((e, i) => {
    observe.observe(e);
  });
}

//verificamos si es responsive, en caso que o igual asignamos los cambios en caso que se
//escale la pantalla

function scrollWaitChanges(mediaquery) {
  if (mediaquery.matches) {
    scrollOpacityEfect();
  } else {
    mediaquery.addEventListener("change", () => {
      if (mediaquery.matches) {
        scrollOpacityEfect();
      }
    });
  }
}

function scrollOpacityEfect() {
  addEventListener("scroll", (event) => {
    //si esta en responsive agregaremos el evento scroll que verificara si hicimos scroll
    //hacia abajo, si es asi agregamos active al navbar,
    //resimido en un ternario

    document.body.getBoundingClientRect().y < -400
      ? main_navbar.classList.add("active")
      : main_navbar.classList.remove("active");
  });
}

/**
 * Que logica aplique?
 * como hay 5 navlink, tienen que haber un minimo de 5 sections
 * asi que cuando observemos un section, esta funcion tomara
 * su posicion en el dom, ej [4] y al navlink en la posicion 4
 * le colocara  la case active, si no estamos observando la seccion,
 * se remueve la clase
 */
