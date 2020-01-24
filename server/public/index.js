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
