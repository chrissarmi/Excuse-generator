/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  console.log("Hello Rigo from the console!");
  let who = ["My Neighbor", "My grandma", "My Dog"];
  let what = ["Ate my food", "Stole my pc", "Woke me up"];
  let when = ["After my class", "Before I left", "During my class"];

  let theExcuse =
    who[myfunction(who.length)] +
    what[myfunction(what.length)] +
    when[myfunction(when.length)];

  document.querySelector("#excuse").innerHTML = theExcuse;
};

function myfunction(length) {
  return Math.floor(Math.random() * (length - 1) + 0);
}
