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

/*  
  
  viewer.camera.flyTo({
    destination: {
      west: 1.6636613348907727,
      south: 0.09705202403830404,
      east: 1.663860461386005,
      north: 0.09715488437496429
    },
    orientation: {
      pitch : Cesium.Math.toRadians(-20.0)
    },
    duration: 5
  });

*/

  var shipLongitude = 95.325058;
  var shipLatitude = 5.577050;
  var shipLatitudeDelta = 0.01;
  var heading = 0;
  var pitch = -30;
  var range = 1500;
	
  var cameraCenter = Cesium.Cartesian3.fromDegrees(shipLongitude, shipLatitude);
  var pitch = Cesium.Math.toRadians(pitch);
	var boundingSphere = new Cesium.BoundingSphere(cameraCenter, range);
	var headingPitchRange = new Cesium.HeadingPitchRange(heading,pitch,range);
	
	viewer.camera.constrainedAxis = Cesium.Cartesian3.UNIT_Z;
	viewer.camera.flyToBoundingSphere(boundingSphere,{
		duration : 3.0,
		offset : headingPitchRange,
		easingFunction: Cesium.EasingFunction.CUBIC_IN_OUT
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
