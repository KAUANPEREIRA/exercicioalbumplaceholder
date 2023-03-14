import { useParams } from "react-router-dom";
const AlbumData = () => {
  const params = useParams();

  console.log("oi", params.slug);
  return (
    <div>
      <h1>Album data</h1>
    </div>
  );
};

export default AlbumData;
