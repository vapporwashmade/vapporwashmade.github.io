function expand(dom) {
    let a = dom.children.item(1);
    console.log(a.style.maxHeight);
    if (a.style.maxHeight) {
        a.style.maxHeight = null;
    } else {
        a.style.maxHeight = a.scrollHeight + "px";
    }
    a.classList.toggle("desc-open");
}

function javaProgs() {
    let progs;

    function loadJSON(callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'java.json', false);
        xobj.onreadystatechange = function () {
            if (xobj.readyState === 4 && xobj.status == "200") {
                callback(JSON.parse(xobj.responseText));
            }
        };
        xobj.send(null);

    }

    loadJSON(function (json) {
        progs = json;
    });
    console.log(progs);
    for (let elem in progs) {
        createElems(elem, progs[elem]);
    }
}

function createElems(key, elems) {
    console.log("creating progs");
    for (let i = 0; i < elems.length; i ++) {
        if (elems[i].removed === undefined || elems[i].removed === "False") {
            var p = elems[i];
            var e = document.createElement("li");
            var d1 = document.createElement("div");
            d1.classList.add("text-prog-cont");
            d1.setAttribute("onclick","expand(this.parentElement)");
            var d2 = document.createElement("div");
            d2.classList.add("desc-prog-cont");
            var d1a = document.createElement("a");
            d1a.setAttribute("href", p.link);
            d1a.innerText = p.name;
            d1a.setAttribute("target", "_blank");
            var d2a = document.createElement("div");
            d2a.classList.add("program-desc-title");
            d2a.innerText = "Program Description";
            var d2b = document.createElement("div");
            d2b.classList.add("program-desc");
            d2b.innerHTML = p.desc;
            d1.appendChild(d1a);
            d2.append(d2a, d2b);
            if (p.complexity !== "") {
                var d2c = document.createElement("div");
                d2c.classList.add("program-desc-title");
                d2c.innerText = "Algorithm Complexity";
                var d2d = document.createElement("div");
                d2d.classList.add("program-desc", "complexity");
                d2d.innerHTML = "O(" + p.complexity + ")";
                d2.append(d2c, d2d)
            }
            e.append(d1, d2);
            document.getElementById(key).appendChild(e);
        }
    }
}