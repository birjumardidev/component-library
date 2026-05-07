import "tailwindcss";
import {supabase} from './supabaseclient.js'

const title=document.querySelector('#component-title');
const componentarea =document.querySelector('#component-area');

function getcomponentdata(){

    const storedata = localStorage.getItem("componentdata");

    if(storedata){
             
        const pareddata =JSON.parse(storedata);

        localStorage.clear();
        return pareddata;
        
    }
    return null;
}
const componentdata= getcomponentdata();

title.textContent=componentdata.title;
componentarea.innerHTML=componentdata.content;
const myHTML =componentdata.content;

showCodeInPrism(myHTML);

function showCodeInPrism(htmlString) {
    const displayArea = document.getElementById('code-container');

    // 1. Escape the HTML tags
    const escaped = htmlString
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");


    displayArea.innerHTML =`
        <pre class="h-full bg-transparent! m-0! font-family:monospace!">
            <code class="language-html text-shadow-none!">${escaped}</code>
        </pre>
    `;

    // 3. Tell Prism to highlight the new element
    
}
const displayArea = document.getElementById('code-container');
Prism.highlightAll(displayArea);
// Usage:

