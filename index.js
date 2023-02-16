//recopila todos los contenedores de las lineas decorativas
window.addEventListener('load', () => {
  const lineContainers = document.querySelectorAll('.draw-line')
  lineContainers.forEach((element) => drawLine(element))
})

//Funcion para dibujar las lineas decorativas
const drawLine = (container) => {
  const [width, height] = [container.offsetWidth, container.offsetHeight]

  const draw = SVG().addTo(container).size(width, height)
  const circle = draw
    .circle(width - 8, 100)
    .fill('transparent')
    .stroke({ color: '#333', width: 3 })
    .cx(width / 2)
    .cy(15)

  draw
    .line(
      width / 2,
      circle.attr('cy') + circle.attr('r'),
      width / 2,
      height - 5
    )
    .stroke({ color: '#333', width: 3, linecap: 'round' })
}
