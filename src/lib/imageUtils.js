export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
}

export function resizeImage(
  file,
  maxWidth = 400,
  quality = 0.9
) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const image = new Image();

      image.onload = () => {
        const canvas =
          document.createElement("canvas");

        let width = image.width;
        let height = image.height;

        if (width > maxWidth) {
          const ratio =
            maxWidth / width;

          width = maxWidth;
          height =
            height * ratio;
        }

        canvas.width = width;
        canvas.height = height;

        const context =
          canvas.getContext("2d");

        context.drawImage(
          image,
          0,
          0,
          width,
          height
        );

        resolve(
          canvas.toDataURL(
            "image/jpeg",
            quality
          )
        );
      };

      image.onerror = reject;

      image.src =
        event.target.result;
    };

    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
}