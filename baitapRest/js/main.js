var tinhTong = (...arr) => {
  var tong = 0;
  arr.forEach((arr) => {
    tong += arr;
  });
  return tong / arr.length;
};

var tongKhoi1 = () => {
  var diemToan = document.getElementById("inpToan").value * 1;
  var diemLy = document.getElementById("inpLy").value * 1;
  var diemHoa = document.getElementById("inpHoa").value * 1;

  document.getElementById("tbKhoi1").innerHTML = `Điểm trung bình: ${tinhTong(
    diemToan,
    diemLy,
    diemHoa
  ).toFixed(2)}`;
};

var tongKhoi2 = () => {
  var diemVan = document.getElementById("inpVan").value * 1;
  var diemSu = document.getElementById("inpSu").value * 1;
  var diemDia = document.getElementById("inpDia").value * 1;
  var diemAnh = document.getElementById("inpEnglish").value * 1;

  document.getElementById("tbKhoi2").innerHTML = `Điểm trung bình: ${tinhTong(
    diemVan,
    diemSu,
    diemDia,
    diemAnh
  ).toFixed(2)}`;
};
