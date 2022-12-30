const formStatus = document.querySelector(".main_contact__form__succefull");

const form = document.getElementById("contact-form");
const messageError = form.querySelector("#Error_Mesage");

function isEmail(email) {
  const regeXp =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return regeXp.test(String(email).toLowerCase());
}

form.addEventListener("submit", handleSubmid);

async function handleSubmid(event) {
  event.preventDefault();
  const { name, mail, phone, mesage } = this;

  const nameVerification = borderIfNot(
    name.value.length > 3,
    name,
    "Porfavor proporciona un Nombre valido"
  );
  const mailVerification = borderIfNot(
    isEmail(mail.value),
    mail,
    "Porfavor proporciona un Email valido"
  );
  const phoneVerification = borderIfNot(
    phone.value.length == 0 || phone.value.length > 7,
    phone,
    "Porfavor proporciona un Numero valido (el campo no es obligatorio)"
  );
  const mesageVerification = borderIfNot(
    mesage.value.length == 0 || mesage.value.length > 7,
    mesage,
    "Porfavor proporciona un mensaje valido (el campo no es obligatorio)"
  );

  // const messageVerification = borderIfNot(
  //   mesage.value.length === 0 || mesage.value.length > 6,
  //   mesage,
  //   "Mensaje"
  // );
  if (
    nameVerification &&
    mailVerification &&
    phoneVerification &&
    mesageVerification
  ) {
    const formData = new FormData(this);
    const response = await fetch(this.action, {
      method: this.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      formStatus.classList.add("active");
      form.classList.add("formDisabled");
    }
  } else {
    console.log("Error");
  }
  function borderIfNot(condition, element, msg) {
    const isInput = element.tagName === "INPUT";
    if (!condition) {
      //Si el elemento traido es un input
      if (isInput) {
        element.parentNode.querySelector("span.border").classList.add("error");
      } else {
        element.parentNode.lastElementChild.style.border = "1px solid red";
      }

      // Fin de TErnario
      messageError.textContent = msg;
      messageError.style.display = "block";
      element.addEventListener("focus", () => {
        if (isInput) {
          element.parentNode
            .querySelector("span.border")
            .classList.remove("error");
        } else {
          element.parentNode.lastElementChild.style.border = "1px solid white";
        }
        messageError.style.display = "none";
      });
      return false;
    }
    return true;
  }
}
