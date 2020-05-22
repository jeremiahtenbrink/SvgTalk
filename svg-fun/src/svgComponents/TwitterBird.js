import React, { useEffect, useState } from "react";
import styled from "styled-components";

/**
 *   TwitterBird
 *
 *  @component
 *
 */
const TwitterBird = ( props ) => {
  
  const [ hovering, setHovering ] = useState( false );
  const [ length, setLength ] = useState( 0 );
  
  useEffect( () => {
    
    const dashArray = document.querySelector( "#twitter-dash2" );
    
    if( dashArray ){
      const dashLength = dashArray.getTotalLength();
      setLength( dashLength );
    }
  }, [] );
  
  const setHover = () => {
    setHovering( true );
  };
  
  return (
    
    <TwitterIcon dashLen={ length } onMouseLeave={ () => setHovering( false ) }
                 hovering={ hovering }>
      
      <svg width="120" height="82" viewBox="0 0 120 82" fill="none"
           onMouseEnter={ () => setHover() }
           xmlns="http://www.w3.org/2000/svg">
        
        <path className={ "twitter-bird" }
              d="M58.0728 31.0747C61.656 20.5806 66.0352 13.78 71.0738 8.85014C74.8338 5.17068 76.7739 4.00309 74.5673 8.05378C75.542 7.32074 76.9452 6.34542 78.0331 5.82447C84.1302 3.12521 83.6979 5.38796 79.4969 7.81344C90.9614 3.96477 90.5641 8.86573 78.4381 11.3068C88.3527 11.4822 98.8927 17.402 101.926 29.9938C102.345 31.7366 101.843 31.5709 103.745 31.8866C107.851 32.5687 111.714 32.5268 115.48 31.4043C115.073 34.0094 111.406 35.7022 105.684 36.8204C103.565 37.2345 103.13 37.1257 105.671 37.6619C108.799 38.3222 112.299 38.493 115.999 38.3303C113.117 41.4433 108.523 43.0351 102.84 43.1004C99.2855 55.2791 91.1643 64.0001 80.8849 69.474C56.7499 82.3279 21.6173 80.4627 4 57.1024C15.5601 65.6143 32.6862 67.4893 45.4058 55.6253C37.0734 55.6269 34.9157 49.7717 41.5216 46.6087C35.2656 46.5486 31.2889 44.6921 28.955 41.3297C28.0685 40.0533 28.0595 39.9552 29.5046 38.9753C31.0944 37.8974 33.2598 37.418 35.4968 37.2566C29.0225 35.5177 25.0631 32.3429 23.6924 28.0863C23.2386 26.6784 23.168 26.7499 24.6951 26.3861C26.1876 26.0308 28.109 25.8411 29.8317 25.7616C24.7467 22.8671 21.7077 19.3201 20.9341 15.3984C20.2044 11.6972 20.9555 12.6468 23.9101 13.7073C37.1146 18.4478 50.2787 23.5381 58.0728 31.0747V31.0747Z"
              fill="white"/>
        <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0.200195"
              y="0.803673" width="120" height="81" fill="black">
          <rect fill="white" x="0.200195" y="0.803673" width="120"
                height="81"/>
          <path clipRule="evenodd"
                d="M59.1056 28.2122C58.7544 29.1358 58.4102 30.0906 58.073 31.078C57.361 30.3896 56.6042 29.7215 55.8067 29.0723C47.8735 22.6144 35.9086 18.0181 23.9103 13.7106C23.7598 13.6566 23.6149 13.6029 23.4758 13.55L23.4729 13.5489C23.1764 13.4363 22.9055 13.3278 22.6592 13.2291C20.7534 12.4654 20.3213 12.2923 20.9343 15.4018C20.944 15.4509 20.954 15.5 20.9644 15.549C20.9663 15.5579 20.9682 15.5668 20.9701 15.5757C21.5711 18.3713 23.3281 20.9732 26.161 23.2801C27.2323 24.1524 28.4573 24.9825 29.8319 25.7649C28.3737 25.8323 26.7732 25.9785 25.4109 26.2373C25.1638 26.2843 24.9245 26.3349 24.6953 26.3895C23.924 26.5732 23.5603 26.6459 23.4476 26.8543C23.3373 27.0585 23.468 27.3929 23.6926 28.0897C24.6654 31.1108 26.9423 33.587 30.4969 35.3916C31.9505 36.1296 33.6178 36.7552 35.497 37.26C33.665 37.3921 31.8811 37.7376 30.422 38.4504C30.0994 38.608 29.7927 38.7835 29.5048 38.9787C28.0597 39.9586 28.0687 40.0567 28.9552 41.333C30.6899 43.8322 33.332 45.4994 37.1429 46.2154C38.4595 46.4628 39.9155 46.5966 41.5218 46.6121C39.949 47.3652 38.873 48.2709 38.2588 49.2138C36.7365 51.551 38.0516 54.1169 41.6721 55.1544C42.7258 55.4564 43.9749 55.6289 45.4061 55.6287C44.4087 56.5589 43.3843 57.4046 42.3377 58.1694C32.7657 65.1628 21.3301 65.3787 11.7075 61.4353C8.96238 60.3103 6.36485 58.8469 4.00021 57.1058C5.86711 59.5813 7.93071 61.8154 10.1571 63.8161C28.94 80.6961 59.3077 80.9692 80.8851 69.4774C91.1645 64.0035 99.2857 55.2824 102.84 43.1038C106.411 43.0627 109.552 42.419 112.108 41.174C113.621 40.4375 114.928 39.4907 116 38.3337C114.449 38.4019 112.934 38.4115 111.466 38.3511C111.331 38.3455 111.197 38.3394 111.063 38.3326C109.534 38.2557 108.058 38.1006 106.651 37.8541C106.384 37.8073 106.119 37.7573 105.857 37.7038C105.795 37.6911 105.733 37.6783 105.671 37.6653C105.622 37.6548 105.573 37.6446 105.526 37.6347C104.415 37.4003 103.923 37.2966 103.926 37.2112C103.93 37.1137 104.577 37.0401 105.685 36.8238C105.742 36.8126 105.799 36.8013 105.856 36.79C106.13 36.7355 106.399 36.6797 106.663 36.6225C108.165 36.2972 109.508 35.9272 110.666 35.5055C111.135 35.3345 111.574 35.1551 111.981 34.9666C114.018 34.0239 115.254 32.857 115.48 31.4077C114.07 31.8282 112.645 32.097 111.199 32.233C108.786 32.4599 106.313 32.3165 103.745 31.89C102.823 31.7369 102.466 31.697 102.295 31.4977C102.114 31.286 102.142 30.8946 101.926 29.9972C99.5772 20.2461 92.7266 14.4962 85.1508 12.3167C82.9437 11.6817 80.6751 11.3497 78.4383 11.3102C81.2326 10.7477 83.4041 10.0545 84.9512 9.3679C85.0325 9.33181 85.1121 9.29573 85.1899 9.25969C85.4392 9.14436 85.6707 9.02942 85.8846 8.91551C88.6988 7.41668 88.4508 6.09836 85.1227 6.44893C85.1156 6.44968 85.1086 6.45043 85.1015 6.45119C84.8704 6.47592 84.6246 6.50866 84.364 6.54989C83.5079 6.68534 82.4927 6.91245 81.3182 7.2487C80.7486 7.41175 80.1416 7.60045 79.4971 7.81681C79.9964 7.52856 80.4424 7.2426 80.8306 6.96699C83.343 5.1832 83.4314 3.83316 79.8394 5.10113C79.5021 5.22019 79.1324 5.36233 78.7292 5.52935C78.5892 5.58736 78.4451 5.64836 78.297 5.71244C78.293 5.71416 78.2891 5.71587 78.2851 5.71759C78.2025 5.75338 78.1185 5.79013 78.0333 5.82785C77.7506 5.96324 77.4466 6.12932 77.1343 6.31386C76.245 6.83939 75.2889 7.51463 74.5675 8.05715C76.229 5.00709 75.5395 4.91564 73.4923 6.62738C73.3483 6.74779 73.1975 6.87712 73.0404 7.01497C72.9919 7.05752 72.9428 7.10088 72.8931 7.14504C72.5467 7.45291 72.1712 7.79966 71.7702 8.18128C71.5459 8.39469 71.3137 8.619 71.074 8.85352C66.5095 13.3195 62.4862 19.3207 59.1056 28.2122ZM56.837 26.3158C60.2666 17.5972 64.3741 11.4916 69.1159 6.85215C70.081 5.9077 70.9667 5.08738 71.7237 4.45638C72.3675 3.91974 73.2421 3.23571 74.1065 2.92328C74.3338 2.84109 75.709 2.34434 76.9845 3.23018C78.5486 2.54229 79.8815 2.08366 80.9492 1.89953C81.4629 1.81093 82.1642 1.73917 82.8818 1.8961C83.5397 2.03998 84.6078 2.50332 85.1371 3.63525C85.3619 3.61633 85.578 3.60364 85.7854 3.59712C86.622 3.57078 87.6291 3.63038 88.5243 4.02395C88.9968 4.23166 89.6144 4.61047 90.0719 5.29479C90.5714 6.04196 90.7089 6.89974 90.5729 7.68341C90.3461 8.99124 89.4217 9.85587 88.8984 10.2841C88.794 10.3695 88.6854 10.4536 88.5727 10.5364C95.8776 13.449 102.24 19.5503 104.612 29.1932C108.251 29.7537 111.539 29.6606 114.681 28.7243C115.602 28.4499 116.599 28.6669 117.323 29.2993C118.047 29.9318 118.395 30.8912 118.247 31.8407C118.006 33.3797 117.216 34.5906 116.198 35.5406C117.206 35.6118 118.108 36.2245 118.54 37.1566C119.017 38.1867 118.826 39.403 118.054 40.2361C114.869 43.6758 110.21 45.4174 104.921 45.8159C100.858 57.8106 92.5071 66.4607 82.2012 71.9488C57.2661 85.2287 20.4664 83.5899 1.76469 58.7917C0.927653 57.6818 1.03167 56.1259 2.009 55.1373C2.98632 54.1487 4.54097 54.0268 5.66039 54.8511C15.0351 61.7539 28.1039 63.8214 38.9329 57.0884C37.2531 56.2559 35.9436 55.024 35.268 53.361C34.6374 51.8089 34.7172 50.1697 35.3677 48.6897C31.6094 47.7443 28.6867 45.8564 26.6554 42.9302L26.6356 42.9017C26.4445 42.6267 26.1657 42.2254 25.964 41.8257C25.7456 41.3928 25.3834 40.5214 25.6213 39.4419C25.848 38.4136 26.4974 37.7773 26.8284 37.4842C27.0487 37.2891 27.2999 37.1014 27.5399 36.9321C24.3704 34.9459 22.1048 32.2939 21.0274 28.948C21.0141 28.9068 20.9987 28.8599 20.9819 28.8086C20.9002 28.5594 20.785 28.2079 20.7182 27.9255L20.716 27.9161C20.6492 27.634 20.3934 26.554 21.021 25.4573C21.547 24.5381 22.3825 24.1572 22.7822 24.0105C20.4003 21.6663 18.7843 18.9707 18.1872 15.9437C18.0101 15.045 17.8513 14.112 17.8776 13.3327C17.8907 12.9447 17.9536 12.2624 18.3402 11.5801C18.8176 10.7377 19.6111 10.2001 20.4944 10.0244C21.2051 9.88304 21.8214 10.0063 22.1351 10.082C22.4885 10.1674 22.8286 10.29 23.0909 10.3897C23.3596 10.4918 23.5765 10.5792 23.7893 10.665C24.1027 10.7914 24.4074 10.9142 24.8562 11.0752C36.3678 15.208 48.4448 19.7883 56.837 26.3158Z"/>
          <path
            d="M58.073 31.078C58.4102 30.0906 58.7544 29.1358 59.1056 28.2122C62.4862 19.3207 66.5095 13.3195 71.074 8.85352C71.3137 8.619 71.5459 8.39469 71.7702 8.18128C72.1712 7.79966 72.5467 7.45291 72.8931 7.14504C72.9428 7.10088 72.9919 7.05752 73.0404 7.01497C73.1975 6.87712 73.3483 6.74779 73.4923 6.62738C75.5395 4.91564 76.229 5.00709 74.5675 8.05715C75.2889 7.51463 76.245 6.83939 77.1343 6.31386C77.4466 6.12932 77.7506 5.96324 78.0333 5.82785C78.1185 5.79013 78.2025 5.75338 78.2851 5.71759L78.297 5.71244C78.4451 5.64836 78.5892 5.58736 78.7292 5.52935C79.1324 5.36233 79.5021 5.22019 79.8394 5.10113C83.4314 3.83316 83.343 5.1832 80.8306 6.96699C80.4424 7.2426 79.9964 7.52856 79.4971 7.81681C80.1416 7.60045 80.7486 7.41175 81.3182 7.2487C82.4927 6.91245 83.5079 6.68534 84.364 6.54989C84.6246 6.50866 84.8704 6.47592 85.1015 6.45119L85.1227 6.44893C88.4508 6.09836 88.6988 7.41668 85.8846 8.91551C85.6707 9.02942 85.4392 9.14436 85.1899 9.25969C85.1121 9.29573 85.0325 9.33181 84.9512 9.3679C83.4041 10.0545 81.2326 10.7477 78.4383 11.3102C80.6751 11.3497 82.9437 11.6817 85.1508 12.3167C92.7266 14.4962 99.5772 20.2461 101.926 29.9972C102.142 30.8946 102.114 31.286 102.295 31.4977C102.466 31.697 102.823 31.7369 103.745 31.89C106.313 32.3165 108.786 32.4599 111.199 32.233C112.645 32.097 114.07 31.8282 115.48 31.4077C115.254 32.857 114.018 34.0239 111.981 34.9666C111.574 35.1551 111.135 35.3345 110.666 35.5055C109.508 35.9272 108.165 36.2972 106.663 36.6225C106.399 36.6797 106.13 36.7355 105.856 36.79L105.685 36.8238C104.577 37.0401 103.93 37.1137 103.926 37.2112C103.923 37.2966 104.415 37.4003 105.526 37.6347L105.671 37.6653C105.733 37.6783 105.795 37.6911 105.857 37.7038C106.119 37.7573 106.384 37.8073 106.651 37.8541C108.058 38.1006 109.534 38.2557 111.063 38.3326C111.197 38.3394 111.331 38.3455 111.466 38.3511C112.934 38.4115 114.449 38.4019 116 38.3337C114.928 39.4907 113.621 40.4375 112.108 41.174C109.552 42.419 106.411 43.0627 102.84 43.1038C99.2857 55.2824 91.1645 64.0035 80.8851 69.4774C59.3077 80.9692 28.94 80.6961 10.1571 63.8161C7.93071 61.8154 5.86711 59.5813 4.00021 57.1058C6.36485 58.8469 8.96238 60.3103 11.7075 61.4353C21.3301 65.3787 32.7657 65.1628 42.3377 58.1694C43.3843 57.4046 44.4087 56.5589 45.4061 55.6287C43.9749 55.6289 42.7258 55.4564 41.6721 55.1544C38.0516 54.1169 36.7365 51.551 38.2588 49.2138C38.873 48.2709 39.949 47.3652 41.5218 46.6121C39.9155 46.5966 38.4595 46.4628 37.1429 46.2154C33.332 45.4994 30.6899 43.8322 28.9552 41.333C28.0687 40.0567 28.0597 39.9586 29.5048 38.9787C29.7927 38.7835 30.0994 38.608 30.422 38.4504C31.8811 37.7376 33.665 37.3921 35.497 37.26C33.6178 36.7552 31.9505 36.1296 30.4969 35.3916C26.9423 33.587 24.6654 31.1108 23.6926 28.0897C23.468 27.3929 23.3373 27.0585 23.4476 26.8543C23.5603 26.6459 23.924 26.5732 24.6953 26.3895C24.9245 26.3349 25.1638 26.2843 25.4109 26.2373C26.7732 25.9785 28.3737 25.8323 29.8319 25.7649C28.4573 24.9825 27.2323 24.1524 26.161 23.2801C23.3281 20.9732 21.5711 18.3713 20.9701 15.5757L20.9644 15.549C20.954 15.5 20.944 15.4509 20.9343 15.4018C20.3213 12.2923 20.7534 12.4654 22.6592 13.2291C22.9055 13.3278 23.1764 13.4363 23.4729 13.5489L23.4758 13.55C23.6149 13.6029 23.7598 13.6566 23.9103 13.7106C35.9086 18.0181 47.8735 22.6144 55.8067 29.0723C56.6042 29.7215 57.361 30.3896 58.073 31.078Z"/>
        </mask>
        
        <path fillRule="evenodd" clipRule="evenodd" id={ "twitter-dash" }
              className={ "dash-array" }
              d="M56.0835 24.881C47.6678 18.4149 35.6646 13.8679 24.2588 9.77319C23.8115 9.61265 23.5134 9.49245 23.2038 9.36755C22.9911 9.28177 22.7729 9.19374 22.4967 9.0888C22.2326 8.98844 21.8829 8.86212 21.5168 8.77372C21.1932 8.69559 20.5433 8.56453 19.7902 8.71436C18.8521 8.90097 18.0082 9.47261 17.501 10.3676C17.091 11.091 17.026 11.8112 17.0125 12.2121C16.9853 13.0174 17.1489 13.9714 17.3257 14.8681C17.9141 17.8509 19.4747 20.5089 21.7632 22.826C21.3035 23.0368 20.6353 23.4522 20.1821 24.2441C19.5151 25.4096 19.7867 26.5552 19.8557 26.8464L19.8584 26.8576C19.9274 27.1495 20.0465 27.5127 20.1279 27.7609L20.1289 27.7639L20.1294 27.7654C20.1452 27.8136 20.1595 27.8574 20.1718 27.8954C21.2382 31.2065 23.4474 33.8404 26.5188 35.8285C26.3514 35.9528 26.184 36.0847 26.0306 36.2205C25.6894 36.5227 25.0013 37.1941 24.7608 38.2849C24.5082 39.4306 24.8936 40.3526 25.1202 40.8019C25.3284 41.2145 25.6144 41.626 25.8041 41.899L25.8255 41.9298C27.8492 44.8454 30.7401 46.7385 34.4287 47.7117C33.8428 49.1798 33.7953 50.7911 34.4175 52.3224C35.0719 53.9333 36.2965 55.1439 37.8605 55.9891C27.1712 62.4479 14.3494 60.3764 5.11377 53.5761C3.91438 52.693 2.24868 52.8235 1.20154 53.8828C0.154399 54.942 0.0429494 56.6091 0.939777 57.7982C19.719 82.6991 56.6378 84.3218 81.63 71.0114C91.939 65.5218 100.305 56.8752 104.402 44.8912C109.671 44.4712 114.333 42.7172 117.536 39.2581C118.362 38.3655 118.568 37.0623 118.056 35.9586C117.654 35.0899 116.87 34.4802 115.962 34.286C116.864 33.3575 117.554 32.199 117.779 30.7577C117.938 29.7404 117.565 28.7124 116.789 28.0348C116.014 27.3572 114.945 27.1247 113.958 27.4188C110.889 28.3334 107.674 28.4364 104.109 27.9016C101.729 18.4046 95.4948 12.339 88.3059 9.36871L88.3312 9.34835L88.3598 9.32502C88.8909 8.89036 89.865 7.98621 90.1048 6.6037C90.2488 5.77342 90.1032 4.86286 89.5729 4.06974C89.0877 3.34394 88.4343 2.94442 87.9396 2.72695C87.0035 2.31543 85.9608 2.25665 85.1139 2.28331C84.9453 2.28861 84.7711 2.29792 84.5914 2.31125C84.01 1.1956 82.9278 0.733018 82.2593 0.58681C81.5046 0.421775 80.7736 0.498232 80.25 0.588532C79.1822 0.77268 77.8665 1.2229 76.3396 1.88903C75.0073 1.03064 73.6051 1.53749 73.3744 1.62087L73.3733 1.62128C72.4714 1.94726 71.5719 2.65413 70.9304 3.18885C70.1676 3.8247 69.2776 4.64918 68.3106 5.59546C63.5906 10.2137 59.5019 16.2724 56.0835 24.881ZM28.4061 35.7849C28.1703 35.9161 27.9403 36.0569 27.7172 36.2082C27.3745 36.4406 26.995 36.7011 26.6935 36.968C26.4032 37.2251 25.9089 37.7207 25.7373 38.499C25.5577 39.3139 25.8276 39.9828 26.013 40.3503C26.1889 40.6989 26.4398 41.0601 26.6383 41.346L26.6472 41.3588C28.7179 44.3418 31.7976 46.2119 35.9058 47.0254C35.8661 47.0869 35.8275 47.1488 35.7901 47.2111C34.9046 48.6863 34.7053 50.3729 35.3439 51.9448C36.0903 53.7821 37.7699 55.0774 39.9726 55.8086C28.5856 63.7494 14.4746 61.7093 4.52083 54.3801C3.72124 53.7914 2.61077 53.8784 1.91268 54.5846C1.21459 55.2907 1.14029 56.4021 1.73817 57.1949C20.1301 81.5823 56.4535 83.2858 81.1599 70.1276C91.4551 64.6453 99.7413 55.9787 103.666 43.9383C109.046 43.6286 113.693 41.9348 116.802 38.5774C117.353 37.9824 117.49 37.1136 117.149 36.3778C116.808 35.642 116.057 35.1849 115.247 35.2205C114.464 35.2549 113.694 35.2738 112.939 35.2758C114.804 34.2713 116.449 32.7901 116.791 30.6019C116.897 29.9236 116.648 29.2384 116.131 28.7866C115.614 28.3349 114.902 28.1798 114.244 28.3759C110.84 29.3903 107.297 29.4479 103.408 28.8019L103.288 28.7821C103.264 28.6676 103.237 28.5441 103.205 28.4137C100.77 18.306 93.8433 12.1775 86.0833 9.60595C86.718 9.27291 87.2741 8.92019 87.7265 8.54995C88.2185 8.14727 88.9444 7.44069 89.1195 6.43158C89.2231 5.83433 89.1182 5.18767 88.7416 4.6243C88.395 4.10582 87.9208 3.80986 87.5372 3.64119C86.8053 3.31946 85.9408 3.25656 85.1453 3.2816C84.771 3.29339 84.3627 3.32687 83.9211 3.38297C83.9162 3.36006 83.911 3.33704 83.9054 3.31392C83.6227 2.14855 82.6485 1.69437 82.0456 1.56251C81.4763 1.43802 80.8942 1.49099 80.4199 1.57278C79.4289 1.74368 78.1373 2.18496 76.5585 2.88395C76.5403 2.892 76.5222 2.90031 76.5043 2.9089C76.4051 2.95642 76.3043 3.00674 76.2023 3.0595C76.1682 3.02443 76.1323 2.98985 76.0945 2.95587C75.1074 2.06926 73.9374 2.47949 73.7132 2.56052C72.9987 2.81876 72.2237 3.41145 71.5707 3.95579C70.8368 4.56753 69.9681 5.37143 69.0101 6.30886C64.1824 11.0324 59.9994 17.3281 56.5255 26.5062C48.2493 19.721 35.8735 15.0042 23.9207 10.7131C23.4658 10.5498 23.1323 10.4157 22.8039 10.2835C22.5915 10.1981 22.3812 10.1135 22.1415 10.0224C21.8863 9.92541 21.5847 9.81764 21.2821 9.74458C21.0079 9.67837 20.5262 9.58633 19.9853 9.69393C19.3211 9.82606 18.7292 10.2273 18.371 10.8594C18.0776 11.3772 18.0232 11.9081 18.0119 12.2445C17.9891 12.9197 18.1282 13.7675 18.3069 14.6737C18.948 17.9238 20.8523 20.8122 23.7276 23.2914C23.6737 23.3036 23.6199 23.3162 23.5667 23.3288L23.4292 23.3613C23.1377 23.4301 22.8015 23.5094 22.5377 23.5966L22.5367 23.5969C22.2944 23.677 21.5097 23.9364 21.0501 24.7395C20.58 25.5609 20.7732 26.3794 20.8315 26.6263C20.8895 26.8713 20.9894 27.1768 21.0719 27.4289C21.0803 27.4544 21.0885 27.4794 21.0964 27.5037C21.1058 27.5327 21.115 27.5607 21.1236 27.5876C22.2488 31.0818 24.7728 33.8154 28.4061 35.7849Z"
        />
        
        <rect className={ "twitter-background" } width="141.399" height="140"
              rx="12"/>
      
      </svg>
    
    </TwitterIcon> );
  
};

const TwitterIcon = styled.div`

position: relative;
display: flex;
margin: 3rem;
width: 150px;
height: 150px;
justify-content: center;
align-items: center;
align-self: center;

.dash-array{
 position: absolute;
  left: 0;
  top: 0;
  animation: ${ props => props.hovering ? "glow .2s infinite linear reverse" :
  "" };
  stroke: ${ props => props.hovering ? "blue" : "red" };
  
  @keyframes glow {
  0% {
      stroke-dasharray: 20%, 80%;
      stroke-dashoffset: 0;
   }
  100% {
    stroke-dasharray: 20%, 80%;
    stroke-dashoffset: ${ props => props.dashLen + "px" };
    }
  
  }
  
};

.twitter-bird{
  position: absolute;
  left: 0;
  top: 0;
  transition: fill 1s ease-in-out;
  z-index: 5;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  fill: ${ props => props.hovering ? "white" : "#33CCFF" };
}

.twitter-background {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  fill: ${ props => props.hovering ? "#33CCFF" : "transparent" };
  stroke: black;
  stroke-width: 1;
}
`;

TwitterBird.propTypes = {};

export default TwitterBird;