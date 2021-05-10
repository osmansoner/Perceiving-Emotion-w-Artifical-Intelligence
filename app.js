const video = document.getElementById("video")

Promise.all([
	faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
	faceapi.nets.faceLandmark65Net.loadFromUri("/models"),
	faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
	faceapi.nets.faceExpressionNet.loadFromUri("/models")
]).then(startCamera())
	
function startCamera(){
	navigator.getUserMedia(
	{
		video : {}
	},
	stream => (video.srcObject = stream),
	err => console.log(err)
	);
}