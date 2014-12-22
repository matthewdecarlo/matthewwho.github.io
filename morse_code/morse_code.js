var cypher = {"A": ".-",
              "B": "-...",
              "C": "-.-.",
              "D": "-..",
              "E": ".",
              "F": "..-.",
              "G": "--.",
              "H": "....",
              "I": "..",
              "J": ".---",
              "K": "-.-",
              "L": ".-..",
              "M": "--",
              "N": "-.",
              "O": "---",
              "P": ".--.",
              "Q": "--.-",
              "R": ".-.",
              "S": "...",
              "T": "-",
              "U": "..-",
              "V": "...-",
              "W": ".--",
              "X": "-..-",
              "Y": "-.--",
              "Z": "--..",
              "0": "-----",
              "1": ".----",
              "2": "..---",
              "3": "...--",
              "4": "....-",
              "5": ".....",
              "6": "-....",
              "7": "--...",
              "8": "---..",
              "9": "----.",
              " ": "/",
              "!": "---.",
              "&": "----.",
              "@": ".--.-.",
              ".": ".-.-.-",
              '"': ".-..-.",
              ",": "--..--",
              "?": "..--..",
              "'": ".----.",
              "$": "...-..-",
              "_": "..--.-",
              ":": "---...",
              ";": "-.-.-.",
              "(": "-.--.-",
              ")": "---..",
              "/": "-..-.",
              "+": ".-.-.",
              "=": "-...-",
              "-": "-....-"};

function downcase_and_to_array(phrase) {
       var phraseArray = phrase.toUpperCase().split("");
       return phraseArray;
};

function transcribe(an_array) {
       var morse_code = "";

       an_array.forEach(function (character) {
         morse_code += cypher[character] + " ";
       });
       return morse_code
};

function populate_transcription() {
       var prepared_text = downcase_and_to_array(document.getElementById("message").value);
       document.getElementById('translation').innerHTML = transcribe(prepared_text);
};