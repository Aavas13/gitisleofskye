var carousel;


carousel = ['https://pixelz.cc/images/fairy-glen-isle-of-skye-scotland-uhd-4k-wallpaper/', 'https://www.travel-monkey.com/wp-content/uploads/2015/09/SKYEMAP2015.jpg', 'https://www.travel-monkey.com/wp-content/uploads/2016/07/quiraing.jpg', 'https://www.travel-monkey.com/wp-content/uploads/2015/09/27167399543_e36c1fc837_k-1024x489.jpg'];
let element_pictures = document.getElementById('pictures');
element_pictures.setAttribute("src", carousel[0]);

/*This code adds an event listener to the element with the id "previous". When the element is clicked, it performs the following actions:
1. It selects the element with the id "pictures" and assigns it to the variable "element_pictures2".
2. It modifies the "carousel" array by moving the last element to the front.
3. It sets the "src" attribute of "element_pictures2" to the last element of the "carousel" array.
*/
document.getElementById('previous').addEventListener('click', (event) => {
  let element_pictures2 = document.getElementById('pictures');
  carousel.unshift(carousel.pop());
  element_pictures2.setAttribute("src", carousel.slice(-1)[0]);

});
/*This code adds an event listener to the element with the id "next" that listens for a click event. When the event occurs, it updates the source attribute of an element with the id "pictures" to the first item in the "carousel" array after rearranging the array.
*/
document.getElementById('next').addEventListener('click', (event) => {
  let element_pictures3 = document.getElementById('pictures');
  carousel.push(carousel.pop());
  element_pictures3.setAttribute("src", carousel[0]);

});