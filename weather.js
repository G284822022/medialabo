/*
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};
*/

////////// 課題3-2 ここからプログラムを書こう

let a = [
  { name: "北京", id: 1816670 },
  { name: "カイロ", id: 360630 },
  { name: "モスクワ", id: 524901 },
  { name: "ヨハネスブルク", id: 993800 },
  { name: "東京", id: 1850147 },
  { name: "シドニー", id: 2147714 },
  { name: "ロンドン", id: 2643743 },
  { name: "パリ", id: 2968815 },
  { name: "リオデジャネイロ", id: 3451189 },
  { name: "ニューヨーク", id: 5128581 },
  { name: "ロサンゼルス", id: 5368361 }
];
/*
let r = document.querySelector('div#result');
let p1 = document.createElement('p');
p1.textContent = data.coord.lon;
r.insertAdjacentElement('beforeend', p1);

let p2 = document.createElement('p');
p2.textContent = data.coord.lat;
r.insertAdjacentElement('beforeend', p2);

let p3 = document.createElement('p');
p3.textContent = data.weather[0].description;
r.insertAdjacentElement('beforeend', p3);

let p4 = document.createElement('p');
p4.textContent = data.main.temp_min;
r.insertAdjacentElement('beforeend', p4);

let p5 = document.createElement('p');
p5.textContent = data.main.temp_max;
r.insertAdjacentElement('beforeend', p5);

let p6 = document.createElement('p');
p6.textContent = data.main.humidity;
r.insertAdjacentElement('beforeend', p6);

let p7 = document.createElement('p');
p7.textContent = data.wind.speed;
r.insertAdjacentElement('beforeend', p7);

let p8 = document.createElement('p');
p8.textContent = data.wind.deg;
r.insertAdjacentElement('beforeend', p8);

let p9 = document.createElement('p');
p9.textContent = data.name;
r.insertAdjacentElement('beforeend', p9);
*/


let b = document.querySelector('#btn');
b.addEventListener('click', btn);



function btn() {

  let s = document.querySelector('select#Weather');
  let idx = s.selectedIndex;

  let os = s.querySelectorAll('option');
  let o = os.item(idx);

  for (let m of a) {
    let oo = o.textContent;
    if (m.name == oo) {
      let c = m.id;
      let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + c + '.json'
      axios.get(url)
        .then(showResult)
        .catch(showError)
        .then(finish);
    }
  }
}

function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }

  // data をコンソールに出力
  console.log(data);

  // data.x を出力
  let p1 = document.querySelector('td#lon');
  p1.textContent = data.coord.lon;

  let p2 = document.querySelector('td#lat');
  p2.textContent = data.coord.lat;

  let p3 = document.querySelector('td#description');
  p3.textContent = data.weather[0].description;

  let p4 = document.querySelector('td#temp_min');
  p4.textContent = data.main.temp_min;

  let p5 = document.querySelector('td#temp_max');
  p5.textContent = data.main.temp_max;

  let p6 = document.querySelector('td#humidity');
  p6.textContent = data.main.humidity;

  let p7 = document.querySelector('td#speed');
  p7.textContent = data.wind.speed;

  let p8 = document.querySelector('td#deg');
  p8.textContent = data.wind.deg;

  let p9 = document.querySelector('td#name');
  p9.textContent = data.name;

  console.log(data.coord.lon);
  console.log(data.coord.lat);
  console.log(data.weather[0].description);
  console.log(data.main.temp_min);
  console.log(data.main.temp_max);
  console.log(data.main.humidity);
  console.log(data.wind.speed);
  console.log(data.wind.deg);
  console.log(data.name);
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました.');
}







