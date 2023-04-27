const LinkForm = document.getElementById("link-form");
const LinkInput = LinkForm.querySelector("input");
const LinkList = document.getElementById("link-list");

const LINKS_KEY = "links";
let links = [];

function saveLinks(){
    localStorage.setItem(LINKS_KEY, JSON.stringify(links));
}

function deleteLink(event) {
    const li = event.target.parentElement;
    li.remove();
    links = links.filter((link) => link.id !== parseInt(li.id));
    saveLinks();
}

function paintLink(newLink) {
    const li = document.createElement("li");
    li.id = newLink.id;
    const span = document.createElement("span");
    span.innerText = newLink.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteLink);
    li.appendChild(span);
    li.appendChild(button);
    LinkList.appendChild(li);
}

function handleLinkSubmit(event) {
    event.preventDefault();
    const newLink = LinkInput.value;
    LinkInput.value = "";
    const newLinkObj = {
        text:newLink,
        id: Date.now(),
    }
    links.push(newLinkObj);
    paintLink(newLinkObj);
    saveLinks();
}

LinkForm.addEventListener("submit", handleLinkSubmit);


const savedLinks = localStorage.getItem(LINKS_KEY)
if(savedLinks !== null){
    const parsedLinks = JSON.parse(savedLinks);
    links = parsedLinks;
    parsedLinks.forEach(paintLink);
}