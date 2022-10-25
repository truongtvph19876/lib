import db from "./db.json" assert {type: "json"}

let items = document.querySelector('.items');
let style =document.querySelector('style')
console.log(scriptRender(db.script));
export default scriptRender(db.script)
style.innerText = styleRender(db.style)
items.innerHTML = effectRender(db);


// function
/**
 * 
 * @param {object} data database 
 * @returns items html
 */
function effectRender(data) {
    let itemHtml = data.item.map((e)=> {
        let id = e.id
        return `
        <div class="item">
            <div style="position: absolute; right:0;">
                ${e.source.map(e => `<button class="copyBtn" data-id="${id}">${e}</button>`).join("")}
            </div>
            <h2>${e.title}</h2> 
            <div class="${e.classname} item-effects">
                ${e.childElement.map( e => e ).join("")}
            </div>
        </div>
        ` 
    }).join("")
    return itemHtml;
}

function styleRender(data) {
    return data.map(e => e.content).join("")
}

function scriptRender(data) {
    return data.map(e => e.content).join("")
}