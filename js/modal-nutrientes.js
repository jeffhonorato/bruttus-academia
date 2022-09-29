const proteina = () => {
    const btnProteina = document.querySelector(".js-btn-proteina");
    const modalProteina = document.querySelector(".js-nutri-modal-proteina");
    
    btnProteina.addEventListener("click", () => {
        modalProteina.classList.add("ativo");
        const menu1 = document.querySelector(".js-menu-mobile");
        menu1.classList.add("desativar");
        const scroll = document.querySelector(".js-scroll");;
        scroll.classList.add("off");
    });
    
    const bntFecharPro = document.querySelector(".nutri__ico--fecharPro");
        bntFecharPro.addEventListener("click", () => {
            modalProteina.classList.remove("ativo");
            const menu1 = document.querySelector(".js-menu-mobile");
            menu1.classList.remove("desativar");
            const scroll = document.querySelector(".js-scroll")
        scroll.classList.remove("off");
    });
}

proteina();
