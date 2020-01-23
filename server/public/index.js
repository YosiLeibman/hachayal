const form = document.querySelector('#form')

form.addEventListener('submit',e=>{
    e.preventDefault()
    const formData = new FormData(form)
    // formData.append('token', sessionStorage.token)
    fetch('/upload', {
    method: 'POST',
    body: formData,
    headers:{'token':sessionStorage.token}
  })
})

console.log("blah");