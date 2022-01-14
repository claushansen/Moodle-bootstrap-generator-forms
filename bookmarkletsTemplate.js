document.querySelectorAll('#generator input').forEach(function (el) {
    el.addEventListener('input', runTemplate);
});
document.querySelectorAll('#generator textarea:not(#coderesult)').forEach(function (el) {
    el.addEventListener('input', runTemplate);
});
const videoCheckbox = document.querySelector("#showVideo");
const videoWrap = document.querySelector(".videowrap");

videoCheckbox.addEventListener('change', function () {
    videoWrap.classList.toggle('collapse');
});
const copyBtn = document.querySelector('#copyBtn');
copyBtn.addEventListener('click', function (e) {
    e.preventDefault();
    //e.stopPropagation();
    copyHtml();
});

function copyHtml() {
    let textArea = document.querySelector('#coderesult');
    let copyMessage = document.querySelector('#copyMessage');

    textArea.focus();
    textArea.select();
    try {
        var successful = document.execCommand('copy');
        copyMessage.innerHTML = 'Kopieret til din udklipsholder';
    } catch (err) {
        alert('Oops, unable to copy', err);
    }
}
function runTemplate() {
    document.querySelector('#copyMessage').innerHTML = '';
    let templateID = document.querySelector('#templateID').value;
    let templateHeader = document.querySelector('#templateHeader').value;
    let templateDescription = document.querySelector('#templateDescription').value;
    let templateButtonText = document.querySelector('#templateButtonText').value;
    let templateBookmarkCode = document.querySelector('#templateBookmarkCode').value;
    //templateBookmarkCode = templateBookmarkCode.replace(/"/g, "'");
    //b = a.replace(/'/g, '"');
    let templateImage = document.querySelector('#templateImage').value;
    let templateVideo = document.querySelector('#templateVideo').value;
    let videoCheckbox = document.querySelector("#showVideo");
    let targetArea = document.querySelector('#coderesult');
    let datoobj = new Date();
    let day = datoobj.getDate();
    let month = datoobj.getMonth() + 1;
    let year = datoobj.getFullYear();
    let videoButton = videoCheckbox.checked ? `<button class="btn btn-info ml-3" data-toggle="collapse" data-target="#${templateID}-video" aria-expanded="false" aria-controls="${templateID}-video" data-aria-hidden-tab-index="" tabindex="-1"><i class="fa fa-youtube"></i> Se video</button>` : '';

    let templateText = `<div class="card mb-3 bg-white border rounded p-3">
        <div class="row no-gutters">
            <div class="col-md-4">
                <a href="#${templateID}Modal" data-toggle="modal" data-target="#${templateID}Modal">
                    <img src="${templateImage}" alt="${templateHeader}" class="card-image img-fluid atto_image_button_text-bottom">
                </a>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${templateHeader}</h5>
                    <p class="card-text">${templateDescription}</p>
                    <p class="card-text">
                        <a class="bookmarklet btn btn-secondary" data-toggle="tooltip" data-placement="top" title="" href="${templateBookmarkCode}" data-original-title="Træk dette link til din bogmærkelinje i Chrome" data-aria-hidden-tab-index="" tabindex="-1">${templateButtonText}</a> ${videoButton}</p>
                    <div class="collapse" id="${templateID}-video">
                        <h5>Se hvordan du benytter denne bookmarklet</h5>
                        <p><a href="${templateVideo}" data-aria-hidden-tab-index="" tabindex="-1">se video</a></p>
                    </div>
                    <p class="card-text"><small class="text-muted">Sidst opdateret ${day}-${month}-${year}</small></p>
                </div>
            </div>
        </div>
    </div>
    <!-- modal-->
    <div id="${templateID}Modal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-body">
                    <img src="${templateImage}" class="img-fluid">
                </div>
            </div>
        </div>
    </div>
`;

    targetArea.value = templateText;
    document.querySelector('#example').innerHTML = templateText;
};
