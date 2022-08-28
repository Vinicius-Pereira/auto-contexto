$(document).ready(function () {
    $("#generate").on("click", generateImage);
});

function generateImage() {
    // Declare textarea variables
    let contexto = $("#contexto-input").val();
    let score = $("#highscore-input").val();
    let globle = $("#globle-input").val();
    let people = $("#people-input").val();

    // Concat the final text
    let finalText = "";
    let cont = 2;

    //  Get the current date and show
    let data = new Date();
    data = data.toLocaleDateString("en-GB");
    $("#title").html(`Contexto ${data}`);

    if ($.trim(contexto)) 
    {
        // Get number of squares of each color (because I don't know how to calculate)
        let squares = [
            contexto.match(/🟩/g).length,
            contexto.match(/🟨/g).length,
            contexto.match(/🟥/g).length,
        ];

        // Operate the contexto input getting just the necessary
        contexto = contexto.replace(/([A-Za-z.#\n🟩🟨🟥])/g, "");
        contexto = contexto.split(" ");
        contexto = contexto.filter(function (el) {
            if (el != "") {
                return el;
            }
        });
        $("#title-contexto").html(`Contexto #${contexto[0]}`);

        // Accumulate the complete html string to show the result
        finalText += `<li>${contexto[1]} tentativas.</li>`;
        finalText += `<li>`;
        for (let a = 0; a < squares[0]; a++) {
            finalText += `🟩 `;
        }
        finalText += `${contexto[1]}</li>`;
        finalText += `<li>`;
        for (let a = 0; a < squares[1]; a++) {
            finalText += `🟨 `;
        }
        finalText += `${contexto[3]}</li>`;
        finalText += `<li>`;
        for (let a = 0; a < squares[2]; a++) {
            finalText += `🟥 `;
        }
        finalText += `${contexto[4]}</li>`;

        $("#contexto ul").html(finalText);
    }

    // HIGH SCORE DAY

    if ($.trim(globle)) 
    {
        score = score.replace(/([A-Za-z.#\n:/-])/g, "");
        score = score.split(" ");
        score = score.filter(function (el) {
            if (el != "") {
                return el;
            }
        });

        $("#title-score").html(`High Score Day #${score[1]}`);
        $("#highscore ul").html(`<li>${score[2]}</li>`);
    }

    console.log(!$.trim(globle));
    if ($.trim(globle)) 
    {
        globle = globle.split("\n");
        finalText = "";
        while (globle[cont] !== "") {
            finalText += globle[cont];
            cont++;
        }

        $("#globle ul").html(`<li>${finalText}</li>`);

        $("#people").html(`a mente coletiva nautilus de ${people} pessoas`);
    }

    $("#container-form").hide();
    $("#container-print").show();
}
