
$.getJSON('/eeitt-business-console/assets/javascripts/api.json', function( data ) {
  var template = Handlebars.templates['brc-form']; // your template minus the .js
  var html = template(data);
  var docFrag = document.createDocumentFragment();
  var contentEL = document.getElementById("brc-content");

  data.forms.forEach(function(form) {
     var t = $(template(form));
     docFrag.appendChild(t[0]);
  });

  contentEL.appendChild(docFrag);
})
.fail(function(err) {
  console.log( "error", err );
});
