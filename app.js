function verDocumento(tipo) {

    let mensaje = "";

    switch (tipo) {

        case "soap":
            mensaje = "📄 SOAP\n\nDocumento de prueba.\n\nEn la versión final aquí aparecerá el documento real.";
            break;

        case "revision":
            mensaje = "🔧 REVISIÓN TÉCNICA\n\nDocumento de prueba.\n\nEn la versión final aquí aparecerá el documento real.";
            break;

        case "permiso":
            mensaje = "🚗 PERMISO DE CIRCULACIÓN\n\nDocumento de prueba.\n\nEn la versión final aquí aparecerá el documento real.";
            break;

        case "gases":
            mensaje = "🌱 CERTIFICADO DE GASES\n\nDocumento de prueba.\n\nEn la versión final aquí aparecerá el documento real.";
            break;

        case "padron":
            mensaje = "🔐 PADRÓN\n\nEste documento estará protegido en la versión final.";
            break;

        default:
            mensaje = "Documento no disponible.";
    }

    alert(mensaje);
}
