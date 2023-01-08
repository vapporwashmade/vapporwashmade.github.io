function expand(dom) {
    let a = dom.children.item(1);
    console.log(a.style.maxHeight);
    if (a.style.maxHeight){
        a.style.maxHeight = null;
    } else {
        a.style.maxHeight = a.scrollHeight + "px";
    }
    a.classList.toggle("desc-open");
}