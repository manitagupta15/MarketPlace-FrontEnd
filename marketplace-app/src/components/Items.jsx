export default function Items({ items }) {
  return (
    <div>
      {items.map((item) => {
        return (
          <li key={item.item_id}>
            <p> item_id: {item.item_id}</p>
            <p> item_name: {item.item_name}</p>
            <p>description : {item.description}</p>
            img_url :{" "}
            <img className="user-avatar" src={item.img_url} alt="item" />
            <p>price : {item.price}</p>
            <p>category_name : {item.category_name}</p>
          </li>
        );
      })}
    </div>
  );
}
