# import json
# import os

# import google.generativeai as genai
# from flask import Flask, jsonify, request, send_file, send_from_directory

# # 🔥 FILL THIS OUT FIRST! 🔥
# # 🔥 GET YOUR GEMINI API KEY AT 🔥
# # 🔥 https://g.co/ai/idxGetGeminiKey 🔥
# API_KEY = 'AIzaSyBM0YCnXiWsQrMTn3QS9UKcRKUuQr6ZeM0'

# genai.configure(api_key=API_KEY)

# app = Flask(__name__)


# @app.route("/")
# def index():
#     return send_file('web/index.html')


# @app.route("/api/generate", methods=["POST"])
# def generate_api():
#     if request.method == "POST":
#         if API_KEY == 'TODO':
#             return jsonify({ "error": '''
#                 To get started, get an API key at
#                 https://g.co/ai/idxGetGeminiKey and enter it in
#                 main.py
#                 '''.replace('\n', '') })
#         try:
#             req_body = request.get_json()
#             content = req_body.get("contents")
#             model = genai.GenerativeModel(model_name=req_body.get("model"))
#             response = model.generate_content(content, stream=True)
#             def stream():
#                 for chunk in response:
#                     yield 'data: %s\n\n' % json.dumps({ "text": chunk.text })

#             return stream(), {'Content-Type': 'text/event-stream'}

#         except Exception as e:
#             return jsonify({ "error": str(e) })


# @app.route('/<path:path>')
# def serve_static(path):
#     return send_from_directory('web', path)


# if __name__ == "__main__":
#     app.run(port=int(os.environ.get('PORT', 80)))




import json
import pyttsx3
import os
import time
import datetime
import smtplib
import webbrowser
import speech_recognition as sr
import wikipedia
# from audioflask import Audio
from gtts import gTTS
from flask import Flask, jsonify, request, send_file, send_from_directory,render_template

import google.generativeai as genai

# 🔥 FILL THIS OUT FIRST! 🔥
# 🔥 GET YOUR GEMINI API KEY AT 🔥
# 🔥 https://g.co/ai/idxGetGeminiKey 🔥
API_KEY = 'AIzaSyBM0YCnXiWsQrMTn3QS9UKcRKUuQr6ZeM0'

genai.configure(api_key=API_KEY)

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/api/generate", methods=["POST"])
def generate_api():
    if request.method == "POST":
        if API_KEY == 'TODO':
            return jsonify({ "error": '''
                To get started, get an API key at
                https://g.co/ai/idxGetGeminiKey and enter it in
                main.py
                '''.replace('\n', '') })
        try:
            req_body = request.get_json()
            content = req_body.get("contents")
            model = genai.GenerativeModel(model_name=req_body.get("model"))
            response = model.generate_content(content, stream=True)
            def stream():
                for chunk in response:
                    yield 'data: %s\n\n' % json.dumps({ "text": chunk.text })

            return stream(), {'Content-Type': 'text/event-stream'}

        except Exception as e:
            return jsonify({ "error": str(e) })
        
@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory('templates', path)

engine = pyttsx3.init()
voices = engine.getProperty('voices')
# print(voices[1].id)
engine.setProperty('voice', voices[1].id)

# from gtts import gTTS
# import os

def speak(text, lang='en'):
    tts = gTTS(text=text, lang=lang)
    tts.save("output.mp3")
    os.system("aimp output.mp3")

# def speak(audio):
#     engine.say(audio)
#     engine.runAndWait()

@app.route('/submit-transcript', methods=['POST'])
def submit_transcript():
    # Get the user transcript from the POST request
    user_transcript = request.form.get('user_transcript')

    # Do something with the user transcript
    print(user_transcript)

    # Return a response
    return 'Transcript received.'

@app.route('/hello')
def hello():
    hour = int(datetime.datetime.now().hour)
    if hour>=0 and hour<12:
        speak("Good Morning!")

    elif hour>=12 and hour<18:
        speak("Good Afternoon!")

    else:
        speak("Good Evening!")

    speak("Sir, I am Friday. How may I help you?")
    
    
    
@app.route('/process_text', methods=['POST'])
def process_text():
    hello()
    if request.method == 'POST':
        data = request.json
        spoken_text = data.get('text', '')
        # Call your Python function with the spoken text
        your_python_function(spoken_text)
        # Process the result if needed
        return jsonify({'result': 'success'})
    return jsonify({'error': 'Invalid request'})

def your_python_function(spoken_text):
    # Your Python logic here
    hello()
    print(spoken_text)
    return spoken_text.upper()

def takeCommand():
    # It takes microphone input from the user and returns string output
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Listening...")
        r.pause_threshold = 1
        audio = r.listen(source)

    try:
        print("Recognizing...")
        query = r.recognize_google(audio, language='en-in')
        print(f"User said: {query}\n")

    except Exception as e:
        print("Say that again please...")
        speak("Say that again please...")
        return "None"
    return query

def sendEmail(to, content):
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.login('knikhil@gmail.com', 'password')
    server.sendmail('youremail@gmail.com', to, content)
    server.close()

if __name__ == "__main__":
    engine = pyttsx3.init()
    voices = engine.getProperty('voices')
    # print(voices[1].id)
    engine.setProperty('voice', voices[1].id)

    app.run(port=int(os.environ.get('PORT', 80)))
    
    hello()
    while True:
        query = takeCommand().lower()

        if 'wikipedia' in query:
            speak('Searching Wikipedia...')
            query = query.replace("wikipedia" or 'search wikipedia for', "")
            results = wikipedia.summary(query, sentences=3)
            speak("According to Wikipedia")
            print(results)
            speak(results)
            
        elif 'open app' or 'open web' in query:
            webbrowser.open('127.0.0.1')

        elif 'open youtube' in query:
            webbrowser.open("youtube.com")

        elif 'open google' in query:
            webbrowser.open("google.com")

        elif 'open stackoverflow' in query:
            webbrowser.open("stackoverflow.com")

        elif 'play music' in query:
            music_dir = 'C:\\New folder\\Songs'
            songs = os.listdir(music_dir)
            print(songs)
            os.startfile(os.path.join(music_dir, songs[0]))

        elif 'the time' in query:
            strTime = datetime.datetime.now().strftime("%H:%M:%S")
            speak(f"Sir, the time is {strTime}")

        elif 'open code' in query:
            codePath = "C:\\Users\\knikh\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe"
            os.startfile(codePath)

        elif 'email to Nikhil' in query:
            try:
                speak("What should I say?")
                content = takeCommand()
                to = "nikhil@gmail.com"
                sendEmail(to, content)
                speak("Email has been sent!")
            except Exception as e:
                print(e)
                speak("Sorry my friend. I am not able to send this email")

        elif 'exit' in query:
            speak("Thank you for using me")
            exit()
