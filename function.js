function togglePopup() {
    var popup = document.getElementById('popupContainer');
    popup.style.display = (popup.style.display === 'flex') ? 'none' : 'flex';
  }

function getWeather(){
    fetch('https://goweather.herokuapp.com/weather/seoul')
    .then((response)=> response.json())
    .then((data)=>{
    document.getElementById("temperature").innerHTML = data['temperature'];
    })
     .catch((error) => {
      document.getElementById("temperature").innerHTML = 'API 호출 실패: ' + error.message;
  });
}

getWeather();

function calculateExpense() {
  var stayDays = parseFloat(document.getElementById('stayDays').value);
  var foodExpense = parseFloat(document.getElementById('foodExpense').value);
  var otherExpense = parseFloat(document.getElementById('otherExpense').value);
  var hotelExpenseInKRW = 100000;

  fetch('https://api.exchangerate-api.com/v4/latest/USD')
    .then(response => response.json())
    .then(data => {
      var exchangeRate = data.rates['KRW'];
      
      var totalExpenseInDollars = (stayDays * hotelExpenseInKRW + foodExpense + otherExpense) / exchangeRate;
      document.getElementById('result').innerText = '결과: ' + (stayDays * hotelExpenseInKRW + foodExpense + otherExpense).toFixed(0) + '원, 실시간 환율(' + totalExpenseInDollars.toFixed(2) + '달러)';
    })
    .catch(error => {
      console.error('Error fetching exchange rate:', error);
    });
}

function ButtonClicked() {
  document.getElementById('textInput').value = '';
}

