var diemDolphin = [85, 54, 41];
var diemKoala = [23, 34, 27];

function tinhDiemTB(diem) {
    return (diem[0] + diem[1] + diem[2]) / 3;
}

function ketQua(avgDolphin, avgKoala) {
    if(avgDolphin > 2* avgKoala){
        console.log("Dolphine win !");
    }
    else if(avgKoala > 2* avgDolphin){
        console.log("Koala win !");
    }else{
        console.log("Draw !");
    }
}
ketQua(tinhDiemTB(diemDolphin), tinhDiemTB(diemKoala));