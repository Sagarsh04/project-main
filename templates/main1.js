// // // // import { streamGemini } from './gemini-api.js';

// // // // let form = document.querySelector('form');
// // // // let promptInput = document.querySelector('input[name="prompt"]');
// // // // let output = document.querySelector('.output');

// // // // // Add the speak button
// // // // const speakButton = document.createElement('button');
// // // // speakButton.textContent = 'Speak';
// // // // speakButton.type = 'button';
// // // // form.appendChild(speakButton);

// // // // form.onsubmit = async (ev) => {
// // // //   ev.preventDefault();
// // // //   output.textContent = 'Generating...';

// // // //   try {
// // // //     // Check if the user wants to speak or write
// // // //     if (speakButton.classList.contains('active')) {
// // // //       // Get the user's spoken input
// // // //       spokenInput = getSpokenInput();

// // // //       // Set the spoken input as the value of the prompt input field
// // // //       promptInput.value = spokenInput;
// // // //     }

// // // //     // Load the image as a base64 string
// // // //     let imageUrl = form.elements.namedItem('chosen-image').value;
// // // //     let imageBase64 = await fetch(imageUrl)
// // // //       .then(r => r.arrayBuffer())
// // // //       .then(a => base64js.fromByteArray(new Uint8Array(a)));

// // // //     // Assemble the prompt by combining the text with the chosen image
// // // //     let contents = [
// // // //       {
// // // //         role: 'user',
// // // //         parts: [
// // // //           { inline_data: { mime_type: 'image/jpeg', data: imageBase64, } },
// // // //           { text: promptInput.value }
// // // //         ]
// // // //       }
// // // //     ];

// // // //     // Call the gemini-pro-vision model, and get a stream of results
// // // //     let stream = streamGemini({
// // // //       model: 'gemini-pro-vision',
// // // //       contents,
// // // //     });

// // // //     // Read from the stream and interpret the output as markdown
// // // //     let buffer = [];
// // // //     let md = new markdownit();
// // // //     for await (let chunk of stream) {
// // // //       buffer.push(chunk);
// // // //       output.innerHTML = md.render(buffer.join(''));
// // // //     }
// // // //   } catch (e) {
// // // //     output.innerHTML += '<hr>' + e;
// // // //   }
// // // // };





// // import { streamGemini } from './gemini-api.js';

// // let form = document.querySelector('form');
// // let promptInput = document.querySelector('input[name="prompt"]');
// // let output = document.querySelector('.output');

// // // Add the speak button
// // const speakButton = document.createElement('button');
// // speakButton.textContent = 'Speak';
// // speakButton.type = 'button';

// // speakButton.classList.add('btn', 'btn-primary'); // Add Bootstrap button classes
// // speakButton.onclick = () => {
  
// //   speakButton.classList.toggle('active');
// //   if (speakButton.classList.contains('active')) {
// //     window.open('https://example.com', '_blank');
// //     speakButton.textContent = 'Stop Speaking';
    
// //   } else {
// //     speakButton.textContent = 'Speak';
// //   }
// // }
// // form.appendChild(speakButton);

// // form.onsubmit = async (ev) => {
// //   ev.preventDefault();
// //   output.textContent = 'Generating...';

// //   try {
// //     // Check if the user wants to speak or write
// //     if (speakButton.classList.contains('active')) {
// //       // Get the user's spoken input
// //       const getSpokenInput = () => {
// //         return new Promise((resolve, reject) => {
// //           // Your code to capture spoken input goes here
// //           // ...
// //           // Once spoken input is captured, resolve the promise with the spoken input
// //           resolve(spokenInput);
// //         });
// //       };

// //       // Set the spoken input as the value of the prompt input field
// //       promptInput.value = await getSpokenInput();
// //     }

// //     // Load the image as a base64 string
// //     let imageUrl = form.elements.namedItem('chosen-image').value;
// //     let imageBase64 = await fetch(imageUrl)
// //       .then(r => r.arrayBuffer())
// //       .then(a => base64js.fromByteArray(new Uint8Array(a)));

// //     // Assemble the prompt by combining the text with the chosen image
// //     let contents = [
// //       {
// //         role: 'user',
// //         parts: [
// //           { inline_data: { mime_type: 'image/jpeg', data: imageBase64, } },
// //           { text: promptInput.value }
// //         ]
// //       }
// //     ];

// //     // Call the gemini-pro-vision model, and get a stream of results
// //     let stream = streamGemini({
// //       model: 'gemini-pro-vision',
// //       contents,
// //     });

// //     // Read from the stream and interpret the output as markdown
// //     let buffer = [];
// //     let md = new markdownit();
// //     for await (let chunk of stream) {
// //       buffer.push(chunk);
// //       output.innerHTML = md.render(buffer.join(''));
// //     }
// //   } catch (e) {
// //     output.innerHTML += '<hr>' + e;
// //   }
// // };



// // // import { streamGemini } from './gemini-api.js';

// // // let form = document.querySelector('form');
// // // let promptInput = document.querySelector('input[name="prompt"]');
// // // let output = document.querySelector('.output');

// // // // Add the speak button
// // // const speakButton = document.createElement('button');
// // // speakButton.textContent = 'Speak';
// // // speakButton.type = 'button';
// // // speakButton.classList.add('btn', 'btn-primary'); // Add Bootstrap button classes

// // // speakButton.onclick = () => {
// //   // speakButton.classList.toggle('active');
// //   // if (speakButton.classList.contains('active')) {
// //   //   window.location.href('{{ url_for('hello') }}'); // Replace 'https://example.com' with your Flask route URL
// //   //   speakButton.textContent = 'Stop Speaking';
// //   // } else {
// //   //   speakButton.textContent = 'Speak';
// //   // }
// // // };

// // // form.appendChild(speakButton);

// // // form.onsubmit = async (ev) => {
// // //   ev.preventDefault();
// // //   output.textContent = 'Generating...';

// // //   try {
// // //     // Check if the user wants to speak or write
// // //     if (speakButton.classList.contains('active')) {
// // //       // Get the user's spoken input
// // //       const getSpokenInput = () => {
// // //         return new Promise((resolve, reject) => {
// // //           // Your code to capture spoken input goes here
// // //           // ...
// // //           // Once spoken input is captured, resolve the promise with the spoken input
// // //           resolve(spokenInput);
// // //         });
// // //       };

// // //       // Set the spoken input as the value of the prompt input field
// // //       promptInput.value = await getSpokenInput();
// // //     }

// // //     // Load the image as a base64 string
// // //     let imageUrl = form.elements.namedItem('chosen-image').value;
// // //     let imageBase64 = await fetch(imageUrl)
// // //       .then(r => r.arrayBuffer())
// // //       .then(a => base64js.fromByteArray(new Uint8Array(a)));

// // //     // Assemble the prompt by combining the text with the chosen image
// // //     let contents = [
// // //       {
// // //         role: 'user',
// // //         parts: [
// // //           { inline_data: { mime_type: 'image/jpeg', data: imageBase64, } },
// // //           { text: promptInput.value }
// // //         ]
// // //       }
// // //     ];

// // //     // Call the gemini-pro-vision model, and get a stream of results
// // //     let stream = streamGemini({
// // //       model: 'gemini-pro-vision',
// // //       contents,
// // //     });

// // //     // Read from the stream and interpret the output as markdown
// // //     let buffer = [];
// // //     let md = new markdownit();
// // //     for await (let chunk of stream) {
// // //       buffer.push(chunk);
// // //       output.innerHTML = md.render(buffer.join(''));
// // //     }
// // //   } catch (e) {
// // //     output.innerHTML += '<hr>' + e;
// // //   }
// // // };










































// import { streamGemini } from './gemini-api.js';

// let form = document.querySelector('form');
// let promptInput = document.querySelector('input[name="prompt"]');
// let output = document.querySelector('.output');
// let microphoneButton = document.getElementById('microphone-button');

// form.onsubmit = async (ev) => {
//   ev.preventDefault();
//   output.textContent = 'Generating...';

//   try {
//     // Load the image as a base64 string
//     let imageUrl = form.elements.namedItem('chosen-image').value;
//     let imageBase64 = await fetch(imageUrl)
//       .then(r => r.arrayBuffer())
//       .then(a => base64js.fromByteArray(new Uint8Array(a)));

//     // Assemble the prompt by combining the text and image
//     let contents = [
//       {
//         role: 'user',
//         parts: [
//           { inline_data: { mime_type: 'image/jpeg', data: imageBase64, } },
//           { text: promptInput.value }
//         ]
//       }
//     ];

//     // Call the gemini-pro-vision model, and get a stream of results
//     let stream = streamGemini({
//       model: 'gemini-pro-vision',
//       contents,
//     });

//     // Read from the stream and interpret the output as markdown
//     let buffer = [];
//     let md = new markdownit();
//     for await (let chunk of stream) {
//       buffer.push(chunk);
//       output.innerHTML = md.render(buffer.join(''));
//     }
//   } catch (e) {
//     output.innerHTML += '<hr>' + e;
//   }
// };

// // Function to capture audio from microphone
// async function captureAudio() {
//   return new Promise((resolve, reject) => {
//     // Your code to capture audio from the microphone goes here
//     // Example using MediaRecorder:
//     navigator.mediaDevices.getUserMedia({ audio: true })
//       .then(stream => {
//         const mediaRecorder = new MediaRecorder(stream);
//         const audioChunks = [];
//         mediaRecorder.addEventListener('dataavailable', event => {
//           audioChunks.push(event.data);
//         });
//         mediaRecorder.addEventListener('stop', () => {
//           const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
//           resolve(audioBlob);
//         });
//         mediaRecorder.start();
//         setTimeout(() => {
//           mediaRecorder.stop();
//         }, 3000); // Stop recording after 3 seconds (adjust as needed)
//       })
//       .catch(error => {
//         reject(error);
//       });
//   });
// }

// // Event listener for microphone button click
// microphoneButton.addEventListener('click', async () => {
//   try {
//     // Capture audio from microphone
//     const audioBlob = await captureAudio();
//     console.log('Audio captured:', audioBlob);
//   } catch (error) {
//     console.error('Error capturing audio:', error);
//   }
// });





















import { streamGemini } from './gemini-api.js';

let form = document.querySelector('form');
let promptInput = document.querySelector('input[name="prompt"]');
let output = document.querySelector('.output');

// Function to process image and text input
form.onsubmit = async (ev) => {
  ev.preventDefault();
  output.textContent = 'Generating...';

  try {
    // Load the image as a base64 string
    let imageUrl = form.elements.namedItem('chosen-image').value;
    let imageBase64 = await fetch(imageUrl)
      .then(r => r.arrayBuffer())
      .then(a => base64js.fromByteArray(new Uint8Array(a)));

    // Assemble the prompt by combining the text with the chosen image
    let contents = [
      {
        role: 'user',
        parts: [
          { inline_data: { mime_type: 'image/jpeg', data: imageBase64, } },
          { text: promptInput.value }
        ]
      }
    ];

    // Call the gemini-pro-vision model, and get a stream of results
    let stream = streamGemini({
      model: 'gemini-pro-vision',
      contents,
    });

    // Read from the stream and interpret the output as markdown
    let buffer = [];
    let md = new markdownit();
    for await (let chunk of stream) {
      buffer.push(chunk);
      output.innerHTML = md.render(buffer.join(''));
    }
  } catch (e) {
    output.innerHTML += '<hr>' + e;
  }
};

// Function to handle microphone input for speech recognition
if ('webkitSpeechRecognition' in window) {
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;

  var microphone = document.getElementById('microphone');

  microphone.addEventListener('click', function() {
    recognition.start();
  });

  recognition.onresult = function(event) {
    let recognizedText = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        // Append the recognized speech to the prompt input field
        promptInput.value += event.results[i][0].transcript + ' ';
        recognizedText += event.results[i][0].transcript + ' ';
      }
    }
    // Send the recognized text separately to the server
    sendRecognizedText(recognizedText);
  };

  recognition.onerror = function(event) {
    console.log('Error occurred in recognition: ' + event.error);
  }
} else {
  console.log('SpeechRecognition interface not available');
}

// Function to send recognized text separately to the server
function sendRecognizedText(text) {
  // Send the recognized text to the server using AJAX
  fetch('/hello', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: text })
  })
  .then(response => response.json())
  .then(data => {
    // Handle response from the server if needed
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
