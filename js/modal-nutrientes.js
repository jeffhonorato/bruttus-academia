const btnProteina = document.querySelector(".js-btn-proteina");
const modalProteina = document.querySelector(".js-nutri-modal-proteina");

btnProteina.addEventListener("click", () => {
    modalProteina.classList.add("ativo");
    const menu = document.querySelector(".js-menu-mobile");
    menu.classList.add("desativar");
});

const bntFecharPro = document.querySelector(".nutri__ico--fecharPro");
    bntFecharPro.addEventListener("click", () => {
        modalProteina.classList.remove("ativo");
        const menu = document.querySelector(".js-menu-mobile");
        menu.classList.remove("desativar");
    });