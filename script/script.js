document.documentElement.style.visibility = "hidden";

function demanarDades() {
    var dades = [];
    var errors;

    dades["dni"] = (prompt("DNI:") || "").trim().toLowerCase();
    dades["nom"] = (prompt("Nombre completo:") || "").trim().toLowerCase();
    dades["email"] = (prompt("Email:") || "").trim().toLowerCase();

    errors = validarDades(dades);

    if (errors.length > 0) {
        alert(errors.join("\n"));
        document.documentElement.style.visibility = "visible";
        document.body.innerHTML = "<h1>Acces denegat</h1>";
    } else {
        document.documentElement.style.visibility = "visible";
        alert(
            "Acces concedit\nDNI: " + majusculaDni(dades["dni"]) +
            "\nNom: " + majusculaNom(dades["nom"]) +
            "\nEmail: " + dades["email"]
        );
    }
}

function validarDades(dades) {
    var errors = [];

    if (dades["nom"].split(" ").length != 2) {
        errors.push("El nom ha de tenir 2 paraules");
    }

    if (dades["dni"].length != 9 || isNaN(dades["dni"].substring(0, 8))) {
        errors.push("El dni ha de tenir 8 numeros i 1 lletra");
    }

    if (dades["email"].indexOf("@") == -1 || dades["email"].indexOf(".") == -1) {
        errors.push("L'email ha de tindre format text@text.text");
    }

    if (dades["nom"] != "saul benavent" && dades["nom"] != "samuel puma") {
        errors.push("Nom no autoritzat");
    }

    if (dades["dni"] != "11111111a" && dades["dni"] != "22222222b") {
        errors.push("DNI no autoritzat");
    }

    if (dades["email"] != "saul@gmail.com" && dades["email"] != "samuel@gmail.com") {
        errors.push("Email no autoritzat");
    }

    return errors;
}

function majusculaNom(nom) {
    var p = nom.split(" ");
    return p[0].charAt(0).toUpperCase() + p[0].substring(1) + " " +
           p[1].charAt(0).toUpperCase() + p[1].substring(1);
}

function majusculaDni(dni) {
    return dni.substring(0, 8) + dni.substring(8).toUpperCase();
}

document.addEventListener("DOMContentLoaded", demanarDades);
