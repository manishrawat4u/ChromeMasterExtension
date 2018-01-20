(function () {
    document.querySelectorAll("a").forEach(x => {
        x.innerHTML="Custom EX:" + x.innerHTML;
    }
    );

    var el=document.createElement("h1");
    el.innerHTML="Hello from custom extension";
    document.querySelector("body").prepend(el);
})();