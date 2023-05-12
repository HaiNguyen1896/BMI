function tinhbmi(){
    let cannang = parseFloat(document.getElementById("weight").value);
    let chieucao=parseFloat(document.getElementById("height").value);
    let  bmi;
    if (cannang<0 || chieucao<0){
        alert('Ban can nhap lai');
    }
    else{
        bmi = cannang / (chieucao**2);
        bmi = Math.round(bmi*100)/100;
    }
    switch(true){
        case (bmi<18.5):
            bmi = "Chỉ số BMI của bạn là: " + bmi + ", bạn đang bị thiếu cân";
            break;
        case (bmi>=18.5 && bmi <25):
            bmi = "Chỉ số BMI của bạn là: " + bmi + ", cân nặng của bạn bình thường";
            break;
        case (bmi>=25 && bmi <30):
            bmi = "Chỉ số BMI của bạn là: " + bmi + ", bạn thừa cân";
            break;
        default:
            bmi = "Chỉ số BMI của bạn là: " + bmi + ", bạn bị béo phì";
    }
    document.getElementById("ketqua").innerHTML=bmi;
}