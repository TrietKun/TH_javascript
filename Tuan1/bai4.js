var hoadon = 430;
var tienTip = function(hoadon){
    if(hoadon >= 50 && hoadon <= 300){
        return hoadon * 0.15;
    }else{
        return hoadon * 0.2;
    }
}
console.log("Hoa don la : "+ hoadon +"\nTip la :"+ tienTip(hoadon)+"\nTong hoa don la :"+ (hoadon + parseInt(tienTip(hoadon))));
