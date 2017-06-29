(function() {
  "use strict";

  var data = {
    children: [
      {
        name: "history",
        children: [
          {
            name: "History",
            entities: ["Hsitory"]
          },
          {
            name: "List of Manuscripts related earthquake and tsunami Aceh",
            content: '\
              <table>\
                <thead>\
                  <tr>\
                    <th rowspan="2" scope="col">Sources</th>\
                    <th colspan="3" scope="colgroup">Aceh Paleotsunami historical records</th>\
                  </tr>\
                  <tr>\
                    <th scope="col">Documents</th>\
                    <th scope="col">Time</th>\
                    <th scope="col">Contents</th>\
                  </tr>\
                </thead>\
                <tbody>\
                  <tr>\
                    <td>Hermansyah: Aceh National Museum</td>\
                    <td>Earthquake & Eclipse manuscripts 07_00523</td>\
                    <td>Wednesday, 31th January 1906 M (5th Zulhijah 1324 H)<br />Wa-Shahibul Kitab Ibrahim Lambunot Mukim Lam Krak 1324 H (1906 M)</td>\
                    <td>“Rajab; If earthquake moves in dhuha, it’s sign that seawater was very hard and very much rainy.”</td>\
                  </tr>\
                  <tr>\
                    <td>Hermansyah: Ali Hasjmy Foundation</td>\
                    <td>Earthquake manuscripts</td>\
                    <td></td>\
                    <td>“Rajab: Earthquake in dhuha, it’s a sign that wind, sea water and waves are very hard in that year”</td>\
                  </tr>\
                  <tr>\
                    <td>Book of Sultan, Pahlawan, Hakim</td>\
                    <td>Van de Tuuk manuscripts</td>\
                    <td>Tuesday, 12th February 1861 (28th Jumadil akhir 1253 H)</td>\
                    <td>Tectonic earthquake in Singkil 1852 destroyed Dutch infrastructures</td>\
                  </tr>\
                  <tr>\
                    <td>Book of Sultan, Pahlawan, Hakim</td>\
                    <td>Dutch Document</td>\
                    <td>Friday, 29th September 1837 (1st Sya\'ban 1277 H)</td>\
                    <td>Earthquake 7.3 SR in Sultan Muhammad Syah period (1824-1838)</td>\
                  </tr>\
                  <tr>\
                    <td>Hermansyah: Aceh National Museum</td>\
                    <td>Earthquake manuscript<br />07-01676</td>\
                    <td>Monday, 24th November 1833 M (12th Rajab 1249H), at 10.20 Indonesian Time</td>\
                    <td>“Rajab; Earthquake in dhuha time, it’s a sign that sea water will be hard tides”</td>\
                  </tr>\
                  <tr>\
                    <td>Hermansyah: Aceh National Museum</td>\
                    <td>Earthquake manuscripts 07_00841</td>\
                    <td>Monday 24 November 1833 M (12th Rajab 1249H), at 10.20 Indonesian Times</td>\
                    <td>“Rajab; Earthquake in dhuha time its a sign that the sea will be very hard”</td>\
                  </tr>\
                  <tr>\
                    <td>Dayah Tanoh Abee, Aceh Besar</td>\
                    <td>Earthquake manuscripts</td>\
                    <td>Thursday, 3th November 1832M (9th Jumadil akhir, 1248 H)</td>\
                    <td>"wa kanat al-zalzalah al-shadidah al-tsaniyah fajr yaum al-khamis tis\'at ayyam min jumada al-akhir sanah1248 min hijriah al-nabawiyah…” (2nd Earthquake has occurred in Thursday, l 9th Jumadil Akhir)”</td>\
                  </tr>\
                  <tr>\
                    <td>Hermansyah: Surau Lubuk Ipuh Padang</td>\
                    <td>Teks, Colofon</td>\
                    <td>Friday, 10th February 1797 M (12th Sya\'ban, 1211 H)</td>\
                    <td>“Rajab: Earthquake in dhuha time, it’s a sign that the sea will be very hard”</td>\
                  </tr>\
                  <tr>\
                    <td>Wang Ta Yuan in Mc Kinnon (1988) in Meilianda (2009)</td>\
                    <td>Lambri Archeological Manuscripts</td>\
                    <td>1349 AD (around 600-700 years ago)</td>\
                    <td>"This place is the most important trade center in Nan-wu-li (Aceh), big mountains like waves dash against it.”</td>\
                  </tr>\
                  <tr>\
                    <td>Akhbar al-Sin wa’l Hind refer Rammi in Mc Kinnon (1988) in Meilianda (2009)</td>\
                    <td>Lambri Archeological Manuscripts</td>\
                    <td>1000 BP (around 9 Century)</td>\
                    <td>"The island is washed by two seas . Harkand & that of Salahit" (Bay of Bengal and the Malacca Strait)</td>\
                  </tr>\
                  <tr>\
                    <td>Leiden University</td>\
                    <td>Doc. No. Or. 12.234 Supplement Catalogues by van Ronke</td>\
                    <td></td>\
                    <td>On chapter mention about earthquake treatise.</td>\
                  </tr>\
                </tbody>\
              </table>\
            '.trim()
          },
          {
            name: "Prose of Earthquake in Aceh, Sjeh Rih Krueng Raya, 1964",
            content: '\
              <a href="images/pdf/Geumpa_di_Acheh-ACEH_03142.pdf" class="pdf-button" target="_blank">View PDF</a>\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_01.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_02.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_03.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_04.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_05.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_06.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_07.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_08.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_09.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_10.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_11.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_12.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_13.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_14.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_15.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_16.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_17.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_18.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_19.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_20.jpg" class="pdf" />\
              <img src="images/pdf/Geumpa_di_Acheh-ACEH_03142_21.jpg" class="pdf" />\
            '.trim()
          }
        ]
      },
      {
        name: "science",
        entities: ["Science"],
        children: [
          {
            name: "Aceh Barat-Samatiga",
            entities: ["Aceh Barat-Samatiga"],
            children: [
              {
                name: "Tsunami 2004",
                title: "Monecke et al 2013",
                entities: ["Tsunami 2004"]
              },
              {
                name: "Samatiga Region",
                title: "1000 y.o tsunami deposit, Monecke et al 2008",
                entities: ["Samatiga Region"]
              },
              {
                name: "Samatiga 2002",
                title: "Monecke et al 2008",
                entities: ["Samatiga 2002", "coastal line(2002)"]
              },
              {
                name: "Samatiga 2005",
                title: "Monecke et al 2008",
                entities: ["Samatiga 2005", "coastal line(2005)"]
              },
              {
                name: "Samatiga 2011",
                title: "Monecke et al 2013",
                entities: ["Samatiga 2011", "coastal line(2011)"]
              },
              {
                name: "Samatiga 2013",
                title: "Monecke et al 2013",
                entities: ["Samatiga 2013", "coastal line(2013)"]
              }
            ]
          },
          {
            name: "Banda Aceh",
            entities: ["Banda Aceh"],
            children: [
              {
                name: "Banda Aceh-Epicentrum earthquake",
                title: "Meilianda 2009",
                entities: ["Banda Aceh-Epicentrum earthquake"]
              },
              {
                name: "Banda Aceh-Clocckwise 1",
                title: "Meilianda 2009",
                entities: ["Banda Aceh-Clocckwise 1"]
              },
              {
                name: "Banda Aceh-Clocckwise 2",
                title: "Meilianda 2009",
                entities: ["Banda Aceh-Clocckwise 2"]
              },
              {
                name: "Banda Aceh-Clocckwise 3",
                title: "Meilianda 2009",
                entities: ["Banda Aceh-Clocckwise 3"]
              },
              {
                name: "Seulawah Terrace 2",
                title: "Banda Aceh is Mount Seulawah Terrace from the ocean, Meilianda 2009",
                entities: ["Seulawah Terrace 2"]
              }
            ]
          },
          {
            name: "Aceh Besar",
            title: "Geomorphological coastal changing, Meilianda 2009",
            entities: ["Aceh Besar"]
          }
        ]
      },
      {
        name: "interview",
        entities: ["Interview"]
      }
    ]
  };

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

  var panel = document.getElementById("panel");
  var title = document.getElementById("title");
  var content = document.getElementById("content");
  var active = [];

  data.element = document.getElementById("buttons1");

  function path(array, key, indexes) {
    if (
      !Array.isArray(indexes) ||
      indexes.length === 0 ||
      !Array.isArray(key === null ? array : array[key])
    ) {
      return array;
    }
    return path((key === null ? array : array[key])[indexes[0]], key, indexes.slice(1));
  }

  function walkMap(array, key, cb) {
    return array.map(function(e) {
      var ne = cb(e);
      if (key !== null && Array.isArray(e[key])) {
        ne[key] = walkMap(e[key], key, cb);
      }
      return ne;
    });
  }

  function renderButtons(datt, dat, indexList) {
    dat = dat || datt;
    if (!Array.isArray(dat.children)) return;
    indexList = indexList || [];
    dat.wrapper = document.createElement("div");
    dat.wrapper.classList.add(indexList.length > 0 ? "buttons-sub" : "buttons");
    panel.appendChild(dat.wrapper);
    dat.children.forEach(function(d, i) {
      var indexes = indexList.concat([i]);
      var el = document.createElement("a");
      el.setAttribute("href", "#");
      if (indexList.length > 0) {
        el.textContent = d.name;
        el.classList.add("button-sub");
      } else {
        el.classList.add("button");
        el.classList.add("button-" + d.name);
      }
      el.addEventListener("click", function(e) {
        e.preventDefault();
        showData(datt, indexes);
      });
      dat.wrapper.appendChild(el);
      d.element = el;
      renderButtons(datt, d, indexes);
    });
  }

  function showData(dat, indexList) {
    active.forEach(function(a, i) {
      var dd = path(dat, "children", active.slice(0, i + 1));
      if (dd.wrapper) dd.wrapper.classList.remove("active");
      if (dd.element) dd.element.classList.remove("active");
      if (dd.entitiesObjects) dd.entitiesObjects.forEach(function(e) {
        e.show = false;
      });
      if (active.length - 1 === i) {
        if (dd.title) {
          title.textContent = "";
          title.classList.remove("active");
        }
        if (dd.content) {
          content.innerHTML = "";
          content.classList.remove("active");
        }
      }
    });

    var newActive = indexList.slice();
    var cd = path(dat, "children", indexList);
    while (true) {
      if (!cd || !cd.children || !cd.children[0]) {
        break;
      }
      cd = cd.children[0];
      newActive.push(0);
    }

    newActive.forEach(function(a, i) {
      var dd = path(dat, "children", newActive.slice(0, i + 1));
      if (dd.wrapper) dd.wrapper.classList.add("active");
      if (dd.element) dd.element.classList.add("active");
      if (dd.entitiesObjects) dd.entitiesObjects.forEach(function(e) {
        e.show = true;
      });
      if (newActive.length - 1 === i) {
        if (dd.title) {
          title.textContent = dd.title;
          title.classList.add("active");
        }
        if (dd.content) {
          content.innerHTML = dd.content;
          content.classList.add("active");
        }
      }
    });

    active = newActive;
  }

  renderButtons(data);

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
    data.children = walkMap(data.children, "children", function(d) {
      if (!d.entities) return d;
      d.entitiesObjects = d.entities.map(function(e) {
        return kml.entities.values.find(function(e2) {
          return e2.name === e;
        });
      });
      d.entitiesObjects.forEach(function(e) {
        e.show = false;
      });
      return d;
    });

    viewer.dataSources.add(kml);
    viewer.clock.multiplier = 0;

    showData(data, [0]);
  } catch (err) { console.error(err); } });


}());
