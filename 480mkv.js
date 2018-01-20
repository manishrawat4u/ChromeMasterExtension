(function () {
    document.body.addEventListener('mousedown', function () {
        console.log('MasterCalling...body:mouse down...');
    });
    document.querySelectorAll("a").forEach(x => {
        if (x.href.startsWith("http://480mkv")) {
            x.insertAdjacentHTML('beforebegin', x.outerHTML);
            x.remove();
        }
        else if (x.href.startsWith("http://linkshrink.net/znjc=")) {
            x.href = x.href.replace("http://linkshrink.net/znjc=", "");
        }
    }
    );

    document.querySelectorAll("a").forEach(x => {
        if (x.href.startsWith("http://480mkv")) {
            x.addEventListener("mousedown", function (ev) {
                ev.stopPropagation();
            });
        }
    }
    );
})();