addEventListener("message", (d) => {
  const imageData = d.data;
  const w = imageData.width;
  const h = imageData.height;
  const data = imageData.data;

  for (x = 0; x < w; x++) {
    for (y = 0; y < h; y++) {
      let index = (w * y + x) * 4;
      data[index] *= 1.2;
    }
  }

  postMessage(imageData, [imageData.data.buffer]);
});
