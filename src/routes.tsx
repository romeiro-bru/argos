export interface RoutesInterface {
  path: string;
  meta: {
    label: string;
    showInSidebar: boolean;
    icon?: React.ReactNode;
  };
}

export const appRoutes: { [key: string]: RoutesInterface } = {
  LANDING: {
    path: "/",
    meta: {
      label: "landing",
      icon: <img className="w-12 ml-2" src="/favicon.png" />,
      showInSidebar: false,
    },
  },
  HOME: {
    path: "/home",
    meta: {
      label: "Home",
      icon: <img className="w-12 ml-2" src="/favicon.png" />,

      showInSidebar: true,
    },
  },

  FAVORITES: {
    path: "/favorites",
    meta: {
      label: "Favoritados",
      showInSidebar: true,
    },
  },

  DETAILS: {
    path: "/details/:id",
    meta: {
      label: "Detalhes",
      showInSidebar: false,
    },
  },

  REGISTER: {
    path: "/register-pet",
    meta: {
      label: "Cadastro de pet",
      showInSidebar: true,
    },
  },

  SIGN_UP: {
    path: "/sign-up",
    meta: {
      label: "Minha conta",
      showInSidebar: false,
    },
  },
};
