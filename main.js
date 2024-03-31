// 创建音频对象数组
const audios = [
	new Audio('img/PinkVenom.mp3'),
	new Audio('img/Miku.mp3'),
	new Audio('img/mozart.mp3'),
	new Audio('img/WelcomeToNewYork.mp3'),
	new Audio('img/buttercup.mp3'),
	new Audio('img/Hi.mp3'),
	new Audio('img/Monday.mp3')
];

// 播放函数
function playAudio(index) {
	const currentAudio = audios[index];
	if (currentAudio) {
		currentAudio.play();
	}
}

// 移除函数
function pauseAudio(index) {
	const currentAudio = audios[index];
	if (currentAudio) {
		currentAudio.pause();
	}
}

// 停止所有音频
function stopAllAudios() {
	audios.forEach(audio => {
		audio.pause();
		audio.currentTime = 0;
	});
}



//问题切换
showQ1 = function() {
	document.getElementById("Q0").style.display = 'none';
	document.getElementById("Q1").style.display = 'block';
}

function showQ2() {
	var Q1 = document.getElementById("Q1");
	var Q2 = document.getElementById("Q2");
	Q1.style.display = "none";
	Q2.style.display = "block";
}

function showQ3() {
	var Q2 = document.getElementById("Q2");
	var Q3 = document.getElementById("Q3");
	Q2.style.display = "none";
	Q3.style.display = "block";
}

function showQ4() {
	var Q3 = document.getElementById("Q3");
	var Q4 = document.getElementById("Q4");
	Q3.style.display = "none";
	Q4.style.display = "block";
}

function showQ5() {
	var Q4 = document.getElementById("Q4");
	var Q5 = document.getElementById("Q5");
	Q4.style.display = "none";
	Q5.style.display = "block";
}

function showQ6() {
	var Q5 = document.getElementById("Q5");
	var Q6 = document.getElementById("Q6");
	Q5.style.display = "none";
	Q6.style.display = "block";
}

function showQ7() {
	var Q6 = document.getElementById("Q6");
	var Q7 = document.getElementById("Q7");
	Q6.style.display = "none";
	Q7.style.display = "block";
}

function end() {
	var Q7 = document.getElementById("Q7");
	var ED = document.getElementById("ED");
	Q7.style.display = "none";
	ED.style.display = "block";
}
