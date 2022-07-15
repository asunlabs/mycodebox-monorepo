import EditorJs from '@editorjs/editorjs'; // default : paragraph, list

// Install bundler for web => parcel : npm i parcel --save 
// Execute parcel with : npx parcel index.html
// Once parcel is executed, it will create a dist folder. Upload this folder 
// to your server and then it will work.  
// Create a block-style web editor
const editor = new EditorJs({
    holderId : 'editorjs', 
});

let saveBtn = document.querySelector("button"); 
saveBtn.addEventListener("click", function(){
    editor.save().then((result) => { 
        console.log(result); 
        console.log(result.blocks[0].data.text); 
    }).catch((err) => { 
        console.log(err);
    });
});