const modalBiceps = () => {
    const btnTreino = document.querySelector(".js-btn-biceps");
    const modalBox = document.querySelector(".js-biceps");
   
    
    btnTreino.addEventListener("click", () => {
        modalBox.classList.add("ativo");
        const scroll= document.querySelector("js-scroll");
        scroll.classList.add("off");
    });

    const btnFechar = document.querySelector(".js-btn-fechar");
        btnFechar.addEventListener("click", () => {
        modalBox.classList.remove("ativo");
        const scroll = document.querySelector("js-scroll");
        scroll.classList.remove("off");
    });
};

modalBiceps();