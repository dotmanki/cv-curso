window.addEventListener('load', () => {
  //recopila todos los contenedores de las lineas decorativas
  const lineContainers = document.querySelectorAll('.draw-line')
  lineContainers.forEach((element) => drawLine(element))

  //Selecciona el botón para alternar el modo oscuro
  const buttonToggleMode = document.querySelector('#toggle-mode')

  //Alterna al modo oscuro mediante tailwind
  buttonToggleMode.addEventListener('click', () =>
    document.querySelector('html').classList.toggle('dark')
  )
})

//Funcion para dibujar las lineas decorativas
const drawLine = (container) => {
  const parentTagName = container.parentNode.parentNode.tagName
  const [width, height] = [container.offsetWidth, container.offsetHeight]

  const draw = SVG().addTo(container).size(width, height)
  const circle = draw
    .circle(width - 8, 100)
    .fill('transparent')
    .stroke({ width: 3 })
    .cx(width / 2)
    .cy(15)
    .addClass(
      parentTagName !== 'ASIDE'
        ? 'stroke-primary dark:stroke-dark-primary'
        : 'stroke-primary'
    )

  draw
    .line(
      width / 2,
      circle.attr('cy') + circle.attr('r'),
      width / 2,
      height - 5
    )
    .stroke({ width: 3, linecap: 'round' })
    .addClass(
      parentTagName !== 'ASIDE'
        ? 'stroke-primary dark:stroke-dark-primary'
        : 'stroke-primary'
    )
}
