var first = prompt("Enter first number :")
var last = prompt("Enter second number :")
var sum,sub,multi, div,perch

first = parseInt(first , 10)
last = parseInt(last , 10)

sum = first+last
document.write(first + "+" + last + "=" + sum+'<br/>')
sub = first-last
document.write(first + "-" + last + "=" + sub+'<br/>')
multi = first*last
document.write(first + "*" + last + "=" + multi+'<br/>')
div = first/last
document.write(first + "/" + last + "=" + div+'<br/>')
perch = first%last
document.write(first + "%" + last + "=" + perch+'<br/>')


