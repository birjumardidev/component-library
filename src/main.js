import "tailwindcss";
import { supabase } from "./supabaseclient.js";

const compcontainer = document.querySelector("#component-container");
const searchdiv = document.querySelector("#search-box");
const searchbutton = document.querySelector("#search-button");

// mobile search function

searchbutton.addEventListener("click", () => {
  searchdiv.innerHTML = `
              <input
              type="search"
              class="w-60 h-10 bg-white caret-black p-2 rounded-l-lg outline:none"
            /><i class="fa-brands fa-sistrix h-10 bg-white rounded-r-lg p-2"></i>
  `;
});

function savedata(title, code, id) {
  const componentdata = {
    id: id,
    title: title,
    content: code,
  };
  localStorage.setItem("componentdata", JSON.stringify(componentdata));

  console.log("saved successfully");
}
window.savedata = savedata;

// get data form supbase

async function getdata() {
  const { data, error } = await supabase.from("components").select("*");

  if (error) console.error("Error:", error);
  else {
    return data;
    console.log("success");
  }
}

// create component grid using data

async function getalldata() {
  const componentdata = await getdata();

  componentdata.forEach((data) => {
    window.id = data.id;
    window.componenttitle = data.title;
    window.componentcode = data.component_code;

    const newdiv = document.createElement("div");

    newdiv.className =
      "bg-glassy-box w-80 h-80 p-3 rounded-xl border border-gray-700";
    newdiv.innerHTML = `
           <div class="flex justify-between">
          <h2 class="text-lg">${data.title}</h2>
           <span class="bg-[#2E6DB4] px-1.5 py-0.5 mr-2 rounded-lg">v4</span>
        </div>
        <div class="border border-slate-text bg-white/10 h-50 w-72 my-3 rounded-xl flex justify-center align-center">${data.component_code}</div>
        <div class="w-full text-center flex gap-2">
          <button onclick="savedata(componenttitle,componentcode,id);" class="bg-mint text-black text-md w-full rounded-lg py-2 hover:cursor-pointer"><a href="./component-page/">VIEW CODE</a></button>
          <button class="border border-mint text-white text-md w-full rounded-lg py-2 hover:cursor-pointer">Copy HTML</button>
        </div>
      
    `;
    compcontainer.appendChild(newdiv);
  });
}

getalldata();
