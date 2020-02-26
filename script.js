let pages = document.getElementById("pages");
let notif = document.getElementById("notif");

const create_page = (tit,cont) => {
    const page = document.createElement("div");
    page.className = "page";

    const head = document.createElement("div");
    head.className = "head";

    const title = document.createElement("div");
    title.className = "title";
    title.innerHTML = tit;
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
    bod.innerHTML = cont;
    bod.contentEditable = true;

    page.appendChild(head);
    page.appendChild(bod);

    pages.appendChild(page);
}

/*
<div class="page">
    <div class="head">
        <div class="title nodot">set name</div>
        <div class="buttons">
        <div class="con">c</div><div class="del">x</div>
        </div>
    </div>
    <div class="body" contenteditable="true">
        an Old World bird related to the starlings that feeds on fruit and insects, the male typically having bright yellow and black plumage.
    </div>
</div>
*/

const set_name = (page_num) => {
    let n = "set name";
    let fn = (n) => {
        let ps = document.getElementsByClassName("page");
        ps[page_num].getElementsByClassName("title").innerHTML = n
    };

    if (page_num < 0) {
        n = "create file";
        fn = (n) => create_page(n,"");
    }

    const page = document.createElement("div");
    page.className = "page";

    const head = document.createElement("div");
    head.className = "head";

    const title = document.createElement("div");
    title.className = "title nodot";
    title.innerText = n;
    head.appendChild(title);

    const buttons = document.createElement("div");
    buttons.className = "buttons";
    const btn_confirm = document.createElement("div");
    btn_confirm.className = "con";
    btn_confirm.innerText = "o";
    const btn_close = document.createElement("div");
    btn_close.className = "del";
    btn_close.innerText = "x";

    buttons.appendChild(btn_confirm);
    buttons.appendChild(btn_close);

    head.appendChild(buttons);

    const bod = document.createElement("div");
    bod.className = "body";
    bod.innerText = "Unnamed";
    bod.contentEditable = true;

    page.appendChild(head);
    page.appendChild(bod);

    while (notif.lastChild) notif.removeChild(notif.lastChild)
    notif.appendChild(page);

    notif.style.display = "block";
}

create_page("Oriole","<em><strong>noun</strong> - an Old World bird related to the starlings that feeds on fruit and insects, the male typically having bright yellow and black plumage.</em>");