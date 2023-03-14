import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Props = {
  id?: number;
  title?: string;
  userId?: number;
};

const Home = () => {
  const [albums, SetAlbums] = useState<Props[]>([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/albums`).then((res) => {
      console.log("res", res?.data);
      SetAlbums(res?.data);
    });
  }, []);

  return (
    <div style={{ gap: "20px" }}>
      Galeria de Fotos
      <hr></hr>
      <div>
        {albums?.map((item, index) => {
          return (
            <Link to={`/AlbumData/${index}`} key={index}>
              <div
                style={{
                  cursor: "pointer",
                  width: "100%",
                  border: "1px solid black",
                  height: "40px",
                  gap: "20px",
                  marginBottom: "20px",
                }}
              >
                {item?.title}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
