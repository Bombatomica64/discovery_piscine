var documents = [{
  "name": "CV Page 1",
  "text": "Resume",
  "url": "CVpage1.html"
}, {
  "name": "CV Page 2",
  "text": "Resume",
  "url": "CVpage2.html"
}, {
  "name": "Main Page",
  "text": "This is the main page...",
  "url": "mainPage.html"
}]

var idx; // Declare the variable here, but don't define it yet

function fetchPageContent(url) {
  return fetch(url)
    .then(response => response.text())
    .then(text => {
      var parser = new DOMParser();
      var doc = parser.parseFromString(text, 'text/html');
      return doc.body.innerText;
    });
}

Promise.all(documents.map(doc => fetchPageContent(doc.url).then(text => {
  doc.text = text;
}))).then(() => {
  // The 'text' field of the documents has been updated.
  // Now you can define the idx variable
  idx = lunr(function () {
    this.ref('url')
    this.field('text')

    documents.forEach(function (doc) {
      this.add(doc)
    }, this)
  })
});

function search() {
  var query = document.querySelector('.form-control').value;
  var results = idx.search(query);
  // If there are any results, navigate to the first result
  if (results.length > 0) {
    window.location.href = results[0].ref;
  }
}