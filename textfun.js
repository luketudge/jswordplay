// CSS selectors

var input_selector = "input[name='textinput']";
var result_selector = "p[id='result']";


// misc constants

var problematic_words = new Set(["logic", "objectivity", "truth"]);


// text manipulation functions

function identity(text){
  return text;
}

function highlight_problematic(text){
  var text_out= "";
  var words = text.split(/\b/);
  for(var i = 0; i < words.length; i++) {
    if(problematic_words.has(words[i])) {
      text_out = text_out + `<span class="highlighted">${words[i]}</span>`;
    }
    else {
      text_out = text_out + words[i];
    }
  }
  return text_out;
}


// attach a function to the HTML text field

var func_da_wunc = highlight_problematic;

$(input_selector).on("keyup", function () {
  var content = $(input_selector).val();
  var result = func_da_wunc(content);
  $(result_selector).html(result);
  console.log(`${content} -> ${result}`);
});
