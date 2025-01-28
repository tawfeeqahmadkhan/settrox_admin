import {
  FiGrid,
  FiUsers,
  FiUser,
  FiCompass,
  FiSettings,
  FiSlack,
  FiGlobe,
  FiTarget,
} from "react-icons/fi";

/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const sidebar = [
  {
    path: "/dashboard", // the url
    icon: FiGrid, // icon
    name: "Dashboard", // name that appear in Sidebar
  },
  {
	path: "/categories",  
    icon: FiSlack,
    name: "Manage Categories"
  },
  {
    path: "/brand", // the url
    icon: FiSlack, // icon
    name: "Manage Brand", // name that appear in Sidebar
  },
  {
    path: "/specification", // the url
    icon: FiSlack, // icon
    name: "Manage Specification", // name that appear in Sidebar
  },  
  {
    icon: FiSlack,
    name: "Manage Product",
    routes: [
      {
        path: "/products",
        name: "Products",
      },
      {
        path: "/attributes",
        name: "Attributes",
      },
      // {
      //   path: "/coupons",
      //   name: "Coupons",
      // },
    ],
  },
  //{
  //  path: "/faqs",
  //  icon: FiSlack,
  //  name: "Manage Faq",
 // },
  {
    path: "/customers",
    icon: FiUsers,
    name: "Manage Customers",
  },
  {
    path: "/orders",
    icon: FiCompass,
    name: "Manage Orders",
  },

  // {
  //   path: "/our-staff",
  //   icon: FiUser,
  //   name: "OurStaff",
  // },

   {
     path: "/settings?settingTab=common-settings",
     icon: FiSettings,
     name: "Settings",
   },
  // {
  //   icon: FiGlobe,
  //   name: "International",
  //   routes: [
  //     {
  //       path: "/languages",
  //       name: "Languages",
  //     },
  //     {
  //       path: "/currencies",
  //       name: "Currencies",
  //     },
  //   ],
  // },
  // {
  //   icon: FiTarget,
  //   name: "OnlineStore",
  //   routes: [
  //     {
  //       name: "ViewStore",
  //       path: "http://localhost:3000",
  //       outside: "store",
  //     },

  //     {
  //       path: "/store/customization",
  //       name: "StoreCustomization",
  //     },
  //     {
  //       path: "/store/store-settings",
  //       name: "StoreSettings",
  //     },
  //   ],
  // },

  // {
  //   icon: FiSlack,
  //   name: "Pages",
  //   routes: [
  //     // submenu

  //     {
  //       path: "/404",
  //       name: "404",
  //     },
  //     {
  //       path: "/coming-soon",
  //       name: "Coming Soon",
  //     },
  //   ],
  // },
];

export default sidebar;
