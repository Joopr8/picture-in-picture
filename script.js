const videoElement = document.getElementById("video");
const startButton = document.getElementById("start-button");
const otherButton = document.getElementById("other-button");

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
    startShare();
  } catch {}
}

startButton.addEventListener("click", startShare);
otherButton.addEventListener("click", selectMediaStream);

async function startShare() {
  startButton.disable = true;
  await videoElement.requestPictureInPicture();
  startButton.disable = false;
}

selectMediaStream();
