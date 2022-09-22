## Rappi

### Frontend Developer Challenge

#### Tiendas “El Baraton” necesita un e-commerce para expandir sus servicios, para eso don Pepe (propietario de la tienda) ha provisto de los siguientes requierimientos.


1. La tienda debe mostrar categorías las cuales están conformadas por subniveles, estos subniveles a sus vez pueden tener mas subniveles anidados, se debe hacer un menú donde aparezcan categorías y subniveles de forma anidada. Ejemplo:
    • Categoría licores:
        ◦  subnivel vinos:
            ▪ subnivel vinos tintos
            ▪ subnivel vinos blancos

2. los productos tienen un identificador principal y un identificador de subnivel, esto quiere decir que un producto solo debe ser mostrado en su subnivel correspondiente.

3. los productos deben filtrarse por: disponibilidad, rango de precios, cantidad en stock.

4. Los productos deben poder ordenarse por precio, disponibilidad y cantidad.

5. Se debe crear un carrito de compras donde los usuarios puedan agregar, editar cantidad y eliminar un producto.

6. Los productos deben permanecer en el carrito si el usuario cierra y abre la pagina, solo deben ser borrados si el usuario realiza la compra.

7. un subnivel final es aquel que no tiene mas subniveles, en este caso debe aparecer una caja de texto que permita realizar busquedas de productos por nombre en dichos subniveles.

8. Ademas, el e-commrece debe ser responsive.,


Los datos de la tienda estan en dos archivos: categories.json y productos.json. Se puede modificar los datos sin cambiar la estructura de los arhchivos.


### A considerar:

- Indispensable uso de JavaScript
- Puedes escoger cualquier framework que desee, siempre y cuando estte basado en JS o Node.js
- Incluir el Readme con los pasos a seguir para compilar el proyecto y puede considerar agregar informacion adicional sobre resolucion del problema (opcional_
- Manejar el proyecto con git y subir el proyecto a un repositorio