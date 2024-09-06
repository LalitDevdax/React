import React from "react";
import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => bagItems.includes(item.id));

  return (
    <main>
      <div className="bag-page">
        {finalItems.length === 0 ? (
          <div className="empty-bag">
            <img
              src="/images/no-product.png"
              alt="No items"
              className="empty-bag-image"
            />
          </div>
        ) : (
          <>
            <div className="bag-items-container">
              {finalItems.map((item) => (
                <BagItem key={item.id} item={item} />
              ))}
            </div>
            <BagSummary />
          </>
        )}
      </div>
    </main>
  );
};

export default Bag;
