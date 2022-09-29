const btnProteina = document.querySelector(".js-btn-proteina");
const modalProteina = document.querySelector(".js-nutri-modal-proteina");

btnProteina.addEventListener("click", () => {
    modalProteina.classList.add("ativo");
});

const bntFecharPro = document.querySelector(".nutri__ico--fecharPro");
    bntFecharPro.addEventListener("click", () => {
        modalProteina.classList.remove("ativo");
    });