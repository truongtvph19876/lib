import db from "./db.json" assert {type: "json"}

let copyBtn = document.querySelectorAll(".copyBtn");

// get data-id from button
copyBtn.forEach((e)=> {
    let value = e.textContent;
    e.addEventListener("click", ()=>{
        let dataId = Number(e.getAttribute("data-id"));
        
        if (value === "html") {

            getValueId(db, dataId, value, e)
            
        } else if (value ==="css") {
            
            getValueId(db, dataId, value, e)
        } else if (value ==="js") {
            
            getValueId(db, dataId, value, e)
        }
    });
})


// function get source code from database
function getValueId(data, id, value, currentElement) {
    let filter;
    
    if (value === "html") {
        let html = htmlToString(currentElement)
        copyText(html)

    } else if (value === "css") {
        filter = data.style.filter((e)=> {
            return e.id === id
        })
        
    }else if (value === "js") {
        filter = data.script.filter((e)=> {
            return e.id === id
        })
       
    }
    try {
        copyText(newlineText(filter[0].content, ";"))
    } catch (error) {
        console.log("Không có dữ liệu", error);
    }
}

// convert html node to string
function htmlToString(element){
    let parent = element.parentElement;
    let parent2 = parent.parentElement;
    let html = parent2.querySelector(".item-effects");
    return html.outerHTML || new XMLSerializer().serializeToString(element);
}

function copyText(value) {
    navigator.clipboard.writeText(value);
}

function newlineText(text, symbol) {
    let newText = "";
    let i = 0;

    while (i< text.length) {
        if (text[i] === symbol || text[i] === "}" || text[i] === "{") {
            newText +=text.charAt(i) + "\n";
        } else {
            newText +=text.charAt(i);
        }
        i++;
    }

    return newText;
}


