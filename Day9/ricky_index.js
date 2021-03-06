class Person {
  constructor(fullName, occupation, gender, age) {
    this.fullName = fullName;
    this.occupation = occupation;
    this.gender = gender;
    this.age = age;
  }
}

let data = [
  new Person("Mark", "Software Developer", "Pria"),
  new Person("Steve", "CEO", "Pria"),
  new Person("Biill", "UI/UX", "Pria"),
  new Person("Seto", "Data Scientist", "Pria"),
];

const renderData = () => {
  let htmlResult = "";
  data.forEach((val, idx) => {
    htmlResult += `
      <tr>
          <td>${idx + 1}</td>
          <td>${val.fullName}</td>
          <td>${val.occupation}</td>
          <td>${val.gender}</td>
          <td>
            <button onclick="deleteData(${idx})">Delete</button>
          </td>
        </tr>
      `;
  });
  document.getElementById("tableData").innerHTML = htmlResult;
};

const addData = () => {
  const fullNameInput = document.getElementById("nameInput").value;
  const occupationInput = document.getElementById("occupationInput").value;

  // const isPriaChecked = document.getElementById("genderPria").checked;
  // const isWanitaChecked = document.getElementById("genderWanita").checked;
  const genders = document.getElementsByName("gender");
  let genderInput = "";
  // console.log(genders);
  for (let i = 0; i < genders.length; i++) {
    if (genders[i].checked) {
      genderInput = genders[i].value;
    }
  }

  // if (isPriaChecked) {
  //   genderInput = "Pria";
  // } else if (isWanitaChecked) {
  //   genderInput = "Wanita";
  // }

  if (!fullNameInput || !occupationInput) {
    alert("kedua field harus diisi");
    return;
  }
  const newPerson = new Person(fullNameInput, occupationInput, genderInput);

  data.push(newPerson);
  renderData();
  document.getElementById("nameInput").value = "";
};

const deleteData = (deleteIdx) => {
  //   alert(deleteIdx);
  data.splice(deleteIdx, 1);
  renderData();
};

renderData();
