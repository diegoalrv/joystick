// Obtenemos los elementos del DOM
const contenedores = document.querySelectorAll('.el');

// Iteramos sobre cada contenedor
contenedores.forEach(contenedor => {
    const circulo = contenedor.querySelector('.circulo');
    // Variables para almacenar la posición inicial del toque y la posición inicial del círculo
    let initialX, initialY;

    // Función para iniciar el arrastre con eventos táctiles
    const startDrag = e => {
        const rect = circulo.getBoundingClientRect();
        const touch = e.targetTouches[0];
        initialX = touch.clientX - rect.left;
        initialY = touch.clientY - rect.top;
        document.addEventListener('touchmove', drag);
        document.addEventListener('touchend', stopDrag);
        //console.log(`x init ${initialX}/ y init ${initialY}`)
        console.log(`stardrag rect left ${rect.left} top ${rect.top}`)
    };

    // Función para mover el círculo con eventos táctiles
    const drag = e => {
        e.preventDefault();
        const rect = contenedor.getBoundingClientRect();
        const touch = e.targetTouches[0];
        let offsetX = touch.clientX - rect.left - initialX;
        let offsetY = touch.clientY - rect.top - initialY;
        const newX = Math.min(Math.max(offsetX, 0), contenedor.clientWidth - circulo.offsetWidth);
        const newY = Math.min(Math.max(offsetY, 0), contenedor.clientHeight - circulo.offsetHeight);
        circulo.style.transform = `translate(${newX}px, ${newY}px)`;

        // Muestra la posición x e y del círculo
        //console.log(`Posición X: ${newX}, Posición Y: ${newY}`);
        //console.log(`x init ${initialX}/ y init ${initialY}`)
        console.log(`drag rect left ${rect.left} top ${rect.top}`)
    };

    // Función para detener el arrastre con eventos táctiles
    const stopDrag = () => {
        document.removeEventListener('touchmove', drag);
        document.removeEventListener('touchend', stopDrag);
        // Lleva el círculo al centro del contenedor
        const rect = contenedor.getBoundingClientRect();
        const centerX = (contenedor.clientWidth - circulo.offsetWidth) / 2;
        const centerY = (contenedor.clientHeight - circulo.offsetHeight) / 2;
        circulo.style.transform = `translate(${centerX}px, ${centerY}px)`;

        //console.log(`Posición X: ${newX}, Posición Y: ${newY}`);
    };

    // Evento de inicio de arrastre al tocar el círculo en dispositivos táctiles
    circulo.addEventListener('touchstart', startDrag);

    document.body.addEventListener('touchmove', function(event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del desplazamiento
    }, { passive: false });
});