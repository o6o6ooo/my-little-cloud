export type BubbleItem = {
  id: string;
  name: string;
  description: string;
  link?: string;
  archived?: boolean;
  icon: string;
  type: "work" | "action";
  target?: "_blank" | "_self";
};

export const items: BubbleItem[] = [
  {
    id: "kuusi",
    name: "Kuusi",
    description: "Family photo sharing web app",
    link: "https://kuusi-f06ab.web.app/",
    icon: "/icons/kuusi.png",
    type: "work",
    target: "_blank",
  },
  ];
