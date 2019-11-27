// const linkHeaders = [
//     { id: "userstory", title: "USER STORY" },
//     { id: "mockups", title: "DESIGN MOCKUPS" },
//     { id: "rr", title: "RINSE & REPEAT" },
//     { id: "development", title: "DEVELOPMENT" },
//     { id: "testing", title: "TESTING" },
//     { id: "deployment", title: "DEPLOYMENT" },
// ];

window.onload = function () {
    this.loadComponents();
    // this.loadNavItems();
}

var loadComponents = function () {
    $('#navbar').load('./sidenav.html');
    $('#main-doc').load('./main.html');
}

// var loadNavItems = function () {
//     var content = "<ul>";
//     for (var i = 0; i < linkHeaders.length; i++) {
//         content += "<li><a href='#" + linkHeaders[i]['id'] + "' rel='internal' class='nav-link'>" + linkHeaders[i]['title'] + "</a></li>";
//     }
//     $('#navlinks').html(content + "</ul>");
// }
