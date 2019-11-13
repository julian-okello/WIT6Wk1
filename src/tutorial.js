const linkHeaders = [
{ id: "userstory", title: "USER STORY"},
{ id: "mockups", title: "DESIGN MOCKUPS" },
{ id: "rr", title: "RINSE & REPEAT" },
{ id: "development", title: "DEVELOPMENT" },
{ id: "testing", title: "TESTING" },
{ id: "deployment", title: "DEPLOYMENT" },
];
window.onload = function(){
    var linksContainer = this.document.getElementById('navlinks');
    var content = "";
    for(var i=0; i<linkHeaders.length; i++){
        content += "<li><a href='#"+linkHeaders[i]['id']+"' rel='internal' class='nav-link'>"+linkHeaders[i]['title']+"</a></li>";
    }

    linksContainer.innerHTML = content;
}
