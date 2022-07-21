import {
  mdiDesktopMac,
  mdiGithub,
  mdiMonitorShimmer,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,

} from "@mdi/js";

export default [
  "Başlangıç",
  [
    {
      to: "/",
      icon: mdiDesktopMac,
      label: "Anasayfa",
    },
    {
      to: "/suggested",
      icon: mdiTelevisionGuide,
      label: "Önerilen",
    },
  ],
  "Akademi",
  [
    {
      to: "/literature",
      label: "Literatür Taraması",
      icon: mdiTable,
    },
    {
      to: "/tools",
      label: "Faydalı Araçlar",
      icon: mdiSquareEditOutline,
    },
    {
      label: "Online",
      icon: mdiViewList,
      menu: [
        {
          label: "Kütüphaneler",
        },
        {
          label: "Müzeler",
        },
        {
          label: "Koleksiyonlar",
        },
      ],
    },
    // {
    //   href: "https://github.com/justboil/admin-one-vue-tailwind",
    //   label: "Sözlükler",
    //   icon: mdiGithub,
    //   target: "_blank",
    // },
  ],

  "Ücretsiz",
  [
    {
      label: "Yabancı Dil",
      icon: mdiViewList,
      menu: [
        {
          label: "Haritalar",
        },
        {
          label: "Görseller",
        },
      ],
    },
    {
      to: "/sad",
      label: "Kurslar",
      icon: mdiGithub
    },
  ],
  // "Keşfet",
  // [
  //   // {
  //   //   href: "https://github.com/justboil/admin-one-vue-tailwind",
  //   //   label: "GitHub",
  //   //   icon: mdiGithub,
  //   //   target: "_blank",
  //   // },
  //   {
  //     to: "/tables",
  //     label: "Telegram & Discord",
  //     icon: mdiTable,
  //   },
  //   {
  //     to: "/tables",
  //     label: "Youtube",
  //     icon: mdiTable,
  //   },
  //   {
  //     to: "/tables",
  //     label: "Bloglar",
  //     icon: mdiTable,
  //   },
  // ],
  "",
  [
    {
      to: "/contact",
      label: "İletişim",
      icon: mdiMonitorShimmer,
      target: "",
    },
  ],
];
