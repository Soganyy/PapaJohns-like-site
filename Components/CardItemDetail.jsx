const CardItemDetail = (data) => {
  return (
    <div className="card m-4" style={{maxWidth: "20%"}}>
      <img src={data.img} className="card-img-top" alt={data.name} />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">{data.composition}</p>
        <p className="card-text">
          Price: {typeof data.price === 'object' ? data.price.sm : data.price}₼
        </p>
      </div>
    </div>
  );
};

export default CardItemDetail;