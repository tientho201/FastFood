const Muahang = document.querySelector('.Muahang');
const footer = document.getElementById('footer');
window.onscroll = function () {
    myFunction();
};

console.log(window.pageXOffset);
var distance = footer.offsetHeight;
function myFunction() {
    if (window.pageYOffset > distance) {
        Muahang.style.position = 'relative'
        Muahang.style.width = '100%'
    }
    else {
        Muahang.style.position = 'fixed'
        Muahang.style.width = '67.8%'
    }
}


var a = cart.listProduct;

var s = '';
a.forEach(function (value) {
    s += '<div class="spdachon"><div class="chonmua"><input type="checkbox" id="checkbox_' + value.product.id + '" onclick=tinhTongTien()></div>' +
        '<div class="thongtinsp"> <a href="" ><img class="anh" src="' + value.product.img + '" alt=""></a><a href="" class="tensp" onclick="themvaogiohang(this)">' + value.product.name + '</a>' +
        '</div><div class="dongia" id="dongia_' + value.product.id + '">' + value.product.gia + '</div>' +
        ' <div class="soluong"><button class="giatri" onclick="giamsl(' + value.product.id + ')">-</button>' +
        '<input type="text" value='+ value.quantity+ ' id="nhapgiatri_' +value.product.id  + '"><button class="giatri" onclick="tangsl(' + value.product.id + ')">+' +
        '</button></div>' +
        ' <div class="thaotac"><button value="xoa" onclick="xoasp(' +value.product.id + ')">Xóa</button></div></div> ';
});

document.querySelector('.content').innerHTML = s;


//Nút tăng giảm sp
function render(productid, amount) {
    var amountElement = document.getElementById('nhapgiatri_' + productid);
    amountElement.value = amount;
}

function tangsl(productid) {
    var amountElement = document.getElementById('nhapgiatri_' + productid);
    var amount = parseInt(amountElement.value);
    amount++;
    render(productid, amount);
    tinhTongTien();
}

function giamsl(productid) {
    var amountElement = document.getElementById('nhapgiatri_' + productid);
    var amount = parseInt(amountElement.value);
    if (amount > 1) {
        amount--;
    }
    render(productid, amount);
    tinhTongTien();
}
var chonAllCheckbox = document.querySelector('.chonall');

chonAllCheckbox.addEventListener('change', function () {
    var isChecked = chonAllCheckbox.checked;

    a.forEach(function (value) {
        var checkboxElement = document.getElementById('checkbox_' +  value.product.id );
        if (checkboxElement) {
            checkboxElement.checked = isChecked;
        }
    });

    // Recalculate the total when the "Chọn tất cả" checkbox changes
    tinhTongTien();
});

// Function to calculate total
function tinhTongTien() {
    var tongTien = 0;

    // Lặp qua danh sách sản phẩm để kiểm tra checkbox
    a.forEach(function (value) {
        // Lấy id của checkbox
        var checkboxId = 'checkbox_' + value.product.id;

        // Kiểm tra xem checkbox có được chọn không
        var checkbox = document.getElementById(checkboxId);
        if (checkbox && checkbox.checked) {
            // Nếu được chọn, thì thêm giá tiền của sản phẩm vào tổng
            var dongia_productid = document.getElementById('dongia_' + value.product.id).innerHTML;
            var amountElement = document.getElementById('nhapgiatri_' + value.product.id);
            var amount = parseInt(amountElement.value);
            var gia_sanpham = parseInt(dongia_productid) * amount;
            tongTien += gia_sanpham;
        }
    });

    // Hiển thị tổng số tiền
    document.querySelector('.sotien').innerHTML = tongTien.toLocaleString('vi-VN') + '.000đ';


}



function xoasp(productid) {
    for (var i = 0; i < a.length; i++) {
        if (productid === a[i].product.id) {
            // Lấy giá và số lượng của sản phẩm cần xóa
            var giaSanPhamXoa = a[i].product.gia;
            var soLuongSanPhamXoa = a[i].quantity;

            // Trừ giá trị sản phẩm được xóa khỏi tổng tiền
            cart.totalPrice -= giaSanPhamXoa * soLuongSanPhamXoa;

            // Xóa sản phẩm khỏi mảng
            a.splice(i, 1);
            break; // Exit the loop after removing the element
        }
    }

    // Update lại tổng tiền và hiển thị
    tinhTongTien();

    // Uncheck the checkbox associated with the deleted product
    var checkbox = document.getElementById('checkbox_' + productid);
    if (checkbox) {
        checkbox.checked = false;
    }

    // Get the parent div of the delete button
    var deleteButtonParentDiv = document.querySelector('#checkbox_' + productid).closest('.spdachon');

    // Remove the corresponding HTML element
    if (deleteButtonParentDiv) {
        deleteButtonParentDiv.parentNode.removeChild(deleteButtonParentDiv);
    }
}