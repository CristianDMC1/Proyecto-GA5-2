const openModal= document.getElementById("open-modal")
const modal=document.getElementById("mensaje")
const closeModal=document.getElementById("close")

const botonesPqrs=document.querySelectorAll(".botonPqrs")
botonesPqrs.forEach((boton)=>{
    boton.addEventListener("click",()=>{
        modal.close()
    })

})

openModal.addEventListener("click",()=>{
    modal.showModal()
})
closeModal.addEventListener("click",()=>{
    modal.close()
})