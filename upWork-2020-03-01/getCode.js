var element = document.getElementsByTagName("iframe");
var element2 = document.getElementsByTagName("script");
var element3 = document.getElementsByTagName("noscript"); 

var index;

for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}

for (index = element2.length - 1; index >= 0; index--) {
    element2[index].parentNode.removeChild(element2[index]);
}

for (index = element3.length - 1; index >= 0; index--) {
    element3[index].parentNode.removeChild(element3[index]);
}