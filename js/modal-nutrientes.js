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
    
    const bntFecharPro = document.querySelector(".js-fecharPro");
        bntFecharPro.addEventListener("click", () => {
            modalProteina.classList.remove("ativo");
            const menu1 = document.querySelector(".js-menu-mobile");
            menu1.classList.remove("desativar");
            const scroll = document.querySelector(".js-scroll")
        scroll.classList.remove("off");
    });
};

const carboidrato = () => {
    const btnCarbo = document.querySelector(".js-btn-carbo");
    const modalCarbo = document.querySelector(".js-nutri-modal-carbo");

    btnCarbo.addEventListener("click", () => {
        modalCarbo.classList.add("ativo");
        const menu2 = document.querySelector(".js-menu-mobile");
        menu2.classList.add("desativar");
        const scroll = document.querySelector(".js-scroll");;
        scroll.classList.add("off");
    });

    const bntFecharCarbo = document.querySelector(".js-fecharCarbo");
        bntFecharCarbo.addEventListener("click", () => {
            modalCarbo.classList.remove("ativo");
            const menu2 = document.querySelector(".js-menu-mobile");
            menu2.classList.remove("desativar");
            const scroll = document.querySelector(".js-scroll");
            scroll.classList.remove("off");
    });
};

const gordura = () => {
    const btnGordura = document.querySelector(".js-btn-gordura");
    const modalGordura = document.querySelector(".js-nutri-modal-gordura");

        btnGordura.addEventListener("click", () => {
            modalGordura.classList.add("ativo");
            const menu3 = document.querySelector(".js-menu-mobile");
            menu3.classList.add("desativar");
            const scroll = document.querySelector(".js-scroll");;
            scroll.classList.add("off");
        });

        const btnFecharGordura = document.querySelector(".js-fecharGordura");
            btnFecharGordura.addEventListener("click", () => {
                modalGordura.classList.remove("ativo");
                const menu3 = document.querySelector(".js-menu-mobile");
                menu3.classList.remove("desativar");
                const scroll = document.querySelector(".js-scroll");
                scroll.classList.remove("off");
            });
      
};

proteina();
carboidrato();
gordura();