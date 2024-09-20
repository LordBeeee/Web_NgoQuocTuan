var TB = prompt("hay nhập điểm TB:")

if (TB >= 8 && TB <=10) {
    console.log("Xếp loại giỏi")
} else if (TB>=6.5) {
    console.log("Xếp loại khá")
} else if (TB>=5) {
    console.log("Xếp loại trung bình")
} else if (TB<5 && TB>=0) {
    console.log("Xếp loại yếu")
} else {
    console.log("TB lỗi")
}