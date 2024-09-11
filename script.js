// Inicializa el SignaturePad
const canvas = document.querySelector("#signature-pad canvas");
const signaturePad = new SignaturePad(canvas);

// Ajustar el tamaño del canvas
function resizeCanvas() {
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext("2d").scale(ratio, ratio);
    signaturePad.clear(); // Necesario para borrar la firma anterior en el tamaño anterior.
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Botón para borrar la firma
document.getElementById("clear").addEventListener("click", () => {
    signaturePad.clear();
});

// Evento de envío del formulario
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    
    if (signaturePad.isEmpty()) {
        alert("Por favor, proporcione su firma.");
    } else {
        // Aquí puedes manejar los datos del formulario
        const firma = signaturePad.toDataURL();
        console.log("Firma en formato base64:", firma);
        alert("Formulario enviado exitosamente.");
        // Aquí puedes enviar los datos del formulario y la firma a un servidor
    }
});
