"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { Result } from "postcss";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  const handleSuccess = (result: any, widget: any) => {
    if (result.event !== '"success"') return;
    const info = result.info as CloudinaryResult;
    setPublicId(info.public_id);
    // 处理上传成功后的逻辑
  };
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={270} height={180} alt="pika"></CldImage>
      )}
      <CldUploadWidget uploadPreset="y2aut9qf" onSuccess={handleSuccess}>
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
