// Write your javascript code here

const buttonEl = document.getElementById("button");
// let inputLink = document.getElementById("videoLink");

function fetchThumbnail() {
  let inputLink = document.getElementById("videoLink").value;
  console.log(inputLink);

  inputLink = inputLink.split("?")[0];
  console.log("inputLink ", inputLink);

  // Check if the link is a YouTube link

  if (!inputLink.includes("playlist")) {
    let videoId;
    if (inputLink.includes("youtube.com")) {
      videoId = inputLink.split("v=")[1];

      // youtu.be/0Q8eftj5OA0?si=__9zf3llSeeXU94m

      const ampersandPosition = videoId.indexOf("&");
      if (ampersandPosition !== -1) {
        videoId = videoId.substring(0, ampersandPosition);
      }
    } else if (inputLink.includes("youtu.be")) {
      videoId = inputLink.split("/").pop();
    }

    const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

    const thumbnailContainer = document.getElementById("thumbnailContainer");
    thumbnailContainer.innerHTML = `<img src="${thumbnailUrl}" alt="Video Thumbnail">`;
  } else {
    alert("playlist url!");
  }
}

buttonEl.addEventListener("click", () => {
  fetchThumbnail();
});
