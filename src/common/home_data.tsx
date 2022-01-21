import { Badge, Space } from "@mantine/core";
import * as React from "react";

export const menu = [
  // {
  //   text: "个人信息",
  //   href: "#1",
  // },
  // {
  //   text: "求职意向",
  //   href: "#2",
  // },
  // {
  //   text: "工作经验",
  //   href: "#3",
  // },
  // {
  //   text: "教育",
  //   href: "#4",
  // },
  // {
  //   text: "技能",
  //   href: "#5",
  // },
  // {
  //   text: "项目",
  //   href: "#6",
  // },
  // {
  //   text: "奖项荣誉",
  //   href: "#7",
  // },
];

export const infoList = [
  {
    icon: "icon-mail",
    title: "标题",
    desc: "描述信息水电费水电费",
  },
  {
    icon: "icon-phone",
    title: "标题",
    desc: "描述信息水电费水电费",
  },
  {
    icon: "icon-link",
    title: "标题",
    desc: "描述信息水电费水电费",
  },
  {
    icon: "icon-github-fill",
    title: "标题",
    desc: "描述信息水电费水电费",
  },
];

export const companyList = [
  {
    image: "",
    name: "接口会代付款待第三方",
    infos: [
      {
        name: "jianjie",
        icon: "icon-detail",
        detail: <span>水电费士大夫</span>,
      },
      {
        name: "zhiwei",
        icon: "icon-detail",
        detail: <span>水电费士大夫</span>,
      },
      {
        name: "gongzuo，miaoshu",
        icon: "icon-detail",
        detail: <span>水电费士大夫</span>,
      },
      {
        name: "shouhuo",
        icon: "icon-detail",
        detail: <span>水电费士大夫</span>,
      },
    ],
  },
  {
    image: "",
    name: "接口会代付款待第三方sss",
    infos: [
      {
        name: "jianjie",
        icon: "icon-detail",
        detail: <span>水电费士大夫</span>,
      },
      {
        name: "zhiwei",
        icon: "icon-detail",
        detail: <span>水电费士大夫</span>,
      },
      {
        name: "gongzuo，miaoshu",
        icon: "icon-detail",
        detail: <span>水电费士大夫</span>,
      },
      {
        name: "shouhuo",
        icon: "icon-detail",
        detail: <span>水电费士大夫</span>,
      },
    ],
  },
  {
    image: "",
    name: "接口会代付款待第三方aa",
    infos: [
      {
        name: "jianjie",
        icon: "icon-detail",
        detail: <span>水电费士大夫</span>,
      },
      {
        name: "zhiwei",
        icon: "icon-detail",
        detail: <span>水电费士大夫</span>,
      },
      {
        name: "gongzuo，miaoshu",
        icon: "icon-detail",
        detail: <span>水电费士大夫</span>,
      },
      {
        name: "shouhuo",
        icon: "icon-detail",
        detail: <span>水电费士大夫</span>,
      },
    ],
  },
];

export const schoolList = [
  {
    name: "xuexiao",
    value: "会计核算待付款",
  },
  {
    name: "zhuanye",
    value: "会计核算待付款",
  },
  {
    name: "类型",
    value: "quanrizhi水电",
  },
  {
    name: "kecheng",
    value: "士大夫开奖号是的空间和发开始接电话发会计师的合法水电费水电费",
  },
];

export const projectList = [
  {
    name: "ui lib",
    nature: "ge,renkaiyuan",
    duty: (
      <>
        <Badge variant="outline">Dot badge</Badge>
      </>
    ),
    detail: "jianjie",
    technologies: (
      <>
        <Badge variant="dot">Dot badge</Badge>
        <Space w="xs" />
        <Badge variant="dot" color="pink">
          Dot badge
        </Badge>
      </>
    ),
    codeLink: "https://baidu.com",
    images: ["a", "b", "c"],
    code: {
      language: "tsx",
      text: `let a = 1;
let a = 1;
let a = 1;
let a = 1;
const test = () => {
  console.log('aaa')
};
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;`,
    },
  },
  {
    name: "jks-cli",
    nature: "ge,renkaiyuan",
    duty: (
      <>
        <Badge variant="outline">Dot badge</Badge>
      </>
    ),
    detail: "jianjie",
    technologies: (
      <>
        <Badge variant="dot">Dot badge</Badge>
        <Space w="xs" />
        <Badge variant="dot" color="pink">
          Dot badge
        </Badge>
      </>
    ),
    codeLink: "https://baidu.com",
    player: "462967",
    code: {
      language: "tsx",
      text: `let a = 1;
let a = 1;
let a = 1;
let a = 1;
const test = () => {
  console.log('aaa')
};
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;
let a = 1;`,
    },
  },
];

export const skillList = {
  name: "技能分布",
  color: "#000",
  children: [
    {
      name: "qian，duan",
      children: [
        {
          name: "react",
          loc: 0.9,
        },
        {
          name: "vue",
          loc: 0.8,
        },
      ],
    },
    {
      name: "kuapingtai",
      children: [
        {
          name: "flutter",
          loc: 0.5,
        },
      ],
    },
  ],
};
