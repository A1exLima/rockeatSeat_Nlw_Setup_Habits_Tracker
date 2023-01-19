const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-01", "01-02", "01-03","01-04", "01-05"],
  water: ["01-01", "01-02", "01-03","01-04", "01-05"],
  food: ["01-01", "01-02", "01-03","01-04", "01-05"],
  reading: ["01-01", "01-02", "01-03","01-04", "01-05"],
  studyPiano: ["01-01", "01-02", "01-03","01-04", "01-05"],
  meditation: ["01-01", "01-02", "01-03","01-04", "01-05"],
  coding: ["01-01", "01-02", "01-03","01-04", "01-05"],
}

nlwSetup.setData(data)
nlwSetup.load()
