const display = document.querySelector("input")
const buttons = document.querySelectorAll('.btn')


buttons.forEach((button) => {
  button.addEventListener('click', (e) => {

    switch (e.target.value) {
      case 'AC':
        display.value = ''
        break;
      case '=':
        if (display.value) display.value = eval(display.value) 
        break;
      case 'Clr':
        if (display.value) display.value = display.value.slice(0, -1)
        break;
      default:
        display.value += e.target.value
        break;
    }
  })
})








