document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        ".hero-text, .hero-image"
    );

    elements.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";

        setTimeout(() => {
            el.style.transition = "all 0.8s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 200 * index);
    });

});

const sections =
document.querySelectorAll('.section');

const navDots =
document.querySelectorAll('.nav-dot');

const observer =
new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            navDots.forEach(dot=>{
                dot.classList.remove('active');
            });

            const id =
            entry.target.getAttribute('id');

            const activeDot =
            document.querySelector(
                `.nav-dot[href="#${id}"]`
            );

            activeDot.classList.add('active');
        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{
    observer.observe(section);
});

const toggle =
document.getElementById('themeToggle');

const trainDemo =
document.getElementById('trainDemo');

const trainImage =
document.getElementById('trainImage');

toggle.addEventListener('change', () => {

    trainImage.style.opacity = '0';

    setTimeout(() => {

        if(toggle.checked){

            trainDemo.classList.remove('day');
            trainDemo.classList.add('night');

            trainImage.src =
                'img/cover-night.png';

        }else{

            trainDemo.classList.remove('night');
            trainDemo.classList.add('day');

            trainImage.src =
                'img/cover-day.png';

        }

        trainImage.style.opacity = '1';

    }, 250);

});

const terminal =
document.getElementById(
    'terminalContent'
);

if(terminal){

    const logs = [

        '> Incoming customer registration',

        '✓ Validating request',

        '✓ Creating customer record',

        '✓ Saving database',

        '✓ Generating invoice',

        '✓ Sending email notification',

        '✓ Sending WhatsApp message',

        '✓ Updating CRM',

        '✓ Workflow completed'
    ];

    let index = 0;

    function runTerminal(){

        terminal.innerHTML = '';

        index = 0;

        const interval = setInterval(()=>{

            const line =
            document.createElement('div');

            line.classList.add(
                'terminal-line'
            );

            if(
                logs[index]
                .includes('✓')
            ){

                line.classList.add(
                    'success'
                );

            }else{

                line.classList.add(
                    'info'
                );
            }

            line.textContent =
            logs[index];

            terminal.appendChild(
                line
            );

            terminal.scrollTop =
            terminal.scrollHeight;

            index++;

            if(index >= logs.length){

                clearInterval(interval);

                setTimeout(
                    runTerminal,
                    3000
                );
            }

        },700);

    }

    runTerminal();
}

const navbar =
document.querySelector('.navbar');

document.addEventListener(
    'mousemove',
    (e)=>{

        if(e.clientY < 80){

            navbar.classList.add('show');

        }else{

            navbar.classList.remove('show');
        }

    }
);

let lastScroll = 0;

window.addEventListener('scroll', ()=>{

    const currentScroll =
    window.pageYOffset;

    if(currentScroll < 100){

        navbar.classList.add('show');

    }else if(currentScroll < lastScroll){

        // scrolling up

        navbar.classList.add('show');

    }else{

        // scrolling down

        navbar.classList.remove('show');
    }

    lastScroll = currentScroll;
});

window.addEventListener('load', ()=>{

    navbar.classList.add('show');

    setTimeout(()=>{

        navbar.classList.remove('show');

    },3000);

});

