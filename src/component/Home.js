import React from "react";
import Card from "./card";
import { list } from "./Data/data";


function Home() {
  
  return (
    <div className="container">
        <div className="row my-4">
      {list.map((item) => {
        return ( <div className="col-md-4 my-4" key={item.id}>
                <Card
                  cover={item.cover}
                  name={item.name}
                  location={item.location}
                  category={item.category}
                  price={item.price}
                  beds={item.beds}
                  bathroom={item.bathroom}
                />
              </div>
        );
      })}
      </div>
    </div>
  );
}

export default Home;
