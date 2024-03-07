var modal = document.getElementsByClassName("modal")[0];

var images = document.getElementsByClassName("thumbnail");
var modalImg = document.getElementById("modal-image");
var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
    images[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.getAttribute('data-image');
        captionText.innerHTML = this.nextElementSibling.innerHTML;
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
}

var buyButtons = document.getElementsByClassName("buy-button");
for (var i = 0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener('click', function() {
        var targetUrl = this.getAttribute('data-target');
        window.location.href = targetUrl;
    });
}
