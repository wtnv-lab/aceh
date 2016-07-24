(function() {
  "use strict";

  // polyfill
  if (!Array.prototype.find) {
    Array.prototype.find = function(predicate) { // eslint-disable-line no-extend-native
      if (this === null) {
        throw new TypeError("Array.prototype.find called on null or undefined");
      }
      if (typeof predicate !== "function") {
        throw new TypeError("predicate must be a function");
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
      return undefined;
    };
  }

  var historyButton = document.getElementById("button-history");
  var scienceButton = document.getElementById("button-science");
  var interviewButton = document.getElementById("button-interview");
  var scienceButtons = document.getElementById("buttons-science");
  var scienceAbsButton = document.getElementById("button-science-abs");
  var scienceBaButton = document.getElementById("button-science-ba");
  var scienceAbButton = document.getElementById("button-science-ab");
  var scienceAbsButtons = document.getElementById("buttons-science-abs");
  var scienceBaButtons = document.getElementById("buttons-science-ba");
  var scienceAbs1Button = document.getElementById("button-science-abs-1");
  var scienceAbs2Button = document.getElementById("button-science-abs-2");
  var scienceAbs3Button = document.getElementById("button-science-abs-3");
  var scienceAbs4Button = document.getElementById("button-science-abs-4");
  var scienceAbs5Button = document.getElementById("button-science-abs-5");
  var scienceAbs6Button = document.getElementById("button-science-abs-6");
  var scienceBa1Button = document.getElementById("button-science-ba-1");
  var scienceBa2Button = document.getElementById("button-science-ba-2");
  var scienceBa3Button = document.getElementById("button-science-ba-3");
  var scienceBa4Button = document.getElementById("button-science-ba-4");
  var scienceBa5Button = document.getElementById("button-science-ba-5");

  var viewer = new Cesium.Viewer(document.getElementById("root"), {
    animation: false,
    timeline: false
  });

  Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;

  Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(
    87.46695917158543,
    -1.015616454714404,
    107.29172153153348,
    9.308975256096279
  );

  viewer.camera.flyHome(5);

  Cesium.KmlDataSource.load("AcehPaleotsunami12June2015.kml", {
    camera: viewer.scene.camera,
    canvas: viewer.scene.canvas
  }).then(function(kml) { try {

    var history = kml.entities.values.find(function(e) {
      return e.name === "Hsitory";
    });

    var science = kml.entities.values.find(function(e) {
      return e.name === "Science";
    });

    var interview = kml.entities.values.find(function(e) {
      return e.name === "Interview";
    });

    var scienceAbs = kml.entities.values.find(function(e) {
      return e.name === "Aceh Barat-Samatiga";
    });

    var scienceBa = kml.entities.values.find(function(e) {
      return e.name === "Banda Aceh";
    });

    var scienceAb = kml.entities.values.find(function(e) {
      return e.name === "Aceh Besar";
    });

    var scienceAbs1 = kml.entities.values.find(function(e) {
      return e.name === "Tsunami 2004";
    });

    var scienceAbs2 = kml.entities.values.find(function(e) {
      return e.name === "Samatiga Region";
    });

    var scienceAbs3 = kml.entities.values.find(function(e) {
      return e.name === "Samatiga 2002";
    });

    var scienceAbs3l = kml.entities.values.find(function(e) {
      return e.name === "coastal line(2002)";
    });

    var scienceAbs4 = kml.entities.values.find(function(e) {
      return e.name === "Samatiga 2005";
    });

    var scienceAbs4l = kml.entities.values.find(function(e) {
      return e.name === "coastal line(2005)";
    });

    var scienceAbs5 = kml.entities.values.find(function(e) {
      return e.name === "Samatiga 2011";
    });

    var scienceAbs5l = kml.entities.values.find(function(e) {
      return e.name === "coastal line(2011)";
    });

    var scienceAbs6 = kml.entities.values.find(function(e) {
      return e.name === "Samatiga 2013";
    });

    var scienceAbs6l = kml.entities.values.find(function(e) {
      return e.name === "coastal line(2013)";
    });

    var scienceBa1 = kml.entities.values.find(function(e) {
      return e.name === "Banda Aceh-Epicentrum earthquake";
    });

    var scienceBa2 = kml.entities.values.find(function(e) {
      return e.name === "Banda Aceh-Clocckwise 1";
    });

    var scienceBa3 = kml.entities.values.find(function(e) {
      return e.name === "Banda Aceh-Clocckwise 2";
    });

    var scienceBa4 = kml.entities.values.find(function(e) {
      return e.name === "Banda Aceh-Clocckwise 3";
    });

    var scienceBa5 = kml.entities.values.find(function(e) {
      return e.name === "Seulawah Terrace 2";
    });

    scienceAbs.show = true;
    scienceBa.show = false;
    scienceAb.show = false;
    scienceAbs1.show = true;
    scienceAbs2.show = false;
    scienceAbs3.show = false;
    scienceAbs3l.show = false;
    scienceAbs4.show = false;
    scienceAbs4l.show = false;
    scienceAbs5.show = false;
    scienceAbs5l.show = false;
    scienceAbs6.show = false;
    scienceAbs6l.show = false;
    scienceBa1.show = true;
    scienceBa2.show = false;
    scienceBa3.show = false;
    scienceBa4.show = false;
    scienceBa5.show = false;

    var hash = location.hash.slice(1);
    if (hash === "science") {
      history.show = false;
      science.show = true;
      interview.show = false;
      scienceButton.classList.add("active");
      scienceButtons.classList.add("shown");
      scienceAbsButtons.classList.add("shown");
      scienceAbsButton.classList.add("active");
      scienceAbs1Button.classList.add("active");
    } else if (hash === "interview") {
      history.show = false;
      science.show = false;
      interview.show = true;
      interviewButton.classList.add("active");
    } else {
      history.show = true;
      science.show = false;
      interview.show = false;
      historyButton.classList.add("active");
    }

    scienceAbsButton.classList.add("active");
    scienceAbs1Button.classList.add("active");
    scienceBa1Button.classList.add("active");

    historyButton.addEventListener("click", function(e) {
      e.preventDefault();
      historyButton.classList.add("active");
      scienceButton.classList.remove("active");
      interviewButton.classList.remove("active");
      scienceButtons.classList.remove("shown");
      scienceAbsButtons.classList.remove("shown");
      scienceBaButtons.classList.remove("shown");
      history.show = true;
      science.show = false;
      interview.show = false;
    });

    scienceButton.addEventListener("click", function(e) {
      e.preventDefault();
      historyButton.classList.remove("active");
      scienceButton.classList.add("active");
      interviewButton.classList.remove("active");
      scienceButtons.classList.add("shown");
      if (scienceAbs.show) {
        scienceAbsButton.classList.add("active");
        scienceBaButton.classList.remove("active");
        scienceAbButton.classList.remove("active");
        scienceAbsButtons.classList.add("shown");
        scienceBaButtons.classList.remove("shown");
      } else if (scienceBa.show) {
        scienceAbsButton.classList.remove("active");
        scienceBaButton.classList.add("active");
        scienceAbButton.classList.remove("active");
        scienceAbsButtons.classList.remove("shown");
        scienceBaButtons.classList.add("shown");
      } else {
        scienceAbsButton.classList.remove("active");
        scienceBaButton.classList.remove("active");
        scienceAbButton.classList.add("active");
      }
      history.show = false;
      science.show = true;
      interview.show = false;
    });

    interviewButton.addEventListener("click", function(e) {
      e.preventDefault();
      historyButton.classList.remove("active");
      scienceButton.classList.remove("active");
      interviewButton.classList.add("active");
      scienceButtons.classList.remove("shown");
      scienceAbsButtons.classList.remove("shown");
      scienceBaButtons.classList.remove("shown");
      history.show = false;
      science.show = false;
      interview.show = true;
    });

    scienceAbsButton.addEventListener("click", function(e) {
      e.preventDefault();
      scienceAbsButton.classList.add("active");
      scienceBaButton.classList.remove("active");
      scienceAbButton.classList.remove("active");
      scienceAbsButtons.classList.add("shown");
      scienceBaButtons.classList.remove("shown");
      scienceAbs.show = true;
      scienceBa.show = false;
      scienceAb.show = false;
    });

    scienceBaButton.addEventListener("click", function(e) {
      e.preventDefault();
      scienceAbsButton.classList.remove("active");
      scienceBaButton.classList.add("active");
      scienceAbButton.classList.remove("active");
      scienceAbsButtons.classList.remove("shown");
      scienceBaButtons.classList.add("shown");
      scienceAbs.show = false;
      scienceBa.show = true;
      scienceAb.show = false;
    });

    scienceAbButton.addEventListener("click", function(e) {
      e.preventDefault();
      scienceAbsButton.classList.remove("active");
      scienceBaButton.classList.remove("active");
      scienceAbButton.classList.add("active");
      scienceAbsButtons.classList.remove("shown");
      scienceBaButtons.classList.remove("shown");
      scienceAbs.show = false;
      scienceBa.show = false;
      scienceAb.show = true;
    });

    scienceAbs1Button.addEventListener("click", function(e) {
      e.preventDefault();
      scienceAbs1Button.classList.add("active");
      scienceAbs2Button.classList.remove("active");
      scienceAbs3Button.classList.remove("active");
      scienceAbs4Button.classList.remove("active");
      scienceAbs5Button.classList.remove("active");
      scienceAbs6Button.classList.remove("active");
      scienceAbs1.show = true;
      scienceAbs2.show = false;
      scienceAbs3.show = false;
      scienceAbs3l.show = false;
      scienceAbs4.show = false;
      scienceAbs4l.show = false;
      scienceAbs5.show = false;
      scienceAbs5l.show = false;
      scienceAbs6.show = false;
      scienceAbs6l.show = false;
    });

    scienceAbs2Button.addEventListener("click", function(e) {
      e.preventDefault();
      scienceAbs1Button.classList.remove("active");
      scienceAbs2Button.classList.add("active");
      scienceAbs3Button.classList.remove("active");
      scienceAbs4Button.classList.remove("active");
      scienceAbs5Button.classList.remove("active");
      scienceAbs6Button.classList.remove("active");
      scienceAbs1.show = false;
      scienceAbs2.show = true;
      scienceAbs3.show = false;
      scienceAbs3l.show = false;
      scienceAbs4.show = false;
      scienceAbs4l.show = false;
      scienceAbs5.show = false;
      scienceAbs5l.show = false;
      scienceAbs6.show = false;
      scienceAbs6l.show = false;
    });

    scienceAbs3Button.addEventListener("click", function(e) {
      e.preventDefault();
      scienceAbs1Button.classList.remove("active");
      scienceAbs2Button.classList.remove("active");
      scienceAbs3Button.classList.add("active");
      scienceAbs4Button.classList.remove("active");
      scienceAbs5Button.classList.remove("active");
      scienceAbs6Button.classList.remove("active");
      scienceAbs1.show = false;
      scienceAbs2.show = false;
      scienceAbs3.show = true;
      scienceAbs3l.show = true;
      scienceAbs4.show = false;
      scienceAbs4l.show = false;
      scienceAbs5.show = false;
      scienceAbs5l.show = false;
      scienceAbs6.show = false;
      scienceAbs6l.show = false;
    });

    scienceAbs4Button.addEventListener("click", function(e) {
      e.preventDefault();
      scienceAbs1Button.classList.remove("active");
      scienceAbs2Button.classList.remove("active");
      scienceAbs3Button.classList.remove("active");
      scienceAbs4Button.classList.add("active");
      scienceAbs5Button.classList.remove("active");
      scienceAbs6Button.classList.remove("active");
      scienceAbs1.show = false;
      scienceAbs2.show = false;
      scienceAbs3.show = false;
      scienceAbs3l.show = false;
      scienceAbs4.show = true;
      scienceAbs4l.show = true;
      scienceAbs5.show = false;
      scienceAbs5l.show = false;
      scienceAbs6.show = false;
      scienceAbs6l.show = false;
    });

    scienceAbs5Button.addEventListener("click", function(e) {
      e.preventDefault();
      scienceAbs1Button.classList.remove("active");
      scienceAbs2Button.classList.remove("active");
      scienceAbs3Button.classList.remove("active");
      scienceAbs4Button.classList.remove("active");
      scienceAbs5Button.classList.add("active");
      scienceAbs6Button.classList.remove("active");
      scienceAbs1.show = false;
      scienceAbs2.show = false;
      scienceAbs3.show = false;
      scienceAbs3l.show = false;
      scienceAbs4.show = false;
      scienceAbs4l.show = false;
      scienceAbs5.show = true;
      scienceAbs5l.show = true;
      scienceAbs6.show = false;
      scienceAbs6l.show = false;
    });

    scienceAbs6Button.addEventListener("click", function(e) {
      e.preventDefault();
      scienceAbs1Button.classList.remove("active");
      scienceAbs2Button.classList.remove("active");
      scienceAbs3Button.classList.remove("active");
      scienceAbs4Button.classList.remove("active");
      scienceAbs5Button.classList.remove("active");
      scienceAbs6Button.classList.add("active");
      scienceAbs1.show = false;
      scienceAbs2.show = false;
      scienceAbs3.show = false;
      scienceAbs3l.show = false;
      scienceAbs4.show = false;
      scienceAbs4l.show = false;
      scienceAbs5.show = false;
      scienceAbs5l.show = false;
      scienceAbs6.show = true;
      scienceAbs6l.show = true;
    });

    scienceBa1Button.addEventListener("click", function(e) {
      e.preventDefault();
      scienceBa1Button.classList.add("active");
      scienceBa2Button.classList.remove("active");
      scienceBa3Button.classList.remove("active");
      scienceBa4Button.classList.remove("active");
      scienceBa5Button.classList.remove("active");
      scienceBa1.show = true;
      scienceBa2.show = false;
      scienceBa3.show = false;
      scienceBa4.show = false;
      scienceBa5.show = false;
    });

    scienceBa2Button.addEventListener("click", function(e) {
      e.preventDefault();
      scienceBa1Button.classList.remove("active");
      scienceBa2Button.classList.add("active");
      scienceBa3Button.classList.remove("active");
      scienceBa4Button.classList.remove("active");
      scienceBa5Button.classList.remove("active");
      scienceBa1.show = false;
      scienceBa2.show = true;
      scienceBa3.show = false;
      scienceBa4.show = false;
      scienceBa5.show = false;
    });

    scienceBa3Button.addEventListener("click", function(e) {
      e.preventDefault();
      scienceBa1Button.classList.remove("active");
      scienceBa2Button.classList.remove("active");
      scienceBa3Button.classList.add("active");
      scienceBa4Button.classList.remove("active");
      scienceBa5Button.classList.remove("active");
      scienceBa1.show = false;
      scienceBa2.show = false;
      scienceBa3.show = true;
      scienceBa4.show = false;
      scienceBa5.show = false;
    });

    scienceBa4Button.addEventListener("click", function(e) {
      e.preventDefault();
      scienceBa1Button.classList.remove("active");
      scienceBa2Button.classList.remove("active");
      scienceBa3Button.classList.remove("active");
      scienceBa4Button.classList.add("active");
      scienceBa5Button.classList.remove("active");
      scienceBa1.show = false;
      scienceBa2.show = false;
      scienceBa3.show = false;
      scienceBa4.show = true;
      scienceBa5.show = false;
    });

    scienceBa5Button.addEventListener("click", function(e) {
      e.preventDefault();
      scienceBa1Button.classList.remove("active");
      scienceBa2Button.classList.remove("active");
      scienceBa3Button.classList.remove("active");
      scienceBa4Button.classList.remove("active");
      scienceBa5Button.classList.add("active");
      scienceBa1.show = false;
      scienceBa2.show = false;
      scienceBa3.show = false;
      scienceBa4.show = false;
      scienceBa5.show = true;
    });

    viewer.dataSources.add(kml);

    viewer.clock.multiplier = 0;

  } catch (err) { console.error(err); } });

}());
