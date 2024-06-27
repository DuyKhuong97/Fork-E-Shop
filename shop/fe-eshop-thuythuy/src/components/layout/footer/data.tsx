import { FaTrain, FaBus } from "react-icons/fa";

export const footer = {
  addressDescription: "widget-address",
  widgets: [
    {
      id: 1,
      mainIcon:"",
      widgetTitle: "widget-title-contact",
      lists: [
        {
          id: 2,
          title: "link-phone",
          path: "/",
        },
        {
          id: 3,
          title: "link-email",
          path: "/",
        },
      ],
    },
    {
      id: 2,
      mainIcon: (
        <div className="w-28 h-28 flex items-center justify-center rounded-full" style={{backgroundColor: "orange"}}>
          <FaTrain  className="w-12 h-12" />
        </div>
      ),
      widgetTitle: "widget-title-train",
      lists: [
        {
          id: 2,
          title: "link-train",
          path: "/",
        },
      ],
    },
    {
      id: 3,
      mainIcon: (
        <div className="w-28 h-28 flex items-center justify-center rounded-full" style={{backgroundColor: "orange"}}>
          <FaBus className=" w-12 h-12" />
        </div>
      ),
      widgetTitle: "widget-title-bus",
      lists: [
        {
          id: 2,
          title: "link-bus",
          path: "/",
        },

      ],
    },
    {
      id: 4,
      mainIcon: (
        <div className="w-28 h-28  flex items-center justify-center rounded-full" style={{backgroundColor: "orange"}}>
          <FaTrain className=" w-12 h-12" />
        </div>
      ),
      widgetTitle: "widget-title-metro",
      lists: [
        {
          id: 2,
          title: "link-metro",
          path: "/",
        },

      ],
    },
    // {
    // 	id: 3,
    // 	widgetTitle: "widget-title-about",
    // 	lists: [
    // 		{
    // 			id: 1,
    // 			title: "link-support-center",
    // 			path: "/contact-us",
    // 		},
    // 		{
    // 			id: 2,
    // 			title: "link-customer-support",
    // 			path: "/",
    // 		},
    // 		{
    // 			id: 3,
    // 			title: "link-about-us",
    // 			path: "/contact-us",
    // 		},
    // 		{
    // 			id: 4,
    // 			title: "link-copyright",
    // 			path: "/",
    // 		},
    // 	],
    // },
    // {
    // 	id: 4,
    // 	widgetTitle: "widget-title-customer-care",
    // 	lists: [
    // 		{
    // 			id: 1,
    // 			title: "link-faq",
    // 			path: "/faq",
    // 		},
    // 		{
    // 			id: 2,
    // 			title: "link-shipping",
    // 			path: "/",
    // 		},
    // 		{
    // 			id: 3,
    // 			title: "link-exchanges",
    // 			path: "/",
    // 		},
    // 	],
    // },
    // {
    // 	id: 5,
    // 	widgetTitle: "widget-title-our-information",
    // 	lists: [
    // 		{
    // 			id: 1,
    // 			title: "link-privacy",
    // 			path: "/privacy",
    // 		},
    // 		{
    // 			id: 2,
    // 			title: "link-terms",
    // 			path: "/terms",
    // 		},
    // 		{
    // 			id: 3,
    // 			title: "link-return-policy",
    // 			path: "/privacy",
    // 		},
    // 		{
    // 			id: 4,
    // 			title: "link-site-map",
    // 			path: "/",
    // 		},
    // 	],
    // },

  ],
  payment: [
    {
      id: 1,
      path: "/",
      image: "/assets/images/payment/mastercard.svg",
      name: "payment-master-card",
      width: 34,
      height: 20,
    },
    {
      id: 2,
      path: "/",
      image: "/assets/images/payment/visa.svg",
      name: "payment-visa",
      width: 50,
      height: 20,
    },
    // {
    //   id: 3,
    //   path: "/",
    //   image: "/assets/images/payment/paypal.svg",
    //   name: "payment-paypal",
    //   width: 76,
    //   height: 20,
    // },
    // {
    //   id: 4,
    //   path: "/",
    //   image: "/assets/images/payment/jcb.svg",
    //   name: "payment-jcb",
    //   width: 26,
    //   height: 20,
    // },
    // {
    //   id: 5,
    //   path: "/",
    //   image: "/assets/images/payment/skrill.svg",
    //   name: "payment-skrill",
    //   width: 39,
    //   height: 20,
    // },
  ],
};
