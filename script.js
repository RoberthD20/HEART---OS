const messages = [
    "Loading memories...",
    "Loading feelings...",
    "Loading love...",
    "Loading happiness...",
    "Loading the most important person...",
];

const bootMessage = document.querySelector(".boot-text");
const statusText = document.querySelector(".status-text");
const progressBar = document.querySelector(".loading-progress");
const readyText = document.querySelector(".ready-text");
const enterButton = document.querySelector("#enter-button");

let messageIndex = 0;
let progress = 0;

function startBoot() {

    if (messageIndex < messages.length) {

        bootMessage.textContent = messages[messageIndex];

        messageIndex++;

        progress += 20;

        progressBar.style.width = progress + "%";

        setTimeout(startBoot, 1000);

    } else {

        finishBoot();

    }

}

function finishBoot() {

    bootMessage.textContent = "SYSTEM CHECK COMPLETE ✓";

    statusText.textContent = "All systems operational.";

    progressBar.style.width = "100%";

    readyText.style.opacity = "1";

    enterButton.style.opacity = "1";

    enterButton.style.pointerEvents = "auto";

}

startBoot();

const bootScreen = document.querySelector(".boot-screen");

const dashboard = document.querySelector(".dashboard");


enterButton.addEventListener("click", function() {

    bootScreen.style.display = "none";

    dashboard.style.display = "block";

});

const loveButton = document.querySelector("#love-button");

const memoriesButton = document.querySelector("#memories-button");
const memoriesWindow = document.querySelector(".memories-window");
const closeMemories = document.querySelector("#close-memories");

if (memoriesButton && memoriesWindow && closeMemories) {

    memoriesButton.addEventListener("click", function() {

        memoriesWindow.style.display = "block";

    });

    closeMemories.addEventListener("click", function() {

        memoriesWindow.style.display = "none";

    });

}

const loveWindow = document.querySelector(".love-window");

const closeLove = document.querySelector("#close-love");


loveButton.addEventListener("click", function() {

    loveWindow.style.display = "block";

    appsOpened.love = true;

});

closeLove.addEventListener("click", function() {

    loveWindow.style.display = "none";

    checkAllApps();

});

const reasons = [

    "Porque me encanta la forma en que me hacés sonreír día con día.",

    "Porque puedo hablar contigo durante horas y sentir que solo pasó un minuto.",

    "Porque me encanta cada momento que compartimos juntitos.",

    "Porque realmente me fascina la persona que eres y todas las cositas que te hacen única.",

    "Porque me encanta el poder estar a tu lado y sentir contigo paz.",

    "Porque me encanta el que me hagas sentir que no estoy solo.",

    "Porque me encanta que tú seas mi lugar seguro y sentirme en casa cada que estoy contigo.",

    "Porque contigo me siento amado de verdad.",

    "Porque amo tu forma y manera de ser.",

    "Porque me encanta esa libertad que siento al hablar contigo.",

    "Porque me encanta el brillo tan hermoso que tienes y que no se puede encontrar en nadie más.",

    "Porque me encanta sentir que el tiempo que pasamos juntos nunca se sienta suficiente.",

    "Porque me encantan tus chistes aunque no lo creas pero realmente me encantan.",

    "Porque no me veo con nadie más que no sea contigo en el futuro.",

    "Porque eres la persona que más feliz me ha hecho en mi vida.",

    "Porque contigo me siento completo.",

    "Porque realmente disfruto estar contigo.",

    "Porque eres la persona más bonita que hay y habrá en mi vida.",

    "Porque me llenas de felicidad todos los días.",

    "Porque eres el primer y ultimo pensamiento de mis días.",

    "Porque eres y siempre serás mi única opción.",

    "Porque por ti siento algo que no he sentido ni sentiré por nadie más.",

    "Porque eres todo lo que un día soñé.",

    "Porque me encanta todo de ti.",

    "Porque me encanta saber que estos dos meses son solamente el comienzo de nuestra historia.",

    "Porque en verdad te amo mucho mi amor. ❤️"

];

let reasonIndex = 0;

const reasonNumber = document.querySelector("#reason-number");

const loveMessage = document.querySelector("#love-message");

const nextReason = document.querySelector("#next-reason");


loveMessage.textContent = reasons[reasonIndex];


nextReason.addEventListener("click", function() {

    reasonIndex++;

    if (reasonIndex < reasons.length) {

        reasonNumber.textContent =
            "REASON #" + String(reasonIndex + 1).padStart(2, "0");

        loveMessage.textContent =
            reasons[reasonIndex];

    } else {

        reasonNumber.textContent = "FINAL MESSAGE ❤️";

        loveMessage.textContent =
            "Y podría escribir cientos de razones, pero probablemente nunca serían suficientes.";

        nextReason.style.display = "none";

    }

});

memoriesButton.addEventListener("click", function() {

    memoriesWindow.style.display = "block";

    appsOpened.memories = true;

});

closeMemories.addEventListener("click", function() {

    memoriesWindow.style.display = "none";

    checkAllApps();

});

const memoryImages = document.querySelectorAll(".memory-card img");

const imageViewer = document.querySelector(".image-viewer");

const largeImage = document.querySelector("#large-image");

const closeImage = document.querySelector("#close-image");


memoryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        largeImage.src = image.src;

        imageViewer.style.display = "flex";

    });

});


closeImage.addEventListener("click", function() {

    imageViewer.style.display = "none";

});

const secretButton = document.querySelector("#secret-button");

const secretWindow = document.querySelector(".secret-window");

const closeSecret = document.querySelector("#close-secret");

const secretPassword = document.querySelector("#secret-password");

const unlockSecret = document.querySelector("#unlock-secret");

const secretError = document.querySelector("#secret-error");

const secretResult = document.querySelector("#secret-result");

secretButton.addEventListener("click", function() {

    secretWindow.style.display = "block";

    appsOpened.secret = true;

});

closeSecret.addEventListener("click", function() {

    secretWindow.style.display = "none";

    checkAllApps();

});

const correctPassword = "corbel";

unlockSecret.addEventListener("click", function() {

    if (secretPassword.value === correctPassword) {

        secretError.textContent = "";

        secretResult.style.display = "block";

        secretPassword.style.display = "none";

        unlockSecret.style.display = "none";

        startDecryption();

    } else {

        secretError.textContent = "ACCESS DENIED ✕";

    }

});

function startDecryption() {

    function showMessage() {

        const message =
            document.querySelector("#decrypted-message");


        const text =
            "Hola mi amor la verdad es que aquí te iba a poner cositas de nosotros ya sabes, jeje, cositas riquitas pero creo que mejor no por aquello, pero bueno, aprovecho para decirte unas cositas. Oye enserio quién diría que tú y yo íbamos a ser novios, parece loco pensar que mi mejor amiga se convertiría en mi mejor amiga y aparte la persona que más amo, quien diría que Roberth y Francella ahora tienen setzo jeje, quien lo diría pero la verdad solo me veo teniendo setzo contigo por el resto de mi vida jeje pero bueno, mi amor enserio te amo mucho mucho, no te miento cuando te digo que eres el amor de mi vida porque la verdad es que si lo eres, estoy muy seguro de eso,  enserio nunca me he sentido tan bien con alguien, soy el muchacho más feliz del mundo contigo, de verdad tú eres mi lugar seguro, nunca he sentido tanta libertad al hablar con alguien como cuando hablo contigo, de verdad mi cosa favorita en el mundo es estar contigo. Mi vida quiero que sepas que el que llegaras a mi vida y nos hiciéramos novios ha sido lo mejor que me ha pasado, enserio no te puedo describir el sentimiento que siento por ti pero te aseguro que es inmenso, de verdad quiero que lo nuestro sea para siempre, enserio le pido a Dios para que nuestra relación crezca y esté llena de amor cada día más, que podamos vivir una y mil vidas juntitos, que nos podamos casar un día, tener hijitos y formar una hermosa familia, que pases de mi novia hermosa a mi esposita hermosa. Mi vida y quiero perdón por tal vez no ser el mejor novio en algunas ocasiones, sé que me he equivocado varias veces y me he dejado llevar por cosas que no nos deben de importar, enserio perdóname mi amor, perdón si le he hecho sentir mal, la verdad es que no es nada justo hacer sentir mal a la persona que más amo en el mundo, quiero hacerte sentir bien y hacerte feliz siempre cada día por el resto de mi vida, y también quiero decirte perdón bbi por no darte el detallito que te tuve que dar hace un mes pero espero poder remendar lo con esto, jeje, aunque se ve simple la verdad le he metido mucho amor a este detallito para que sea lo más bonito posible. Oye te amo mi amor, no sabes lo feliz que me hace el hecho de poder decirle a una persona tan hermosa como tú mi amor, enserio gracias por llegar a mi vida porque en verdad la hiciste mucho mejor, gracias por estos dos meses que han sido los mejores de mi vida, oye quiero que sepas que yo(tu novio) siempre voy a estar para ti y juntos vamos a cumplir toda meta qué nos propongamos como pareja llena de amor que somos y seremos por el resto de nuestras vidas. Te amo mucho Francella, eres lo mejor que me ha pasado en la vida, te amo mucho mi amor. Por cierto, oye la neta sí me exitas demasiado, la verdad es que mi novia está bien riquita, lit eres super hermosa bbi enserio, me encanta todo de ti, estás bien rica mami, jeje, te amo mucho mi amor. ❤️";


        let index = 0;


        const typing = setInterval(function() {

            message.textContent += text[index];

            index++;


            if (index >= text.length) {

                clearInterval(typing);

            }

        }, 40);

    }

    const progressBar =
        document.querySelector("#decrypt-progress");

    const percentText =
        document.querySelector("#decrypt-percent");

    const statusText =
        document.querySelector("#decrypt-status");

    const message =
        document.querySelector("#decrypted-message");


    let progress = 0;


    const interval = setInterval(function() {

        progress += 5;

        progressBar.style.width =
            progress + "%";

        percentText.textContent =
            progress + "%";


        if (progress >= 100) {

            clearInterval(interval);

            statusText.textContent =
                "FILE DECRYPTED ✓";

            showMessage();

        }

    }, 100);

}

const musicButton = document.querySelector("#music-button");

const musicWindow = document.querySelector(".music-window");

const closeMusic = document.querySelector("#close-music");

const loveSong = document.querySelector("#love-song");


if (musicButton && musicWindow && closeMusic) {

    musicButton.addEventListener("click", function() {

        musicWindow.style.display = "block";

        appsOpened.music = true;

    });


    closeMusic.addEventListener("click", function() {

        musicWindow.style.display = "none";

        loveSong.pause();

        checkAllApps();

    });
}

const finalWindow = document.querySelector(".final-window");

const closeFinal = document.querySelector("#close-final");

const openFinal = document.querySelector("#open-final");

const finalMessage = document.querySelector("#final-message");

const finalText = document.querySelector("#final-text");

function openFinalFile() {

    finalWindow.style.display = "block";

}

openFinal.addEventListener("click", function() {

    openFinal.style.display = "none";

    finalMessage.style.display = "block";

    typeFinalMessage();

});

closeFinal.addEventListener("click", function() {

    finalWindow.style.display = "none";

});

function typeFinalMessage() {

    const text =
        "Bbi, hoy cumplimos dos meses desde el 13 de junio que te pedí que fueras mi novia. ❤️ La verdad es que estos dos meses han significado muchísimo para mí, pasarlos con el amor de mi vida es simplemente hermoso. Mi vida quiero darte gracias por cada momento, cada conversación, cada risa y simplemente por tenerte en mi vida. Gracias por estos dos meses y por todos los recuerditos lindos que hemos creado juntos. Espero que esto sea solamente el comienzo de todo lo que todavía nos queda por vivir. Te amo. Y si tuviera que volver a elegir...";


    let index = 0;

    finalText.textContent = "";


    const typing = setInterval(function() {

        finalText.textContent += text[index];

        index++;


        if (index >= text.length) {

            clearInterval(typing);

        }

    }, 35);

}

let appsOpened = {

    love: false,

    memories: false,

    secret: false,

    music: false

};

function checkAllApps() {

    if (

        appsOpened.love &&
        appsOpened.memories &&
        appsOpened.secret &&
        appsOpened.music

    ) {

        setTimeout(function() {

            openFinalFile();

        }, 1000);

    }

}