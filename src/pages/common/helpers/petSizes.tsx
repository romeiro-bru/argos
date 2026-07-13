import { Gigantic } from "../../../assets/gigantic";
import { Large } from "../../../assets/large";
import { Medium } from "../../../assets/medium";
import { Small } from "../../../assets/small";
import type { Size } from "../types";

type SizesType = {
  size: Size | "";
};

type SizeComponentsType = {
  icon: React.ReactNode;
  description: string;
};

const defaultSize: SizeComponentsType = {
  icon: <Small />,
  description: "até 10kg",
};

const sizeComponents: Partial<Record<Size | "", SizeComponentsType>> = {
  Pequeno: {
    icon: <Small />,
    description: "até 10kg",
  },
  Médio: {
    icon: <Medium />,
    description: "10 - 25kg",
  },
  Grande: {
    icon: <Large />,
    description: "25 - 45kg",
  },
  Gigante: {
    icon: <Gigantic />,
    description: "45kg >",
  },
};

export function petSizes({ size }: SizesType) {
  return sizeComponents[size] ?? defaultSize;
}
