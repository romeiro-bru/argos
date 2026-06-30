interface RoutesInterface {
  path: string;
  meta: {
    label: string;
  };
}

interface IsActiveProps {
  route: RoutesInterface;
  pathname: string;
}

export const isActive = ({ route, pathname }: IsActiveProps) => {
  if (route.path === "/") {
    return pathname === "/";
  }
  // Remove parâmetros dinâmicos da rota (tudo depois de ":")
  const routeBase = route.path.split(":")?.[0] || route.path;
  return pathname.startsWith(routeBase);
};
