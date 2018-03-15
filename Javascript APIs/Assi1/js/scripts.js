// // var max_time = 7;
// // while (max_time < 10){
// // 	console.log("keep working. It's still only" + max_time);
// // 	max_time++;
// // }

// var max_time = 10;
// while (--max_time){
// 	console.log("keep working. It's still only" + max_time);
// }

// var max_time = 7;
// do {
// 	console.log("keep working. It's still only" + max_time);
// 	max_time++;
// } while (max_time < 10)

// var num = 5;
// var final_num = 1;
// for (var i = 0; i < num; i++);
// 	final_num = final_num + i;
// console.log(final_num, i);

// console.log('break!')

// while(Math.floor(Math.random() * 2)){
// 	console.log()
// }

// var t_len = 1;
// while (t_len < 55) {
// 	console.log('#'.repeat(t_len));
// 	t_len++;
// }



console.log('%c This is red  ', 'background: red; color: white;');
console.log('%c This is orange                                                                                                                                    ', 'background: orange; color: white; display: block;');
console.log('%c This is yellow                                                                                                                                    ', 'background: yellow; color: white; display: block;');
console.log('%c This is green                                                                                                                                    ', 'background: green; color: white; display: block;');
console.log('%c This is blue                                                                                                                                    ', 'background: blue; color: white; display: block;');
console.log('%c This is navy                                                                                                                                    ', 'background: navy; color: white; display: block;');
console.log('%c This is purple                                                                                                                                    ', 'background: purple; color: white; display: block;');
console.log('%c This is a rainbow                                                                                                                                    ', 'background: black; color: white; display: block;');












// // example
// var back_char = "-", //the background
//  star_char = "*", // the stars element
//  back_width = 120, // the total width
//  back_height = 20, // the total height
//  stars_width = 40, // width of the stars area
//  stars_height = 10, // height of the stars area
//  back_drop = [], // the array holding the background
//  stars = [], // the array holding the stars
//  flag; // the final array holder


// // build the backdrop
// for (var i=0; i< back_height;i++) {
//  back_drop.push(back_char.repeat(back_width));
// }

// // build the stars
// for (var i=0; i< stars_height;i++) {
//  stars.push(star_char.repeat(stars_width));
// }

// // insert stars into the backdrop
// for (var i=0; i< back_drop.length;i++) {
//  if (stars[i] !== undefined) {
//  // use substr to join the **s with the remaining -- in the current array index
//  back_drop[i] = stars[i] + back_drop[i].substr(stars[i].length);
//  }
// }

// // use br for browser html rendering, else use \n for console output
// flag = back_drop.join('<br>');
// console.log(flag); // preview

// // render to browser html
// var p = document.createElement('p');
// p.style.fontFamily = "Courier";
// p.innerHTML = flag; //ES6 only
// document.body.append(p);
