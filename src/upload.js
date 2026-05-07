import "tailwindcss";
import {supabase} from './supabaseclient.js'

// upload page inputs
const componentcode =document.querySelector('#component-code');
const componenttitle =document.querySelector('#component-title');
const componentcategory =document.querySelector('#component-category');
const componentdescription =document.querySelector('#component-description');

const publishbutton = document.querySelector('#publish-button');
const canclebutton = document.querySelector('#cancle-button');



publishbutton.addEventListener('click',()=>{
  console.log('clicked');
 insertdata();
});


// upload page logic

async function insertdata(){

const { data, error } = await supabase
  .from('components')
  .insert([
    { title:componenttitle.value,
       description:componentdescription.value,
       category:componentcategory.value,
       component_code:componentcode.value
      
      }, 
  ])
  .select()
  
if (error) {
  console.error('Error inserting data:', error.message)
} else {
  console.log('Saved successfully:', data)
}
}
