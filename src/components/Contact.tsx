import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-black text-white flex items-start lg:items-start lg:pl-32 justify-center flex-col w-full sm:p-6 p-4 rounded-lg">
      {/* Title */}
      <h1 className="text-2xl sm:text-4xl font-bageta font-bold mb-3">
        Contact Us
      </h1>

      {/* Contact Details */}
      <div className="space-y-3 mt-2 text-base sm:text-lg">
        {/* Phone */}
        <div className="flex items-center space-x-4">
          <svg
            className="w-6 h-6"
            viewBox="0 0 27 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.4375 12.0736C7.5975 16.4569 11.07 20.0426 15.3225 22.273L18.6225 18.8577C19.035 18.4317 19.6275 18.3078 20.145 18.4782C21.825 19.0513 23.6325 19.3611 25.5 19.3611C26.3325 19.3611 27 20.0503 27 20.91V26.3311C27 27.1907 26.3325 27.8799 25.5 27.8799C11.415 27.8799 0 16.0929 0 1.54889C0 0.689254 0.675 0 1.5 0H6.75C7.5825 0 8.25 0.689254 8.25 1.54889C8.25 3.47725 8.55 5.34366 9.105 7.07841C9.27 7.61277 9.15 8.22458 8.7375 8.65053L5.4375 12.0736Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
          <span className="text-gray-300 text-sm font-helvetica  font-bold">
            +91 8980579954
          </span>
        </div>

        {/* Email */}
        <div className="flex flex-col py-3 sm:flex-row items-center justify-center">
          <div className="flex space-x-4 mb-4 sm:mb-0 items-center justify-center">
            {/* <svg
              className="w-6 h-6"
              viewBox="0 0 31 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4291 29.8309V22.1178C19.4291 21.7769 19.298 21.4499 19.0645 21.2088C18.831 20.9678 18.5144 20.8323 18.1842 20.8323H13.2044C12.8743 20.8323 12.5576 20.9678 12.3241 21.2088C12.0907 21.4499 11.9595 21.7769 11.9595 22.1178V29.8309C11.9595 30.1718 11.8283 30.4988 11.5949 30.7399C11.3614 30.981 11.0447 31.1164 10.7146 31.1164H3.24494C2.91476 31.1164 2.59811 30.981 2.36463 30.7399C2.13116 30.4988 2 30.1718 2 29.8309V14.9672C2.00279 14.7893 2.04002 14.6137 2.10951 14.4509C2.17899 14.2881 2.27933 14.1413 2.4046 14.0191L14.854 2.33704C15.0835 2.12024 15.3833 2 15.6943 2C16.0054 2 16.3052 2.12024 16.5347 2.33704L28.984 14.0191C29.1093 14.1413 29.2096 14.2881 29.2791 14.4509C29.3486 14.6137 29.3858 14.7893 29.3886 14.9672V29.8309C29.3886 30.1718 29.2575 30.4988 29.024 30.7399C28.7905 30.981 28.4739 31.1164 28.1437 31.1164H20.6741C20.3439 31.1164 20.0272 30.981 19.7938 30.7399C19.5603 30.4988 19.4291 30.1718 19.4291 29.8309Z"
                stroke="white"
                strokeOpacity="0.8"
                strokeWidth="2.48988"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg> */}

            <MdEmail className="w-6 h-6 text-white " />

            <p className="text-gray-300 font-bold  text-sm font-helvetica">
              kavishdialoft@gmail.com
            </p>
          </div>
        </div>
        <div className="flex  items-center sm:w-32 justify-around w-full">
          <a
            href="https://x.com/dialoft_ai"
            target="_blank"
            rel="AITellicaller Twitter"
            aria-label="AITellicaller Twitter"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.4436 3.2666H37.2317L24.5864 17.7193L39.4626 37.3862H27.8147L18.6916 25.4584L8.25273 37.3862H2.46114L15.9865 21.9274L1.71576 3.2666H13.6594L21.9058 14.1691L31.4436 3.2666ZM29.4122 33.9218H32.6194L11.9167 6.54909H8.47495L29.4122 33.9218Z"
                fill="white"
                fillOpacity="0.8"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/dialoft_ai"
            target="_blank"
            rel="AITellicaller Instagram"
            aria-label="AITellicaller Instagram"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_453_251)">
                <path
                  d="M20.5892 3.70766C26.0903 3.70766 26.7418 3.73179 28.9053 3.8283C30.9159 3.91677 32.0017 4.25456 32.7255 4.53605C33.6826 4.90601 34.3743 5.3564 35.0901 6.0722C35.8139 6.79604 36.2562 7.47966 36.6262 8.43674C36.9077 9.16057 37.2455 10.2544 37.334 12.257C37.4305 14.4285 37.4546 15.08 37.4546 20.5731C37.4546 26.0743 37.4305 26.7257 37.334 28.8892C37.2455 30.8998 36.9077 31.9856 36.6262 32.7094C36.2562 33.6665 35.8059 34.3582 35.0901 35.074C34.3662 35.7978 33.6826 36.2402 32.7255 36.6101C32.0017 36.8916 30.9079 37.2294 28.9053 37.3179C26.7338 37.4144 26.0823 37.4385 20.5892 37.4385C15.088 37.4385 14.4366 37.4144 12.2731 37.3179C10.2624 37.2294 9.17666 36.8916 8.45282 36.6101C7.49575 36.2402 6.80408 35.7898 6.08828 35.074C5.36444 34.3501 4.9221 33.6665 4.55214 32.7094C4.27064 31.9856 3.93285 30.8918 3.84438 28.8892C3.74787 26.7177 3.72375 26.0662 3.72375 20.5731C3.72375 15.0719 3.74787 14.4205 3.84438 12.257C3.93285 10.2463 4.27064 9.16057 4.55214 8.43674C4.9221 7.47966 5.37249 6.78799 6.08828 6.0722C6.81212 5.34836 7.49575 4.90601 8.45282 4.53605C9.17666 4.25456 10.2705 3.91677 12.2731 3.8283C14.4366 3.73179 15.088 3.70766 20.5892 3.70766ZM20.5892 0C14.9995 0 14.2998 0.0241279 12.1042 0.12064C9.91658 0.217151 8.41261 0.571028 7.1097 1.07771C5.75049 1.60853 4.60039 2.30824 3.45834 3.45834C2.30824 4.60039 1.60853 5.75049 1.07771 7.10166C0.571028 8.41261 0.217151 9.90854 0.12064 12.0961C0.0241279 14.2998 0 14.9995 0 20.5892C0 26.1788 0.0241279 26.8785 0.12064 29.0742C0.217151 31.2618 0.571028 32.7657 1.07771 34.0686C1.60853 35.4279 2.30824 36.5779 3.45834 37.72C4.60039 38.8621 5.75049 39.5698 7.10166 40.0926C8.41261 40.5993 9.90854 40.9531 12.0961 41.0497C14.2918 41.1462 14.9915 41.1703 20.5811 41.1703C26.1708 41.1703 26.8705 41.1462 29.0661 41.0497C31.2537 40.9531 32.7577 40.5993 34.0606 40.0926C35.4118 39.5698 36.5619 38.8621 37.7039 37.72C38.846 36.5779 39.5537 35.4279 40.0765 34.0767C40.5832 32.7657 40.9371 31.2698 41.0336 29.0822C41.1301 26.8866 41.1542 26.1869 41.1542 20.5972C41.1542 15.0076 41.1301 14.3079 41.0336 12.1122C40.9371 9.92462 40.5832 8.42065 40.0765 7.11774C39.5698 5.75049 38.8701 4.60039 37.72 3.45834C36.578 2.31628 35.4279 1.60853 34.0767 1.08576C32.7657 0.57907 31.2698 0.225194 29.0822 0.128682C26.8785 0.0241279 26.1788 0 20.5892 0Z"
                  fill="white"
                  fillOpacity="0.8"
                />
                <path
                  d="M20.5892 10.0132C14.7502 10.0132 10.0131 14.7503 10.0131 20.5893C10.0131 26.4282 14.7502 31.1653 20.5892 31.1653C26.4281 31.1653 31.1653 26.4282 31.1653 20.5893C31.1653 14.7503 26.4281 10.0132 20.5892 10.0132ZM20.5892 27.4496C16.8011 27.4496 13.7288 24.3773 13.7288 20.5893C13.7288 16.8012 16.8011 13.7289 20.5892 13.7289C24.3773 13.7289 27.4495 16.8012 27.4495 20.5893C27.4495 24.3773 24.3773 27.4496 20.5892 27.4496Z"
                  fill="white"
                  fillOpacity="0.8"
                />
                <path
                  d="M34.0526 9.59458C34.0526 10.9618 32.9427 12.0637 31.5835 12.0637C30.2162 12.0637 29.1144 10.9538 29.1144 9.59458C29.1144 8.22733 30.2243 7.12549 31.5835 7.12549C32.9427 7.12549 34.0526 8.23537 34.0526 9.59458Z"
                  fill="white"
                  fillOpacity="0.8"
                />
              </g>
              <defs>
                <clipPath id="clip0_453_251">
                  <rect width="41.1783" height="41.1783" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/dialoft-ai"
            target="_blank"
            rel="AITellicaller Linkedin"
            aria-label="AITellicaller Linkedin"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_453_250)">
                <path
                  d="M38.1302 0H3.04012C1.35921 0 0 1.32704 0 2.96774V38.2026C0 39.8433 1.35921 41.1783 3.04012 41.1783H38.1302C39.8111 41.1783 41.1783 39.8433 41.1783 38.2106V2.96774C41.1783 1.32704 39.8111 0 38.1302 0ZM12.2168 35.0901H6.10437V15.4338H12.2168V35.0901ZM9.16057 12.7556C7.19817 12.7556 5.61377 11.1712 5.61377 9.21687C5.61377 7.26251 7.19817 5.67811 9.16057 5.67811C11.1149 5.67811 12.6993 7.26251 12.6993 9.21687C12.6993 11.1632 11.1149 12.7556 9.16057 12.7556ZM35.0901 35.0901H28.9857V25.5354C28.9857 23.2593 28.9455 20.3238 25.8088 20.3238C22.632 20.3238 22.1494 22.8089 22.1494 25.3745V35.0901H16.0531V15.4338H21.9082V18.1201H21.9886C22.8009 16.5759 24.7955 14.9432 27.7632 14.9432C33.948 14.9432 35.0901 19.0128 35.0901 24.3049V35.0901Z"
                  fill="white"
                  fillOpacity="0.8"
                />
              </g>
              <defs>
                <clipPath id="clip0_453_250">
                  <rect width="41.1783" height="41.1783" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
