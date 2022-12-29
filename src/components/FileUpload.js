import React, { useState } from "react";
import { storage } from "../firebase/index";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

export default function FileUpload() {
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [progress, setProgress] = useState(0);
  const [category, setCategory] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      // newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
    
  };
  const handleCategory = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
  }
  images.map((image) => {
    const uploadTask = ref(storage, `${category}/${image.name}`);
  })


  const handleUpload = () => {
    const promises = [];
      images.map((image) =>
      {
        const uploadTask = ref(storage, `${category}/${image.name}`);
          // .put(image);
        
        uploadBytes(uploadTask);
      // promises.push(uploadTask);
      // uploadTask.on(
      //   "state_changed",
      //   (snapshot) => {
      //     const progress = Math.round(
      //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      //     );
      //     setProgress(progress);
      //   },
      //   (error) => {
      //     console.log(error);
      //   },
      //   async () => {
      //     await storage
      //       .ref("images")
      //       .child(image.name)
      //       .getDownloadURL()
      //       .then((urls) => {
      //         setUrls((prevState) => [...prevState, urls]);
      //       });
      //   }
      // );
      });
      // window.alert("images uploaded");
    // Promise.all(promises)
    //   .then(() => alert("All images upload"))
    //   .catch((err) => console.log(err));
  };
  // console.log("images: ", images);
  // console.log("urls", urls);
  return (
    <div>
    
        {/* <progress value={progress} max="100" /> */}
      <input type="text" onChange={handleCategory} placeholder="SR ID SHOP NAME"/>
      <br />
      <br />
      <input type="file" multiple onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      {urls.map((url, i) => (
        <div key={i}>
          <a href={url} target="_blank">
            {url}
          </a>
        </div>
      ))}
      {urls.map((url, i) => (
        <img
          key={i}
          style={{ width: "500px" }}
          src={url}
          alt="firebase-image"
        />
      ))}
    
    </div>
  );
}
