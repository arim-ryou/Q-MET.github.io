document.addEventListener('DOMContentLoaded', () => {
    // Carousel - Clone slides for infinite loop
            document.querySelectorAll('.activity-carousel').forEach(carousel => {
                const track = carousel.querySelector('.carousel-track');
                const slides = track.querySelectorAll('.carousel-slide');

                // Clone all slides and append to track for seamless infinite scroll
                slides.forEach(slide => {
                    const clone = slide.cloneNode(true);
                    track.appendChild(clone);
                });
            });

            function sendMail(event) {
                event.preventDefault();

                const name    = document.getElementById('name').value;
                const email   = document.getElementById('email').value;
                const subject = document.getElementById('subject').value || 'Contact from QMET website';
                const message = document.getElementById('message').value;

                const to = 'kiwoong@cbnu.ac.kr';

                // 줄바꿈은 그냥 \n으로 쓰고, 나중에 encodeURIComponent에 맡김
                const bodyText =
                    'Name: ' + name + '\n' +
                    'Email: ' + email + '\n\n' +
                    message;

                const mailtoLink = 'mailto:' + encodeURIComponent(to)
                    + '?subject=' + encodeURIComponent(subject)
                    + '&body=' + encodeURIComponent(bodyText);

                window.location.href = mailtoLink;
            }

            // ====================
});
