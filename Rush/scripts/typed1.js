$('.dropdown-menu a').on('click', function(e) {
    e.preventDefault();
    console.log('You clicked on ' + $(this).text());
});

var typed = new Typed('#animated-text', {
    strings: ["Onion routing è una tecnica di anonimizzazione delle comunicazioni in una rete di telecomunicazioni. In una rete onion, i messaggi sono incapsulati in strati di crittografia che vengono paragonati agli strati di una cipolla, dato l'incapsulamento. Il dato criptato viene trasmesso attraverso una serie di nodi, chiamati onion router, ognuno dei quali sbuccia via un singolo strato di crittografia, scoprendo così il prossimo nodo di destinazione del dato. Il mittente rimane anonimo perché ciascun intermediario conosce solo la posizione del nodo immediatamente precedente e di quello immediatamente successivo."],
    typeSpeed: 30,
    backSpeed: 50,
    loop: true
});