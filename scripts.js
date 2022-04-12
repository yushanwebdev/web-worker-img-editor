const $input = document.getElementById("input");
const $preview = document.getElementById("preview");
const previewCtx = $preview.getContext("2d");

const fileReader = new FileReader();
const image = new Image();

function applyFilter() {
  const imageData = previewCtx.getImageData(0, 0, image.width, image.height);

  for (x = 0; x < image.width; x++) {
    for (y = 0; y < image.height; y++) {
      let index = (image.width * y + x) * 4;
      imageData.data[index] *= 1.2;
    }
  }

  previewCtx.putImageData(imageData, 0, 0);
}

image.addEventListener("load", (e) => {
  $preview.width = image.width;
  $preview.height = image.height;
  previewCtx.drawImage(image, 0, 0);
  applyFilter();
});

fileReader.addEventListener("load", (e) => {
  const base64 = e.target.result;
  image.src = base64;
});

$input.addEventListener("change", (e) => {
  const file = e.target.files[0];
  fileReader.readAsDataURL(file);
});
