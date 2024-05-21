const formulaire = document.getElementById("formulaire");

formulaire.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
    });
    open(index.html);
});
