
$(document).ready(function() {
 
// TOC, shows how to scroll the whole window
$('.scroll a').click(function(){
  $.scrollTo( this.hash, 1500, { easing:'easeOutQuint' });
  console.log("alskjfdjf");
  return false;
});
 


});