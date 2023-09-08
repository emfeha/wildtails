$(document).ready(function () {
    var element = $("#html-content-holder"); // global variable
    var getCanvas; // global variable

    $('.toggle-asset').on('click', function () {
        console.log($(this).attr('name'));
        console.log($(this).data('class'));
        $('.'+$(this).attr('name')).removeClass('d-none d-block')
            .addClass($(this).data('class'));
    });

    $('.defeats').on('click', function () {
        $('.'+$(this).attr('name')).addClass('d-none');
        $('.'+$(this).attr('id')).removeClass('d-none');
        calcScore()
    });

    function calcScore() {
        let total = 0,
            rank = "Smuggler";

        $('input.defeats[type=radio]').each(function(){
            if($(this).prop('checked') === true) {
                total += $(this).data('score');
            }
        });

        if(total > 16)
            rank = 'Pirate';

        if (total > 19)
            rank = 'Legend';

        $('.score .value').text(rank + ' (' + total + ' points)');
    }

    $('#download').on('click', function () {
        html2canvas(document.querySelector("#canvas"),{backgroundColor:null}).then(canvas => {
            let image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
            let link = document.createElement('a');
            link.download = "ratuga_bay.png";
            link.href = image;
            link.click();
        });
    });


});
