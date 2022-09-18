import { Layout } from "../Components/Layout";
import ProductItem from "../Components/ProductItem";
import data from "../utils/data";

export default function Home() {
  return (
    <Layout title={"Home"}>
      <div className="grid grid-cols gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug} />
        ))}
      </div>
    </Layout>
  );
}
