document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-btn");

    // Prüfen, ob die Zustimmung bereits im lokalen Speicher liegt
    if (!localStorage.getItem("rulesAccepted")) {
        banner.classList.remove("banner-hidden");
    }

    // Beim Klick auf den Button
    acceptBtn.addEventListener("click", function() {
        // Speichere die Entscheidung (bleibt auch nach Schließen des Browsers erhalten)
        localStorage.setItem("rulesAccepted", "true");
        // Verstecke das Banner
        banner.classList.add("banner-hidden");
    });
});