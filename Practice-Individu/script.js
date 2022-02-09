// DOM SELECTION
// document.getElementById()
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "grey";

judul.innerHTML = "Ricky Kurniawan";

// document.getElementsByTagName()
// -> HTMLCollection
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

//document.getElementsByClassName()
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Ini diubah dari javascript";

//query
