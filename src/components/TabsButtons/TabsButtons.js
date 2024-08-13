const TabsButtons = ({ item, handleTab, countTab }) => {
  return (
    <div className="p-1">
      <button
        className={`btn ${
          item.id === countTab ? "btn-success" : "btn-outline-info"
        }`}
        onClick={() => handleTab(item.id)}
      >
        {item.title}
      </button>
    </div>
  );
};

export default TabsButtons;
