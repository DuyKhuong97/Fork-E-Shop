import React from "react";
import { Table, Space } from "antd";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import { useCategoriesQuery } from "@framework/category/get-all-categories";
import { useDeleteCategoryMutation } from "@framework/category/delele-categories-id";
import Category from "src/pages/category/[slug]";
interface Category {
  id: number;
  image: string;
  category_name: string;
  ShopProducts?: any[];
}
const MyTable: React.FC = () => {
  const { data, isLoading } = useCategoriesQuery({
    limit: 10,
  });
  const { mutate: deleteCategory } = useDeleteCategoryMutation();
  const handleDeleteCategory = (id: number) => {
    deleteCategory({ id: id });
  };

  const columns = [
    {
      title: "Category Image",
      dataIndex: "image",
      render: (image: string) => (
        <img src={image} alt="Category Image" className="h-14 w-14" />
      ),
    },
    {
      title: "Category Name",
      dataIndex: "category_name",
      key: "category_name",
    },
    {
      title: "Number of Products",
      dataIndex: "ShopProducts",
      key: "number_of_products",
      render: (ShopProducts: any[]) => ShopProducts?.length || 0,
    },
    {
      title: "Actions",
      key: "actions",
      render: (record: Category) => (
        <Space>
          <button 
          onClick={() => handleDeleteCategory(record.id)}
            //  console.log(record.id)}
          className="mx-3 text-red-600">
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
    <Table<Category | any>
      columns={columns}
      dataSource={data?.categories.data}
      pagination={false}
      className="w-full text-center"
    />
  );
};

export default MyTable;
