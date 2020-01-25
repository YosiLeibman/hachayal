const form = document.querySelector('#form')

form.addEventListener('submit', e => {
	e.preventDefault()
	const formData = new FormData(form)
	// formData.append('token', sessionStorage.token)
	fetch('/upload', {
		method: 'POST',
		body: formData,
		headers: { token: sessionStorage.token }
	})
})

console.log('blah')

// ====================================

const qoute = document.querySelector('#qoute')

const qouteArr = [
	'בקשה בעלמא על הגאולה אינה מספיקה, אלא צריכה להיות דרישה ותביעה תמידית',
	'לאמיתו של דבר אין העולם יכול להיות מנגד לגאולה, כיון שכל מציאות העולם תלויה בענין הגאולה',
    'יתכן שהדבר היחיד שחסר להבאת הגאולה אינו אלא נתינת מטבעות אחדות לצדקה!...',
"אילו היו מתכוונים ומבקשים וצועקים באמת, בודאי ובודאי שמשיח כבר היה בא",
"הדבר היחיד שחסר הוא - שיהודי יפקח את עיניו כדבעי, ויראה איך שהכל כבר מוכן לגאולה!",
"אין מה לחכות יותר כיון שכבר סיימו כל עניני העבודה, וכבר עשו תשובה, ואין הדבר תלוי אלא בביאת משיח עצמו!",
`ועוד ועיקר לזעוק להקב"ה על אריכות הגלות "עד מתי", ולבקש ולדרוש ולעשות כל מה שאפשר שתיכף ומיד תבוא הגאולה האמיתית והשלימה ע"י משיח צדקנו!`,
"ההוספה בלימוד התורה ובעניני משיח והגאולה היא הדרך הישרה לפעול התגלות וביאת משיח והגאולה בפועל ממש.",
"ללכד את כל היהודים אנשים, נשים וטף בארץ ישראל סביבות לימוד התורה וקיום המצוות. ליכוד זה עצמו ילכד אותם לקבל את פני משיח.",
`ויתרה מזה, שכבר סיימו גם "צחצוח הכפתורים", וצריכים רק לעמוד הכן לקבל פני משיח צדקנו.`,
`לא זו בלבד שסוף הגאולה לבוא אלא שהגאולה עומדת כבר על סף הפתח, ומחכה לכל אחד ואחת מישראל שיפתח את הדלת ויסחוב את הגאולה לתוך החדר!!`,
`	הכרח השעה מחייב, שכל אחד ואחת מישראל, מקטן ועד גדול, יחשוב אודות הגאולה האמיתית והשלימה על ידי משיח צדקנו.`,
`על כל אחד ואחד לעשות חשבון צדק בנפשו: מה עשה עד עכשיו לקירוב הגאולה?!...`]

qoute.textContent = qouteArr[Math.floor(Math.random() * qouteArr.length)]

setInterval(() => {
	qoute.textContent = qouteArr[Math.floor(Math.random() * qouteArr.length)]
}, 10000)

// =========================================

const rebbe = document.querySelector('.area3')

rebbe.style.backgroungImage = `url("./rebbe/${Math.floor(Math.random() * 3)+1}.jpg")`
setInterval(() => {
    rebbe.style.backgroundImage = `url("./rebbe/${Math.floor(Math.random() * 3)+1}.jpg")`
}, 7000)


// =====================================

const sign = document.querySelector('#qoute-sign')
const area1 = document.querySelector('.area1')

area1.addEventListener("mouseenter",e=>{
    sign.style.borderColor = "burlywood"
})
area1.addEventListener("mouseleave",e=>{
    
})

// ========================================================

window.onload = async () =>{
    const data = await fetch ("/all")
    const files = await data.json()
    const sorted = files.map(f => Number(f.split(".")[0]))
    sorted.sort((a,b)=>a-b)
    console.log(sorted);
    console.log(files);
    console.log(data);
    const last = document.querySelector('#last-a')
    const lastd = document.querySelector('#last-a-d')
    const area6 = document.querySelector('.area6')
    const area8 = document.querySelector('.area8')
    const na = document.querySelector('#navigateme')
    console.log(na);
    last.href = `/data/${sorted[files.length-1]}.pdf`
    lastd.href = `/data/${sorted[files.length-1]}.pdf`
    

    area8.addEventListener('mouseenter',e=>{
        na.style.border = "burlywood solid 1px"
    })
    area8.addEventListener('mouseleave',e=>{
        na.style.border = "black solid 1px"
    })
    area6.addEventListener('mouseenter',e=>{
        last.style.color = "burlywood"
        lastd.style.color = "burlywood"
        last.style.border = "burlywood solid 1px"
        lastd.style.border = "burlywood solid 1px"
    })
    area6.addEventListener('mouseleave',e=>{
        last.style.color = "black"
        lastd.style.color = "black"
        last.style.border = "black solid 1px"
        lastd.style.border = "black solid 1px"
        na.style.border = "black solid 1px"
    })
}




// =====================================
function navigate(lat, lng) {
    // If it's an iPhone..
    if ((navigator.platform.indexOf("iPhone") !== -1) || (navigator.platform.indexOf("iPod") !== -1)) {
      function iOSversion() {
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
          // supports iOS 2.0 and later
          var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
          return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
        }
      }
      var ver = iOSversion() || [0];

      var protocol = 'http://';
      if (ver[0] >= 6) {
        protocol = 'maps://';
      }
      window.location = protocol + 'maps.apple.com/maps?daddr=' + lat + ',' + lng + '&amp;ll=';
    }
    else {
      window.open('http://maps.google.com?daddr=' + lat + ',' + lng + '&amp;ll=');
    }
  }
// ====================================================
  const changetext = document.querySelector("#changetext")
  const changetextArr = ["להתחבר","לנשום","לחיות","ללמוד"]
  changetext.textContent = changetextArr[Math.floor(Math.random() * changetextArr.length)]

setInterval(() => {
	changetext.textContent = changetextArr[Math.floor(Math.random() * changetextArr.length)]
}, 5000)