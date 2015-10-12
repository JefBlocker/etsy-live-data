'use strict';

(function () {

  var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

  $.ajax({
    url: etsyURL,
    dataType: 'jsonp',
    method: 'get'
  }).then(function (response) {
    var templateString = $('#item-template').text();
    var renderTemplate = _.template(templateString);
    _.each(response.results, function (item) {
      var freshHTML = renderTemplate(item);
      $('.container').append(freshHTML);
    });

    // Grab the template string.

    // Turn it into a template function.

    // Pass in an object. Return value is a string
    // with the bee stings replaced with object's properties

    // Inject the fresh html into the page.
  });
})();