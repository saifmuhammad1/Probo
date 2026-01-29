import { products } from "../../assets/dummyObjects";
import Button from "../button";

import { CustomTable } from "../tabel";

export const ProductTable = () => {
  return (
    <CustomTable
      data={products}
      columns={[
        {
          key: "image",
          label: "Image",
          render: (value: string) => (
            <img
              src={value}
              alt="product"
              className="w-12 h-12 object-cover rounded"
            />
          ),
        },
        { key: "name", label: "Product Name" },
        { key: "category", label: "Category" },
        {
          key: "price",
          label: "Price",
          render: (value: number) => `$${value}`,
        },
        { key: "stock", label: "Stock" },
        {
          key: "isAction",
          label: "Action",
          render: (_: any, row: any) => (
            <div className="flex gap-2">
              <Button label="Edit" variant="primary" />
              <Button label="Show" variant="secondary" />
              <Button label="Delete" variant="secondary" />
            </div>
          ),
        },
      ]}
    />
  );
};
