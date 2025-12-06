class MensajeContacto {
    constructor(nombre, correo, mensaje) {
        this.nombre = nombre;
        this.correo = correo;
        this.mensaje = mensaje;
    }

    resumen() {
        return `${this.nombre} (${this.correo}): ${this.mensaje}`;
    }
}

const form = document.getElementById("formContacto");
const confirmacion = document.getElementById("confirmacion");

form.addEventListener("submit", e => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !mensaje) {
        confirmacion.innerHTML = `<div class="alert alert-danger">Complete todos los campos.</div>`;
        return;
    }

    const nuevo = new MensajeContacto(nombre, correo, mensaje);

    confirmacion.innerHTML = `<div class="alert alert-success">Mensaje enviado correctamente.</div>`;

    console.log(nuevo.resumen());
    form.reset();
});