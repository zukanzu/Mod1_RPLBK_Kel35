const makan=["bakso", "soto", "sate", "ketupat"];
const asynca = async () => {
    await myFunc();
    await cetak();
}
const cetak=()=>{
    console.log("Terimakasih sudah menggunakan layanan kami");
}
const myFunc= () => {
    var valueNama = document.getElementById("nama").value;
    var valueMakan = document.getElementById("makanan").value;
    (makan.indexOf(valueMakan) > -1)?console.log(valueNama+" pesan makan "+valueMakan):console.log(valueNama+" tidak jadi makan");
  }