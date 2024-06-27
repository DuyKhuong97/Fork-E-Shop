import { ChangeEvent, useState } from "react";
import supabase from "../../supabase";
import Image from "next/dist/client/image";

interface UploadImageProps {
  multiple: boolean;
}

function UploadImage(props: UploadImageProps) {
  const [urlImage, setUrlImage] = useState("");
  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    let arrImage: string[] = [];
    const multipleFile = event.target.files;
    if (multipleFile) {
      console.log("Multiple", multipleFile);
      for (let index = 0; index < multipleFile.length; index++) {
        const { data } = await supabase.storage
          .from("images")
          .upload(
            "products/" + multipleFile[index]?.name,
            multipleFile[index] as File,
            { upsert: true }
          );
        if (data) {
          let url = `https://hxgbmypekcwyzeoldmhx.supabase.co/storage/v1/object/public/categories/${data.path}`;
          arrImage.push(url);
          console.log("data", data);
        } else {
          // Error popup here
          // console.log(error.message);
        }
      }
    }
    console.log("arrImage", arrImage);
    setUrlImage(arrImage[0]);
  };
  return (
    <div className="w-7/12">
      {urlImage.length > 0 ? (
        <Image src={urlImage} width={200} height={200} />
      ) : (
        ""
      )}
      <input
        className="w-56"
        type="file"
        multiple={props.multiple}
        accept="image/*"
        id="file_input"
        onChange={(e) => {
          handleUpload(e);
        }}
        // {...rest}
      />
    </div>
  );
}

export default UploadImage;
