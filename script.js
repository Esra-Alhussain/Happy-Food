//get the reference to the card element
//when the user click on the card, the hidden description become visible.

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
        const description = card.querySelector('.hidden-description');

        card.addEventListener('click', function() {
            if (description.style.display === 'none' || description.style.display === '') {
                description.style.display = 'block';
            } else {
                description.style.display = 'none';
            }
        });
    });
});
function showMessage() {
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('message').style.display = 'block';
}