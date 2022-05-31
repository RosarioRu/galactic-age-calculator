import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GalacticAges from './galactic.js';

$(document).ready(function() {

  //UI logic goes here!
  //obtain user data for the following variables: 
  // name (string)
  // age (integer)
  // nonSmoker (boolean)
  // exerciess (boolean)
  // healthyDiet (boolean)

  $("form#questions").submit(function(event) {
    event.preventDefault();
    const name =$("input#name").val();
    const age = $("input#age").val();
    const nonSmoker =$("#smoker").val();
    const exercise = $("#exercise").val();
    const healthyDiet = $("#diet").val();

    let userGalaxyInfo = new GalacticAges(name, age);
    userGalaxyInfo.calculateAges();
    userGalaxyInfo.determineLifeExpectancy(nonSmoker, exercise, healthyDiet);
    let result = userGalaxyInfo.earthInfo.age;

    // const { userName, healthStatus, (const { age, yearsLeft} = earthInfo) } = userGalaxyInfo;


    // let result = ("Hello " + name + "." + " Your estimated remaining time on Earth is: " + userGalaxyInfo[earthInfo.yearsLeft] + ".");


    $(".before-submit").hide();
    $(".show-results").show();
    $("#result").html(result);


  });
 
});
