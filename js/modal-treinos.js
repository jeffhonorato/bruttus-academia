const modalBiceps = () => {
    const btnTreino = document.querySelector(".js-btn-biceps");
    const modalBox = document.querySelector(".js-modal-biceps");
   
    
    btnTreino.addEventListener("click", () => {
        modalBox.classList.add("ativo");
        const scroll= document.querySelector(".js-scroll");
        scroll.classList.add("off");
        const menu = document.querySelector(".js-menu-mobile");
        menu.classList.add("desativar");
    });

    const btnFechar = document.querySelector(".js-btn-fecharBiceps");
        btnFechar.addEventListener("click", () => {
        modalBox.classList.remove("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.remove("off");
        const menu = document.querySelector(".js-menu-mobile");
        menu.classList.remove("desativar");
    });
};

const modalTriceps = () => {
    const btnTreino = document.querySelector(".js-btn-triceps");
    const modalBox = document.querySelector(".js-modal-triceps");
   
    
    btnTreino.addEventListener("click", () => {
        modalBox.classList.add("ativo");
        const scroll= document.querySelector(".js-scroll");
        scroll.classList.add("off");
        const menu1 = document.querySelector(".js-menu-mobile");
        menu1.classList.add("desativar");
    });

    const btnFechar = document.querySelector(".js-btn-fecharTriceps");
        btnFechar.addEventListener("click", () => {
        modalBox.classList.remove("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.remove("off");
        const menu1 = document.querySelector(".js-menu-mobile");
        menu1.classList.remove("desativar");
    });
};

const modalOmbro = () => {
    const btnTreino = document.querySelector(".js-btn-ombro");
    const modalBox = document.querySelector(".js-modal-ombro");
   
    
    btnTreino.addEventListener("click", () => {
        modalBox.classList.add("ativo");
        const scroll= document.querySelector(".js-scroll");
        scroll.classList.add("off");
        const menu3 = document.querySelector(".js-menu-mobile");
        menu3.classList.add("desativar");
    });

    const btnFechar = document.querySelector(".js-btn-fecharOmbro");
        btnFechar.addEventListener("click", () => {
        modalBox.classList.remove("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.remove("off");
        const menu3 = document.querySelector(".js-menu-mobile");
        menu3.classList.remove("desativar");
    });
};

const modalPeito = () => {
    const btnTreino = document.querySelector(".js-btn-peito");
    const modalBox = document.querySelector(".js-modal-peito");
   
    
    btnTreino.addEventListener("click", () => {
        modalBox.classList.add("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.add("off");
        const menu4 = document.querySelector(".js-menu-mobile");
        menu4.classList.add("desativar");
    });

    const btnFechar = document.querySelector(".js-btn-fecharPeito");
        btnFechar.addEventListener("click", () => {
        modalBox.classList.remove("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.remove("off");
        const menu4 = document.querySelector(".js-menu-mobile");
        menu4.classList.remove("desativar");
    });
};

const modalPernas = () => {
    const btnTreino = document.querySelector(".js-btn-pernas");
    const modalBox = document.querySelector(".js-modal-pernas");
   
    
    btnTreino.addEventListener("click", () => {
        modalBox.classList.add("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.add("off");
        const menu5 = document.querySelector(".js-menu-mobile");
        menu5.classList.add("desativar");
    });

    const btnFechar = document.querySelector(".js-btn-fecharPernas");
        btnFechar.addEventListener("click", () => {
        modalBox.classList.remove("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.remove("off");
        const menu5 = document.querySelector(".js-menu-mobile");
        menu5.classList.remove("desativar");
    });
};

const modalCosta = () => {
    const btnTreino = document.querySelector(".js-btn-costa");
    const modalBox = document.querySelector(".js-modal-costa");
   
    
    btnTreino.addEventListener("click", () => {
        modalBox.classList.add("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.add("off");
        const menu6 = document.querySelector(".js-menu-mobile");
        menu6.classList.add("desativar");
    });

    const btnFechar = document.querySelector(".js-btn-fecharCosta");
        btnFechar.addEventListener("click", () => {
        modalBox.classList.remove("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.remove("off");
        const menu6 = document.querySelector(".js-menu-mobile");
        menu6.classList.remove("desativar");
    });
};

modalBiceps();
modalTriceps();
modalOmbro();
modalPeito();
modalPernas();
modalCosta();
