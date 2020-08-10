// CSS selectors
// for finding the input box and output field in the HTML

var input_selector = "input[name='textinput']";
var result_selector = "p[id='result']";


// text manipulation function(s)
// write new string processing functions here to try them out

function identity(text){
  return text;
}

function highlight_words(text){
  var text_out= "";
  var words = text.split(/\b/);
  for(var i = 0; i < words.length; i++) {
    if(target_words.has(words[i].toLowerCase())) {  // from target_words.js
      text_out = text_out + `<span class="highlighted">${words[i]}</span>`;
    }
    else {
      text_out = text_out + words[i];
    }
  }
  return text_out;
}


// attach a function to the HTML text field
// can choose a function from among those defined above

var func_da_wunc = highlight_words;

$(input_selector).on("keyup", function () {
  var content = $(input_selector).val();
  var result = func_da_wunc(content);
  $(result_selector).html(result);
  console.log(`${content} -> ${result}`);
});
