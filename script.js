// script.js
document.addEventListener('DOMContentLoaded', () => {
    const countdownEl = document.getElementById('countdown');
    // Մեքենայական ժամկետ՝ տարին, ամիս (0–ից), օր, ժամը etc.
    const weddingDate = new Date(2025, 8, 19, 0, 0, 0).getTime();

    const update = () => {
        const now = Date.now();
        const distance = weddingDate - now;

        if (distance <= 0) {
            document.querySelector("small").style.display = "none"
            countdownEl.innerHTML = "<p>Հարսանիքը կայացել է, երջանկություն նորապսակներին!💕</p>";
            clearInterval(interval);
            return;
        }

        const day = 1000 * 60 * 60 * 24;
        const hour = 1000 * 60 * 60;
        const minute = 1000 * 60;
        const days = Math.floor(distance / day);
        const hours = Math.floor((distance % day) / hour);
        const minutes = Math.floor((distance % hour) / minute);
        const seconds = Math.floor((distance % minute) / 1000);

        countdownEl.innerHTML =
            `<div>${days}  <br> <span>օր</span></div>` +
            `<div>${hours.toString().padStart(2, '0')} <br> <span>ժամ</span> </div>` +
            `<div>${minutes.toString().padStart(2, '0')} <br> <span>րոպե</span></div>` +
            `<div>${seconds.toString().padStart(2, '0')}  <br> <span>վայրկյան</span></div>`;
    };

    update();                              // առաջին վայրկյանին ցուցադրում
    const interval = setInterval(update, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in-view');
            } else {
                e.target.classList.remove('in-view');
            }
        });
    }, {threshold: 0.1});

    document.querySelectorAll('.imgDiv').forEach((el, idx) => {
        el.classList.add(idx === 0 ? 'slide-left' : 'slide-right');
        observer.observe(el);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {threshold: 0.1});

    // Աղյուսակ բոլոր fade-անիմացիայի ենթակա տարրերի համար
    document.querySelectorAll('.imgDiv, .topDiv, .bottomDiv').forEach(el => {
        el.classList.add('fade-element');
        observer.observe(el);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {threshold: 0.1});

    document.querySelectorAll('.main > *').forEach(el => {
        observer.observe(el);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {threshold: 0.1});

    document.querySelectorAll('.imgDiv').forEach(el => {
        observer.observe(el);
    });
});


emailjs.init({publicKey: "lr8ofrjcCQyQekHw6"});

document.getElementById("rsvp-form").addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm('service_oopr085', 'template_t2y2bjm', this)
        .then(response => {
            const successMessage = document.createElement('div');
            successMessage.id = 'success-message';
            successMessage.innerHTML = 'Շնորհակալություն, <br> տվյալները ուղարկված են։💞';
            successMessage.style.position = 'fixed';
            successMessage.style.top = '50%';
            successMessage.style.left = '50%';
            successMessage.style.transform = 'translate(-50%, -50%)';
            successMessage.style.padding = '20px';
            successMessage.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            successMessage.style.color = 'white';
            successMessage.style.borderRadius = '5px';
            successMessage.style.fontSize = '25px';
            successMessage.style.textAlign = 'center';
            successMessage.style.zIndex = '9999';
            successMessage.style.letterSpacing = '1px';
            // Ավելացնում ենք successMessage տարրը էջի մեջ
            document.body.appendChild(successMessage);

            // Հաղորդագրությունը ցույց տալու համար
            successMessage.classList.remove('hidden');

            // Հաղորդագրությունը թաքցնելու համար 5 վայրկյան անց
            setTimeout(() => {
                successMessage.classList.add('hidden');
                // Հեռացնում ենք successMessage տարրը էջից
                document.body.removeChild(successMessage);
            }, 3000);

            this.reset();
        })
        .catch(error => {
            console.log(error)
        });

});
const music = document.getElementById("wedding-song")

$(document).on('click', function(){
    document.getElementById("wedding-song").play();
});


