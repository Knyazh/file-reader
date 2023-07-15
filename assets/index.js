const uploadFileIcon = document.querySelector("span");
const fileInput = document.querySelector("input");
const imagePreview = document.querySelector("img");

uploadFileIcon.addEventListener("click", function() {
  fileInput.click();
});

fileInput.addEventListener("change", function(e) {
  const { files } = e.target;

  const fileReader = new FileReader();

  fileReader.onload = function() {
    const { result } = fileReader;

    imagePreview.src = result;
  };

  if (files && files[0]) {
    fileReader.readAsDataURL(files[0]);
  }
});
