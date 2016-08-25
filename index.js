let fs = require('fs')
let {app} = require('electron').remote
let {BrowserWindow} = require('electron').remote
const {shell} = require('electron')

let contents = JSON.parse(
    fs.readFileSync(app.getPath('home') + '/.valet/config.json', 'utf8')
)

let paths = contents.paths;

let sites = [];
let directories = []
// Goes through the paths in the Valet config and loads the directories in each path
for (const path of contents.paths) {
    var folders = fs.readdirSync(path, 'utf8')
    for (folder of folders) {
        // filters out the .DS_Store files and adds to sites array.
        if (folder != '.DS_Store') {
            sites.push(folder)
        }
    }
}

// let template = `<li class="list-group-item">
    // <img class="img-circle media-object pull-left" src="assets/img/web-icon-red.png" width="32" height="32">
    // <div class="media-body">
    //   <a href="http://allcity.dev">
    //     <strong>List item title</strong>
    //   </a>
    //   <p>Lorem ipsum dolor sit amet. sdfsdvsdf</p>
    // </div>
//   </li>`;
  
let siteList = document.getElementById('sites');

for (const site of sites) {
    let domain = site + '.' + contents.domain;
    let template = makeTemplate(domain)
    let icon = makeIcon()
    let body = makeMediaBody()
    let link = makeLink(domain)
    let content = document.createTextNode(link)
    
    body.appendChild(link)
    template.appendChild(icon)
    template.appendChild(body)
    
    template.appendChild(content)
    siteList.appendChild(template)
}

function makeLink(domain) {
    let link = document.createElement("A")
    link.href = "http://" + domain
    link.innerText = domain
    return link
}

function makeTemplate(domain) {
    let template = document.createElement("LI");
    template.className = 'list-group-item';
    template.setAttribute("data-link", domain)
    template.onclick = function() {
        shell.openExternal("http://" + this.dataset.link)
    }
    return template;
}

function makeMediaBody() {
    let body = document.createElement("div");
    body.className = "media-body";
    return body;
}

function makeIcon() {
    let icon = document.createElement("IMG")
    icon.className = 'img-circle media-object pull-left';
    icon.src = 'assets/img/web-icon-red.png';
    icon.width = 32
    icon.height = 32
    return icon;
}
