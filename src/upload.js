import "tailwindcss";
import {supabase} from './supabaseclient.js'

// upload page inputs
const htmlcode =document.querySelector('#html-code');
const jscode =document.querySelector('#js-code');
const showcode =document.querySelector('#show-code');
const componenttitle =document.querySelector('#component-title');
const componentcategory =document.querySelector('#component-category');
const componentdescription =document.querySelector('#component-description');

const publishbutton = document.querySelector('#publish-button');
const canclebutton = document.querySelector('#cancle-button');

const jsbox = document.querySelector('#js-box');
const htmlbox =document.querySelector('#html-box');
const showcodebox =document.querySelector('#show-code-box');

jsbox.addEventListener('click',()=>{
   
    jsbox.classList.add('bg-mint','text-gray-700');
    htmlbox.className="";
    htmlcode.className="hidden";
    showcode.className="hidden";
    jscode.className="";
    showcodebox.className="";
});

htmlbox.addEventListener('click',()=>{
   
    htmlbox.classList.add('bg-mint','text-gray-700');
    jsbox.className="";
    jscode.className="hidden";
    showcode.className="hidden";
    showcodebox.className="";
    htmlcode.className="";
});

showcodebox.addEventListener('click',()=>{
   
    showcodebox.classList.add('bg-mint','text-gray-700');
    htmlbox.className="";
    jsbox.className="";
    showcode.className="";
    htmlcode.className="hidden";
    jscode.className="hidden";
});


publishbutton.addEventListener('click',()=>{
  console.log('clicked');
 insertdata();
});

canclebutton.addEventListener('click',()=>{
  htmlcode.value ="";
  jscode.value ="";
  showcode.value =""; 
  componentdescription.value ="";
  componenttitle.value ="";
})
// upload page logic

async function insertdata(){

const { data, error } = await supabase
  .from('components')
  .insert([
    { title:componenttitle.value,
       description:componentdescription.value,
       category:componentcategory.value,
       html_code:htmlcode.value,
       js_code:jscode.value,
       show_code:showcode.value
      
      }, 
  ])
  .select()
  
if (error) {
  console.error('Error inserting data:', error.message)
} else {

  publishbutton.textContent="SAVED DATA!";
  publishbutton.classList.toggle('bg-mint');
}
}
