const colorInput = document.getElementById('colorInput')
const btnVisualizar = document.getElementById('btnVisualizar')
const valorHexa = document.getElementById('valorHexa')
const cardColor = document.getElementById('cardColor')

btnVisualizar.addEventListener('click', () => {
  valorHexa.textContent = colorInput.value
  valorHexa.style.color = colorInput.value
  cardColor.style.background = colorInput.value
})
