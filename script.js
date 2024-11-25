var carousel;


carousel = ['https://i.pinimg.com/736x/80/a4/e8/80a4e8283328f278e109a5a16d1bd73e--the-isle-of-skye-illustrated-maps.jpg', 'https://th.bing.com/th/id/OIP._CB4JApqvaWMslBJsP3hRgHaEK?w=328&h=185&c=7&r=0&o=5&pid=1.7', 'https://www.travel-monkey.com/wp-content/uploads/2016/07/quiraing.jpg', 'https://www.travel-monkey.com/wp-content/uploads/2015/09/27167399543_e36c1fc837_k-1024x489.jpg', 'https://th.bing.com/th/id/OIP.YhXI5Ujoh3ogehX2H0DFJQHaEK?w=302&h=180&c=7&r=0&o=5&pid=1.7'];
let element_pictures = document.getElementById('pictures');
element_pictures.setAttribute("src", carousel[0]);


document.getElementById('previous').addEventListener('click', (event) => {
  let element_pictures2 = document.getElementById('pictures');
  carousel.unshift(carousel.pop());
  element_pictures2.setAttribute("src", carousel.slice(-1)[0]);

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_pictures3 = document.getElementById('pictures');
  carousel.push(carousel.shift());
  element_pictures3.setAttribute("src", carousel[0]);

});