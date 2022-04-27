function decorateWhatsAppLink() {
    //set up the url
    var url = "whatsapp://send?text=";
  
    //define the message text
    var text = "Hey check out this awesome blog at https://madole.xyz";
  
    //encode the text
    var encodedText = encodeURIComponent(text);
  
    //find the link
    var $whatsApp = $(".whatsapp a");
  
    //set the href attribute on the link
    $whatsApp.attr("href", url + encodedText);
  }
  
  //call the decorator function
  decorateWhatsAppLink();
  