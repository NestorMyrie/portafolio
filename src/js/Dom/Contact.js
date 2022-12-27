const form = document.getElementById('contact-form'
)

form.addEventListener('submit', handleSubmid)

async function handleSubmid(event) {
    event.preventDefault()
const {name,mail,phone,mesage} =this
if(name.value.length <=3){

    name.parentNode.lastElementChild.style.border='1px solid red'
}


// const errormsg =document.getElementById('main_contact__form_error')
// if(name.value.length <=3 || !isEmail(mail.value) || (typeof phone != 'number')){
//     errormsg
// }
 
 

//     const formData = new FormData(this)
//    const response= await fetch(this.action,{
//       method:this.method,
//       body:formData,
//       headers:{
//           "Accept":"application/json"
//       }
//     })
//   if(response.ok){
//       console.log("se Envio!")
//   }
  }