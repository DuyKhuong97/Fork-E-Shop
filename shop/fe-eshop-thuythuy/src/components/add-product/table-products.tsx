import React from "react";
import { Table, Space } from "antd";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { useProductsQuery } from "@framework/product/get-all-products";

interface Product {
  id: string;
  image: string;
  product_name: string;
  ShopProducts?: any[];
}

const TableProducts: React.FC = () => {
  const { data, isLoading } = useProductsQuery({
    limit: 10,
  });

  console.log(data);

  const columns = [
    {
      title: "Product Image",
      dataIndex: "image",
      render: (image: string) => (
        <img src={image} alt="Category Image" className="h-14 w-14" />
      ),
    },
    {
      title: "Product Name",
      dataIndex: "product_name",
      key: "product_name",
    },
    {
      title: "Price",
      dataIndex: "list_price",
      key: "list_price",
    },
    {
      title: "Sale price",
      dataIndex: "sale_price",
      key: "sale_price",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Number of Products",
      dataIndex: "quantity_per_unit",
      key: "quantity_per_unit",
      render: (ShopProducts: any[]) => ShopProducts?.length || 0,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Actions",
      key: "actions",
      render: () => (
        <Space>
          <button className="mx-3 text-red-600">
            <FaTrashAlt />
          </button>
          <button className="mx-3">
            <FaPencilAlt />
          </button>
        </Space>
      ),
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Table<Product | any>
      columns={columns}
      dataSource={data?.pages[0].data}
      pagination={false}
      className="w-full text-center"
    />
  );
};

export default TableProducts;
