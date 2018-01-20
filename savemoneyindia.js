(function () {
    document.querySelectorAll("a").forEach(x => {
        if (x.href.startsWith("http://www.savemoneyindia.com/url.php?go=")) {
            x.href = x.href.replace("http://www.savemoneyindia.com/url.php?go=", "");
        }
    }
    );
/*debugger;
document.addEventListener("DOMContentLoaded", function() { // code... 
debugger;
var d=document.innerHtml;
console.log(d);
});
    console.log(document.cookie);*/
})();