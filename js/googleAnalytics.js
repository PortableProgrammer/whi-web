try {
    (function () {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-WC3Z01H47S';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
} // try
catch (err) {
    console.log("Failed to load Google analytics! \n" + err.toString());
} // catch

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-WC3Z01H47S');
