addEventListener('load',() => {
  
  const form = document.getElementById('contact-form'
  )
  const messageError =form.querySelector('#Error_Mesage')
  
  
  
  function isEmail(email) {
      var re = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
      return re.test(String(email).toLowerCase());
    }
  
  form.addEventListener('submit', handleSubmid)
  
  async function handleSubmid(event) {
      event.preventDefault()
  const {name,mail,phone,mesage} =this
  
  
  //name
  borderIfNot(name.value.length >3,name,'Nombre')
  // mail
  
  console.log(mesage.value.length===0 || phone.value.length>6 ,mesage.value)
  borderIfNot(!isEmail(mail.value),mail,'Email')
  // Phone
  borderIfNot(phone.value.length===0 || phone.value.length>6,phone,'Numero')
  borderIfNot(mesage.value.length===0 || mesage.value.length>6,mesage,'Mensaje')
  
  //mensaje
  // myrienestor@gmail.com
  
  function borderIfNot(condition,element,msg){
      if(!condition){
        element.parentNode.lastElementChild.style.border='1px solid red'
        messageError.textContent=`Porfavor proporciona un ${msg} valido`
        messageError.style.display='block'
        element.addEventListener('focus',()=>{
          element.parentNode.lastElementChild.style.border='1px solid white'
        messageError.style.display='none'
          
      })
  
      }
     
    }
  
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
})