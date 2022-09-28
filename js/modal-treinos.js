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

const modalPeito = () => {
    const btnTreino = document.querySelector(".js-btn-peito");
    const modalBox = document.querySelector(".js-modal-peito");
   
    
    btnTreino.addEventListener("click", () => {
        modalBox.classList.add("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.add("off");
    });

    const btnFechar = document.querySelector(".js-btn-fecharPeito");
        btnFechar.addEventListener("click", () => {
        modalBox.classList.remove("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.remove("off");
    });
};

const modalPernas = () => {
    const btnTreino = document.querySelector(".js-btn-pernas");
    const modalBox = document.querySelector(".js-modal-pernas");
   
    
    btnTreino.addEventListener("click", () => {
        modalBox.classList.add("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.add("off");
    });

    const btnFechar = document.querySelector(".js-btn-fecharPernas");
        btnFechar.addEventListener("click", () => {
        modalBox.classList.remove("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.remove("off");
    });
};

const modalCosta = () => {
    const btnTreino = document.querySelector(".js-btn-costa");
    const modalBox = document.querySelector(".js-modal-costa");
   
    
    btnTreino.addEventListener("click", () => {
        modalBox.classList.add("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.add("off");
    });

    const btnFechar = document.querySelector(".js-btn-fecharCosta");
        btnFechar.addEventListener("click", () => {
        modalBox.classList.remove("ativo");
        const scroll = document.querySelector(".js-scroll");
        scroll.classList.remove("off");
    });
};

modalBiceps();
modalTriceps();
modalOmbro();
modalPeito();
modalPernas();
modalCosta();
