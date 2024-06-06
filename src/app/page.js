import Footer from "@/components/Footer";
import Game from "@/components/Game";
import Header from "@/components/Header";
import Image from "next/image";
import { Suspense } from "react";

async function getGames() {
  const res = await fetch("http://localhost:3000/api/games", {
    next: { tags: ["games"] },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}

async function RenderGame() {
  const games = await getGames();
  return <Game data={games} />;
}

const Home = async () => {
  const games = await getGames();
  return (
    <main className="relative w-full overflow-hidden">
      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto absolute top-0 left-0 object-cover"
      >
        <g opacity="0.5" clip-path="url(#clip0_618_11011)">
          <mask
            id="mask0_618_11011"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="-854"
            y="-82"
            width="1847"
            height="1168"
          >
            <path d="M993 -82H-854V1085.82H993V-82Z" fill="white" />
          </mask>
          <g mask="url(#mask0_618_11011)">
            <g style={{ mixBlendMode: "overlay" }} opacity="0.91">
              <path
                opacity="0.83"
                d="M203.871 179.884C430.603 -212.827 568.683 -557.58 512.281 -590.144C455.88 -622.708 226.354 -330.75 -0.377563 61.9612C-227.11 454.672 -365.189 799.426 -308.788 831.989C-252.386 864.553 -22.8607 572.595 203.871 179.884Z"
                fill="url(#paint0_radial_618_11011)"
              />
              <path
                opacity="0.83"
                d="M518.505 540.675C641.682 118.354 708.82 -233.547 668.462 -245.318C628.104 -257.089 495.533 75.7275 372.356 498.048C249.179 920.369 182.041 1272.27 222.399 1284.04C262.757 1295.81 395.328 962.996 518.505 540.675Z"
                fill="url(#paint1_radial_618_11011)"
              />
              <path
                opacity="0.83"
                d="M643.867 589.103C729.164 157.534 741.22 -203.605 670.796 -217.524C600.372 -231.443 474.136 107.13 388.839 538.699C303.543 970.268 291.486 1331.41 361.911 1345.33C432.335 1359.24 558.571 1020.67 643.867 589.103Z"
                fill="url(#paint2_radial_618_11011)"
              />
              <path
                opacity="0.83"
                d="M710.137 589.093C795.433 157.524 807.49 -203.616 737.066 -217.534C666.642 -231.453 540.405 107.119 455.109 538.688C369.812 970.257 357.756 1331.4 428.18 1345.32C498.604 1359.23 624.841 1020.66 710.137 589.093Z"
                fill="url(#paint3_radial_618_11011)"
              />
              <path
                d="M803.222 574.721C839.804 136.327 811.467 -223.901 739.929 -229.87C668.391 -235.84 580.743 114.71 544.161 553.104C507.579 991.497 535.917 1351.72 607.454 1357.69C678.992 1363.66 766.64 1013.11 803.222 574.721Z"
                fill="url(#paint4_radial_618_11011)"
              />
              <path
                d="M855.735 1375.65C927.521 1375.65 985.715 1019.02 985.715 579.106C985.715 139.189 927.521 -217.435 855.735 -217.435C783.948 -217.435 725.754 139.189 725.754 579.106C725.754 1019.02 783.948 1375.65 855.735 1375.65Z"
                fill="url(#paint5_radial_618_11011)"
              />
              <path
                opacity="0.58"
                d="M377.572 615.339C511.661 303.238 566.894 27.2582 500.937 -1.07899C434.98 -29.4162 272.811 200.62 138.722 512.721C4.63246 824.823 -50.5999 1100.8 15.3568 1129.14C81.3135 1157.48 243.483 927.441 377.572 615.339Z"
                fill="url(#paint6_radial_618_11011)"
              />
              <path
                opacity="0.58"
                d="M282.535 641.658C485.44 169.384 569.014 -248.231 469.204 -291.113C369.394 -333.995 123.995 14.0955 -78.9095 486.369C-281.814 958.642 -365.389 1376.26 -265.579 1419.14C-165.768 1462.02 79.6305 1113.93 282.535 641.658Z"
                fill="url(#paint7_radial_618_11011)"
              />
              <path
                opacity="0.58"
                d="M969.502 1444.69C1078.13 1444.69 1166.2 1028 1166.2 513.984C1166.2 -0.0319824 1078.13 -416.724 969.502 -416.724C860.87 -416.724 772.807 -0.0319824 772.807 513.984C772.807 1028 860.87 1444.69 969.502 1444.69Z"
                fill="url(#paint8_radial_618_11011)"
              />
              <path
                opacity="0.73"
                d="M372.259 46.839C510.147 -274.103 584.564 -550.331 538.473 -570.133C492.383 -589.935 343.239 -345.813 205.351 -24.8704C67.4637 296.072 -6.95275 572.3 39.1376 592.102C85.2281 611.904 234.372 367.781 372.259 46.839Z"
                fill="url(#paint9_radial_618_11011)"
              />
              <path
                opacity="0.73"
                d="M336.636 66.5841C474.524 -254.358 548.941 -530.586 502.85 -550.388C456.76 -570.19 307.616 -326.068 169.728 -5.12532C31.8406 315.817 -42.5758 592.045 3.51459 611.847C49.605 631.649 198.749 387.526 336.636 66.5841Z"
                fill="url(#paint10_radial_618_11011)"
              />
              <path
                opacity="0.73"
                d="M45.3164 286.603C267.678 64.2421 415.057 -148.898 374.497 -189.458C333.936 -230.018 120.796 -82.6392 -101.565 139.722C-323.926 362.083 -471.305 575.223 -430.745 615.783C-390.185 656.344 -177.045 508.965 45.3164 286.603Z"
                fill="url(#paint11_radial_618_11011)"
              />
            </g>
            <path
              d="M507.894 1012.83C513.869 1012.83 518.713 1007.99 518.713 1002.01C518.713 996.036 513.869 991.191 507.894 991.191C501.918 991.191 497.074 996.036 497.074 1002.01C497.074 1007.99 501.918 1012.83 507.894 1012.83Z"
              fill="url(#paint12_radial_618_11011)"
            />
            <path
              d="M292.566 543.261C292.561 541.114 293.192 539.013 294.38 537.225C295.569 535.437 297.261 534.042 299.243 533.217C301.225 532.391 303.407 532.172 305.514 532.587C307.62 533.002 309.556 534.033 311.076 535.549C312.596 537.066 313.633 538.999 314.054 541.104C314.475 543.209 314.261 545.392 313.441 547.376C312.621 549.36 311.23 551.056 309.446 552.25C307.661 553.443 305.562 554.08 303.415 554.08C301.992 554.084 300.582 553.807 299.266 553.265C297.95 552.723 296.754 551.927 295.746 550.922C294.738 549.917 293.938 548.723 293.393 547.408C292.847 546.093 292.566 544.684 292.566 543.261Z"
              fill="url(#paint13_radial_618_11011)"
            />
            <path
              d="M535.198 254.486C538.909 238.834 529.229 223.136 513.577 219.424C497.925 215.713 482.227 225.393 478.515 241.045C474.804 256.697 484.484 272.395 500.136 276.107C515.788 279.818 531.486 270.138 535.198 254.486Z"
              fill="url(#paint14_radial_618_11011)"
            />
            <path
              d="M41.5654 52.3447C50.8134 52.3447 58.3104 44.8476 58.3104 35.5996C58.3104 26.3515 50.8134 18.8545 41.5654 18.8545C32.3173 18.8545 24.8203 26.3515 24.8203 35.5996C24.8203 44.8476 32.3173 52.3447 41.5654 52.3447Z"
              fill="url(#paint15_radial_618_11011)"
            />
            <path
              d="M157.957 952.188C157.957 948.877 158.939 945.639 160.779 942.885C162.619 940.132 165.234 937.985 168.294 936.718C171.354 935.451 174.721 935.119 177.969 935.765C181.217 936.411 184.201 938.006 186.543 940.348C188.885 942.69 190.479 945.673 191.125 948.922C191.772 952.17 191.44 955.537 190.173 958.597C188.905 961.656 186.759 964.272 184.005 966.111C181.251 967.951 178.014 968.934 174.702 968.934C170.261 968.934 166.002 967.169 162.862 964.029C159.721 960.889 157.957 956.63 157.957 952.188Z"
              fill="url(#paint16_radial_618_11011)"
            />
            <path
              d="M762.902 835.002C762.902 831.691 763.884 828.453 765.724 825.699C767.564 822.946 770.18 820.799 773.239 819.532C776.299 818.265 779.666 817.933 782.914 818.579C786.162 819.225 789.146 820.82 791.488 823.162C793.83 825.504 795.425 828.487 796.071 831.736C796.717 834.984 796.385 838.351 795.118 841.41C793.85 844.47 791.704 847.085 788.95 848.925C786.197 850.765 782.959 851.747 779.647 851.747C777.448 851.747 775.271 851.314 773.239 850.473C771.208 849.631 769.362 848.398 767.807 846.843C766.252 845.288 765.019 843.442 764.177 841.41C763.335 839.379 762.902 837.201 762.902 835.002Z"
              fill="url(#paint17_radial_618_11011)"
            />
            <path
              d="M746.127 913.775C746.121 910.456 747.1 907.21 748.94 904.447C750.779 901.685 753.397 899.53 756.462 898.256C759.526 896.982 762.9 896.646 766.156 897.289C769.412 897.933 772.404 899.529 774.753 901.873C777.101 904.218 778.702 907.207 779.352 910.462C780.001 913.717 779.671 917.091 778.402 920.158C777.133 923.225 774.983 925.846 772.224 927.691C769.465 929.535 766.22 930.52 762.902 930.52C758.458 930.52 754.196 928.757 751.051 925.617C747.906 922.478 746.135 918.219 746.127 913.775Z"
              fill="url(#paint18_radial_618_11011)"
            />
            <path
              d="M917.086 284.358C917.08 281.039 918.059 277.793 919.899 275.03C921.738 272.268 924.356 270.113 927.421 268.839C930.485 267.565 933.859 267.229 937.115 267.872C940.371 268.516 943.363 270.112 945.712 272.456C948.06 274.801 949.661 277.79 950.31 281.045C950.96 284.3 950.63 287.674 949.361 290.741C948.092 293.808 945.942 296.429 943.183 298.274C940.424 300.118 937.179 301.103 933.861 301.103C931.659 301.107 929.478 300.676 927.443 299.837C925.408 298.997 923.559 297.764 922.001 296.209C920.443 294.653 919.207 292.806 918.363 290.773C917.52 288.739 917.086 286.559 917.086 284.358Z"
              fill="url(#paint19_radial_618_11011)"
            />
            <path
              d="M395.129 76.4887C395.129 73.1769 396.111 69.9394 397.951 67.1857C399.791 64.432 402.406 62.2857 405.466 61.0183C408.526 59.7509 411.892 59.4193 415.141 60.0654C418.389 60.7115 421.373 62.3063 423.714 64.6482C426.056 66.99 427.651 69.9737 428.297 73.2219C428.943 76.4702 428.612 79.8371 427.344 82.8968C426.077 85.9566 423.931 88.5718 421.177 90.4118C418.423 92.2517 415.186 93.2338 411.874 93.2338C409.675 93.2338 407.497 92.8007 405.466 91.9592C403.434 91.1177 401.588 89.8842 400.033 88.3293C398.479 86.7744 397.245 84.9284 396.403 82.8968C395.562 80.8652 395.129 78.6877 395.129 76.4887Z"
              fill="url(#paint20_radial_618_11011)"
            />
            <path
              d="M536.018 35.5994C536.023 32.2888 537.01 29.0542 538.854 26.3044C540.697 23.5545 543.315 21.4129 546.375 20.15C549.435 18.8871 552.801 18.5597 556.048 19.2092C559.294 19.8586 562.275 21.4557 564.614 23.7987C566.953 26.1418 568.544 29.1255 569.188 32.3729C569.832 35.6203 569.499 38.9857 568.23 42.0438C566.962 45.1018 564.816 47.7153 562.063 49.5539C559.31 51.3926 556.073 52.374 552.763 52.374C550.561 52.374 548.381 51.9399 546.348 51.0965C544.314 50.2531 542.467 49.0171 540.912 47.459C539.356 45.901 538.124 44.0515 537.284 42.0165C536.444 39.9815 536.014 37.8009 536.018 35.5994Z"
              fill="url(#paint21_radial_618_11011)"
            />
            <path
              d="M191.416 397.301C191.416 395.645 191.907 394.027 192.827 392.65C193.747 391.273 195.055 390.2 196.585 389.566C198.114 388.932 199.798 388.767 201.422 389.09C203.046 389.413 204.538 390.21 205.709 391.381C206.88 392.552 207.677 394.044 208 395.668C208.323 397.292 208.157 398.975 207.524 400.505C206.89 402.035 205.817 403.343 204.44 404.263C203.063 405.183 201.444 405.674 199.789 405.674C197.568 405.674 195.438 404.792 193.868 403.222C192.298 401.651 191.416 399.522 191.416 397.301Z"
              fill="url(#paint22_radial_618_11011)"
            />
            <path
              d="M698.957 395.62C698.951 393.602 699.545 391.627 700.662 389.945C701.779 388.264 703.37 386.952 705.233 386.176C707.097 385.399 709.149 385.193 711.129 385.583C713.11 385.973 714.93 386.942 716.36 388.368C717.789 389.793 718.764 391.611 719.16 393.59C719.556 395.57 719.355 397.622 718.584 399.488C717.813 401.353 716.506 402.948 714.827 404.07C713.149 405.192 711.176 405.791 709.157 405.791C706.457 405.791 703.867 404.721 701.955 402.814C700.043 400.908 698.965 398.321 698.957 395.62Z"
              fill="url(#paint23_radial_618_11011)"
            />
            <path
              d="M112.014 742.419C115.656 719.703 100.194 698.335 77.4781 694.693C54.7621 691.05 33.3943 706.512 29.7517 729.228C26.1091 751.944 41.5712 773.312 64.2872 776.954C87.0031 780.597 108.371 765.135 112.014 742.419Z"
              fill="url(#paint24_radial_618_11011)"
            />
            <path
              d="M289.231 149.435C306.51 134.244 308.202 107.924 293.012 90.6452C277.822 73.3668 251.501 71.6738 234.223 86.864C216.944 102.054 215.252 128.375 230.442 145.653C245.632 162.932 271.953 164.625 289.231 149.435Z"
              fill="url(#paint25_radial_618_11011)"
            />
          </g>
          <mask
            id="mask1_618_11011"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="993"
            y="-82"
            width="1847"
            height="1168"
          >
            <path d="M993 -82H2840V1085.82H993V-82Z" fill="white" />
          </mask>
          <g mask="url(#mask1_618_11011)">
            <g style={{ mixBlendMode: "overlay" }} opacity="0.91">
              <path
                opacity="0.83"
                d="M1782.13 179.885C1555.4 -212.826 1417.32 -557.58 1473.72 -590.143C1530.12 -622.707 1759.65 -330.75 1986.38 61.9616C2213.11 454.673 2351.19 799.426 2294.79 831.99C2238.39 864.553 2008.86 572.596 1782.13 179.885Z"
                fill="url(#paint26_radial_618_11011)"
              />
              <path
                opacity="0.83"
                d="M1467.5 540.675C1344.32 118.354 1277.18 -233.547 1317.54 -245.318C1357.9 -257.089 1490.47 75.7275 1613.64 498.048C1736.82 920.369 1803.96 1272.27 1763.6 1284.04C1723.24 1295.81 1590.67 962.996 1467.5 540.675Z"
                fill="url(#paint27_radial_618_11011)"
              />
              <path
                opacity="0.83"
                d="M1342.13 589.103C1256.84 157.534 1244.78 -203.605 1315.2 -217.524C1385.63 -231.443 1511.86 107.13 1597.16 538.699C1682.46 970.268 1694.51 1331.41 1624.09 1345.33C1553.67 1359.25 1427.43 1020.67 1342.13 589.103Z"
                fill="url(#paint28_radial_618_11011)"
              />
              <path
                opacity="0.83"
                d="M1275.86 589.093C1190.57 157.524 1178.51 -203.615 1248.93 -217.534C1319.36 -231.453 1445.59 107.12 1530.89 538.689C1616.19 970.258 1628.24 1331.4 1557.82 1345.32C1487.4 1359.23 1361.16 1020.66 1275.86 589.093Z"
                fill="url(#paint29_radial_618_11011)"
              />
              <path
                d="M1182.78 574.721C1146.2 136.328 1174.53 -223.9 1246.07 -229.87C1317.61 -235.839 1405.26 114.71 1441.84 553.104C1478.42 991.498 1450.08 1351.73 1378.55 1357.69C1307.01 1363.66 1219.36 1013.12 1182.78 574.721Z"
                fill="url(#paint30_radial_618_11011)"
              />
              <path
                d="M1130.27 1375.65C1058.48 1375.65 1000.28 1019.02 1000.28 579.106C1000.28 139.189 1058.48 -217.435 1130.27 -217.435C1202.05 -217.435 1260.25 139.189 1260.25 579.106C1260.25 1019.02 1202.05 1375.65 1130.27 1375.65Z"
                fill="url(#paint31_radial_618_11011)"
              />
              <path
                opacity="0.58"
                d="M1608.43 615.34C1474.34 303.239 1419.11 27.2587 1485.06 -1.0785C1551.02 -29.4157 1713.19 200.621 1847.28 512.722C1981.37 824.823 2036.6 1100.8 1970.64 1129.14C1904.69 1157.48 1742.52 927.441 1608.43 615.34Z"
                fill="url(#paint32_radial_618_11011)"
              />
              <path
                opacity="0.58"
                d="M1703.46 641.658C1500.56 169.384 1416.99 -248.231 1516.8 -291.113C1616.61 -333.995 1862 14.0955 2064.91 486.369C2267.81 958.642 2351.39 1376.26 2251.58 1419.14C2151.77 1462.02 1906.37 1113.93 1703.46 641.658Z"
                fill="url(#paint33_radial_618_11011)"
              />
              <path
                opacity="0.58"
                d="M1016.5 1444.69C907.866 1444.69 819.802 1028 819.802 513.984C819.802 -0.0319824 907.866 -416.724 1016.5 -416.724C1125.13 -416.724 1213.19 -0.0319824 1213.19 513.984C1213.19 1028 1125.13 1444.69 1016.5 1444.69Z"
                fill="url(#paint34_radial_618_11011)"
              />
              <path
                opacity="0.73"
                d="M1613.74 46.839C1475.85 -274.103 1401.44 -550.331 1447.53 -570.133C1493.62 -589.935 1642.76 -345.813 1780.65 -24.8704C1918.54 296.072 1992.95 572.3 1946.86 592.102C1900.77 611.904 1751.63 367.781 1613.74 46.839Z"
                fill="url(#paint35_radial_618_11011)"
              />
              <path
                opacity="0.73"
                d="M1649.36 66.5845C1511.48 -254.358 1437.06 -530.586 1483.15 -550.388C1529.24 -570.19 1678.38 -326.067 1816.27 -5.12483C1954.16 315.818 2028.58 592.045 1982.49 611.847C1936.4 631.649 1787.25 387.527 1649.36 66.5845Z"
                fill="url(#paint36_radial_618_11011)"
              />
            </g>
            <path
              d="M1478.11 1012.83C1472.13 1012.83 1467.29 1007.99 1467.29 1002.01C1467.29 996.036 1472.13 991.191 1478.11 991.191C1484.08 991.191 1488.93 996.036 1488.93 1002.01C1488.93 1007.99 1484.08 1012.83 1478.11 1012.83Z"
              fill="url(#paint37_radial_618_11011)"
            />
            <path
              d="M1693.43 543.261C1693.44 541.114 1692.81 539.014 1691.62 537.226C1690.43 535.438 1688.74 534.043 1686.76 533.217C1684.77 532.391 1682.59 532.172 1680.49 532.588C1678.38 533.003 1676.44 534.034 1674.92 535.55C1673.4 537.066 1672.37 538.999 1671.95 541.104C1671.53 543.21 1671.74 545.392 1672.56 547.377C1673.38 549.361 1674.77 551.057 1676.55 552.25C1678.34 553.444 1680.44 554.081 1682.58 554.081C1684.01 554.085 1685.42 553.808 1686.73 553.266C1688.05 552.724 1689.25 551.927 1690.25 550.922C1691.26 549.917 1692.06 548.723 1692.61 547.408C1693.15 546.094 1693.43 544.685 1693.43 543.261Z"
              fill="url(#paint38_radial_618_11011)"
            />
            <path
              d="M1450.8 254.486C1447.09 238.834 1456.77 223.136 1472.42 219.424C1488.08 215.713 1503.77 225.393 1507.48 241.045C1511.2 256.697 1501.52 272.395 1485.86 276.107C1470.21 279.818 1454.51 270.138 1450.8 254.486Z"
              fill="url(#paint39_radial_618_11011)"
            />
            <path
              d="M1828.04 952.189C1828.04 948.877 1827.06 945.64 1825.22 942.886C1823.38 940.132 1820.77 937.986 1817.71 936.718C1814.65 935.451 1811.28 935.12 1808.03 935.766C1804.78 936.412 1801.8 938.007 1799.46 940.348C1797.12 942.69 1795.52 945.674 1794.87 948.922C1794.23 952.17 1794.56 955.537 1795.83 958.597C1797.09 961.657 1799.24 964.272 1801.99 966.112C1804.75 967.952 1807.99 968.934 1811.3 968.934C1815.74 968.934 1820 967.17 1823.14 964.029C1826.28 960.889 1828.04 956.63 1828.04 952.189Z"
              fill="url(#paint40_radial_618_11011)"
            />
            <path
              d="M1223.1 835.003C1223.1 831.691 1222.12 828.454 1220.28 825.7C1218.44 822.946 1215.82 820.8 1212.76 819.532C1209.7 818.265 1206.33 817.933 1203.09 818.58C1199.84 819.226 1196.85 820.821 1194.51 823.162C1192.17 825.504 1190.58 828.488 1189.93 831.736C1189.28 834.984 1189.61 838.351 1190.88 841.411C1192.15 844.471 1194.3 847.086 1197.05 848.926C1199.8 850.766 1203.04 851.748 1206.35 851.748C1208.55 851.748 1210.73 851.315 1212.76 850.473C1214.79 849.632 1216.64 848.398 1218.19 846.843C1219.75 845.289 1220.98 843.443 1221.82 841.411C1222.66 839.379 1223.1 837.202 1223.1 835.003Z"
              fill="url(#paint41_radial_618_11011)"
            />
            <path
              d="M1239.87 913.775C1239.88 910.456 1238.9 907.21 1237.06 904.448C1235.22 901.685 1232.6 899.531 1229.54 898.257C1226.47 896.982 1223.1 896.646 1219.84 897.29C1216.59 897.934 1213.6 899.529 1211.25 901.874C1208.9 904.219 1207.3 907.208 1206.65 910.462C1206 913.717 1206.33 917.091 1207.6 920.158C1208.87 923.225 1211.02 925.847 1213.78 927.691C1216.54 929.536 1219.78 930.52 1223.1 930.52C1227.54 930.52 1231.8 928.757 1234.95 925.618C1238.09 922.478 1239.87 918.219 1239.87 913.775Z"
              fill="url(#paint42_radial_618_11011)"
            />
            <path
              d="M1068.91 284.358C1068.92 281.039 1067.94 277.793 1066.1 275.03C1064.26 272.268 1061.64 270.113 1058.58 268.839C1055.51 267.565 1052.14 267.229 1048.88 267.872C1045.63 268.516 1042.64 270.112 1040.29 272.456C1037.94 274.801 1036.34 277.79 1035.69 281.045C1035.04 284.3 1035.37 287.674 1036.64 290.741C1037.91 293.808 1040.06 296.429 1042.82 298.274C1045.58 300.118 1048.82 301.103 1052.14 301.103C1054.34 301.107 1056.52 300.676 1058.56 299.837C1060.59 298.997 1062.44 297.764 1064 296.209C1065.56 294.653 1066.79 292.806 1067.64 290.773C1068.48 288.739 1068.91 286.559 1068.91 284.358Z"
              fill="url(#paint43_radial_618_11011)"
            />
            <path
              d="M1590.87 76.4892C1590.87 73.1774 1589.89 69.9399 1588.05 67.1862C1586.21 64.4324 1583.59 62.2862 1580.53 61.0188C1577.47 59.7514 1574.11 59.4198 1570.86 60.0659C1567.61 60.712 1564.63 62.3068 1562.29 64.6487C1559.94 66.9905 1558.35 69.9742 1557.7 73.2224C1557.06 76.4706 1557.39 79.8375 1558.66 82.8973C1559.92 85.9571 1562.07 88.5723 1564.82 90.4123C1567.58 92.2522 1570.81 93.2343 1574.13 93.2343C1576.33 93.2343 1578.5 92.8012 1580.53 91.9597C1582.57 91.1181 1584.41 89.8847 1585.97 88.3298C1587.52 86.7749 1588.75 84.9289 1589.6 82.8973C1590.44 80.8657 1590.87 78.6882 1590.87 76.4892Z"
              fill="url(#paint44_radial_618_11011)"
            />
            <path
              d="M1449.98 35.5994C1449.98 32.2888 1448.99 29.0542 1447.15 26.3044C1445.3 23.5545 1442.69 21.4129 1439.62 20.15C1436.56 18.8871 1433.2 18.5597 1429.95 19.2092C1426.71 19.8586 1423.73 21.4557 1421.39 23.7987C1419.05 26.1418 1417.46 29.1255 1416.81 32.3729C1416.17 35.6203 1416.5 38.9857 1417.77 42.0438C1419.04 45.1018 1421.18 47.7153 1423.94 49.5539C1426.69 51.3926 1429.93 52.374 1433.24 52.374C1435.44 52.374 1437.62 51.9399 1439.65 51.0965C1441.69 50.2531 1443.53 49.0171 1445.09 47.459C1446.64 45.901 1447.88 44.0515 1448.72 42.0165C1449.56 39.9815 1449.99 37.8009 1449.98 35.5994Z"
              fill="url(#paint45_radial_618_11011)"
            />
            <path
              d="M1794.58 397.302C1794.58 395.646 1794.09 394.028 1793.17 392.651C1792.25 391.274 1790.95 390.201 1789.42 389.567C1787.89 388.933 1786.2 388.768 1784.58 389.091C1782.95 389.414 1781.46 390.211 1780.29 391.382C1779.12 392.553 1778.32 394.045 1778 395.669C1777.68 397.293 1777.84 398.976 1778.48 400.506C1779.11 402.036 1780.18 403.344 1781.56 404.264C1782.94 405.184 1784.56 405.675 1786.21 405.675C1788.43 405.675 1790.56 404.793 1792.13 403.223C1793.7 401.652 1794.58 399.523 1794.58 397.302Z"
              fill="url(#paint46_radial_618_11011)"
            />
            <path
              d="M1287.04 395.621C1287.05 393.602 1286.46 391.627 1285.34 389.946C1284.22 388.265 1282.63 386.953 1280.77 386.176C1278.9 385.4 1276.85 385.193 1274.87 385.584C1272.89 385.974 1271.07 386.943 1269.64 388.368C1268.21 389.794 1267.24 391.611 1266.84 393.591C1266.44 395.57 1266.64 397.623 1267.42 399.488C1268.19 401.354 1269.49 402.949 1271.17 404.071C1272.85 405.193 1274.82 405.792 1276.84 405.792C1279.54 405.792 1282.13 404.721 1284.05 402.815C1285.96 400.908 1287.04 398.321 1287.04 395.621Z"
              fill="url(#paint47_radial_618_11011)"
            />
            <path
              d="M1873.99 742.419C1870.34 719.703 1885.81 698.336 1908.52 694.693C1931.24 691.05 1952.61 706.513 1956.25 729.228C1959.89 751.944 1944.43 773.312 1921.71 776.955C1899 780.597 1877.63 765.135 1873.99 742.419Z"
              fill="url(#paint48_radial_618_11011)"
            />
            <path
              d="M1696.77 149.435C1679.49 134.244 1677.8 107.924 1692.99 90.6452C1708.18 73.3668 1734.5 71.6738 1751.78 86.864C1769.06 102.054 1770.75 128.375 1755.56 145.653C1740.37 162.932 1714.05 164.625 1696.77 149.435Z"
              fill="url(#paint49_radial_618_11011)"
            />
          </g>
        </g>
        <defs>
          <radialGradient
            id="paint0_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(90.6456 114.615) rotate(30) scale(114.941 821.01)"
          >
            <stop stopColor="white" />
            <stop offset="0.08" stopColor="white" stop-opacity="0.82" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.63" />
            <stop offset="0.26" stopColor="white" stop-opacity="0.46" />
            <stop offset="0.36" stopColor="white" stop-opacity="0.32" />
            <stop offset="0.46" stopColor="white" stop-opacity="0.2" />
            <stop offset="0.57" stopColor="white" stop-opacity="0.11" />
            <stop offset="0.69" stopColor="white" stop-opacity="0.05" />
            <stop offset="0.82" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(430.38 514.296) rotate(16.2602) scale(74.1925 794.92)"
          >
            <stop stopColor="white" />
            <stop offset="0.08" stopColor="white" stop-opacity="0.82" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.63" />
            <stop offset="0.26" stopColor="white" stop-opacity="0.46" />
            <stop offset="0.36" stopColor="white" stop-opacity="0.32" />
            <stop offset="0.46" stopColor="white" stop-opacity="0.2" />
            <stop offset="0.57" stopColor="white" stop-opacity="0.11" />
            <stop offset="0.69" stopColor="white" stop-opacity="0.05" />
            <stop offset="0.82" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint2_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(536.011 566.614) rotate(11.18) scale(132.494 794.964)"
          >
            <stop stopColor="white" />
            <stop offset="0.08" stopColor="white" stop-opacity="0.82" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.63" />
            <stop offset="0.26" stopColor="white" stop-opacity="0.46" />
            <stop offset="0.36" stopColor="white" stop-opacity="0.32" />
            <stop offset="0.46" stopColor="white" stop-opacity="0.2" />
            <stop offset="0.57" stopColor="white" stop-opacity="0.11" />
            <stop offset="0.69" stopColor="white" stop-opacity="0.05" />
            <stop offset="0.82" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint3_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(603.519 566.879) rotate(11.18) scale(132.494 794.964)"
          >
            <stop stopColor="white" />
            <stop offset="0.08" stopColor="white" stop-opacity="0.82" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.63" />
            <stop offset="0.26" stopColor="white" stop-opacity="0.46" />
            <stop offset="0.36" stopColor="white" stop-opacity="0.32" />
            <stop offset="0.46" stopColor="white" stop-opacity="0.2" />
            <stop offset="0.57" stopColor="white" stop-opacity="0.11" />
            <stop offset="0.69" stopColor="white" stop-opacity="0.05" />
            <stop offset="0.82" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint4_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(693.331 564.664) rotate(4.77) scale(132.501 795.008)"
          >
            <stop stopColor="white" />
            <stop offset="0.08" stopColor="white" stop-opacity="0.82" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.63" />
            <stop offset="0.26" stopColor="white" stop-opacity="0.46" />
            <stop offset="0.36" stopColor="white" stop-opacity="0.32" />
            <stop offset="0.46" stopColor="white" stop-opacity="0.2" />
            <stop offset="0.57" stopColor="white" stop-opacity="0.11" />
            <stop offset="0.69" stopColor="white" stop-opacity="0.05" />
            <stop offset="0.82" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint5_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(876.799 578.31) scale(132.509 795.052)"
          >
            <stop stopColor="white" />
            <stop offset="0.08" stopColor="white" stop-opacity="0.82" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.63" />
            <stop offset="0.26" stopColor="white" stop-opacity="0.46" />
            <stop offset="0.36" stopColor="white" stop-opacity="0.32" />
            <stop offset="0.46" stopColor="white" stop-opacity="0.2" />
            <stop offset="0.57" stopColor="white" stop-opacity="0.11" />
            <stop offset="0.69" stopColor="white" stop-opacity="0.05" />
            <stop offset="0.82" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint6_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(277.618 571.94) rotate(23.25) scale(132.509 614.84)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.99" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.73" />
            <stop offset="0.34" stopColor="white" stop-opacity="0.51" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.33" />
            <stop offset="0.64" stopColor="white" stop-opacity="0.18" />
            <stop offset="0.78" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.9" stopColor="white" stop-opacity="0.02" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint7_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(118.697 570.832) rotate(23.25) scale(200.506 930.348)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.99" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.73" />
            <stop offset="0.34" stopColor="white" stop-opacity="0.51" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.33" />
            <stop offset="0.64" stopColor="white" stop-opacity="0.18" />
            <stop offset="0.78" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.9" stopColor="white" stop-opacity="0.02" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint8_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(991.296 513.835) scale(200.513 930.383)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.99" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.73" />
            <stop offset="0.34" stopColor="white" stop-opacity="0.51" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.33" />
            <stop offset="0.64" stopColor="white" stop-opacity="0.18" />
            <stop offset="0.78" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.9" stopColor="white" stop-opacity="0.02" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint9_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(278.531 6.56984) rotate(23.25) scale(88.5349 632.392)"
          >
            <stop stopColor="white" />
            <stop offset="0.08" stopColor="white" stop-opacity="0.82" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.63" />
            <stop offset="0.26" stopColor="white" stop-opacity="0.46" />
            <stop offset="0.36" stopColor="white" stop-opacity="0.32" />
            <stop offset="0.46" stopColor="white" stop-opacity="0.2" />
            <stop offset="0.57" stopColor="white" stop-opacity="0.11" />
            <stop offset="0.69" stopColor="white" stop-opacity="0.05" />
            <stop offset="0.82" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint10_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(243.449 26.5795) rotate(23.25) scale(88.5349 632.392)"
          >
            <stop stopColor="white" />
            <stop offset="0.08" stopColor="white" stop-opacity="0.82" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.63" />
            <stop offset="0.26" stopColor="white" stop-opacity="0.46" />
            <stop offset="0.36" stopColor="white" stop-opacity="0.32" />
            <stop offset="0.46" stopColor="white" stop-opacity="0.2" />
            <stop offset="0.57" stopColor="white" stop-opacity="0.11" />
            <stop offset="0.69" stopColor="white" stop-opacity="0.05" />
            <stop offset="0.82" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint11_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(-16.2729 222.947) rotate(45) scale(104.425 568.535)"
          >
            <stop stopColor="white" />
            <stop offset="0.08" stopColor="white" stop-opacity="0.82" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.63" />
            <stop offset="0.26" stopColor="white" stop-opacity="0.46" />
            <stop offset="0.36" stopColor="white" stop-opacity="0.32" />
            <stop offset="0.46" stopColor="white" stop-opacity="0.2" />
            <stop offset="0.57" stopColor="white" stop-opacity="0.11" />
            <stop offset="0.69" stopColor="white" stop-opacity="0.05" />
            <stop offset="0.82" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint12_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(507.894 1002.01) rotate(180) scale(10.8194 10.8195)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint13_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(303.415 543.261) rotate(180) scale(10.8194 10.8194)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint14_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(506.856 247.748) rotate(180) scale(29.127 29.127)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint15_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(41.5948 35.5996) rotate(180) scale(16.7451 16.7451)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint16_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(174.673 952.159) rotate(180) scale(16.7451)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint17_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(779.647 835.002) rotate(180) scale(16.7451 16.7451)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint18_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(762.902 913.745) rotate(180) scale(16.745 16.7451)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint19_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(933.831 284.358) rotate(180) scale(16.745 16.7451)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint20_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(411.874 76.4593) rotate(180) scale(16.7451 16.7451)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint21_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(552.763 35.5699) rotate(180) scale(16.7451 16.7451)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint22_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(199.789 397.419) rotate(180) scale(8.37253 8.37254)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint23_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(709.157 395.591) rotate(180) scale(10.2004 10.2004)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint24_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(70.8701 736.055) rotate(180) scale(41.6563)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint25_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(261.755 118.01) rotate(-180) scale(41.6563 41.6563)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint26_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1895.35 114.616) rotate(150) scale(114.941 821.01)"
          >
            <stop stopColor="white" />
            <stop offset="0.08" stopColor="white" stop-opacity="0.82" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.63" />
            <stop offset="0.26" stopColor="white" stop-opacity="0.46" />
            <stop offset="0.36" stopColor="white" stop-opacity="0.32" />
            <stop offset="0.46" stopColor="white" stop-opacity="0.2" />
            <stop offset="0.57" stopColor="white" stop-opacity="0.11" />
            <stop offset="0.69" stopColor="white" stop-opacity="0.05" />
            <stop offset="0.82" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint27_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1555.62 514.296) rotate(163.74) scale(74.1925 794.92)"
          >
            <stop stopColor="white" />
            <stop offset="0.08" stopColor="white" stop-opacity="0.82" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.63" />
            <stop offset="0.26" stopColor="white" stop-opacity="0.46" />
            <stop offset="0.36" stopColor="white" stop-opacity="0.32" />
            <stop offset="0.46" stopColor="white" stop-opacity="0.2" />
            <stop offset="0.57" stopColor="white" stop-opacity="0.11" />
            <stop offset="0.69" stopColor="white" stop-opacity="0.05" />
            <stop offset="0.82" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint28_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1449.99 566.614) rotate(168.82) scale(132.494 794.964)"
          >
            <stop stopColor="white" />
            <stop offset="0.08" stopColor="white" stop-opacity="0.82" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.63" />
            <stop offset="0.26" stopColor="white" stop-opacity="0.46" />
            <stop offset="0.36" stopColor="white" stop-opacity="0.32" />
            <stop offset="0.46" stopColor="white" stop-opacity="0.2" />
            <stop offset="0.57" stopColor="white" stop-opacity="0.11" />
            <stop offset="0.69" stopColor="white" stop-opacity="0.05" />
            <stop offset="0.82" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint29_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1382.48 566.879) rotate(168.82) scale(132.494 794.964)"
          >
            <stop stopColor="white" />
            <stop offset="0.08" stopColor="white" stop-opacity="0.82" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.63" />
            <stop offset="0.26" stopColor="white" stop-opacity="0.46" />
            <stop offset="0.36" stopColor="white" stop-opacity="0.32" />
            <stop offset="0.46" stopColor="white" stop-opacity="0.2" />
            <stop offset="0.57" stopColor="white" stop-opacity="0.11" />
            <stop offset="0.69" stopColor="white" stop-opacity="0.05" />
            <stop offset="0.82" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint30_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1292.67 564.664) rotate(175.23) scale(132.501 795.008)"
          >
            <stop stopColor="white" />
            <stop offset="0.08" stopColor="white" stop-opacity="0.82" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.63" />
            <stop offset="0.26" stopColor="white" stop-opacity="0.46" />
            <stop offset="0.36" stopColor="white" stop-opacity="0.32" />
            <stop offset="0.46" stopColor="white" stop-opacity="0.2" />
            <stop offset="0.57" stopColor="white" stop-opacity="0.11" />
            <stop offset="0.69" stopColor="white" stop-opacity="0.05" />
            <stop offset="0.82" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint31_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1109.2 578.31) rotate(180) scale(132.509 795.052)"
          >
            <stop stopColor="white" />
            <stop offset="0.08" stopColor="white" stop-opacity="0.82" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.63" />
            <stop offset="0.26" stopColor="white" stop-opacity="0.46" />
            <stop offset="0.36" stopColor="white" stop-opacity="0.32" />
            <stop offset="0.46" stopColor="white" stop-opacity="0.2" />
            <stop offset="0.57" stopColor="white" stop-opacity="0.11" />
            <stop offset="0.69" stopColor="white" stop-opacity="0.05" />
            <stop offset="0.82" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint32_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1708.38 571.941) rotate(156.75) scale(132.509 614.84)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.99" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.73" />
            <stop offset="0.34" stopColor="white" stop-opacity="0.51" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.33" />
            <stop offset="0.64" stopColor="white" stop-opacity="0.18" />
            <stop offset="0.78" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.9" stopColor="white" stop-opacity="0.02" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint33_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1867.3 570.832) rotate(156.75) scale(200.506 930.348)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.99" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.73" />
            <stop offset="0.34" stopColor="white" stop-opacity="0.51" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.33" />
            <stop offset="0.64" stopColor="white" stop-opacity="0.18" />
            <stop offset="0.78" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.9" stopColor="white" stop-opacity="0.02" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint34_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(994.704 513.835) rotate(180) scale(200.513 930.383)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.99" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.73" />
            <stop offset="0.34" stopColor="white" stop-opacity="0.51" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.33" />
            <stop offset="0.64" stopColor="white" stop-opacity="0.18" />
            <stop offset="0.78" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.9" stopColor="white" stop-opacity="0.02" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint35_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1707.47 6.56984) rotate(156.75) scale(88.5349 632.392)"
          >
            <stop stopColor="white" />
            <stop offset="0.08" stopColor="white" stop-opacity="0.82" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.63" />
            <stop offset="0.26" stopColor="white" stop-opacity="0.46" />
            <stop offset="0.36" stopColor="white" stop-opacity="0.32" />
            <stop offset="0.46" stopColor="white" stop-opacity="0.2" />
            <stop offset="0.57" stopColor="white" stop-opacity="0.11" />
            <stop offset="0.69" stopColor="white" stop-opacity="0.05" />
            <stop offset="0.82" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint36_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1742.55 26.58) rotate(156.75) scale(88.5349 632.392)"
          >
            <stop stopColor="white" />
            <stop offset="0.08" stopColor="white" stop-opacity="0.82" />
            <stop offset="0.17" stopColor="white" stop-opacity="0.63" />
            <stop offset="0.26" stopColor="white" stop-opacity="0.46" />
            <stop offset="0.36" stopColor="white" stop-opacity="0.32" />
            <stop offset="0.46" stopColor="white" stop-opacity="0.2" />
            <stop offset="0.57" stopColor="white" stop-opacity="0.11" />
            <stop offset="0.69" stopColor="white" stop-opacity="0.05" />
            <stop offset="0.82" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint37_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1478.11 1002.01) scale(10.8194 10.8195)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint38_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1682.58 543.261) scale(10.8194 10.8194)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint39_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1479.14 247.748) scale(29.127 29.127)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint40_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1811.33 952.159) scale(16.7451)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint41_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1206.35 835.003) scale(16.7451 16.7451)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint42_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1223.1 913.746) scale(16.745 16.7451)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint43_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1052.17 284.358) scale(16.745 16.7451)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint44_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1574.13 76.4597) scale(16.7451 16.7451)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint45_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1433.24 35.5699) scale(16.7451 16.7451)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint46_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1786.21 397.42) scale(8.37253 8.37254)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint47_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1276.84 395.591) scale(10.2004 10.2004)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint48_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1915.13 736.055) scale(41.6563)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint49_radial_618_11011"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(1724.24 118.01) scale(41.6563 41.6563)"
          >
            <stop stopColor="white" />
            <stop offset="0.01" stopColor="white" stop-opacity="0.96" />
            <stop offset="0.05" stopColor="white" stop-opacity="0.78" />
            <stop offset="0.09" stopColor="white" stop-opacity="0.61" />
            <stop offset="0.14" stopColor="white" stop-opacity="0.47" />
            <stop offset="0.2" stopColor="white" stop-opacity="0.34" />
            <stop offset="0.25" stopColor="white" stop-opacity="0.23" />
            <stop offset="0.32" stopColor="white" stop-opacity="0.15" />
            <stop offset="0.4" stopColor="white" stop-opacity="0.08" />
            <stop offset="0.49" stopColor="white" stop-opacity="0.03" />
            <stop offset="0.63" stopColor="white" stop-opacity="0.01" />
            <stop offset="1" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <clipPath id="clip0_618_11011">
            <rect width="1920" height="1080" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <div className="animated">
        <div className="wrapper">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
        </div>
      </div>
      <Image
        src={"/bg1.png"}
        fill
        alt="bg"
        priority={true}
        objectFit="cover"
        quality={100}
        objectPosition="center"
        className="z-[-2]"
      />
      <Header />
      <Suspense fallback={<h1>Loading</h1>}>
        <RenderGame />
      </Suspense>
      <Footer />
    </main>
  );
};

export default Home;
