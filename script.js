let pages = document.getElementById("pages");

const create_page = (tit,cont) => {
    const page = document.createElement("div");
    page.className = "page";

    const head = document.createElement("div");
    head.className = "head";

    const title = document.createElement("div");
    title.className = "title";
    title.innerText = tit;
    head.appendChild(title);

    const buttons = document.createElement("div");
    buttons.className = "buttons";
    const btn_rename = document.createElement("div");
    btn_rename.className = "ren";
    btn_rename.innerText = "r";
    const btn_save = document.createElement("div");
    btn_save.className = "sav";
    btn_save.innerText = "s";
    const btn_min = document.createElement("div");
    btn_min.className = "min";
    btn_min.innerText = "-";
    const btn_delete = document.createElement("div");
    btn_delete.className = "del";
    btn_delete.innerText = "x";

    buttons.appendChild(btn_rename);
    buttons.appendChild(btn_save);
    buttons.appendChild(btn_min);
    buttons.appendChild(btn_delete);

    head.appendChild(buttons);

    const bod = document.createElement("div");
    bod.className = "body";
    bod.innerText = cont;
    bod.contentEditable = true;

    page.appendChild(head);
    page.appendChild(bod);

    pages.appendChild(page)
}

create_page("Noise","it's all so garbled");
create_page("Cardinal","In modern war, you will die like a dog for no reason at all.");