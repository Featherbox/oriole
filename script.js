let pages = document.getElementById("pages");
let notif = document.getElementById("notif");

let memory = {};

const ready = (e) => {
    if (!Object.keys(localStorage).includes("pages")) {
        create_page("Oriole","<em><strong>noun</strong> - an Old World bird related to the starlings that feeds on fruit and insects, the male typically having bright yellow and black plumage.</em><br/><br/>Trouble");
    } else {
        let mem = JSON.parse(localStorage.getItem("pages"));
        let keys = Object.keys(mem);
        keys.forEach((v) => {
            create_page(v,mem[v])
        })
    }
}

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
    btn_rename.tabIndex = 0;
    let i = pages.getElementsByClassName("page").length;
    btn_rename.onclick = (e) => {
        set_name(i);
    }
    btn_rename.onkeydown = (e) => {
        if (e.key == "Enter") btn_rename.onclick(e);
    }
    const btn_save = document.createElement("div");
    btn_save.className = "sav";
    btn_save.innerText = "s";
    btn_save.tabIndex = 0;
    // btn_save.onkeydown = btn_save.onclick;
    const btn_min = document.createElement("div");
    btn_min.className = "min";
    btn_min.innerText = "-";
    btn_min.tabIndex = 0;
    btn_min.onclick = (e) => {
        if (page.classList.toggle("minimize")) {
            btn_min.innerText = "+";
        } else {
            btn_min.innerText = "-";
        }
    }
    btn_min.onkeydown = (e) => {
        if (e.key == "Enter") btn_min.onclick(e);
    }
    const btn_delete = document.createElement("div");
    btn_delete.className = "del";
    btn_delete.innerText = "x";
    btn_delete.tabIndex = 0;
    btn_delete.onclick = (e) => {
        page.parentNode.removeChild(page);
        delete memory[tit];
        localStorage.setItem("pages",JSON.stringify(memory))

    }
    btn_delete.onkeydown = (e) => {
        if (e.key == "Enter") btn_delete.onclick(e);
    }

    buttons.appendChild(btn_rename);
    buttons.appendChild(btn_save);
    buttons.appendChild(btn_min);
    buttons.appendChild(btn_delete);

    head.appendChild(buttons);

    const bod = document.createElement("div");
    bod.className = "body";
    bod.innerHTML = cont;
    bod.oninput = (e) => {
        memory[tit] = bod.innerHTML;
        localStorage.setItem("pages",JSON.stringify(memory));
    }
    bod.contentEditable = true;

    page.appendChild(head);
    page.appendChild(bod);

    memory[tit] = cont;
    localStorage.setItem("pages",JSON.stringify(memory));

    pages.appendChild(page);
}

const set_name = (page_num) => {
    let n = "set name";

    let ps = document.getElementsByClassName("page");
    let def = "Unnamed";

    let fn = (n) => {
        let _p = ps[page_num];

        let _data = memory[_p.getElementsByClassName("title")[0].innerHTML];
        delete memory[ps[page_num].getElementsByClassName("title")[0].innerHTML]

        console.log(memory);
        
        _p.parentNode.removeChild(_p);

        create_page(n,_data);
    };

    if (page_num < 0) {
        n = "create file";
        fn = (n) => {
            create_page(n.trim(),"");
        };
        def = "Unnamed";
    } else {
        def = ps[page_num].getElementsByClassName("title")[0].innerHTML;
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
    btn_confirm.onclick = (e) => {
        fn(bod.value);
        while (notif.lastChild) notif.removeChild(notif.lastChild)
        notif.style.display = "none";
    };
    const btn_close = document.createElement("div");
    btn_close.className = "del";
    btn_close.innerText = "x";
    btn_close.onclick = (e) => {
        while (notif.lastChild) notif.removeChild(notif.lastChild);
        notif.style.display = "none";
    }

    buttons.appendChild(btn_confirm);
    buttons.appendChild(btn_close);

    head.appendChild(buttons);

    const f = document.createElement("form");
    const bod = document.createElement("input");
    bod.className = "body";
    bod.type = "text";
    bod.placeholder = def;

    f.onsubmit = (e) => {
        if (bod.value.length == 0) fn(def);
        else { fn(bod.value); }
        
        while (notif.lastChild) notif.removeChild(notif.lastChild)
        notif.style.display = "none";
    };

    f.appendChild(bod);

    page.appendChild(head);
    page.appendChild(f);

    while (notif.lastChild) notif.removeChild(notif.lastChild);
    notif.appendChild(page);

    notif.style.display = "block";
}

const flip = () => {
    let _switch = document.getElementById("theme");
    let theme = document.getElementsByTagName("link")[0].href.split("/").pop();

    if (theme == "dark.css") {
        theme = "style.css";
        _switch.innerHTML = "d";
    } else {
        theme = "dark.css";
        _switch.innerHTML = "n";
    }

    document.getElementsByTagName("link")[0].href = `./${theme}`
}