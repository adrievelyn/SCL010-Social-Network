
export const templateUploadPhoto = () => {
  let user = firebase.auth().currentUser;

  const containerUpload = document.createElement("div");
  containerUpload.className = "containerUpload";
  //if (user != null) {
   const contentUpload = `

<div id="filesubmit">
  <input type="file" class="file-select" accept="image/*"/>
  <button class="file-submit">SUBMIT</button>
</div>

<div id="photos">

</div>


  <button class="button2" id="backWall">Volver al Muro</button>

    `;
    containerUpload.innerHTML = contentUpload;
    const buttonFile = containerUpload.querySelector(".file-submit");
    const photos = containerUpload.querySelector("#photos");

    buttonFile.addEventListener("click", () => {
    const file = document.querySelector('.file-select').files[0];

      photos.innerHTML = handleFileUploadChange(file)
    });

//document.querySelector('.file-submit').addEventListener('click', handleFileUploadSubmit);

  return containerUpload;

};



export const handleFileUploadChange = (file) => {
const ref = firebase.storage().ref();
const name = (+new Date()) + '-' + file.name;
const metadata = {
  contentType: file.type
};
const task = ref.child(name).put(file, metadata);
task
  .then(snapshot => snapshot.ref.getDownloadURL())
  .then((url) => {
    console.log(url);

    return `
       <img src=${url} > 
    `;
  })
  .catch(console.error);
}