function ktRong(value , idcanhbao , mess){
    var domspan = document.getElementById(idcanhbao) ; 
    if(value == ""){
        domspan.innerHTML = mess ; 
        domspan.style.display ="block" ; 
        return false ; 
    }else {
        domspan.innerHTML = ""
        domspan.style.display = "none" ; 
        return true ;
    }
}
function kiemTraSo(value, idCanhBao, mess, mess1) {
    var domTheSpan = document.getElementById(idCanhBao);
    var regexNumber = /^\d+$/;
    var isvalid = regexNumber.test(value.trim()); // Thêm trim() để loại bỏ khoảng trắng thừa ở đầu và cuối chuỗi
  
    if (isvalid) {
      domTheSpan.innerHTML = "";
      domTheSpan.style.display = "none"; // Ẩn thông báo lỗi nếu giá trị hợp lệ
      return true;
    } else if (value.trim() === "") {
      domTheSpan.innerHTML = mess1;
      domTheSpan.style.display = "block";
      return false;
    } else {
      domTheSpan.innerHTML = mess;
      domTheSpan.style.display = "block";
      return false;
    }
  }
  