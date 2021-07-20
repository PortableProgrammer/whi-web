// NOTE: This script must be loaded *after* both jQuery and Bootstrap!
$(document).ready(function () {
    /* Dynamic navbar include 
       Define the navbar items and attempt to determine which one should be active based on the current page.
    */
    var $ul = $('<ul class="nav navbar-nav"></ul>');
    var $li = [
        $('<li><a href="/about/">About</a></li>')
        , $('<li><a href="/contact">Contact</a></li>')
        , $('<li><a href="https://github.com/portableprogrammer"><img src="/images/github/PNG/GitHub-Mark-32px.png" style="height: 16px;" />&nbsp;&nbsp;GitHub</a></li>')
        /*, $('<li class="dropdown"><a href="https://github.com/portableprogrammer" class="dropdown-toggle" data-toggle="dropdown"><img src="/images/github/PNG/GitHub-Mark-32px.png" style="height: 16px;" />&nbsp;&nbsp;GitHub&nbsp;<b class="caret"></b></a>\
            <ul class="dropdown-menu">\
                <li><a href="https://github.com/PortableProgrammer?tab=repositories">All GitHub Repos</a></li>\
                <li class="divider"></li>\
                <li><a href="https://github.com/PortableProgrammer/Status-Light">Status-Light</a></li>\
            </ul>\
         </li>')
        */, $('<li><a href="/android">Android</a></li>')
        , $('<li class="dropdown"><a href="/windows" class="dropdown-toggle" data-toggle="dropdown">Windows <b class="caret"></b></a>\
            <ul class="dropdown-menu">\
                <li><a href="/windows">All Windows Apps</a></li>\
                <li class="divider"></li>\
                <li><a href="/windows/switcher">Switcher</a></li>\
                <li><a href="/windows/sstray">SSTray</a></li>\
            </ul>\
         </li>')
    ];

    // If we're on localhost, push the template nav item as well
    if (document.location.hostname === "localhost" || document.location.hostname === "127.0.0.1") {
        $li.push($('<li><a href="/template.html">Template</a></li>'));
    } // if

    // Now that we have the items defined, attach them to the navbar
    $ul.append($li);
    $('#main-navbar-collapse').append($ul);
 
    // Try to find the current page and make that nav item active
    try {
        // Remove the filename from the pathname
        var pathWithoutFile = document.location.pathname.replace('index.html', '');

        for (i = 0; i < $li.length; i++) {
            $li[i].find('a:first-child').each(
                function () {
                    // If we're within the directory specified by the link, make it active
                    if (pathWithoutFile.lastIndexOf($(this).attr('href')) >= 0) {
                        $li[i].addClass('active');
                    } // if
                }); // .find('a:first-child').each()
        } // for
    } // try
    catch (err) {
        console.log('Failed to enumerate nav items! \n' + err.toString());
    } // catch

    // Clean up
    $ul = null;
    $li = null;

    /* Dynamic footer include
       Attach a footer to the main container and populate it with the current year.
    */
    $('body > div').append('<hr><footer><p>Copyright &copy; ' + new Date().getFullYear() + ' Warner Heavy Industries</p></footer>');
});