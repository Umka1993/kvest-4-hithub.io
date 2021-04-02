let globalID = 0
let messages = [
  {
  message: "Сообщение 1",
  disabled: false,
  id: globalID
}]

function A() {
  let data = document.getElementById("input__message").value
  // alert(data)
  messages.push({
    message: data,
    disabled: false,
    id:globalID++
  })

  list__message.insertAdjacentHTML('beforeend', `<p>${messages[globalID].message}</p>`)//создаем новый тег и сразу вставляем в него значение

  document.getElementById("input__message").value = ""//чистим input

  for ( let newMessages = 0; newMessages < messages.length; ++newMessages) 

  setInterval(function() {
    const list = document.getElementById('new__message')
    list.innerHTML = `<p>${messages[newMessages].message}</p>`
  }, 5000);

}

 










