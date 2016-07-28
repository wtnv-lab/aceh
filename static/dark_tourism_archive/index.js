(function() {
  "use strict";

  var center = Cesium.Cartesian3.fromDegrees(95.32511778121217, 5.574986361341263, 0);

  var viewer = window.viewer = new Cesium.Viewer(document.getElementById("root"), {
    animation: false,
    timeline: false
  });

  viewer.clock.multiplier = 0;

  Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;

  Cesium.Camera.DEFAULT_VIEW_RECTANGLE = {
    west: 1.663620072556097, south: 0.09724992975330173, east: 1.6638510833430595, north: 0.09736503078814279
  };

  viewer.camera.flyTo({
    destination: {
      west: 1.6636613348907727,
      south: 0.09705202403830404,
      east: 1.663860461386005,
      north: 0.09715488437496429
    },
    orientation: {
      pitch : Cesium.Math.toRadians(-35.0)
    },
    duration: 5
  });

  viewer.entities.add({
    name: "LampuLo Boat on the top of Houses",
    position: center,
    billboard: {
      image: "ship.png"
    }
  });

  Cesium.KmlDataSource.load("kml.aceh.archive.kml", {
    camera: viewer.scene.camera,
    canvas: viewer.scene.canvas
  }).then(function(kml) { try {

    console.log(kml.entities.values);

    kml.entities.values.forEach(function(e) {
      if (!e.billboard) return;
      e.billboard.pixelOffset = new Cesium.Cartesian2(0, 10);
      viewer.entities.add(e);
    });

    kml.entities.values.forEach(function(e) {

      if (!e.position) return;

      viewer.entities.add({
        polyline: {
          positions: [
            center,
            e.position.getValue(0)
          ],
          width: 1,
          material: Cesium.Color.fromAlpha(Cesium.Color.WHITE, 0.5)
        }
      });

    });

  } catch (err) { console.error(err); } });

}());
