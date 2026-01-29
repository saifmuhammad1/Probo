import Card, { CardBody, CardFooter } from "../card";
import { products } from "../../assets/dummyObjects";

type Product = {
  id: number | string;
  name: string;
  price: number;
  image: string;
};

const ProductScroller = () => {
  return (
    <div className="overflow-x-auto py-4 scrollbar-thin">
      <div className="flex gap-4 w-max">
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-64">
            <Card className="w-full">
              <img
                src={product.image}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />

              <CardBody>
                <h3 className="font-semibold text-black">{product.name}</h3>
                <p className="text-orange-500 font-bold">${product.price}</p>
              </CardBody>

              <CardFooter>
                <button className="w-full bg-orange-500 text-white py-2 rounded">
                  Add to Cart
                </button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductScroller;
