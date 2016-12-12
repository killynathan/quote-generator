/*
	TODO: backgroudn pictures
	no repeats
	twitter button
*/


var quote = document.getElementById("quote");
var author = document.getElementById("author");
var newQuoteButton = document.getElementById("newQuoteButton");
var background = document.getElementById("background");

var quotes = [
	{
		quote: "Nate is the best",
		author: "Nate"
	},
	{
		quote: "At the end of the day I say to myself, 'Did I make a difference?' I hope the answer is always yes.",
		author: "Lenny Robinson AKA Route 29 Batman",
		pic: "url('https://lh3.googleusercontent.com/WW1q4mxtGtlevsqyYkCxaS3COq-S7xQ0DSsC4T6BDbibirdg3oYsVdmUgtz9YhxSSMcjoPlKf0tZNjFIkpdzUghq2x2bfprEeTyW7XCRAD3wGlh67Md2Svmp-qY3VUgzmn70D-W1F2V3_lD62A5rRJHhQ9J6Nee2acL-KGFlUKq8VKQkJaBi91xXp2nS-Bx7nSQ0FKST00kDpKOxKdT-fd3v_AVSMIRS2q82Rb_bYP9KSaO2m-hQuOm-2e4iHyESwKveQ8sIsoADZTXuaCmAKuAujZCzDeF6BwODbU80PEAq8ysujn-2_c_hT0vHPh2zV0Aey9pNZjTqmgoex1kKMuQt5weo0R3hPj_Iw9UtwrkJUFB8sjtKj4s5dIIP-8xuY1Xb1tuNYI5rpoNDqKe2DUhEeA7oc70jxlgtcAsxjMeXKWBiOdXTXemnUeiIgUWnJ7VOZuDl7WRzpK0JxjkJ8Urvmt4tV3lwrLZQ1j7y6ognICIBuu3z4nCbdJSgFHcbQQMtXe1JedyZ5i3DEVapVL0Igjkbg9Kgi5badwNxRj3RqC9L-9BlcCykU7xHeZCUq1bxVhnHVDYCNLwW-964NdWliw15VdgD3CK7CZvT81pzewDoNUsf=w1152-h770-no')",
		color: "black"
	},
	{
		quote: "Service to others is the rent you pay for your room here on Earth.",
		author: "Muhammed Ali"
	},
	{
		quote: "Don't cling to a mistake just because you spent a lot of time making it.",
		author: "unknown"
	},
	{
		quote: "Somtimes you will never know the value of a moment until it becomes a memory.",
		author: "Dr. Seuss",
		pic: "url('https://lh3.googleusercontent.com/tP5Ku_Yc6Rt5V8tXhj7ekNLj0jIhI5wya2WmxWotmbc8JMoiM2DsiK1Bpj9sq6_j10dxOjha-bwZLEQjRdkWkQBED38Ms30_TgTLs65nUgHJcgiMG51SlKd5iBdbGkz5GJq2W1yyzAXnh1ytyRiSpGoknkzds1NCSipiLoa7ReJ7nVaH3s7etl1vEHiDySTPYi3kGeNI2fLdpcpx4uRPNsODI8alof3Lm9Hq6VYFdTFe8ZMM6aLP7Hj9o3NKsZKcOtkAI7KIrQ1r9YnLKvPLLjVVcmNJm31SiMGsZeDom2GDlAbJ7XPP2_dy6ENASR7wzthBdpJlZGpXdZTtPqLLLFBREu3a__uHNfYQ1f8FgQ8UFEB6me-x3QGv5twMf0CAjcx4aieCR-sPy_mw5s0E9O27H0c7nBzL4zR6ZOGQAdrz9u7oW0al3RC8NAp05XzbJjXknoQUc_tBuz1ZD_bBhabVkUNaLrsT9G6V-DH_srfOsZav9Kyrn8qP4RnvIb4QTJJ_2lYygvJ5j4DSB8eK3I4WcfQcIP6Ql0Dm8-NDyMaswTcw_6ev9Mfs0D0iwFYX6PoTvPX1gPMbIKzw_4Met2Nfay70ymOhxRyh7r7Z8EzdediS1U2T=w1148-h709-no')",
		color: "rgb(243, 156, 18)"
	},
	{
		quote: "I like you just the way you are.",
		author: "Mr. Rogers"
	},
	{
		quote: "No such thign as spare time. No such thing as free time. No such thing as down time. All you got is life time. Go.",
		author: "Henry Rollins"
	},
	{
		quote: "The trouble is, you think you have time.",
		author: "Buddha"
	},
	{
		quote: "Talent is pursued interest.",
		author: "Bob Ross",
		pic: "url('https://lh3.googleusercontent.com/ve_puD3QwpecUxGOx3ONfUcBM_rvqrqKnw7feWpT6YR7ipvfQRk6gu3Qekp_kqS9P1alIMz5CFWEsLwXXoTEpY_9ReULWk4rVMvm8zRQBxIhNB3hev0qjdw0_W27Ohi7ICdaH6-SkW_Zj73auRNuQ5oD-FEQ9ALUGU1zibTmOciLoZzTGVD_CStUypWoxudr0TKrIWLmmNMsv1ukDSB3-Zy0jTr6LyRIQaWpSkYAjKeHBwgX2aRIkibvRBeadPXEDGn_RCMJb7EVnc5lGnz2nNf3hDkmnlW1OMLePHgFfT4-bpB_AvrYF_O3UWtvYLL--X4zc0IkPbATNa5Ovc6If3VPZDKxaVufLs-N3xtx-ukt5W02snuto67-eEAiLH4s3URKDmZMGiY_itI65t9_dtBAiCB3Lg4aAKxq02Bhkq_pj0EQ-OhDEN3UIpcKdwqjvefUC-sSjSexV0hvVOdx0_zANcp90uLSZagAuQseGW37Y2P1ndXTIm4bJwz-_btQ0YaEEGCcdgVdqB4k9QjAfdJxvrq0agh0oZY4qQCoKt3bbvAYotKb26xs3rXsoudsa-IJbL2Il_k5-ytvTUOiol1zr5RKPpHM9Kd-ele0ZDLTtmctUGr-=w1200-h675-no')",
		color: "rgb(0,191,255)"
	},
	{
		quote: "Every day may not be good, but there's something good in every day.",
		author: "chibird"
	}
];

var colors = [
	"rgb(155, 89, 182)",
	"rgb(119, 177, 169)",
	"rgb(189, 187, 153)",
	"rgb(52, 34, 36)",
	"rgb(243, 156, 18)",
	"rgb(71, 46, 50)",
	"rgb(115, 168, 87)",
	"rgb(22, 160, 133)",
 
]

generateQuote();

newQuoteButton.onclick = generateQuote;

function generateQuote() {
	var quoteIndex = Math.floor(Math.random() * quotes.length);
	var colorIndex = Math.floor(Math.random() * colors.length);
	//quoteIndex = 1;
	quote.innerHTML = "\"" + quotes[quoteIndex].quote + "\"";
	author.innerHTML = "-" + quotes[quoteIndex].author;
	quote.style.color = quotes[quoteIndex].color;
	//quote.style.color = colors[colorIndex];
	author.style.color = quotes[quoteIndex].color;
	//background.setAttribute("style", "background-color:" + colors[colorIndex]);
	background.style.backgroundImage = quotes[quoteIndex].pic;
	newQuoteButton.setAttribute("style", "background-color:" + quotes[quoteIndex].color);
	
}

