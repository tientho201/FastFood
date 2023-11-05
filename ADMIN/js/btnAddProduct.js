
document.querySelector('.product').onclick = function (e) {
    document.querySelector('.product-list').classList.toggle('active')
}
// Ảnh thêm sản phẩm
const image_product = document.querySelector('.img__product')
const input_link_img_product = document.querySelector('.link__img-product')
input_link_img_product.addEventListener('change' , (e) => {
    image_product.src = URL.createObjectURL(e.target.files[0]);
})
// Ảnh thêm thông báo
const image_notify = document.querySelector('.img__notify')
const input_link_img_notify = document.querySelector('.link__img-notify')
input_link_img_notify.addEventListener('change' , (e) => {
    image_notify.src = URL.createObjectURL(e.target.files[0]);
})





// Nút đóng mở 
// Nút đóng mở thêm sản phẩm
const btnDongProduct = document.querySelector('.btnDong-product'); 
btnDongProduct.onclick = function(e){
    document.querySelector('.modal-product ').classList.add('fade')
    document.querySelector('.modal-product ').style.display = 'none'
}
const btnThemProduct = document.querySelector('#btnThemProduct'); 
btnThemProduct.onclick = function(e){
    document.querySelector('.modal-product ').style.display = 'block'
    document.querySelector('.modal-product ').classList.remove('fade')
}


// Nút đóng mở thêm sản phẩm
const btnDongAccount = document.querySelector('.btnDong-account'); 
btnDongAccount.onclick = function(e){
    document.querySelector('.modal-account ').classList.add('fade')
    document.querySelector('.modal-account ').style.display = 'none'
}
const btnThemAccount = document.querySelector('#btnThemAccount'); 
btnThemAccount.onclick = function(e){
    document.querySelector('.modal-account ').style.display = 'block'
    document.querySelector('.modal-account ').classList.remove('fade')
}

// Nút đóng mở thêm thông báo
const btnDongNotify = document.querySelector('.btnDong-notify'); 
btnDongNotify.onclick = function(e){
    document.querySelector('.modal-notify ').classList.add('fade')
    document.querySelector('.modal-notify ').style.display = 'none'
}
const btnThemNotify = document.querySelector('#btnThemNotify'); 
btnThemNotify.onclick = function(e){
    document.querySelector('.modal-notify ').style.display = 'block'
    document.querySelector('.modal-notify ').classList.remove('fade')
}
// Nút đóng mở 


// Menu để mở bảng hợp lí
function open_giohang(){
    document.querySelectorAll('.menu-item').forEach((value) => {
        value.classList.remove('active')
    })
    document.querySelector('.menu-item__giohang').classList.add('active')
    document.querySelectorAll('.container-fluid__total').forEach((value)=>{
        value.classList.add('hide')
    })
    document.querySelector('.giohang').classList.remove('hide')
}
function open_account(){
    document.querySelectorAll('.menu-item').forEach((value) => {
        value.classList.remove('active')
    })
    document.querySelector('.menu-item__account').classList.add('active')
    document.querySelectorAll('.container-fluid__total').forEach((value)=>{
        value.classList.add('hide')
    })
    document.querySelector('.account').classList.remove('hide')
}

function open_donhang(){
    document.querySelectorAll('.menu-item').forEach((value) => {
        value.classList.remove('active')
    })
    document.querySelector('.menu-item__donhang').classList.add('active')
    document.querySelectorAll('.container-fluid__total').forEach((value)=>{
        value.classList.add('hide')
    })
    document.querySelector('.donhang').classList.remove('hide')
}

function open_productnotify(){
    document.querySelectorAll('.menu-item').forEach((value) => {
        value.classList.remove('active')
    })
    document.querySelector('.menu-item__notify').classList.add('active')
    document.querySelectorAll('.container-fluid__total').forEach((value)=>{
        value.classList.add('hide')
    })
    document.querySelector('.productnotify').classList.remove('hide')
}