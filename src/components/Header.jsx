import Image from "next/image";
import React from "react";
import FullScreenButton from "./ui/FullScreenButton";
import LogoutButton from "./ui/LogoutButton";
import User from "./User";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { config } from "@/utils/config";

async function getUser() {
  "use server";
  const token = cookies().get("token")?.value;
  try {
    const response = await fetch(
      `${config.server}/api/users/userData`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Cookie: `userToken=${token}`,
        },
      },
      { cache: "force-cache" }
    );

    if (!response.ok) {
      throw new Error(`HTTP error status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    redirect("/logout");
  }
}

const Header = async () => {
  const user = await getUser();
  return (
    <header className="relative flex items-center justify-center">
      <User data={user} />
      <svg
        width="1920"
        height="110"
        viewBox="0 0 1920 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <mask
          id="mask0_676_9446"
          style={{ maskType: "alpha" }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1920"
          height="110"
        >
          <rect width="1920" height="110" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_676_9446)">
          <path
            d="M698.021 65.2642C687.165 38.7225 678.89 18.4876 670.662 -2.5H1244.51C1229.25 29.062 1220.47 47.9801 1204.51 86.1541C1202.4 91.1993 1197.47 94.5 1192.01 94.5H719.04C713.554 94.5 708.606 91.1682 706.53 86.0839C703.513 78.6931 700.689 71.7881 698.021 65.2642Z"
            stroke="#4C3AC4"
            strokeWidth="5"
          />
          <path
            d="M1254.75 26.9023C1258.99 15.933 1262.16 7.7547 1267.76 -0.5H1920.5V87.5H1226.35C1240.59 62.131 1247.76 44.8169 1252.97 31.4945C1253.59 29.9084 1254.18 28.38 1254.75 26.9023Z"
            fill="black"
          />
          <path
            d="M1254.75 26.9023C1258.99 15.933 1262.16 7.7547 1267.76 -0.5H1920.5V87.5H1226.35C1240.59 62.131 1247.76 44.8169 1252.97 31.4945C1253.59 29.9084 1254.18 28.38 1254.75 26.9023Z"
            fill="url(#paint0_linear_676_9446)"
          />
          <path
            d="M1254.75 26.9023C1258.99 15.933 1262.16 7.7547 1267.76 -0.5H1920.5V87.5H1226.35C1240.59 62.131 1247.76 44.8169 1252.97 31.4945C1253.59 29.9084 1254.18 28.38 1254.75 26.9023Z"
            stroke="url(#paint1_linear_676_9446)"
          />
          <path d="M1920 93.0001L1215 93" stroke="#1BF8F9" strokeWidth="5" />
          <path
            d="M666.677 31.5557C661.918 18.2083 658.579 8.83904 652.236 -0.5H-0.5V87.5H689.706C677.671 62.3644 671.486 45.0469 666.717 31.6679L666.677 31.5557Z"
            fill="black"
          />
          <path
            d="M666.677 31.5557C661.918 18.2083 658.579 8.83904 652.236 -0.5H-0.5V87.5H689.706C677.671 62.3644 671.486 45.0469 666.717 31.6679L666.677 31.5557Z"
            fill="url(#paint2_linear_676_9446)"
          />
          <path
            d="M666.677 31.5557C661.918 18.2083 658.579 8.83904 652.236 -0.5H-0.5V87.5H689.706C677.671 62.3644 671.486 45.0469 666.717 31.6679L666.677 31.5557Z"
            stroke="url(#paint3_linear_676_9446)"
          />
          <path d="M700 93H0" stroke="#1BF8F9" strokeWidth="5" />
          <path
            d="M685.913 25.4105C682.296 16.2157 678.849 7.45168 675.227 -1.5H1239.57C1226.62 24.3059 1219.48 41.0293 1208.1 67.6438C1206.1 72.3312 1203.96 77.3254 1201.64 82.73C1199.36 88.0459 1194.12 91.5 1188.33 91.5H722.336C716.517 91.5 711.256 88.0129 709.01 82.6507C699.439 59.7999 692.403 41.9114 685.913 25.4105Z"
            fill="#343CBF"
          />
          <path
            d="M685.913 25.4105C682.296 16.2157 678.849 7.45168 675.227 -1.5H1239.57C1226.62 24.3059 1219.48 41.0293 1208.1 67.6438C1206.1 72.3312 1203.96 77.3254 1201.64 82.73C1199.36 88.0459 1194.12 91.5 1188.33 91.5H722.336C716.517 91.5 711.256 88.0129 709.01 82.6507C699.439 59.7999 692.403 41.9114 685.913 25.4105Z"
            fill="url(#paint4_linear_676_9446)"
          />
          <path
            d="M685.913 25.4105C682.296 16.2157 678.849 7.45168 675.227 -1.5H1239.57C1226.62 24.3059 1219.48 41.0293 1208.1 67.6438C1206.1 72.3312 1203.96 77.3254 1201.64 82.73C1199.36 88.0459 1194.12 91.5 1188.33 91.5H722.336C716.517 91.5 711.256 88.0129 709.01 82.6507C699.439 59.7999 692.403 41.9114 685.913 25.4105Z"
            stroke="#1EDEF1"
            strokeWidth="3"
          />
          <path
            d="M658 -11C664.988 4.48837 674.449 30.467 678.466 42.1767C683.957 58.1814 698.002 102 719.897 102C744.856 102 1156.17 102 1190.62 102C1225.06 102 1241.26 28.5456 1261 -11"
            stroke="url(#paint5_linear_676_9446)"
            strokeWidth="3"
          />
          <path
            d="M658 -2C665 13 674.476 38.1595 678.5 49.5C684 65 698.068 105.5 720 105.5C745 105.5 1157 105.5 1191.5 105.5C1226 105.5 1242.23 36.2987 1262 -2"
            stroke="url(#paint6_linear_676_9446)"
            strokeWidth="6"
          />
          <mask
            id="mask1_676_9446"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="676"
            y="0"
            width="569"
            height="96"
          >
            <path
              d="M688.913 28.4105C685.296 19.2157 681.849 10.4517 678.227 1.5H1242.57C1229.62 27.3059 1222.48 44.0293 1211.1 70.6438C1209.1 75.3312 1206.96 80.3254 1204.64 85.73C1202.36 91.0459 1197.12 94.5 1191.33 94.5H725.336C719.517 94.5 714.256 91.0129 712.01 85.6507C702.439 62.7999 695.403 44.9114 688.913 28.4105Z"
              fill="#343CBF"
            />
            <path
              d="M688.913 28.4105C685.296 19.2157 681.849 10.4517 678.227 1.5H1242.57C1229.62 27.3059 1222.48 44.0293 1211.1 70.6438C1209.1 75.3312 1206.96 80.3254 1204.64 85.73C1202.36 91.0459 1197.12 94.5 1191.33 94.5H725.336C719.517 94.5 714.256 91.0129 712.01 85.6507C702.439 62.7999 695.403 44.9114 688.913 28.4105Z"
              fill="url(#paint7_linear_676_9446)"
            />
            <path
              d="M688.913 28.4105C685.296 19.2157 681.849 10.4517 678.227 1.5H1242.57C1229.62 27.3059 1222.48 44.0293 1211.1 70.6438C1209.1 75.3312 1206.96 80.3254 1204.64 85.73C1202.36 91.0459 1197.12 94.5 1191.33 94.5H725.336C719.517 94.5 714.256 91.0129 712.01 85.6507C702.439 62.7999 695.403 44.9114 688.913 28.4105Z"
              stroke="#1EDEF1"
              strokeWidth="3"
            />
          </mask>
          <g mask="url(#mask1_676_9446)">
            <rect
              x="1148"
              y="69.5148"
              width="19.1127"
              height="19.1127"
              rx="2"
              transform="rotate(-45 1148 69.5148)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="1117.77"
              y="40.7427"
              width="20.8492"
              height="20.8492"
              rx="2"
              transform="rotate(-45 1117.77 40.7427)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="1086.37"
              y="12.114"
              width="24.5668"
              height="24.5668"
              rx="2"
              transform="rotate(-45 1086.37 12.114)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="1023.19"
              y="10.557"
              width="31.3753"
              height="31.3753"
              rx="2"
              transform="rotate(-45 1023.19 10.557)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="1054.78"
              y="40.4071"
              width="28.8601"
              height="28.8601"
              rx="2"
              transform="rotate(-45 1054.78 40.4071)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="1024"
              y="68.4071"
              width="31.5319"
              height="31.5319"
              rx="2"
              transform="rotate(-45 1024 68.4071)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="992.944"
              y="40.3518"
              width="34.4387"
              height="34.4387"
              rx="2"
              transform="rotate(-45 992.944 40.3518)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="992.944"
              y="95.3518"
              width="34.4387"
              height="34.4387"
              rx="2"
              transform="rotate(-45 992.944 95.3518)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="963.648"
              y="11.3518"
              width="36.1016"
              height="36.1016"
              rx="2"
              transform="rotate(-45 963.648 11.3518)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="963"
              y="68.5277"
              width="36.1016"
              height="36.1016"
              rx="2"
              transform="rotate(-45 963 68.5277)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="934"
              y="39.5277"
              width="36.1016"
              height="36.1016"
              rx="2"
              transform="rotate(-45 934 39.5277)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="934"
              y="96.5277"
              width="36.1016"
              height="36.1016"
              rx="2"
              transform="rotate(-45 934 96.5277)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="879.528"
              y="39.5277"
              width="32.9001"
              height="32.9001"
              rx="2"
              transform="rotate(-45 879.528 39.5277)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="879.528"
              y="94.2638"
              width="32.9001"
              height="32.9001"
              rx="2"
              transform="rotate(-45 879.528 94.2638)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="850"
              y="10.2638"
              width="32.9001"
              height="32.9001"
              rx="2"
              transform="rotate(-45 850 10.2638)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="851"
              y="69.2638"
              width="32.9001"
              height="32.9001"
              rx="2"
              transform="rotate(-45 851 69.2638)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="825.896"
              y="39.368"
              width="25.9764"
              height="25.9764"
              rx="2"
              transform="rotate(-45 825.896 39.368)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="798"
              y="10.3682"
              width="25.9764"
              height="25.9764"
              rx="2"
              transform="rotate(-45 798 10.3682)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="798"
              y="68.3682"
              width="25.9764"
              height="25.9764"
              rx="2"
              transform="rotate(-45 798 68.3682)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="769"
              y="42.3682"
              width="25.9764"
              height="25.9764"
              rx="2"
              transform="rotate(-45 769 42.3682)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="746.816"
              y="70.1841"
              width="16.3373"
              height="16.3373"
              rx="2"
              transform="rotate(-45 746.816 70.1841)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="747"
              y="10.5522"
              width="16.3373"
              height="16.3373"
              rx="2"
              transform="rotate(-45 747 10.5522)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="719"
              y="39.5522"
              width="14.5326"
              height="14.5326"
              rx="2"
              transform="rotate(-45 719 39.5522)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="694"
              y="11.2761"
              width="10.0947"
              height="10.0947"
              rx="2"
              transform="rotate(-45 694 11.2761)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="905"
              y="11.5277"
              width="36.1016"
              height="36.1016"
              rx="2"
              transform="rotate(-45 905 11.5277)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="905"
              y="68.5277"
              width="36.1016"
              height="36.1016"
              rx="2"
              transform="rotate(-45 905 68.5277)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="1087.09"
              y="69.0929"
              width="24.1729"
              height="24.1729"
              rx="2"
              transform="rotate(-45 1087.09 69.0929)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="1179.27"
              y="40.2427"
              width="14.4852"
              height="14.4852"
              rx="2"
              transform="rotate(-45 1179.27 40.2427)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="1148.88"
              y="12.1213"
              width="17.4852"
              height="17.4852"
              rx="2"
              transform="rotate(-45 1148.88 12.1213)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
            <rect
              x="1211.95"
              y="12.0459"
              width="10.0292"
              height="10.0292"
              rx="2"
              transform="rotate(-45 1211.95 12.0459)"
              fill="#D9D9D9"
              fillOpacity="0.1"
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_676_9446"
            x1="1576"
            y1="88"
            x2="1576"
            y2="-0.999993"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1C3C7D" />
            <stop offset="0.495573" stopColor="#11232F" stopOpacity="0" />
            <stop offset="1" stopColor="#425D7A" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_676_9446"
            x1="1576"
            y1="88"
            x2="1576"
            y2="-9.09091"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="0.0001" stopColor="#0FAFEA" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_676_9446"
            x1="344"
            y1="88"
            x2="344"
            y2="-0.999993"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1C3C7D" />
            <stop offset="0.495573" stopColor="#11232F" stopOpacity="0" />
            <stop offset="1" stopColor="#425D7A" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_676_9446"
            x1="344"
            y1="88"
            x2="344"
            y2="-9.09091"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="0.0001" stopColor="#0FAFEA" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_676_9446"
            x1="957.964"
            y1="0.164836"
            x2="957.964"
            y2="93"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.20157" stopColor="#8130D3" />
            <stop offset="0.529616" stopColor="#353DBF" stopOpacity="0.5" />
            <stop offset="1" stopColor="#3987FA" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_676_9446"
            x1="957.503"
            y1="100.516"
            x2="957.503"
            y2="-11"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4DD9DE" />
            <stop offset="0.500427" stopColor="#1CB2DE" />
            <stop offset="1" stopColor="#5DA8DF" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_676_9446"
            x1="958"
            y1="106"
            x2="958"
            y2="-2.00001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CFD0D5" />
            <stop offset="0.500427" stopColor="#292E39" />
            <stop offset="1" stopColor="#EFEFEF" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_676_9446"
            x1="960.964"
            y1="3.16484"
            x2="960.964"
            y2="96"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.20157" stopColor="#8130D3" />
            <stop offset="0.529616" stopColor="#353DBF" stopOpacity="0.5" />
            <stop offset="1" stopColor="#3987FA" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex absolute top-0  opacity-[0.8] left-auto h-[80%]">
        <Image
          src="/star-animation.gif"
          className="w-auto"
          height={400}
          width={800}
          alt="logo"
        />
        <Image
          src="/star-animation.gif"
          className="w-auto"
          height={400}
          width={800}
          alt="logo"
        />
        <Image
          src="/star-animation.gif"
          className="w-auto"
          height={400}
          width={800}
          alt="logo"
        />
      </div>
      <Image
        src="/logo.png"
        className="absolute top-0 left-auto h-full w-auto"
        height={400}
        width={400}
        alt="logo"
      />

      <div className=" absolute sm:top-[45%] top-[60%] right-[4%] flex gap-4">
        <FullScreenButton />
        <LogoutButton />
      </div>
    </header>
  );
};

export default Header;
