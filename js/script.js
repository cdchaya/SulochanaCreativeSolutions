$(window).scroll(function () {
    var wscroll = $(this).scrollTop();
    if (wscroll > 50) {
        $(".navbar").addClass("shrink-nav");
    } else {
        $(".navbar").removeClass("shrink-nav");
    }
});


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function addModal(parent, videoUrl) {

    const modalHtml = '<div class="modal fade" id="video" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">\n' +
        '            <div class="modal-dialog">\n' +
        '                <div class="modal-content">\n' +
        '\n' +
        '                    <div class="modal-body">\n' +
        '                        <div class="embed-responsive embed-responsive-4by3">\n' +
        '\n' +
        '                            <iframe id="playerframe" class="embed-responsive-item"\n' +
        '                                    src=' + videoUrl + '\n' +
        '                                    title="YouTube video player" frameborder="0"\n' +
        '                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n' +
        '                                    allowfullscreen></iframe>\n' +
        '\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>';

    parent.append(modalHtml);

    $('#video').on('hidden.bs.modal', function (event) {
        removePlayer($('#video-modal'));
    });

}

function addVideoThumbnails(parent, src, index) {
    const html = '<div class=" col-md-4 col-sm-12">\n' +
        '                <img src=' + src + ' class="img-fluid">\n' +
        '                <img src="./img/playbtn2.png" class="play-btn" onClick="openModal(' + index + ')">\n' +
        '            </div>';
    parent.prepend(html);
}


function removePlayer(parent) {
    parent.empty();
}

const thumbnailUrls = [
    './img/video-img/lepakshi.jpg',
    './img/video-img/shubanandini.jpg',
    './img/video-img/hairal.jpg',
    './img/video-img/goamruth.jpg',
    './img/video-img/colors.jpg',
    './img/video-img/shatabdi.jpg',
    './img/video-img/picnhook.jpg',
];


const videos = [
    'https://www.youtube.com/embed/t67vyHpeCDY?autoplay=1',
    'https://www.youtube.com/embed/Q_xs1NGYLu8?autoplay=1',
    'https://www.youtube.com/embed/FJTON4SOa2M?autoplay=1',
    'https://www.youtube.com/embed/RHWfLZGcbyQ?autoplay=1',
    'https://www.youtube.com/embed/LLxqR-9i7MM?autoplay=1',
    'https://www.youtube.com/embed/Oj7X2CJ9RQc?autoplay=1',
    'https://www.youtube.com/embed/q7gjICE7afg?autoplay=1',
];

$(document).ready(function () {
    thumbnailUrls.forEach((url, index) => addVideoThumbnails($('#video-thumbnails'), url, index));
});

function openModal(index) {
    addModal($('#video-modal'), videos[index]);
    $("#video").modal('show');
}

