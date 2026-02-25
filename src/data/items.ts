export type BubbleItem = {
  id: string;
  name: string;
  description?: string;
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
  {
    id: "finu",
    name: "Finu",
    description: "To be implemented",
    icon: "/icons/finu.jpg",
    type: "work",
    target: "_blank",
  },
  {
    id: "snow",
    name: "Snow",
    description: "To be implemented",
    icon: "/icons/snow.png",
    type: "work",
    target: "_blank",
  },
  {
    id: "contact",
    name: "Contact Me",
    icon: "/icons/contact.png",
    type: "action",
    target: "_blank",
  },
  {
    id: "github",
    name: "GitHub",
    link: "https://github.com/o6o6ooo",
    icon: "/icons/github.png",
    type: "action",
    target: "_blank",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sakurawallace/",
    icon: "/icons/linkedin.png",
    type: "action",
    target: "_blank",
  },
  {
    id: "ikeabubbles",
    name: "Ikea Bubbles",
    link: "https://ikea-bubbles.vercel.app",
    icon: "/icons/ikea-bubbles.png",
    type: "work",
    target: "_blank",
  },
  {
    id: "cv",
    name: "Get my CV in PDF",
    icon: "/icons/cv.png",
    type: "work",
    target: "_blank",
  },

  ];
