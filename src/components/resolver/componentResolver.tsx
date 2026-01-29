import { Suspense } from "react";
import Button from "../button";
import TextBlock from "../textBlock";
import Navbar from "../layout/navbar";
import { ProductTable } from "../section/productTabel";
import ImageSlider from "../imageSlider";
import ProductScroller from "../section/productCard";
import ProfilePage from "../section/profilePage";

const componentMap: any = {
  navbar: Navbar,
  button: Button,
  text: TextBlock,
  productTabel: ProductTable,
  imageSlider: ImageSlider,
  productScroller: ProductScroller,
  profileCard: ProfilePage,
};

export const ComponentResolver = ({ type, props }: any) => {
  const Component = componentMap[type];
  if (!Component) return null;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
};
