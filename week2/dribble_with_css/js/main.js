var card = new Card({
    // a selector or DOM element for the form where users will
    // be entering their information
    form: 'form', // *required*
    // a selector or DOM element for the container
    // where you want the card to appear
    container: '.card-wrapper', // *required*

    formSelectors: {
        numberInput: 'input[name="number"]', // optional — default input[name="number"]
        expiryInput: 'input[name="expiry"]', // optional — default input[name="expiry"]
        cvcInput: 'input[name="cvc"]' // optional — default input[name="cvc"]

    },

    width: 350, // optional — default 350px
    formatting: true, // optional - default true

    // Strings for translation - optional
    messages: {
        validDate: 'valid\ndate', // optional - default 'valid\nthru'
        monthYear: 'mm/yyyy', // optional - default 'month/year'
    },

    // Default placeholders for rendered fields - optional
    placeholders: {
        number: '•••• •••• •••• ••••',
        expiry: '••/••',
        cvc: '•••'
    },

    // if true, will log helpful messages for setting up Card
    debug: false // optional - default false
});
