import Link from "next/link";
import { useRouter } from "next/router";
import {
  IoLogOutOutline,
  IoStatsChartOutline,
  IoShirtOutline,
  IoPricetagsOutline,
} from "react-icons/io5";
import { ROUTES } from "@utils/routes";
import { useLogoutMutation } from "@framework/auth/use-logout";
import { useTranslation } from "next-i18next";

import React, { useEffect, useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import AddProductLayout from "@components/add-product/add-product-layout";
import CategoriesLayout from "@components/add-categories/add-categories-layout";
import OverallLayout from "@components/Overall/overall-layout";

const { Header, Sider, Content } = Layout;

const adminMenu = [
  {
    slug: ROUTES.ADMIN,
    name: "text-admin-nav-overall",
    icon: <IoStatsChartOutline className="w-5 h-5" />,
  },
  {
    slug: ROUTES.ADD_PRODUCT,
    name: "text-admin-nav-products",
    icon: <IoShirtOutline className="w-5 h-5" />,
  },
  {
    slug: ROUTES.ADD_CATEGOGIES,
    name: "text-admin-nav-categogies",
    icon: <IoPricetagsOutline className="w-5 h-5" />,
  },
  {
    slug: ROUTES.HOME,
    name: "text-logout",
    icon: <IoLogOutOutline className="w-5 h-5" />,
  },
];

export default function AdminNav() {
  const { mutate: logout } = useLogoutMutation();
  const { pathname } = useRouter();
  const { t } = useTranslation("common");
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [navDetail, setNavDetail] = useState<JSX.Element | null>(null);
  useEffect(() => {
    const matchedRoute = adminMenu.find((route) => route.slug === pathname);
    if (matchedRoute) {
      switch (matchedRoute.slug) {
        case ROUTES.ADMIN:
          setNavDetail(<OverallLayout />);
          break;
        case ROUTES.ADD_PRODUCT:
          setNavDetail(<AddProductLayout />);
          break;
        case ROUTES.ADD_CATEGOGIES:
          setNavDetail(<CategoriesLayout />);
          break;
        case ROUTES.HOME:
          setNavDetail(
          <button
            className="flex items-center cursor-pointer text-sm lg:text-base text-heading font-normal py-3.5 px-4 lg:px-5 focus:outline-none"
            onClick={() => logout()}
          ></button>)
          break;
        default:
          setNavDetail(null);
      }
    }
  }, [pathname]);

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          background: "white",
        }}
        width={250}
      >
        <Menu theme="light" mode="inline">
          {adminMenu.map((item) => (
            <Menu.Item
              key={item.slug}
              icon={item.icon}
              className={item.slug === pathname ? "bg-blue-400 text-white" : ""}
            >
              <Link key={item.slug} href={item.slug}>
                <a
                  className={
                    "font-semibold flex items-center cursor-pointer text-sm lg:text-base text-heading py-3.5 px-4 lg:px-5 rounded mb-2"
                  }
                >
                  <div className="ps-2">{t(`${item.name}`)}</div>
                </a>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="w-full">
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={
              collapsed ? (
                <MenuUnfoldOutlined rev={undefined} />
              ) : (
                <MenuFoldOutlined rev={undefined} />
              )
            }
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: "24px",
            minHeight: "280px",
            background: colorBgContainer,
          }}
        >
          {navDetail}
        </Content>
      </Layout>
    </Layout>
  );
}
