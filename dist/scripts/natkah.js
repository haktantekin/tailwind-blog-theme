// Analytics 
// window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config','G-CLHYN8KHT0');
// Analytics

// caltoKilo();
// document.querySelector('.js-nav-icon').addEventListener('click', function () {
//   let nav = document.querySelector('.js-top-nav');
//   if (nav.style.display === "none") {
//     nav.style.display = "block";
//   } else {
//     nav.style.display = "none";
//   }
// });

if (document.querySelectorAll('.category-description p').length < 2) {
  document.querySelectorAll('.category-description').forEach(function (el) {
    el.style.display = 'none';
  });
}

function sidebar() {
  let sidebar = document.getElementById("sidebar");
  let stop = (sidebar.offsetTop - 60);


  window.onscroll = function (e) {
    if (window.innerWidth > 991) {
      let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      if (scrollTop >= stop) {
        sidebar.className = 'fixed';
      } else {
        sidebar.className = '';
      }
    }
  }
}

let sidebarControl = document.getElementById("sidebar");
if (sidebarControl !== null) {
  sidebar();
  window.addEventListener('change', sidebar);
}

// İdeal Kilo Hesabı

function hWRatio() {
  let bmi;
  let result = document.getElementById("result");
  let height = parseInt(document.getElementById("height").value);
  let weight = parseInt(document.getElementById("weight").value);

  document.getElementById("weight-val").textContent = weight + " kg";
  document.getElementById("height-val").textContent = height + " cm";

  bmi = (weight / Math.pow((height / 100), 2)).toFixed(1);
  result.textContent = "Kilo Endeksin: " + bmi;

  if (bmi < 18.5) {
    category = "Kilo Alman Lazım 😒";
    result.style.color = "#ffc44d";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "İdeal Kilondasın! 😍";
    result.style.color = "#0be881";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Biraz Fazlan Var 😮";
    result.style.color = "#ff884d";
  } else {
    category = "Acil Kilo Vermen Lazım 😱";
    result.style.color = "#ff5e57";
  }
  document.getElementById("category").textContent = category;
}



// Kalori Hesabı

const form = document.getElementById('form');
if (form !== null) {
  form.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();

  const weight = getInputNumberValue("weight");
  const height = getInputNumberValue("height");
  const age = getInputNumberValue("age");
  const gender = getSelectedValue("gender");
  const activityLevel = getSelectedValue("activity__level");

  const basal = Math.round(
    gender === 'female' ?
    (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age)) :
    (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
  );

  const maintenance = Math.round(basal * Number(activityLevel));
  const gainWeight = maintenance + 450;
  const loseWeight = maintenance - 450;

  document.getElementById("outBasal");
  outBasal.innerHTML = "Bazal metabolizmanız: " + basal + " kalori";;

  document.getElementById("outMaintenance");
  outMaintenance.innerHTML = "Kilonuzu korumak için ortalama olarak tüketmeniz gereken: " + maintenance + " kalori";

  document.getElementById("outLoseweight");
  outLoseWeight.innerHTML = "Kilo vermek için ortalama olarak tüketmeniz gereken: " + loseWeight + " kalori";

  document.getElementById("outGainWeight");
  outGainWeight.innerHTML = "Kilo almak için ortalama olarak tüketmeniz gereken: " + gainWeight + " kalori";
}

function getSelectedValue(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}
// Detay Kalori Hesabı

let arr1 = [];
document.querySelectorAll('.content-cal-list li').forEach(element => {
  if (parseFloat(element.innerText).toFixed(2) != "NaN") {
    if (parseFloat(element.innerText).toFixed(2) == '100.00' || parseFloat(element.innerText).toFixed(2) == '100 gr') {
      debugger
      arr1.push(element.innerText);
    } else {
      arr1.push(parseFloat(element.innerText).toFixed(2));
    }
  } else {
    arr1.push(element.innerText);
  }
  document.querySelector('.content-cal-table').innerHTML = ' ';
});


let items = new Array(arr1);
let ul;
if (document.querySelector('.content-cal-table')) {
  items[0].forEach(function (value, index) {
    if (index % 3 == 0) {
      ul = document.createElement('ul');
      ul.className = 'content-cal-list';
      document.querySelector('.content-cal-table').append(ul)
    }
    let li = document.createElement('li');
    li.innerHTML += value;
    ul.append(li);
  });
  document.querySelector('.content-cal-table').append(ul)
}

// Kalori Hesabı Keypress

// let selectUnit = document.querySelectorAll('.content-cal-form-item select')[0]
// let selectText;
// let unitTitle = document.querySelectorAll('.content-cal-list')[0].querySelector('li:nth-child(3)')

// unitTitle.innerText = document.querySelectorAll('.content-cal-form-item input')[0].value + ' ' + document.querySelectorAll('.content-cal-form-item select')[0].selectedOptions[0].text

function keyPressInput() {
  document.querySelectorAll('.content-cal-form-item input')[0].addEventListener('keyup', function (e) {
    let countInput = parseInt(this.value);
    let selectedSet = document.querySelectorAll('.content-cal-form-item select')[0].selectedOptions[0].dataset
    let carbonData = parseFloat(selectedSet.carbohydrt).toFixed(2)
    let proteinData = parseFloat(selectedSet.protein).toFixed(2)
    let lipidData = parseFloat(selectedSet.lipid_tot).toFixed(2)
    let lifData = parseFloat(selectedSet.fiber_td).toFixed(2)
    let cholestrlData = parseFloat(selectedSet.cholestrl).toFixed(2)
    let sodiumData = parseFloat(selectedSet.sodium).toFixed(2)
    let potassiumData = parseFloat(selectedSet.potassium).toFixed(2)
    let calciumData = parseFloat(selectedSet.calcium).toFixed(2)
    let vitAData = parseFloat(selectedSet.vit_a_iu).toFixed(2)
    let vitCData = parseFloat(selectedSet.vit_c).toFixed(2)
    let ironData = parseFloat(selectedSet.iron).toFixed(2)

    if (!countInput) {
      countInput = 1;
    }

    selectText = document.querySelectorAll('.content-cal-form-item select')[0].selectedOptions[0].text
    unitTitle.innerText = countInput + ' ' + selectText;
    document.querySelectorAll('.content-cal-list')[1].querySelector('li:nth-child(3)').innerText = (Math.round(carbonData * countInput * 100) / 100);
    document.querySelectorAll('.content-cal-list')[2].querySelector('li:nth-child(3)').innerText = (Math.round(proteinData * countInput * 100) / 100);
    document.querySelectorAll('.content-cal-list')[3].querySelector('li:nth-child(3)').innerText = (Math.round(lipidData * countInput * 100) / 100);
    document.querySelectorAll('.content-cal-list')[4].querySelector('li:nth-child(3)').innerText = (Math.round(lifData * countInput * 100) / 100);
    document.querySelectorAll('.content-cal-list')[5].querySelector('li:nth-child(3)').innerText = (Math.round(cholestrlData * countInput * 100) / 100);
    document.querySelectorAll('.content-cal-list')[6].querySelector('li:nth-child(3)').innerText = (Math.round(sodiumData * countInput * 100) / 100);
    document.querySelectorAll('.content-cal-list')[7].querySelector('li:nth-child(3)').innerText = (Math.round(potassiumData * countInput * 100) / 100);
    document.querySelectorAll('.content-cal-list')[8].querySelector('li:nth-child(3)').innerText = (Math.round(calciumData * countInput * 100) / 100);
    document.querySelectorAll('.content-cal-list')[9].querySelector('li:nth-child(3)').innerText = (Math.round(vitAData * countInput * 100) / 100);
    document.querySelectorAll('.content-cal-list')[10].querySelector('li:nth-child(3)').innerText = (Math.round(vitCData * countInput * 100) / 100);
    document.querySelectorAll('.content-cal-list')[11].querySelector('li:nth-child(3)').innerText = (Math.round(ironData * countInput * 100) / 100);

    selectChange();
  })
}

function selectChange() {
  selectUnit.addEventListener(`change`, (e) => {
    const select = e.target;
    const selectText = select.selectedOptions[0].text;
    let selectedSet = document.querySelectorAll('.content-cal-form-item select')[0].selectedOptions[0].dataset
    let countInputBox = document.querySelector('.content-cal-form-item input').value;
    let carbonData = parseFloat(selectedSet.carbohydrt).toFixed(2)
    let proteinData = parseFloat(selectedSet.protein).toFixed(2)
    let lipidData = parseFloat(selectedSet.lipid_tot).toFixed(2)
    let lifData = parseFloat(selectedSet.fiber_td).toFixed(2)
    let cholestrlData = parseFloat(selectedSet.cholestrl).toFixed(2)
    let sodiumData = parseFloat(selectedSet.sodium).toFixed(2)
    let potassiumData = parseFloat(selectedSet.potassium).toFixed(2)
    let calciumData = parseFloat(selectedSet.calcium).toFixed(2)
    let vitAData = parseFloat(selectedSet.vit_a_iu).toFixed(2)
    let vitCData = parseFloat(selectedSet.vit_c).toFixed(2)
    let ironData = parseFloat(selectedSet.iron).toFixed(2)

    if (!countInputBox) {
      countInputBox = 1;
    }

    unitTitle.innerText = countInputBox + ' ' + selectText

    document.querySelectorAll('.content-cal-list')[1].querySelector('li:nth-child(3)').innerText = parseFloat(e.target.options[e.target.selectedIndex].dataset.carbohydrt).toFixed(2);
    document.querySelectorAll('.content-cal-list')[2].querySelector('li:nth-child(3)').innerText = parseFloat(e.target.options[e.target.selectedIndex].dataset.protein).toFixed(2);
    document.querySelectorAll('.content-cal-list')[3].querySelector('li:nth-child(3)').innerText = parseFloat(e.target.options[e.target.selectedIndex].dataset.lipid_tot).toFixed(2);
    document.querySelectorAll('.content-cal-list')[4].querySelector('li:nth-child(3)').innerText = parseFloat(e.target.options[e.target.selectedIndex].dataset.fiber_td).toFixed(2);
    document.querySelectorAll('.content-cal-list')[5].querySelector('li:nth-child(3)').innerText = parseFloat(e.target.options[e.target.selectedIndex].dataset.cholestrl).toFixed(2);
    document.querySelectorAll('.content-cal-list')[6].querySelector('li:nth-child(3)').innerText = parseFloat(e.target.options[e.target.selectedIndex].dataset.sodium).toFixed(2);
    document.querySelectorAll('.content-cal-list')[7].querySelector('li:nth-child(3)').innerText = parseFloat(e.target.options[e.target.selectedIndex].dataset.potassium).toFixed(2);
    document.querySelectorAll('.content-cal-list')[8].querySelector('li:nth-child(3)').innerText = parseFloat(e.target.options[e.target.selectedIndex].dataset.calcium).toFixed(2);
    document.querySelectorAll('.content-cal-list')[9].querySelector('li:nth-child(3)').innerText = parseFloat(e.target.options[e.target.selectedIndex].dataset.vit_a_iu).toFixed(2);
    document.querySelectorAll('.content-cal-list')[10].querySelector('li:nth-child(3)').innerText = parseFloat(e.target.options[e.target.selectedIndex].dataset.vit_c).toFixed(2);
    document.querySelectorAll('.content-cal-list')[11].querySelector('li:nth-child(3)').innerText = parseFloat(e.target.options[e.target.selectedIndex].dataset.iron).toFixed(2);

    document.querySelectorAll('.content-cal-list')[1].querySelector('li:nth-child(3)').innerText = (Math.round(carbonData * countInputBox * 100) / 100);
    document.querySelectorAll('.content-cal-list')[2].querySelector('li:nth-child(3)').innerText = (Math.round(proteinData * countInputBox * 100) / 100);
    document.querySelectorAll('.content-cal-list')[3].querySelector('li:nth-child(3)').innerText = (Math.round(lipidData * countInputBox * 100) / 100);
    document.querySelectorAll('.content-cal-list')[4].querySelector('li:nth-child(3)').innerText = (Math.round(lifData * countInputBox * 100) / 100);
    document.querySelectorAll('.content-cal-list')[5].querySelector('li:nth-child(3)').innerText = (Math.round(cholestrlData * countInputBox * 100) / 100);
    document.querySelectorAll('.content-cal-list')[6].querySelector('li:nth-child(3)').innerText = (Math.round(sodiumData * countInputBox * 100) / 100);
    document.querySelectorAll('.content-cal-list')[7].querySelector('li:nth-child(3)').innerText = (Math.round(potassiumData * countInputBox * 100) / 100);
    document.querySelectorAll('.content-cal-list')[8].querySelector('li:nth-child(3)').innerText = (Math.round(calciumData * countInputBox * 100) / 100);
    document.querySelectorAll('.content-cal-list')[9].querySelector('li:nth-child(3)').innerText = (Math.round(vitAData * countInputBox * 100) / 100);
    document.querySelectorAll('.content-cal-list')[10].querySelector('li:nth-child(3)').innerText = (Math.round(vitCData * countInputBox * 100) / 100);
    document.querySelectorAll('.content-cal-list')[11].querySelector('li:nth-child(3)').innerText = (Math.round(ironData * countInputBox * 100) / 100);

  });
}

function calculateKey() {
  keyPressInput();
  selectChange()
}
// calculateKey();

function more() {
  if (document.querySelector('.category-description').style.height !== "100%") {
    document.querySelector('.category-description').style.height = "100%";
    document.querySelector('#moreBtn').innerHTML = "Daha Az...";
  } else {
    document.querySelector('.category-description').style.height = "200px";
    document.querySelector('#moreBtn').innerHTML = "Daha Fazla...";
    window.scrollTo(0, 0);
  }
}

// function caltoKilo(valNum) {
//   if (valNum == null || valNum == "" || valNum === "NaN") {
//     valNum = 7700;
//   }
//   document.getElementById("outputKilograms").innerHTML = valNum * 0.00013;
// }

