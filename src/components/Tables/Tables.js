"use client";
import { useState } from "react";
import TabsButtons from "../TabsButtons/TabsButtons";
import Image from "next/image";

const Tables = () => {
  const [countTab, setCountTab] = useState(1);
  const tabsData = [
    {
      id: 1,
      image: "/public/image/1.jpg",
      title: "Item One",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      image: "/public/image/02.jpg", // Replace with your image path
      title: "Item Two",
      details:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      image: "/public/image/03.png", // Replace with your image path
      title: "Item Three",
      details:
        "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit.",
      description:
        "Sed non mauris vitae erat consequat auctor eu in elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    },
    {
      id: 4,
      image: "/public/image/1.jpg",
      title: "Item Four",
      details:
        "Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const handleTab = (id) => {
    setCountTab(id);
  };

  // Get the selected item based on the countTab
  const selectedItem = tabsData.find((item) => item.id === countTab);

  return (
    <div className="row ">
      <div className="col">
        {tabsData.map((item) => (
          <TabsButtons
            key={item.id}
            item={item}
            handleTab={handleTab}
            countTab={countTab}
          />
        ))}
      </div>

      <div className="col">
        <Image
          src={selectedItem.image}
          alt={selectedItem.title}
          width={500} // specify the width
          height={300} // specify the height
          layout="responsive" // or "intrinsic", "fill", etc., depending on your layout needs
        />
      </div>

      <div className="col">
        {selectedItem && (
          <>
            <h2 className="m-3 ">{selectedItem.title}</h2>
            <p>{selectedItem.details}</p>
            <p>{selectedItem.description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Tables;
