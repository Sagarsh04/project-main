// let recognition;
// let lastResultTime;
// let isSendingData = false;

// function startRecognition() {
//     if ("webkitSpeechRecognition" in window) {
//         recognition = new webkitSpeechRecognition();
//         recognition.continuous = true;
//         recognition.interimResults = true;

//         recognition.onresult = function (event) {
//             let transcript = '';
//             for (let i = event.resultIndex; i < event.results.length; i++) {
//                 transcript += event.results[i][0].transcript;
//             }
//             document.getElementById('prompt-input').value = transcript;

//             // Update last result time
//             lastResultTime = Date.now();
//         };

//         recognition.onstart = function () {
//             document.getElementById('rec').textContent = 'Stop';
//             lastResultTime = Date.now();
//             isSendingData = false; // Reset flag when speech starts
//         };

//         recognition.onend = function () {
//             document.getElementById('rec').textContent = 'Speak';
//             if (!isSendingData) { // Send data only if not already sent
//                 sendDataToServer();
//             }
//         };

//         recognition.start();
//     } else {
//         alert("Web Speech API not supported.");
//     }
// }

// function stopRecognition() {
//     if (recognition) {
//         recognition.stop();
//     }
// }

// function checkSilence() {
//     // Check if it has been 2 seconds since the last result
//     if (Date.now() - lastResultTime >= 2000 && !isSendingData) {
//         stopRecognition();
//         sendDataToServer();
//     }
// }

// function sendDataToServer() {
//     let transcript = document.getElementById('prompt-input').value;
//     if (transcript.trim() !== "") {
//         isSendingData = true; // Set flag to indicate data is being sent
//         // Send the spoken text to the server
//         fetch('/process_text', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ text: transcript })
//         })
//         .then(response => {
//             // Handle response if needed
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
//     }
// }





let recognition;
let isSendingData = false;

function toggleRecognition() {
    if (!recognition) {
        startRecognition();
    } else {
        stopRecognition();
    }
}

function startRecognition() {
    if ("webkitSpeechRecognition" in window) {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onresult = function (event) {
            let transcript = '';
            for (let i = event.resultIndex; i < event.results.length; i++) {
                transcript += event.results[i][0].transcript;
            }
            document.getElementById('prompt-input').value = transcript;
        };

        recognition.onstart = function () {
            document.getElementById('rec').textContent = 'Stop';
            // document.getElementById('rec').disabled = true;
        };

        recognition.onend = function () {
            document.getElementById('rec').textContent = 'Speak';
            recognition = null; // Reset recognition object
            sendDataToServer();
        };

        recognition.start();
    } else {
        alert("Web Speech API not supported.");
    }
}

function stopRecognition() {
    if (recognition) {
        document.getElementById('rec').textContent = 'Speak';
        document.getElementById('rec').disabled = false;
        recognition.stop();
        sendDataToServer();
    }
}

function sendDataToServer() {
    let transcript = document.getElementById('prompt-input').value;
    if (transcript.trim() !== "") {
        isSendingData = true; // Set flag to indicate data is being sent
        // Send the spoken text to the server
        fetch('/process_text', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: transcript })
        })
        .then(response => {
            // Handle response if needed
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
}
