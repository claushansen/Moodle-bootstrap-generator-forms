var makeBtn = document.querySelector("button[type=submit]");
makeBtn.addEventListener("click", function(event){
    event.preventDefault();
    var templateID = document.querySelector('#templateID').value;
    var templateHeader = document.querySelector('#templateHeader').value;
    var templateDescription = document.querySelector('#templateDescription').value;
    var templateButtonText = document.querySelector('#templateButtonText').value;
    var templateBookmarkCode = document.querySelector('#templateBookmarkCode').value;
    var templateImage = document.querySelector('#templateImage').value;
    var templateVideo = document.querySelector('#templateVideo').value;
    var videoCheckbox = document.querySelector("#showVideo");
    var targetArea = document.querySelector('#coderesult');
    var datoobj = new Date();
    var day = datoobj.getDate();
    var month = datoobj.getMonth() + 1;
    var year = datoobj.getFullYear();
    var videoButton = videoCheckbox.checked ? `<button class="btn btn-info ml-3" data-toggle="collapse" data-target="#${templateID}-video" aria-expanded="false" aria-controls="${templateID}-video" data-aria-hidden-tab-index="" tabindex="-1"><i class="fa fa-youtube"></i> Se video</button>` : '';
    
    var templateText = `<div class="card mb-3 bg-white border rounded p-3">
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
                <img src="${templateImage}">
            </div>
        </div>
    </div>
</div>
`;
   
    targetArea.value = templateText;
    $('body').append(templateText);
});

var videoCheckbox = document.querySelector("#showVideo");
var videoWrap = document.querySelector(".videowrap");

videoCheckbox.addEventListener('change', function() {
    videoWrap.classList.toggle('collapse');
  if (this.checked) {
      
    console.log("Checkbox is checked..");
    //videoWrap.collapse('toogle');
  } else {
    console.log("Checkbox is not checked..");
    //videoWrap.collapse('toogle');
  }
});
