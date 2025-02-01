// Exemplo: Mostrar uma mensagem no console
console.log("Bem-vindo(a) ao Meu Portfólio!");
document.getElementById("modo-escuro").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    // Salvar a preferência no navegador
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("modoEscuro", "ativado");
    } else {
        localStorage.setItem("modoEscuro", "desativado");
    }
});

// Manter o modo escuro ativado ao recarregar a página
if (localStorage.getItem("modoEscuro") === "ativado") {
    document.body.classList.add("dark-mode");
}
