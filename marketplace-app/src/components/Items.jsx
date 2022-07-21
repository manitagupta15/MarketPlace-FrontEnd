export default function Items({ items }) {
  return (
    <div>
      {items.map((item) => {
        return (
          <article key={item.item_id}>
            <hr />
            <p> item Id: {item.item_id}</p>
            <p> item Name: {item.item_name}</p>
            <p>description : {item.description}</p>
            <img className="user-avatar" src={item.img_url} alt="item" />
            <p>price : {item.price}</p>
            <p>category name : {item.category_name}</p>
          </article>
        );
      })}
    </div>
  );
}
