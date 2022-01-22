import * as React from "react";
import "./home.scss";
// import backgroundLightImg from "../images/background_light.png";
// import backgroundDarkImg from "../images/background_dark.png";
import Bg1 from "../images/bg-1.svg";
import Bg2 from "../images/bg-2.svg";
import { useSelector } from "react-redux";
import {
  Card,
  Image,
  Timeline,
  Text,
  Title,
  Badge,
  Space,
  SimpleGrid,
  ScrollArea,
  Progress,
  Highlight,
} from "@mantine/core";
import { Prism } from "@mantine/prism";
import {
  companyList,
  infoList,
  menu,
  projectList,
  schoolList,
  skillList,
} from "../common/home_data";
import { useMediaQuery } from "@mantine/hooks";
import { ResponsiveTreeMap } from "@nivo/treemap";
import axios from "axios"
import { useNotifications } from '@mantine/notifications';
import { isBrowser } from '../utils/index'
import AsciinemaPlayer from '../lib/asciinema-player'

// markup
const IndexPage = () => {
  // const currentTheme = useSelector(state => state.theme);
  const [menuIndex, setMenuIndex] = React.useState(0);
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  const isPhone = useMediaQuery("(max-width: 760px)");
  const notifications = useNotifications();

  React.useEffect(() => {
    const player = [];
    if (isBrowser()) {
      projectList
      .filter((item) => item.player)
      .map((item) => {
        player.push(
          (AsciinemaPlayer)({}).create(
            `https://asciinema.org/a/${item.player}.cast`,
            document.getElementById(item.player),
            {
              loop: true,
              autoPlay: true,
              idleTimeLimit: 1,
              theme: "solarized-light",
              cols: isPhone ? 47 : 75,
              rows: isPhone ? 16 : 32,
            }
          )
        );
      });
    }

    return () => {
      player.map((item) => item && item.dispose());
    };
  }, []);

  React.useEffect(() => {
    getAccess()
  }, [])

  const getAccess = async () => {
    try {
      const res = await axios.get('https://server.ddnszwj.top/api/v1/personal-page/access')
      if (res.data) {
        notifications.showNotification({
          title: '通知',
          autoClose: false,
          message: `欢迎访问我的个人主页，您是第${res.data.data}位访客！`,
        })
      } else {
        notifications.showNotification({
          icon: <i className="icon icon-close" style={{ fontSize: '16px', color: 'white' }} />,
          color: "red",
          message: `发生了一点意外，但不影响您正常访问。`,
        })
      }
    } catch (error) {
      notifications.showNotification({
        icon: <i className="icon icon-close" style={{ fontSize: '16px', color: 'white' }} />,
        color: "red",
        message: `发生了一点意外，但不影响您正常访问。`,
      })
      console.error(error);
    }
  }

  const onMenuClick = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const onNavigationClick = (index) => {
    console.log("index", index);
    setMenuIndex(index);
  };

  return (
    <main className={`index-page`}>
      <section className="head">
        <div
          className={`menu ${isOpenMenu ? "open-menu" : ""}`}
          onClick={onMenuClick}
        />
        <div className="left">
          <img src={""} />
          <span>CODE_XIA</span>
        </div>
        {(isOpenMenu || !isPhone) && (
          <div className="center">
            {menu.map((item, index) => (
              <a
                className={index === menuIndex ? "active" : ""}
                key={item.text}
                href={item.href}
                onClick={onNavigationClick.bind(this, index)}
              >
                {item.text}
              </a>
            ))}
          </div>
        )}
        <div></div>
      </section>

      <section className="part-1">
        <div className="top">
          <img src="" />
          <p className="title">啊啊啊</p>
          <p className="desc">是打发斯蒂芬</p>
        </div>
        <p className="content">
          首付款had发框架had付首付款had发框架had付款会计师的合法客款会计师的首付款had发框架had付款会计师的合法客合法客首付款had发框架had付款会计师的合法客首付款ha首付款had发框架had付款会计师的合法客d发框架had付款会计师的合法客首付款had发框架had付款会计师的合法客户端方看法就开始的合法卡交电话费
        </p>
        <div className="center">
          {infoList.map((item) => (
            <div key={item.icon} className="item">
              <i className={`icon ${item.icon}`} />
              <div>
                <p className="title">{item.title}</p>
                <p className="desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="part-2">
        <div className="bg-1">
          <Bg1 />
        </div>
        <div className="body">
          <h2>luli</h2>
          <div className="box-1">
            <h3>gongzuojingyan</h3>
            <div className="item-warp">
              {companyList.map((item) => (
                <div className="item" key={item.name}>
                  <Card shadow="sm" padding="lg">
                    <Card.Section>
                      <Image src={item.image} height={200} alt="Norway" />
                    </Card.Section>
                    <p className="title">{item.name}</p>
                    <Timeline
                      className="desc"
                      color="teal"
                      active={4}
                      bulletSize={24}
                      lineWidth={2}
                    >
                      {item.infos.map((it) => (
                        <Timeline.Item
                          key={it.name}
                          bullet={<i className={`icon ${it.icon}`} />}
                          title={it.name}
                        >
                          <Text color="dimmed" size="sm">
                            {it.detail}
                          </Text>
                        </Timeline.Item>
                      ))}
                    </Timeline>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="box-2">
            <h3>jiaoyu</h3>
            <div className="item-warp">
              <div className="left">
                {schoolList.map((item) => (
                  <div key={item.name}>
                    <Text weight={500} size="lg" style={{ color: "#1a1b1e" }}>
                      {item.name}：
                    </Text>
                    <Text size="lg" style={{ color: "#747f8a" }}>
                      {item.value}
                    </Text>
                  </div>
                ))}
              </div>
              <div className="right">
                <Image
                  src="https://mantine.dev/static/dark-theme-image-6f35e745c6b3f25b9ed3b7d5fab1ec72.png"
                  height={450}
                  width={700}
                  alt="Norway"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="part-3">
        <div className="bg-1 bg-2">
          <Bg2 />
        </div>
        <div className="body">
          <h2>chengjiu</h2>
          <div className="box-1">
            <h3>xiangmu</h3>
            {projectList.map((item) => (
              <div key={item.name} className="item">
                <div className="top">
                  <Title order={4}>{item.name}</Title>
                  <div className="line">
                    <Text weight={500} size="lg" style={{ color: "#1a1b1e" }}>
                      xingzhi：
                    </Text>
                    <Text size="lg" style={{ color: "#747f8a" }}>
                      {item.nature}
                    </Text>
                  </div>
                  <div className="line">
                    <Text weight={500} size="lg" style={{ color: "#1a1b1e" }}>
                      zhize：
                    </Text>
                    <div>{item.duty}</div>
                  </div>
                  <div className="line">
                    <Text weight={500} size="lg" style={{ color: "#1a1b1e" }}>
                      jianjie：
                    </Text>
                    <Text size="lg" style={{ color: "#747f8a" }}>
                      {item.detail}
                    </Text>
                  </div>
                  <div className="line">
                    <Text weight={500} size="lg" style={{ color: "#1a1b1e" }}>
                      jishuzhan：
                    </Text>
                    <div>{item.technologies}</div>
                  </div>
                  <div className="line">
                    <Text weight={500} size="lg" style={{ color: "#1a1b1e" }}>
                      yuandaima：
                    </Text>
                    <Text
                      variant="link"
                      component="a"
                      href={item.codeLink}
                      size="lg"
                    >
                      {item.codeLink}
                    </Text>
                  </div>
                </div>
                <SimpleGrid className="center" cols={2} spacing="lg">
                  <div className="left">
                    {item.images ? (
                      <>
                        <Image className="first-image" src={item.images[0]} />
                        <SimpleGrid
                          cols={2}
                          spacing="xs"
                          style={{ marginTop: "10px" }}
                        >
                          {item.images.map(
                            (it, index) =>
                              index !== 0 && (
                                <Image className="image" src={it} key={it} />
                              )
                          )}
                        </SimpleGrid>
                      </>
                    ) : (
                      <div id={item.player} className="preview"></div>
                    )}
                  </div>
                  <ScrollArea className="right">
                    <Prism
                      className="right"
                      withLineNumbers
                      language={item.code.language as any}
                    >
                      {item.code.text}
                    </Prism>
                  </ScrollArea>
                </SimpleGrid>
              </div>
            ))}
          </div>
          <div className="box-2">
            <h3>ji,neng</h3>
            <div className="content">
              {isBrowser() && <ResponsiveTreeMap
                data={skillList}
                identity="name"
                value="loc"
                valueFormat=" >-0.0%"
                label={(e) => e.id + " (" + e.formattedValue + ")"}
                labelSkipSize={12}
                labelTextColor={{
                  from: "color",
                  modifiers: [["darker", 1.2]],
                }}
                parentLabelTextColor={{
                  from: "color",
                  modifiers: [["darker", 2]],
                }}
                colors={{ scheme: "nivo" }}
                borderColor="#ffffff"
              />}
            </div>
          </div>
          <div className="box-3">
            <h3>rongyuchengjiu</h3>
            <SimpleGrid className="content" cols={2} spacing="lg">
              <div className="right">
                <Image
                  src="https://mantine.dev/static/dark-theme-image-6f35e745c6b3f25b9ed3b7d5fab1ec72.png"
                  height={450}
                  alt="Norway"
                />
              </div>
              <div className="left">
                <Title order={4}>lanqiaobei</Title>
                <Highlight highlight="this">
                  Highlight This, definitely THIS and also this!
                </Highlight>
              </div>
            </SimpleGrid>
          </div>
        </div>
      </section>
    </main>
  );
};

// export const query = graphql`
//   # query will go here
// `;

export default IndexPage;
