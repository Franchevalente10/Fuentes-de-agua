
  let total = 0;
  let cartItems = [];

  function agregarAlCarrito(nombreFuente, precio) {
    const carritoContainer = document.getElementById('carrito-container');
    const nuevoItem = document.createElement('div');
    nuevoItem.classList.add('agregar-productos');
    nuevoItem.innerHTML = `
      <p>${nombreFuente} - $${precio}</p>
      <button class="btn btn-primary btn-eliminar" onclick="eliminarDelCarrito('${nombreFuente}')">Eliminar</button>
    `;
    carritoContainer.appendChild(nuevoItem);
    total += precio;
    document.getElementById('total').innerText = total;

    const existeItem = cartItems.find(item => item.nombreFuente === nombreFuente);
    if (!existeItem) {
      cartItems.push({ nombreFuente, precio });
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }

  function eliminarDelCarrito(nombreFuente) {
    const carritoContainer = document.getElementById('carrito-container');
    const itemsEnCarrito = carritoContainer.querySelectorAll('div');
    const itemAEliminar = Array.from(itemsEnCarrito).find(item => item.textContent.includes(nombreFuente));
    if (itemAEliminar) {
      const precio = parseInt(itemAEliminar.textContent.match(/\$(\d+)/)[1], 10);
      total -= precio;
      document.getElementById('total').innerText = total;
      carritoContainer.removeChild(itemAEliminar);

      
      cartItems = cartItems.filter(item => item.nombreFuente !== nombreFuente);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.innerHTML = ''; 

    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      cartItems = JSON.parse(storedCartItems);
      cartItems.forEach((item) => {
        agregarAlCarrito(item.nombreFuente, item.precio);
      });
    }

  });
  

document.addEventListener('DOMContentLoaded', function () {
  const btnTroncosRueda = document.getElementById('btnTroncosRueda');
  const btnTroncos = document.getElementById('btnTroncos');
  const btnPatos = document.getElementById('btnPatos');
  const btnBarriles = document.getElementById('btnBarriles');
  const btnAljibe = document.getElementById('btnAljibe');
  const btnElefante = document.getElementById('btnElefante');
const botonComprar = document.querySelector(".btncomprar")
  

  btnTroncosRueda.addEventListener('click', function () {
    agregarAlCarrito('Fuente de troncos con rueda', 10000);
    Toastify({
      text: "Se añadio producto al carrito",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
  });

  btnTroncos.addEventListener('click', function () {
    agregarAlCarrito('Fuente de troncos', 10000);
    Toastify({
      text: "Se añadio producto al carrito",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
  });

  btnPatos.addEventListener('click', function () {
    agregarAlCarrito('Fuente de Patos', 8000);
    Toastify({
      text: "Se añadio producto al carrito",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
  });

  btnBarriles.addEventListener('click', function () {
    agregarAlCarrito('Fuente de barriles', 7000);
    Toastify({
      text: "Se añadio producto al carrito",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
  });

  btnAljibe.addEventListener('click', function () {
    agregarAlCarrito('Fuente de aljibe', 7000);
    Toastify({
      text: "Se añadio producto al carrito",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
  });

  btnElefante.addEventListener('click', function () {
    agregarAlCarrito('Fuente de Elefantes', 8000);
    Toastify({
      text: "Se añadio producto al carrito",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
  });
  
  botonComprar.addEventListener('click', function () {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Su compra ah sido realizada con exito',
      showConfirmButton: false,
      timer: 1500
    })
  });
});

