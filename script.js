let pages = document.getElementById("pages");

const create_page = (tit,cont) => {
    /*<div class="page">
        <div class="head">
          <div class="title">Perlin</div>
          <div class="buttons">
            <div class="sav">s</div>
            <div class="min">-</div>
            <div class="del">x</div>
          </div>
        </div>
        <div class="body">
          what if there was air, air to fill all the gaps between
        </div>
      </div>*/

    const page = document.createElement("div");
    page.className = "page";

    const title = document.createElement("div");
    title.className = "title";
    title.innerHtml = tit;

    const buttons = document.createElement("div");
    const btn_save = document.createElement("div");
    btn_save.innerHTML = "s";
    const btn_min = document.createElement("div");
    btn_min.innerHTML = "-";
    const btn_delete = document.createElement("div");
    btn_delete.innerHTML = "x";

    buttons.appendChild(btn_save);
    buttons.appendChild(btn_min);
    buttons.appendChild(btn_delete);
    
}