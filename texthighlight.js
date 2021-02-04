// CSS selectors
// for finding the input box and output field in the HTML

var input_selector = "input[name='textinput']";
var result_selector = "p[id='result']";


// word checking function

function is_target_word(word){
  return target_words.has(word.toLowerCase());  // from target_words.js
}


// word highlighting function

function highlight_words(text, func){
  var text_out = "";
  var words = text.split(/\b/);
  for(var i = 0; i < words.length; i++) {
    if(func(words[i])) {
      text_out = text_out + `<span class="highlighted">${words[i]}</span>`;
    }
    else {
      text_out = text_out + words[i];
    }
  }
  return text_out;
}


// attach the functions to the HTML text field

$(input_selector).on("keyup", function () {
  var content = $(input_selector).val();
  var result = highlight_words(content, is_target_word);  // the functions defined above
  $(result_selector).html(result);
  console.log(`${content} -> ${result}`);
});
