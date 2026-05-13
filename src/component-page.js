import "tailwindcss";
import { supabase } from "../src/supabaseclient.js";
const componentconatiner = document.querySelector("#components-containers");

async function getcomponents() {
   const { data, error } = await supabase.from("components").select("*");
   const type =localStorage.getItem('component-type').toLowerCase();
   

   if (error) console.log(error);
   else {
      data.forEach((data) => {
         if (data.category == type) {
            const newdiv = document.createElement("div");
            newdiv.className = "w-full h-auto mb-20";

            newdiv.innerHTML = `
                  <div class="w-full h-20 text-4xl font-semibold text-gray-300 flex flex-col gap-2 mb-5"><h1>${data.title}</h1><p class="text-[1.5vw] text-slate-text">${data.description}</p></div>

               <div class="w-full h-auto rounded-md border border-gray-500 flex flex-col">
                <div class="w-full h-1/8 bg-glassy-box rounded-t-md flex justify-between px-5 py-3 text-slate-text hover:[&_div]:cursor-pointer">
                       <div class="border border-gray-500 p-2 p rounded-md  flex items-center gap-2 hover:text-gray-300 hover:border-gray-300 bg-black/30"><i class="fa-solid fa-code"></i><span id="show-code-button" class="text-lg">show code</span></div>
                       
                       <div class="flex gap-5 items-center justify-center  [&_span]:border [&_span]:p-1 [&_span]:rounded-md [&_span]:bg-black/30">
                           <span id="desktop" class="hover:text-gray-300"><i class="fa-solid fa-desktop"></i></span>
                           <span id="ipad" class="hover:text-gray-300"><i class="fa-solid fa-tablet-screen-button"></i></span>
                           <span id="phone" class="hover:text-gray-300" ><i class="fa-solid fa-mobile-screen"></i></span>
                       </div>
                       <div class="flex items-center justify-center text-2xl gap-4">
                       <i class="fa-brands fa-html5"></i>
                       <svg fill="#8b949e" width="36px" height="36px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Tailwind CSS icon</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path></g></svg>
                       <i class="fa-brands fa-square-js"></i>
                       
                       </div>
                       
                      </div>
                <div id="componentshowbox" class="flex w-full h-110 bg-white/5 rounded-b-md justify-center">
                <div id="component-code" class="w-full h-full">${data.html_code}</div>
             
                  <div id="code-box" class="w-full h-auto text-white hidden">
                     <div class="h-8 w-full flex justify-between items-center text-slate-text hover:[*_div]:cursor-pointer">
                           <div class="flex gap-2">
                            <div id="html-box-button" class="border-r border-slate-text px-2 hover:text-white">Html code</div>
                            <div id="js-box-button" class="border-r border-slate-text px-2 hover:text-white">JS code</div>
                           </div>
                           <div id="html-copy-button" class="border-l border-slate-text px-2 hover:text-white">copy code</div>
                           <div id="js-copy-button" class="border-l border-slate-text px-2 hover:text-white hidden">copy code</div>
                     </div>
                      <div id="html-code-box" class="border-t border-slate-text w-full h-auto "><pre id="html-code" class="bg-transparent!"></pre></div>
                      <div id="js-code-box" class="border-t border-slate-text w-full h-auto hidden"><pre id="js-code" class="bg-transparent!"></pre></div>
                      

            </div>

             </div>
                </div>
               </div>
          `;
           
            newdiv.addEventListener("click", (event) => {
               const trigger = event.target.closest("[id]");
               const clickedelemet = trigger.id;
               const componentpreview = newdiv.querySelector("#componentshowbox");
               const componentcode = newdiv.querySelector("#component-code");
               const showcode = newdiv.querySelector("#show-code-button");
               const codebox = newdiv.querySelector("#code-box");
               const htmlcodebox = newdiv.querySelector("#html-code-box");
               const jscodebox = newdiv.querySelector("#js-code-box");
               const htmlcopybox = newdiv.querySelector("#html-copy-button");
               const jscopybox = newdiv.querySelector("#js-copy-button");

               if (clickedelemet === "desktop") {
                  if (showcode.textContent === "show code") {
                     componentpreview.className = "w-full h-110 bg-white/5 rounded-b-md flex justify-center";               
                     componentcode.className ="@container w-full h-full text-white flex bg-midnight";      
                     
                  }
               } else if (clickedelemet === "ipad") {
                  if (showcode.textContent === "show code") {
                     componentpreview.className =
                        "w-full h-90 bg-white/5 rounded-b-md flex justify-center";
                     componentcode.className =
                        "@container w-3xl h-full text-white flex bg-midnight";
                  
                  }
               } else if (clickedelemet === "phone") {
                  if (showcode.textContent === "show code") {
                     componentpreview.className =
                        "w-full h-60 bg-white/5 rounded-b-md flex justify-center";
                     componentcode.className =
                        "@container w-sm h-full text-white flex bg-midnight";
                     
                  }
               } else if (clickedelemet === "html-box-button") {
                  htmlcodebox.className = "border-t border-slate-text w-full h-auto ";
                  jscodebox.className =
                     "border-t border-slate-text w-full h-auto hidden";
                  htmlcopybox.className =
                     "border-l border-slate-text px-2 hover:text-white";
                  jscopybox.className =
                     "border-l border-slate-text px-2 hover:text-white hidden";
                  
               } else if (clickedelemet === "js-box-button") {
                  htmlcodebox.className =
                     "border-t border-slate-text w-full h-auto hidden";
                  jscodebox.className = "border-t border-slate-text w-full h-auto ";
                  htmlcopybox.className =
                     "border-l border-slate-text px-2 hover:text-white hidden";
                  jscopybox.className =
                     "border-l border-slate-text px-2 hover:text-white ";
                  
               } else if (clickedelemet === "html-copy-button") {
                  copyText(data.show_code);
               } else if (clickedelemet === "js-copy-button") {
                  copyText(data.js_code);
               } else if (clickedelemet === "show-code-button") {
                  if (showcode.textContent == "preview") {
                     showcode.textContent = "show code";
                     componentcode.className = "w-full h-full";
                     codebox.className = "w-full h-auto text-white hidden";
                     componentpreview.className =
                        "w-full h-110 bg-white/5 rounded-b-md flex justify-center";
                  } else {
                     showcode.textContent = "preview";

                     componentcode.className = "w-full h-full hidden";
                     codebox.className = "w-full h-auto text-white";
                     componentpreview.className =
                        "w-full h-auto bg-white/5 rounded-b-md flex justify-center";
                  }
               }
            });

            const htmlcode = newdiv.querySelector("#html-code");
            showCodeInPrism(data.show_code);

            function showCodeInPrism(htmlString) {
               const escaped = htmlString
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;");

               htmlcode.innerHTML = `<code class="language-html">${escaped}</code>`;
            }

            const jscode = newdiv.querySelector("#js-code");
            jscode.innerHTML = `<code class="language-javascript">${data.js_code}</code>`;

            const jsboxbutton = newdiv.querySelector("#js-box-button");
            if (!data.js_code) jsboxbutton.classList.add("hidden");

            async function copyText(code) {
               try {
                  await navigator.clipboard.writeText(code);
                  alert("Text copied successfully!");
               } catch (err) {
                  console.error("Failed to copy: ", err);
               }
            }

            componentconatiner.appendChild(newdiv);

            const htmlCodeElem = newdiv.querySelector("#html-code code");
            if (htmlCodeElem && window.Prism && Prism.highlightElement) {
               Prism.highlightElement(htmlCodeElem);
            }
            const jsCodeElem = newdiv.querySelector("#js-code code");
            if (jsCodeElem && window.Prism && Prism.highlightElement) {
               Prism.highlightElement(jsCodeElem);
            }

           
         }
      });
   }
}

getcomponents();
