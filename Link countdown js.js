<script>
var downloadButton = document.getElementById("download");
var counter = 30;
var newElement = document.createElement("p");
newElement.innerHTML = "Please Wait. You can download the file in 30 seconds.";
var id;
downloadButton.parentNode.replaceChild(newElement, downloadButton);
id = setInterval(function() {
counter--;
if(counter < 0) {
newElement.parentNode.replaceChild(downloadButton, newElement);
clearInterval(id);
} else {
newElement.innerHTML = "You can download the file in " + counter.toString() + " seconds.";
}}, 1000);
</script>