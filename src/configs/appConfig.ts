export const appConfig = {
  theme: {
    primaryColor: "#ffff",
    secondaryColor: "#f3f4f6",
    spacing: "16px",
  },

  pages: {
    home: {
      path: "/",
      sections: [
        {
          type: "navbar",
        },
        {
          type: "imageSlider",
        },
        { type: "productScroller" },

        {
          type: "text",
          props: {
            text: "Welcome to Our Store",
          },
        },
        {
          type: "button",
          props: {
            label: "View Products",
            variant: "primary",
            action: "/products",
          },
        },
      ],
    },
    products: {
      path: "/products",
      sections: [
        {
          type: "navbar",
        },
        {
          type: "productTabel",
        },
      ],
    },
    profile: {
      path: "/profile",
      sections: [
        {
          type: "navbar",
        },
        {
          type: "profileCard",
        },
      ],
    },
  },
};
