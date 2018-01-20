(function () {
    logIt('Chrome Master extension called');
    document.body.addEventListener('mousedown', function () {
        logIt('MasterCalling...body:mouse down...');
    });

    document.querySelectorAll("a").forEach(x => {
        x.insertAdjacentHTML('beforebegin', x.outerHTML);
        x.remove();
    });

    document.querySelectorAll("a").forEach(x => {
        {
            logIt('adding stop props in each fadsfd');
            var orgHref = x.href;
            x.addEventListener("click", function (ev) {
                ev.stopImmediatePropagation();
                ev.preventDefault();
                window.location.href = orgHref;
                // setTimeout(() => {
                    
                // }, 0);
            });
            x.addEventListener("mouseup", function (ev) {
                ev.stopImmediatePropagation();
                ev.preventDefault();
            });
            x.addEventListener("mousedown", function (ev) {

                // ev.returnValue = false;
                // console.log(orgHref);

                // logIt('dp-be' + ev.defaultPrevented);

                ev.stopImmediatePropagation();
                ev.preventDefault();
                // logIt('Add the redirect in the loopp.. hitting soon...');

                // logIt('dp-af-' + ev.defaultPrevented);
                // return false;
            });
        }
    }
    );
    // setTimeout(() => {

    //     document.querySelectorAll("a").forEach(x => {
    //         if (x.href.startsWith("http://480mkv")) {
    //             logIt('adding stop props in each links');
    //             var href = x.href;
    //             x.addEventListener("mousedown", function (ev) {
    //                 debugger;
    //                 console.log(href);
    //                 ev.preventDefault();
    //                 ev.stopPropagation();
    //             });
    //         }
    //     }
    //     );

    // }, 1000);

    function logIt(e) {

        console.log(e);
    }
})();