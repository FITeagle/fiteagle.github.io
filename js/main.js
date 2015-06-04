function gen_mail_to_link(lhs,rhs,subject) {
  return "<A HREF=\"mailto:" + lhs + "@" + rhs + "?subject=" + subject + "\">" + lhs + "@" + rhs + "<\/A>";
}

$( "#form" ).submit(function( event ) {

  $( "#form" ).hide();
  $( "#thanks" ).show();


  $.ajax({
    type: "POST",
    url: "contact/contact.php",
    data: $(this).serialize()
  });

  event.preventDefault();
  return false;
});


$( document ).ready(function() {

  $( '#email' ).html(
    "Just drop us a mail to " +
    gen_mail_to_link('fiteagle.dev','av.tu-berlin.de','[FITeagle] Feedback') +
    "."
    );
});
