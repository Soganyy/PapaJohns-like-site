import CardItemDetail from "@/Components/CardItemDetail";

const page = async ({ params }) => {
  const req = await fetch(`https://api.mirafgan.me/papajohns/${params.id}`, {
    cache: "no-store",
  });
  const data = await req.json();

  return (
    <>
      <div className="p-5" style={{display: "flex", flexWrap: "wrap"}}>
        {data.map((item) => {
          return <CardItemDetail {...item} />;
        })}
      </div>
    </>
  );
};

export default page;
