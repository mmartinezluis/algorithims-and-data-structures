/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    image[i].reverse();
    image[i] = image[i].map((el) => (el === 0 ? 1 : 0));
  }
  return image;
};

var flipAndInvertImage = function (image) {
  for (let row = 0; row < image.length; row++) {
    let l = 0;
    let r = row.length;
    while (l < r) {
      if (image[row][l] === image[row][r]) {
        [image[row][l]] = [image[row[r]]];
      }
    }
  }
};
