// Business logic

function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
};

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};


// User logic
$(function() {
  $("#new-contact").submit(function(event) {
    event.preventDefault();

    let inputFirstName = $("input#new-first-name").val();
    let inputLastName = $("input#new-last-name").val();

    let newContact = new Contact(inputFirstName, inputLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});
