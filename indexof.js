(function (window) {

    function removeLinkShrink() {

        document.querySelectorAll("a").forEach(x => {
            var u = x.href;
            if (u.startsWith("http://linkshrink.net")) {
                x.href = u.replace(/http:\/\/linkshrink.net\/[^]*?=/, "");
            }
        }
        );

    }

    setTimeout(function () {
        removeLinkShrink();
    }, 1000);

    document.querySelectorAll("#secondary,#tertiary,.adsbygoogle,#tc-disqus-comments,.code-block-1").forEach(x => x.remove());
    adsbygoogle = null;
})(window);