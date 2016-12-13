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
		author: "Nate",
		pic: "url('https://lh3.googleusercontent.com/9ycKOTdEscQdOL5VM13H9uTHNNwBfSBdh522QFEI7xXKVxn6ZQkJvTJABamQOZQ8JGrm5B91XulDH9JUQglEwxS3DuFJUR6WT7OruWkJMnqxV0C1cXrFG-U0P_V34BXkjGp7Q6LP1i6Bn5hCMEE4RaDSQFmIbtsafeMiRhpCQpp8e3sWq5BhEBF8pyFy-mPj8VJo9teDxXWT3zvsmaZyDRRewaNLescSr7TLwl7PejhstGgytlYnOw2uZm0ZPTzmdTsbxrarmNpwHRqnT0rimvEq6gZ7L8LbsojRPNwudIre5zG-066lD1SMrQ_6CvwXlTpWFpp6w1rssBJ2u6eO2Vm6bNNfTINOLA7s-k-CqTPFHDNF8yIdVDf6BuaWbBSV3eZriZ1oPCmEGE3IIwBK7Eh9hZxt__t4srodl2Z92nzTBxO-dw1V-D6vUG_btz3mha4YPGcadDro69K9VpxkvGiQHYSgJBfWpW2_Af0LsShODqCYevdp10CWtjCkFEzuwezm8IY0EeIG9Cav7Hox-Y2A4tyXp_R4bIGlQuGZQ7qKFPZQ7i-tnISnU1i29cNgkIkEfe0czlVW14cnvegecC-nTMnwJLrjAnFa7Hgj4PHJ_uOCUNo=w1160-h770-no')",
		color: "black"
	},
	{
		quote: "At the end of the day I say to myself, 'Did I make a difference?' I hope the answer is always yes.",
		author: "Lenny Robinson AKA Route 29 Batman",
		pic: "url('https://lh3.googleusercontent.com/WW1q4mxtGtlevsqyYkCxaS3COq-S7xQ0DSsC4T6BDbibirdg3oYsVdmUgtz9YhxSSMcjoPlKf0tZNjFIkpdzUghq2x2bfprEeTyW7XCRAD3wGlh67Md2Svmp-qY3VUgzmn70D-W1F2V3_lD62A5rRJHhQ9J6Nee2acL-KGFlUKq8VKQkJaBi91xXp2nS-Bx7nSQ0FKST00kDpKOxKdT-fd3v_AVSMIRS2q82Rb_bYP9KSaO2m-hQuOm-2e4iHyESwKveQ8sIsoADZTXuaCmAKuAujZCzDeF6BwODbU80PEAq8ysujn-2_c_hT0vHPh2zV0Aey9pNZjTqmgoex1kKMuQt5weo0R3hPj_Iw9UtwrkJUFB8sjtKj4s5dIIP-8xuY1Xb1tuNYI5rpoNDqKe2DUhEeA7oc70jxlgtcAsxjMeXKWBiOdXTXemnUeiIgUWnJ7VOZuDl7WRzpK0JxjkJ8Urvmt4tV3lwrLZQ1j7y6ognICIBuu3z4nCbdJSgFHcbQQMtXe1JedyZ5i3DEVapVL0Igjkbg9Kgi5badwNxRj3RqC9L-9BlcCykU7xHeZCUq1bxVhnHVDYCNLwW-964NdWliw15VdgD3CK7CZvT81pzewDoNUsf=w1152-h770-no')",
		color: "black"
	},
	{
		quote: "Don't count the days; make the days count.",
		author: "Muhammed Ali",
		pic: "url('https://lh3.googleusercontent.com/4wTj8QPGQBp3oRfE-QSOBzdRxfcouuvEODGD9BugHrIE9xM4CoR7k5Tzu26KpWDt-6UbC3slGEFOSmAb3WQJn0GNU0BJPmQqkGGHgrIfZS655ci01Rg-PS6z_x2eDzSAjjrA4HKQrLw1129K_tW7fRkoVLMqEB9V60q4-u7W0FaoFEKwb-KPz5gzzl7Y_gt0UvA8NGapLZWY2BftBtXCSTaGx20U9IEBFFFSEBQ3pAHaXWj1_P4QVE0DARAoGQqZ7DaEmk71GLVRR0SCwYodALSp7X3pwbogjfOzZkiyNgDLdlv_nP0yrS8CBTukNIOg3I5fsESqW3XfZ38DcwyUvwnDUE2yyQoVO-Y99dajlQAQFMp8o8ULGmRB2JmL2ogbDXhVFx3AOLqm9LNmRTcrns1fXe2Q_DdQWn5Gj15xmsJEUmLhLetKf4bfMcetY72iLrjoODQ9XkIk_XMbAmVV01oTxBI8bBA_UyJsrpPVCcLaTVvQFtvBrC-fCI7y0K1MXVY3U9FsXKus1hyw1O-scaw1bV2Y0-jS5CYuSa9TZiP1GdJlTQkZSR3VBzApVGljARRL6ei7XkUU9yCpNy3mlokLYP6TtTZ_8A1Vw3UN3SahqkMq4ljL=w963-h770-no')",
		color: "black"
	},
	{
		quote: "Don't cling to a mistake just because you spent a lot of time making it.",
		author: "unknown",
		pic: "url('https://lh3.googleusercontent.com/XAfRbdvjgVSPQz6txEhRpJZgws271cCrFAug5mUCwEReM7i_yDHgcxCe7DGevetHeVgeZ5QAba4hbEewQTXaZ0PIsHDs6x9CZqaeJNxof0bkCm6ZmmS4o5Bsi-7ddPWA2kdtLc9Y6nmJiwzNqov3kLWlTd8wuHpKoHJD44WagwL1WYPpeNn9gR-pwC2FCEucRiIR2dSYmK-zJlXf_wsbJxfe6u0UG--vS0gQgFeMCipXYEeLpdstuAAoMToCmtJ2IR7NoH9j4dw0ninIw4DAvTPQOQLD6jVbxAQBjDPMUjt0EtXZQVg_oWeRcfqf4eHn_VglxI-VlysbBV3_QEcPdE9i-zoykQpkCn12q8NrTg4rlLzT77kvmtu-miDyFbske8OC2woMVDtzOTn4dvYBolR9-Q97drToGwtTdxfmUSWGodFep6vojbJe-MVZWwg5gBncKf0lHWxqa-VNIeIkH0vH4Ukl6G31HO1AEQhZ_b3y0Z6HxnKL8EmK0As1N_8xHftrBDeY5LLnJuWlpY0M1vueftpB42OCmMAx9Uuf_8ZuRbW2xPqGTrP41e4_2MMo4uBADplZD4P6LIHP4FX1mnLT3kgMPW_SVKVJ4ciL0Iq00S4lyVci=w1370-h770-no')",
		color: "rgb(30,144,255)"
	},
	{
		quote: "Somtimes you will never know the value of a moment until it becomes a memory.",
		author: "Dr. Seuss",
		pic: "url('https://lh3.googleusercontent.com/tP5Ku_Yc6Rt5V8tXhj7ekNLj0jIhI5wya2WmxWotmbc8JMoiM2DsiK1Bpj9sq6_j10dxOjha-bwZLEQjRdkWkQBED38Ms30_TgTLs65nUgHJcgiMG51SlKd5iBdbGkz5GJq2W1yyzAXnh1ytyRiSpGoknkzds1NCSipiLoa7ReJ7nVaH3s7etl1vEHiDySTPYi3kGeNI2fLdpcpx4uRPNsODI8alof3Lm9Hq6VYFdTFe8ZMM6aLP7Hj9o3NKsZKcOtkAI7KIrQ1r9YnLKvPLLjVVcmNJm31SiMGsZeDom2GDlAbJ7XPP2_dy6ENASR7wzthBdpJlZGpXdZTtPqLLLFBREu3a__uHNfYQ1f8FgQ8UFEB6me-x3QGv5twMf0CAjcx4aieCR-sPy_mw5s0E9O27H0c7nBzL4zR6ZOGQAdrz9u7oW0al3RC8NAp05XzbJjXknoQUc_tBuz1ZD_bBhabVkUNaLrsT9G6V-DH_srfOsZav9Kyrn8qP4RnvIb4QTJJ_2lYygvJ5j4DSB8eK3I4WcfQcIP6Ql0Dm8-NDyMaswTcw_6ev9Mfs0D0iwFYX6PoTvPX1gPMbIKzw_4Met2Nfay70ymOhxRyh7r7Z8EzdediS1U2T=w1148-h709-no')",
		color: "rgb(243, 156, 18)"
	},
	{
		quote: "I like you just the way you are.",
		author: "Mr. Rogers",
		pic: "url('https://lh3.googleusercontent.com/0esz3HhMGQezvG1GV0tTlpJkklRQGgFpirdmSc7IjOAsjIBvoHZ0bI6NEum5W-bNKDbdkKlDM4A6UQp6irFufNYIk00tpAnOWVbHOkRilU_PQB5aq1pntCsNXDXBBPTVFWi3NdJZvatn-TgfCXQ7gyh-E8LyuzCi5-lkeN2fuDji7c1G-HQc9dm2bKvwaekoTl4jMcUo1IGNvKuQ405-7C3a0U15DjNEBc0yNGAZLCfCSAWBZ5SnR-C7bmrsTFKYVzkWdLwFZQoO3oazMa_lZ7KWOPrvI-ksVefkUVkwUWPOqWrs6A5n8XkYMNLjdf5czOYWCRFR71wvEj0reicio_jaOl5WaVYZGSL56SLMiXI37K28861rrooJAncfyLgBDdPEWlYx1wBfinrTUmP2NL0dzang7MOXy3BXGLB_ZSOAdZ5BYRO9fXr8kYOU1R9TCrBYrRBTcje5Gph3peGq3r3dEB8mmqnMNd1308wOc3A7D3y1sLH7V-9CSar6hw6yOTPD36OeBaZ_hZlvXVL8bjc6fCYqc7Sps8b6u2jy4srjPSSxQ_z-b2QJkQK9t5lF8RSKnzlq1LUpdsitmEpzU-uB5aP2tocYMh34RxnYhSjDWIWb48SS=w1370-h770-no')",
		color: "rgb(52, 34, 36)"
	},
	{
		quote: "No such thign as spare time. No such thing as free time. No such thing as down time. All you got is life time. Go.",
		author: "Henry Rollins",
		pic: "url('https://lh3.googleusercontent.com/IsAjUAZhvW-d0VdP5vK1Cb9pC1itqLB1RcM7ZPCMcqSJlFlNW4Q3gWPHQ9EtkFe9Ug_STISymS1btRPzAUQ9zld7CXEA60T6iZS0uVpOTOUqsiaosmx2ly4BxJB9ToBfH2SWuqnpRjd1Y6ffGt59BYfcS6KWTV1g4S1ySRuAfnBwTbIQ_xlegcYqxONU2bE6Bpt5TFW-bp0zWc3OzP4MNXa8bQZPWwR89E7gdbPdLBWxeXDoJIQd1meODCl3lZadE-StQvefHjtip5uBaMWBtLZ9KgxayReVal63jUtYLyrHSlWP3kflKmM_SNeX4blBcxa2nb1SXLNEzEriuoPhsQSXb9hrJSg9r9yGg0HbwtU3lmL7sZtDFAUzhWU8cPAIdFgXCF64hDSArsRqhb3JtyInqpUzN9K5deC4h3uCGtRWGAjejVXDbdgumU2ezPkUa4bS3MXDFowuiUB82e4fMqNKJfyh9z7He8lC_Yux-GNVbHh93zRszkiRcyPYVb1PoAN9qIRwYz3fX5S4xTvL59dXHGXiAO8iLTs4-L5Unii_oetmoNp_1qjUBX1cNYo6cuCos9uDNMPDseAmB1NnnYV7ZEzout2gLVudsmTkTXzc2cIJ2P_E=w1262-h709-no')",
		color: "black"
	},
	{
		quote: "The trouble is, you think you have time.",
		author: "Buddha",
		pic: "url('https://lh3.googleusercontent.com/v-_zs0j8OHQhgmgLvCxcspSvWwN9bomQoIjB0B-zVEXHcjHSI7qUkTwUkQetye6gduLZkjzT83cvbp9Em5R9CiFOU4SKxHrSz33WSRnvCs9H_GA6Cg4GetJzCFqlANhVXZSMq1gDqbk0zIOuPhrigZrBMe8Ha7pkCTQi6ajowMtW1erooNY-gN7OBECN8kv3WY1vj0rh5oahX58mGFe3OkCbAATohw4rDPx_0LyfQ7ftbtZMVTy4mC25r7mN7P0X3zqwMyaC928i6WuGnq3KszwyS6TmWhaIZEQ3anFBMztkYig6hz9hRbbhA5rI9KfkMnEpFqVcyhIgmwyIlWKVPc4SXra1U6gX34BDo9aT56We4ndEA7_gYVSC01LjPrxij5EPh2ppFe_dCWFODQrg8VjbvfMi5NPW2gMTUzR4XmbfALTYHOI4QCZtkRPlyjLPVA-l1jqHYba2KERK991CjaYpGw99c0ECVskctxrevWmbTTpiQWFMmyftUD9pNjsKVE_CaypbnDXqzMDt3LwrcQ0LjjPdvQjrJzvPXF43QLnzFL3vgFgPQXxd0LVSWewDXoLfvW8CiXSlww8l1xEXmV-spLXZX5parub4ZCEucx6qM9nMeWFe=w1233-h770-no')",
		color: "rgb(255,140,0)"
	},
	{
		quote: "Talent is pursued interest.",
		author: "Bob Ross",
		pic: "url('https://lh3.googleusercontent.com/ve_puD3QwpecUxGOx3ONfUcBM_rvqrqKnw7feWpT6YR7ipvfQRk6gu3Qekp_kqS9P1alIMz5CFWEsLwXXoTEpY_9ReULWk4rVMvm8zRQBxIhNB3hev0qjdw0_W27Ohi7ICdaH6-SkW_Zj73auRNuQ5oD-FEQ9ALUGU1zibTmOciLoZzTGVD_CStUypWoxudr0TKrIWLmmNMsv1ukDSB3-Zy0jTr6LyRIQaWpSkYAjKeHBwgX2aRIkibvRBeadPXEDGn_RCMJb7EVnc5lGnz2nNf3hDkmnlW1OMLePHgFfT4-bpB_AvrYF_O3UWtvYLL--X4zc0IkPbATNa5Ovc6If3VPZDKxaVufLs-N3xtx-ukt5W02snuto67-eEAiLH4s3URKDmZMGiY_itI65t9_dtBAiCB3Lg4aAKxq02Bhkq_pj0EQ-OhDEN3UIpcKdwqjvefUC-sSjSexV0hvVOdx0_zANcp90uLSZagAuQseGW37Y2P1ndXTIm4bJwz-_btQ0YaEEGCcdgVdqB4k9QjAfdJxvrq0agh0oZY4qQCoKt3bbvAYotKb26xs3rXsoudsa-IJbL2Il_k5-ytvTUOiol1zr5RKPpHM9Kd-ele0ZDLTtmctUGr-=w1200-h675-no')",
		color: "rgb(0,191,255)"
	},
	{
		quote: "Every day may not be good, but there's something good in every day.",
		author: "chibird",
		pic: "url('https://lh3.googleusercontent.com/ug6_iilOjRqWgA22SeFqF9uO_sOT8CzRUBd45QUMiU20XrvwhY_IN7DdrRy2V5W3dHTSpEv7rKdvY0XLof73AzJNvI5yl11gX2CkHYQHuMRcfdfxcGNgW1eUZ2pOVHG2mXT6UYhQqGve2uMkKe1TH6Y3wxpxYW_-OH8zefJ-IYkoKPsuKhcUDiQUk36Ym6SawRSTg7HVtINDgkfwOeNbLqBf3a-SbW9tYtvebOC-DT4enapWyCGwD5yM6aVpaLAtWd9h8wQJ6Uhbam-xkRlExx1se5-UGGIMq20O2YVU5k-FhOArPo_NBwbpc054wnHGQ2lgGxgtSm4kLIKVn8CHdTtbgho1p8Z75Yqa55H6YEGCvPw2H2J8MNpsrPOH0V5Z6siVD5A9DVBu8jy5EVqPp2EvXvRJ7mCymboUz5buOl-Z95O9kYbejlMjj9AhA7aOQALswtYoMQR5Hj6awRwEA5qi60TlH9VeaUQaM5zTryZi9i1xvDytdaxDRttkG6SZasnR_5uddgnFqkE1-wAPtp9nvO55PRS2yf8EdIR_d4oKVyrkYEpoaKCYlDM9PFpY1nrDD5KuTRVvb1WCorK4u3iDnK2KEK90PnFaXixZmun00pEgQe-g=s466-no')",
		color: "orange"
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
	//quoteIndex = 9;
	quote.innerHTML = "\"" + quotes[quoteIndex].quote + "\"";
	author.innerHTML = "-" + quotes[quoteIndex].author;
	quote.style.color = quotes[quoteIndex].color;
	author.style.color = quotes[quoteIndex].color;
	//background.setAttribute("style", "background-color:" + colors[colorIndex]);
	background.style.backgroundImage = quotes[quoteIndex].pic;
	newQuoteButton.setAttribute("style", "background-color:" + quotes[quoteIndex].color);
	
}

