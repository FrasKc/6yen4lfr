window.onload = () => {
    // Ecouteur d'évènement sur scroll
    window.addEventListener("scroll", () => {
        // Calcul de la hauteur "utile" du document
        let hauteur = document.documentElement.scrollHeight - window.innerHeight

        // Récupération de la position verticale
        let position = window.scrollY

        // Récupération de la largeur de la fenêtre
        let largeur = document.documentElement.clientWidth

        // Calcul de la largeur de la barre
        let barre = position / hauteur * largeur

        // Modification du CSS de la barre
        document.getElementById("progress").style.width = barre+"px"
     })
    }

function LoadNewimginsta() {
    let insta = document.getElementById("insta")
    insta.src='static/instatrans.png'
    insta.style.height = "34px";
    insta.style.width = "34px";
}

function LoadOldimginsta() {
    let insta = document.getElementById("insta")
    insta.src='static/instagram.png'
    insta.style.height = "34px";
    insta.style.width = "34px";
}

function LoadNewimgFace() {
    let facebook = document.getElementById("facebook")
    facebook.src='static/facebooktrans.png'
    facebook.style.height = "34px";
    facebook.style.width = "34px";
}

function LoadOldimgFace() {
    let facebook = document.getElementById("facebook")
    facebook.src='static/facebook.png'
    facebook.style.height = "34px";
    facebook.style.width = "34px";
}

function LoadNewimglink() {
    let facebook = document.getElementById("link")
    facebook.src='static/linkedintrans.png'
    facebook.style.height = "34px";
    facebook.style.width = "34px";
}

function LoadOldimglink() {
    let facebook = document.getElementById("link")
    facebook.src='static/linkedin.png'
    facebook.style.height = "34px";
    facebook.style.width = "34px";
}

LoadNewimginsta()
LoadOldimginsta()
LoadNewimgFace()
LoadOldimgFace()
LoadNewimglink()
LoadOldimglink()