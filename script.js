const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector(".button-Add")
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

button.addEventListener("click", add)
form.addEventListener("change", save)

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

function add() {
  let today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("DATA JÁ REGISTRADA ❌")
    return
  }

  nlwSetup.addDay(today)
  alert("DATA REGISTRADA COM SUCESSO 🆗")
}

nlwSetup.setData(data)
nlwSetup.load()
