let preveiwContainer = document.querySelector('.products-previewk');
let previewBox = preveiwContainer.querySelectorAll('.previewk');

document.querySelectorAll('.products-containerk .productkadin').forEach(productkadin=>{
productkadin.onclick =()=>{
    preveiwContainer.style.display = 'flex';
    let name = productkadin.getAttribute('data-name');
    previewBox.forEach(preview=>{
        let target = preview.getAttribute('data-target');
        if(name == target ){
            preview.classList.add('active');
        }
    });
};
});

previewBox.forEach(close=>{
    close.querySelector('.fa-times').onclick = () =>{
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});
