function bmiCalculator (weight, height) {
    var interpretation;
    var bmi = (weight) / (height*height);
    //var bmi = Math.round((weight) / (height*height));
    bmi = bmi.toFixed(1);
    //console.log("BMI = "+bmi);
    if(bmi < 18.5){
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    if(bmi >= 18.5 && bmi <= 24.9){
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }
    if(bmi > 24.9){
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;
}

console.log(bmiCalculator(65, 0.65));

