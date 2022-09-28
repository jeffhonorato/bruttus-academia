const modalBiceps = () => {
    const btnTreino = document.querySelector(".js-btn-biceps");
    const modalBox = document.querySelector(".js-modal-biceps");
   
    
    btnTreino.addEventListener("click", () => {
        modalBox.classList.add("ativo");
        const scroll= document.querySelector(".js-scroll");
        scroll.classList.add("off");
    });

    const btnFechar = document.querySelector(".js-btn-fecharBiceps");
        btnFechar.addEventListener("click", () => {
        modalBox.classList.remove("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.remove("off");
    });
};

const modalTriceps = () => {
    const btnTreino = document.querySelector(".js-btn-triceps");
    const modalBox = document.querySelector(".js-modal-triceps");
   
    
    btnTreino.addEventListener("click", () => {
        modalBox.classList.add("ativo");
        const scroll= document.querySelector(".js-scroll");
        scroll.classList.add("off");
    });

    const btnFechar = document.querySelector(".js-btn-fecharTriceps");
        btnFechar.addEventListener("click", () => {
        modalBox.classList.remove("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.remove("off");
    });
};

const modalOmbro = () => {
    const btnTreino = document.querySelector(".js-btn-ombro");
    const modalBox = document.querySelector(".js-modal-ombro");
   
    
    btnTreino.addEventListener("click", () => {
        modalBox.classList.add("ativo");
        const scroll= document.querySelector(".js-scroll");
        scroll.classList.add("off");
    });

    const btnFechar = document.querySelector(".js-btn-fecharOmbro");
        btnFechar.addEventListener("click", () => {
        modalBox.classList.remove("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.remove("off");
    });
};

modalBiceps();
modalTriceps();
modalOmbro();
