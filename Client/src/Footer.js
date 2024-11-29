import React from 'react';
import './Footer.css';
import FooterColumn from './FooterColumn';
import IndiaFlag from "./StaticImages/Indiaflag.png";

const itemSupport = [
  'Coronavirus (COVID-19) FAQs',
  'Manage your trips',
  'Contact Customer Service',
  'Safety resource centre',
];
const itemDiscover = [
    'Genius loyalty programme',
    'Seasonal and holiday deals',
    'Travel articles',
    'Booking.com for Business',
    'Traveller Review Awards',
    'Car hire',
    'Flight finder',
    'Restaurant reservations',
    'Booking.com for Travel Agents',
];
const itemTerms = [
    'Privacy & cookies',
    'Terms and conditions',
    'Grievance officer',
    'Modern Slavery Statement',
    'Human Rights Statement'
];
const itemPartners = [
    'Extranet login',
    'Partner help',
    'List your property',
    'Become an affiliate'
];
const itemAbout = [
    'About Booking.com',
    'How we work',
    'Sustainability',
    'Press centre',
    'Careers',
    'Investor relations',
    'Corporate contact'
];

const Footer = () =>{
    return(
        <div className='footer-color'>
            <div className='footer-section container'>
                <FooterColumn className='font-style' title='Support' items={itemSupport} />
                <FooterColumn className='font-style' title='Discover' items={itemDiscover} />
                <FooterColumn className='font-style' title='Terms and settings' items={itemTerms} />
                <FooterColumn className='font-style' title='Partners' items={itemPartners} />
                <FooterColumn className='font-style' title='About' items={itemAbout} />
            </div>
            <div className='footer-show-inr container'>
                <div className='footer-item-custom'>
                    <div class="navbar-picture">
                        <img src={IndiaFlag} alt=""></img>
                    </div>
                </div>
                <div class="footer-item-custom inr">
                    INR
                </div>
            </div>
            <div className='footer-copyright-section'>
                <h6>Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.</h6>
                <h6>Copyright © 1996–2024 Booking.com™. All rights reserved.</h6>
            </div>
            <div className='footer-images'>
                <div className='footer-logo-holder custom-gap1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 180 30"><path fill="#003B95" d="M70.6 2.73999C70.602 2.19808 70.7646 1.66892 71.0673 1.21943C71.3701 0.769947 71.7993 0.420321 72.3007 0.214768C72.8021 0.00921437 73.3532 -0.0430342 73.8843 0.064629C74.4155 0.172292 74.9027 0.435032 75.2845 0.819622C75.6663 1.20421 75.9255 1.69338 76.0293 2.22527C76.133 2.75716 76.0768 3.30788 75.8676 3.80779C75.6584 4.3077 75.3056 4.73434 74.8539 5.03377C74.4022 5.3332 73.8719 5.49197 73.33 5.48999C72.9702 5.48868 72.6141 5.41651 72.2822 5.2776C71.9503 5.13869 71.649 4.93576 71.3955 4.6804C71.1419 4.42504 70.9412 4.12225 70.8047 3.78931C70.6683 3.45637 70.5987 3.09982 70.6 2.73999V2.73999ZM116.5 23.74C117.044 23.742 117.577 23.5824 118.031 23.2814C118.484 22.9804 118.838 22.5516 119.048 22.0493C119.257 21.547 119.313 20.9938 119.208 20.4597C119.103 19.9255 118.842 19.4346 118.458 19.049C118.074 18.6634 117.584 18.4005 117.05 18.2936C116.516 18.1867 115.963 18.2405 115.46 18.4484C114.957 18.6562 114.527 19.0087 114.224 19.4611C113.922 19.9136 113.76 20.4457 113.76 20.99C113.756 21.3528 113.824 21.7128 113.96 22.0493C114.096 22.3857 114.297 22.692 114.551 22.9504C114.806 23.2088 115.109 23.4143 115.444 23.5549C115.778 23.6956 116.137 23.7687 116.5 23.77V23.74ZM34.34 15.25C34.3539 16.9569 33.8606 18.6295 32.9228 20.0558C31.985 21.4821 30.6448 22.5979 29.0721 23.2616C27.4995 23.9254 25.7651 24.1072 24.089 23.7842C22.4128 23.4612 20.8703 22.6477 19.657 21.4471C18.4437 20.2464 17.6142 18.7125 17.2736 17.0398C16.933 15.3671 17.0967 13.631 17.744 12.0515C18.3912 10.472 19.4929 9.12017 20.9093 8.16745C22.3257 7.21474 23.993 6.70401 25.7 6.69999C26.8418 6.65398 27.9809 6.84396 29.046 7.25808C30.1111 7.67219 31.0793 8.30152 31.8902 9.10676C32.701 9.91199 33.3371 10.8758 33.7586 11.938C34.1801 13.0002 34.3781 14.1379 34.34 15.28V15.25ZM29.73 15.25C29.73 12.57 28.07 10.7 25.73 10.7C23.39 10.7 21.73 12.57 21.73 15.25C21.73 17.93 23.37 19.8 25.73 19.8C28.09 19.8 29.73 17.97 29.73 15.28V15.25ZM65.3 15.68C65.1321 15.3416 64.9128 15.0313 64.65 14.76L64.5 14.6L64.66 14.45C64.9116 14.1778 65.1423 13.887 65.35 13.58L69.74 7.02999H64.41L61.1 12.16C60.9586 12.3142 60.782 12.4321 60.5852 12.5034C60.3885 12.5748 60.1774 12.5977 59.97 12.57H59.22V2.90999C59.22 0.979993 58.01 0.709993 56.71 0.709993H54.48V23.58H59.21V16.72H59.65C60.19 16.72 60.56 16.78 60.73 17.08L63.35 21.97C63.5773 22.5089 63.9785 22.9563 64.4895 23.2408C65.0006 23.5253 65.5922 23.6306 66.17 23.54H69.8L67.09 19.07L65.3 15.68ZM88.3 6.67999C87.4047 6.66014 86.5151 6.82782 85.6884 7.17226C84.8618 7.5167 84.1163 8.03028 83.5 8.67999L83.21 8.96999L83.11 8.56999C82.9561 8.07803 82.6321 7.65692 82.196 7.38207C81.7599 7.10723 81.2402 6.9966 80.73 7.06999H78.6V23.57H83.32V15.97C83.305 15.2919 83.403 14.6159 83.61 13.97C83.8279 13.1302 84.3223 12.3883 85.0136 11.8639C85.7048 11.3396 86.5525 11.0634 87.42 11.08C88.88 11.08 89.42 11.85 89.42 13.86V21.05C89.365 21.3921 89.3919 21.7424 89.4986 22.072C89.6053 22.4017 89.7886 22.7013 90.0336 22.9463C90.2787 23.1914 90.5783 23.3747 90.908 23.4814C91.2376 23.5881 91.5879 23.615 91.93 23.56H94.15V13.07C94.15 8.89999 92.12 6.68999 88.27 6.68999L88.3 6.67999ZM73.42 7.04999H71.2V23.58H75.9V9.57999C75.9545 9.23754 75.9274 8.88705 75.8207 8.55711C75.714 8.22717 75.5308 7.92712 75.2861 7.68143C75.0414 7.43574 74.7421 7.25138 74.4126 7.14339C74.083 7.03539 73.7327 7.00681 73.39 7.05999L73.42 7.04999ZM52.8 15.28C52.8158 16.9897 52.3235 18.6657 51.3853 20.0951C50.4472 21.5246 49.1055 22.6431 47.5307 23.3089C45.9558 23.9747 44.2186 24.1576 42.5396 23.8345C40.8606 23.5114 39.3154 22.6969 38.1001 21.4942C36.8847 20.2915 36.054 18.7549 35.7134 17.0794C35.3727 15.4038 35.5375 13.6649 36.1867 12.0831C36.8359 10.5013 37.9404 9.14808 39.36 8.19502C40.7795 7.24195 42.4502 6.73205 44.16 6.72999C45.2992 6.68421 46.4357 6.87336 47.4987 7.28565C48.5617 7.69795 49.5285 8.32457 50.3389 9.12655C51.1493 9.92853 51.786 10.8887 52.2094 11.9473C52.6328 13.0059 52.8338 14.1403 52.8 15.28V15.28ZM48.19 15.28C48.19 12.6 46.53 10.73 44.19 10.73C41.85 10.73 40.19 12.6 40.19 15.28C40.19 17.96 41.83 19.83 44.19 19.83C46.55 19.83 48.19 17.97 48.19 15.28V15.28ZM153.53 15.28C153.544 16.9869 153.051 18.6595 152.113 20.0858C151.175 21.5121 149.835 22.6279 148.262 23.2916C146.689 23.9554 144.955 24.1372 143.279 23.8142C141.603 23.4912 140.06 22.6777 138.847 21.4771C137.634 20.2764 136.804 18.7425 136.464 17.0698C136.123 15.3971 136.287 13.661 136.934 12.0815C137.581 10.502 138.683 9.15017 140.099 8.19745C141.516 7.24474 143.183 6.73401 144.89 6.72999C146.029 6.68421 147.166 6.87336 148.229 7.28565C149.292 7.69795 150.258 8.32457 151.069 9.12655C151.879 9.92853 152.516 10.8887 152.939 11.9473C153.363 13.0059 153.564 14.1403 153.53 15.28V15.28ZM148.92 15.28C148.92 12.6 147.26 10.73 144.92 10.73C142.58 10.73 140.92 12.6 140.92 15.28C140.92 17.96 142.56 19.83 144.92 19.83C147.28 19.83 148.92 17.97 148.92 15.28V15.28ZM111.92 7.01999V22.17C111.92 27.94 107.25 30 103.25 30C101.25 29.9851 99.2804 29.5022 97.5 28.59L97.17 28.42L98.08 26.14C98.1174 25.9257 98.2045 25.7232 98.3343 25.5487C98.4642 25.3743 98.6332 25.2327 98.8277 25.1354C99.0223 25.0382 99.2369 24.9879 99.4544 24.9887C99.6719 24.9895 99.8862 25.0413 100.08 25.14C101.092 25.5155 102.161 25.715 103.24 25.73C105.82 25.73 107.24 24.51 107.24 22.3V21.84L106.88 22.12C105.825 22.8661 104.551 23.2391 103.26 23.18C98.88 23.18 95.81 19.74 95.81 14.83C95.81 9.91999 98.81 6.59999 103.17 6.59999C104.741 6.53072 106.283 7.04344 107.5 8.03999L107.72 8.22999L107.84 7.97999C108.031 7.64497 108.315 7.37233 108.657 7.19491C109 7.01749 109.386 6.94285 109.77 6.97999L111.92 7.01999ZM107.32 14.91C107.32 11.23 105.32 10.81 103.83 10.81C100.83 10.81 100.6 13.81 100.6 14.81C100.6 16.91 101.52 19.16 104.08 19.16C105.54 19.11 107.3 18.38 107.3 14.91H107.32ZM15.77 16.84C15.77 20.84 12.67 23.5 7.88 23.5H0V3.09999C0.00471433 2.48223 0.247466 1.89007 0.677736 1.44677C1.10801 1.00346 1.69265 0.743142 2.31 0.719993H7.79C12.09 0.719993 14.88 3.03999 14.88 6.63999C14.9049 7.45565 14.7493 8.26672 14.4243 9.01525C14.0993 9.76377 13.6129 10.4313 13 10.97L12.4 11.49L13.09 11.87C13.9391 12.3844 14.6353 13.1164 15.1065 13.9902C15.5776 14.864 15.8067 15.8479 15.77 16.84V16.84ZM4.38 9.96999H7.82C8.18097 9.9814 8.54025 9.91599 8.87405 9.77811C9.20784 9.64023 9.50854 9.43302 9.75624 9.17019C10.0039 8.90737 10.193 8.59493 10.3109 8.25355C10.4287 7.91218 10.4728 7.54966 10.44 7.18999C10.4737 6.82919 10.4276 6.46538 10.305 6.12438C10.1824 5.78338 9.98629 5.47353 9.73052 5.21681C9.47476 4.9601 9.16565 4.7628 8.8251 4.63892C8.48456 4.51504 8.12093 4.46761 7.76 4.49999H5.76C4.76 4.55999 4.34 5.05999 4.34 6.11999L4.38 9.96999ZM11.27 16.57C11.3013 16.1584 11.2434 15.7449 11.1004 15.3577C10.9573 14.9705 10.7324 14.6187 10.441 14.3263C10.1495 14.034 9.79849 13.8079 9.41176 13.6636C9.02502 13.5192 8.6117 13.46 8.2 13.49H5.59C4.76 13.61 4.38 14.12 4.38 15.1V19.68H8.2C8.61895 19.7149 9.04044 19.6568 9.43426 19.5096C9.82808 19.3625 10.1845 19.1301 10.4779 18.829C10.7713 18.528 10.9945 18.1657 11.1314 17.7682C11.2684 17.3708 11.3157 16.9479 11.27 16.53V16.57ZM174.53 6.77999C173.558 6.78366 172.6 7.00575 171.726 7.42984C170.852 7.85393 170.084 8.46915 169.48 9.22999L169.14 9.66999L168.87 9.17999C168.437 8.395 167.787 7.75128 166.998 7.3257C166.209 6.90012 165.314 6.71067 164.42 6.77999C163.6 6.79964 162.792 6.98725 162.048 7.33125C161.303 7.67525 160.637 8.16832 160.09 8.77999L159.65 9.25999L159.48 8.62999C159.323 8.16152 159.008 7.76282 158.587 7.50334C158.167 7.24386 157.669 7.14005 157.18 7.20999H155.18V23.57H159.64V16.31C159.646 15.6629 159.727 15.0187 159.88 14.39C160.31 12.63 161.49 10.74 163.47 10.93C164.69 11.05 165.29 11.99 165.29 13.82V23.57H169.81V16.31C169.791 15.6345 169.875 14.9601 170.06 14.31C170.42 12.64 171.65 10.92 173.56 10.92C174.94 10.92 175.46 11.7 175.46 13.81V21.17C175.46 22.83 176.19 23.57 177.85 23.57H180V13.07C180 8.86999 178.15 6.73999 174.53 6.73999V6.77999ZM133.69 17.86C132.51 19.095 130.913 19.8471 129.21 19.97C128.593 20.0073 127.974 19.914 127.395 19.6962C126.816 19.4784 126.29 19.141 125.85 18.706C125.41 18.271 125.067 17.7482 124.843 17.1716C124.619 16.5951 124.519 15.9778 124.55 15.36C124.498 14.7504 124.575 14.1365 124.776 13.5588C124.978 12.981 125.299 12.4524 125.719 12.0076C126.14 11.5629 126.649 11.212 127.215 10.978C127.78 10.744 128.388 10.6322 129 10.65C129.84 10.65 130.8 10.95 130.95 11.46V11.55C131.048 11.8986 131.258 12.2056 131.547 12.424C131.835 12.6425 132.188 12.7605 132.55 12.76H135V10.61C135 7.76999 131.39 6.73999 129 6.73999C123.81 6.73999 120 10.37 120 15.35C120 20.33 123.73 23.97 128.86 23.97C130.178 23.9562 131.479 23.6722 132.683 23.1355C133.887 22.5989 134.969 21.821 135.86 20.85L134 17.58L133.69 17.86Z"></path></svg>
                </div>
                <div className='footer-logo-holder custom-gap2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 16"><g fill="#0071C2" clip-path="url(#40599zt6m28w2b6ta)"><path d="M61.944 7.25c-.056-.369-.113-.878-.48-1.275-.312-.34-.822-.51-1.275-.51a1.79 1.79 0 0 0-1.331.595c-.368.397-.453.821-.538 1.19h3.624Zm2.606 3.341c-.312.453-.623.906-1.076 1.331-.765.736-1.926 1.274-3.342 1.274-2.633 0-4.503-1.699-4.503-4.644 0-2.18 1.048-4.956 4.56-4.956.538 0 2.067.057 3.2 1.303 1.16 1.246 1.217 3.002 1.246 4.021H58.29c-.028 1.133.623 2.238 2.011 2.238 1.444 0 1.926-.935 2.237-1.586l2.01 1.02ZM49.4 4.701c.254-.283.424-.482.877-.708.397-.17.991-.312 1.614-.312.538 0 1.133.114 1.586.369.935.51 1.161 1.302 1.161 2.69v6.145h-2.605v-5.07c0-.82-.028-1.104-.113-1.33-.199-.481-.652-.68-1.161-.68-1.388 0-1.388 1.133-1.388 2.237v4.843h-2.634V3.908h2.634l.028.793Zm-4.305-3.087c0 .793-.623 1.416-1.416 1.416a1.439 1.439 0 0 1-1.416-1.416c0-.793.623-1.416 1.416-1.416a1.42 1.42 0 0 1 1.416 1.416ZM42.376 3.88h2.577v9.005h-2.577V3.88Zm-1.755 9.005h-2.634V0h2.634v12.885ZM34.136 7.25c-.057-.369-.114-.878-.51-1.275-.312-.34-.821-.51-1.274-.51a1.79 1.79 0 0 0-1.331.595c-.369.397-.454.821-.538 1.19h3.653Zm2.633 3.341c-.311.453-.623.906-1.076 1.331-.764.736-1.925 1.274-3.37 1.274-2.633 0-4.502-1.699-4.502-4.644 0-2.18 1.047-4.956 4.559-4.956.538 0 2.067.057 3.2 1.303 1.16 1.246 1.218 3.002 1.274 4.021h-6.371c-.029 1.133.623 2.238 2.039 2.238 1.444 0 1.925-.935 2.265-1.586l1.982 1.02Zm-10.251-.453c0-.028-.057-.028-.057 0-.056.085-.113.198-.198.283-.538.623-1.19.623-1.33.623-1.389 0-1.983-1.5-1.983-2.69 0-1.076.481-2.719 1.897-2.719.397 0 .736.142.991.312.368.255.538.51.68.793.028.028.057.028.057.028.198-.736.566-1.444 1.132-2.01-1.02-.963-2.209-1.133-2.973-1.133-2.974 0-4.475 2.209-4.475 4.814 0 3.681 2.72 4.7 4.418 4.7.991 0 1.87-.339 2.549-.82.142-.114.283-.227.396-.34a3.67 3.67 0 0 1-1.104-1.84Zm-7.306-8.524c0 .793-.623 1.416-1.416 1.416a1.439 1.439 0 0 1-1.416-1.416c0-.793.623-1.416 1.416-1.416a1.42 1.42 0 0 1 1.416 1.416ZM16.493 3.88h2.577v9.005h-2.577V3.88Zm-3.681.934c.566-.51 1.217-.906 2.577-1.02v2.351l-.878.142c-1.246.226-1.643.425-1.643 1.557v5.07h-2.633V3.88h2.548v.934h.029Zm-7.93.736c-.48 0-.962.199-1.359.737-.368.51-.538 1.274-.538 2.124 0 1.132.283 1.84.623 2.209.312.34.736.51 1.161.51 1.275 0 1.841-1.388 1.841-2.804 0-1.19-.312-2.436-1.388-2.719-.113-.028-.226-.057-.34-.057Zm-2.095-.792c.085-.114.17-.199.255-.284.453-.424 1.246-.793 2.237-.793 2.18 0 3.88 1.671 3.88 4.673 0 1.84-.793 4.7-3.852 4.7-.99 0-1.5-.339-2.209-.764V16H.465V3.908h2.322v.85ZM66.475.963c.369 0 .68.085.992.255.311.17.538.425.708.708.17.311.254.623.254.963 0 .34-.085.68-.254.962-.17.312-.397.538-.708.708-.312.17-.623.255-.992.255-.368 0-.68-.085-.99-.255a1.887 1.887 0 0 1-.709-.708 1.96 1.96 0 0 1-.254-.962c0-.34.084-.68.254-.963.17-.312.397-.538.708-.708.312-.17.623-.255.992-.255Zm0 3.426c.284 0 .538-.056.765-.198a1.63 1.63 0 0 0 .538-.538c.142-.226.198-.481.198-.736s-.056-.51-.198-.736a1.63 1.63 0 0 0-.538-.538 1.372 1.372 0 0 0-.736-.199c-.283 0-.538.057-.765.199a1.629 1.629 0 0 0-.538.538 1.372 1.372 0 0 0-.198.736c0 .255.056.51.198.736.142.227.312.397.538.538.198.142.453.198.736.198Zm.822-1.812a.783.783 0 0 1-.085.368c-.057.113-.142.17-.255.227l.396.594h-.538l-.283-.51h-.34v.51h-.481V1.954h.793c.255 0 .425.057.566.17.17.085.227.255.227.453Zm-1.105.312h.34c.113 0 .17-.029.227-.085.056-.057.085-.114.085-.227a.322.322 0 0 0-.085-.227.322.322 0 0 0-.227-.084h-.34v.623Z"></path></g><defs><clipPath id="40599zt6m28w2b6ta"><path fill="#fff" d="M0 0h67.965v16H0z" transform="translate(.465)"></path></clipPath></defs></svg>
                </div>
                <div className='footer-logo-holder custom-gap3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 16"><g clip-path="url(#40599zt6m28w2b6la)"><path fill="#FF690F" d="M.43 0h16v16h-16V0Z"></path><path fill="#fff" d="M5.362 4.004h1.945v8H5.362v-8Z"></path><path fill="#fff" d="M11.497 11.997H9.352L7.14 8.001l2.212-3.997h2.145L9.272 8l2.225 3.996Z"></path><path fill="#FF690F" d="M17.319 0h16v16h-16V0Z"></path><path fill="#fff" d="m23.869 10.847-.348 1.163H21.45l2.633-8.02h2.473l2.614 8.02h-2.12l-.347-1.15-2.833-.013Zm1.416-4.558-.935 2.988h1.871l-.936-2.988Z"></path><path fill="#FF690F" d="M34.201 0h16v16h-16V0Z"></path><path fill="#fff" d="M43.203 12.01h-1.958V8.475L38.618 3.99h2.313l1.296 2.46 1.277-2.46h2.279l-2.58 4.485v3.535Z"></path><path fill="#FF690F" d="M51.09 0h16v16h-16V0Z"></path><path fill="#fff" d="m57.64 10.847-.348 1.163H55.22l2.633-8.02h2.473l2.613 8.02h-2.118l-.348-1.15-2.834-.013Zm1.416-4.558-.935 2.988h1.87l-.935-2.988Z"></path><path fill="#FF690F" d="M67.972 0h16v16h-16V0Z"></path><path fill="#fff" d="M72.904 4.004h1.945v8h-1.945v-8Z"></path><path fill="#fff" d="M79.04 11.997h-2.146l-2.212-3.996 2.212-3.997h2.146L76.814 8l2.226 3.996Z"></path></g><defs><clipPath id="40599zt6m28w2b6la"><path fill="#fff" d="M0 0h83.542v16H0z" transform="translate(.43)"></path></clipPath></defs></svg>
                </div>
                <div className='footer-logo-holder custom-gap4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 120 20"><g clip-path="url(#40599zt6m28w2b6ha)"><path fill="#262626" d="M13.397 5.98c-.067.531.133 1.063.465 1.528.266.332.73.532 1.13.532.265 0 .531-.067.797-.2s.465-.398.598-.664c.133-.332.266-.731.2-1.063.066-.598-.134-1.13-.466-1.595-.266-.399-.73-.598-1.196-.598-.465 0-.864.2-1.13.532-.265.398-.465.996-.398 1.528Zm4.85-2.06v4.85c0 .466-.066.997-.199 1.462-.133.399-.332.731-.598.997-.266.266-.665.465-.997.598-.465.066-.996.133-1.528.133s-1.063-.067-1.528-.266a3.369 3.369 0 0 1-1.063-.598c-.2-.2-.332-.465-.399-.797 0-.2.066-.399.2-.465a.754.754 0 0 1 .53-.2c.267 0 .466.133.665.333l.266.332c.067.133.2.2.332.332l.399.2c.2.066.399.066.532.066.332 0 .664-.067.996-.2.2-.132.399-.265.532-.531.066-.2.133-.465.2-.665 0-.265 0-.664.066-1.196-.266.333-.532.598-.93.798-.4.2-.798.266-1.197.266-.531 0-.996-.133-1.461-.466-.4-.332-.731-.73-.93-1.196-.266-.531-.333-1.196-.333-1.794 0-.465.067-.93.2-1.329.132-.398.332-.73.598-.996.265-.266.531-.465.863-.598.266-.266.598-.332.997-.332s.864.066 1.262.265c.4.2.731.532.997.864v-.2c0-.265.066-.464.2-.664.066-.199.265-.265.531-.265.266-.067.532.066.664.332.067.266.133.531.133.93ZM27.218 6.046c.067-.598-.133-1.13-.465-1.595-.266-.398-.73-.598-1.196-.598-.332 0-.598.067-.864.266-.266.2-.465.465-.598.731-.265.73-.265 1.528 0 2.326.133.332.332.598.598.73.266.2.532.266.864.266.465 0 .93-.2 1.196-.598.332-.398.532-.93.465-1.528Zm1.661 0c0 .465-.066.93-.266 1.395a2.892 2.892 0 0 1-.664 1.063c-.266.333-.664.532-1.063.665-.465.2-.93.266-1.395.266a3.47 3.47 0 0 1-1.396-.266c-.797-.332-1.461-.997-1.727-1.794-.332-.864-.332-1.86 0-2.79.133-.4.398-.798.664-1.064.266-.332.665-.532 1.063-.664a3.848 3.848 0 0 1 2.725 0c.398.132.73.398 1.063.73.265.333.531.665.664 1.064.266.465.332.93.332 1.395ZM34.593 6.046c0 .4.067.798.2 1.13.133.266.332.532.598.73.266.134.531.267.797.267s.532-.067.797-.2c.266-.199.466-.398.599-.73.132-.4.199-.798.199-1.197 0-.398-.067-.797-.2-1.13a2.078 2.078 0 0 0-.597-.73 1.277 1.277 0 0 0-.798-.266c-.266 0-.598.067-.797.266-.332.2-.532.465-.665.73-.133.4-.199.732-.133 1.13Zm3.323 2.459v-.133c-.2.2-.399.465-.665.598-.2.133-.465.266-.73.399-.266.066-.532.133-.864.133-.4 0-.798-.067-1.13-.266-.332-.2-.665-.399-.864-.731a3.693 3.693 0 0 1-.598-1.13c-.133-.465-.2-.93-.2-1.395 0-1.063.267-1.86.798-2.458.532-.532 1.263-.864 1.994-.864.398 0 .797.066 1.196.266.398.199.664.465.996.73V1.196c0-.266.067-.532.2-.797.133-.2.332-.266.598-.266.199 0 .465.066.598.266.133.199.199.465.199.73v7.376c0 .266-.067.531-.2.73a.842.842 0 0 1-.597.267c-.2 0-.4-.067-.598-.266a.922.922 0 0 1-.133-.731ZM48.082 6.113c-.333.133-.731.2-1.063.266-.466.067-.798.2-.997.2-.2.066-.399.132-.532.265a.842.842 0 0 0-.266.598c0 .266.133.465.333.665.199.199.465.265.73.265.333 0 .599-.066.93-.199.267-.133.466-.332.599-.531.2-.4.266-.798.2-1.263l.066-.266Zm.066 2.392c-.332.266-.73.532-1.196.731-.399.133-.864.266-1.262.266-.4 0-.798-.066-1.13-.266a1.44 1.44 0 0 1-.73-.664c-.2-.266-.267-.598-.267-.93 0-.4.133-.864.465-1.196.333-.333.731-.598 1.197-.665l.797-.133c.398-.066.797-.133 1.063-.266.332-.066.598-.132.997-.265 0-.333-.067-.665-.266-.997-.133-.2-.465-.332-.997-.332-.332 0-.664.066-.93.2-.2.132-.399.331-.532.53-.066.134-.199.333-.332.466-.133.066-.266.133-.398.133a.603.603 0 0 1-.466-.2.603.603 0 0 1-.199-.465c0-.332.133-.598.332-.864.266-.332.598-.531.997-.664.399-.2.93-.266 1.528-.266s1.196.067 1.728.266c.398.133.73.465.93.797.2.465.266.997.266 1.529v1.926c0 .333.066.665.133.997.066.2.133.465.133.665 0 .199-.067.332-.266.465a.755.755 0 0 1-.532.2c-.2 0-.398-.067-.531-.267-.2-.2-.333-.465-.532-.73ZM5.69 6.113c-.333.133-.731.2-1.063.266-.466.133-.798.2-.997.2-.2.066-.399.132-.532.265a.842.842 0 0 0-.265.598c0 .266.132.465.332.665.2.199.465.265.73.265.333 0 .599-.066.93-.199.267-.133.466-.332.599-.531.2-.4.266-.798.2-1.263l.066-.266Zm.066 2.392c-.332.266-.73.532-1.196.731-.399.133-.864.266-1.262.266-.399 0-.798-.066-1.13-.266a1.44 1.44 0 0 1-.73-.664c-.2-.266-.267-.598-.267-.93 0-.4.133-.864.466-1.196.332-.333.73-.598 1.196-.665l.797-.133c.399-.066.797-.133 1.063-.266.266-.066.598-.199.93-.265 0-.333-.066-.665-.266-.997-.132-.2-.465-.266-.93-.266-.332 0-.664.067-.93.2-.266.066-.465.265-.598.465a1.653 1.653 0 0 1-.332.465c-.133.133-.266.133-.399.133a.603.603 0 0 1-.465-.2c-.133-.066-.2-.265-.2-.465 0-.332.134-.598.333-.864.266-.332.598-.531.997-.664.465-.2.996-.266 1.594-.266.598 0 1.196.067 1.728.266.398.133.73.399.93.797.2.465.266.997.266 1.529v1.926c0 .333.066.665.133.997.066.2.133.465.133.665 0 .199-.133.332-.266.465a.754.754 0 0 1-.532.2c-.2 0-.398-.067-.531-.267a18.46 18.46 0 0 0-.532-.73Z"></path><path fill="#ED2A28" d="M4.36 13.422a3.19 3.19 0 1 1 0 6.38 3.19 3.19 0 0 1 0-6.38Z"></path><path fill="#F59E22" d="M14.992 13.422a3.19 3.19 0 1 1-3.19 3.19c0-1.795 1.396-3.19 3.19-3.19Z"></path><path fill="#16AC5B" d="M25.557 13.422a3.19 3.19 0 1 1-.002 6.38 3.19 3.19 0 0 1 .002-6.38Z"></path><path fill="#8252A1" d="M36.188 13.422a3.19 3.19 0 1 1-3.19 3.19c0-1.795 1.396-3.19 3.19-3.19Z"></path><path fill="#347FC2" d="M46.82 13.422a3.19 3.19 0 1 1-3.19 3.19c-.067-1.795 1.395-3.19 3.19-3.19Z"></path></g><defs><clipPath id="40599zt6m28w2b6ha"><path fill="#fff" d="M0 0h49.236v20H0z" transform="translate(.972)"></path></clipPath></defs></svg>
                </div>
                <div className='footer-logo-holder custom-gap5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 140 24"><path fill="#DA3743" fill-rule="evenodd" d="M.607 12c0-1.588 1.277-2.875 2.853-2.875A2.865 2.865 0 0 1 6.314 12a2.865 2.865 0 0 1-2.854 2.875A2.864 2.864 0 0 1 .607 12Zm20.046 2.875c-1.577 0-2.854-1.287-2.854-2.875a2.864 2.864 0 0 1 2.854-2.875A2.865 2.865 0 0 1 23.506 12c0 1.588-1.279 2.875-2.855 2.875Zm0-14.375C14.348.5 9.236 5.649 9.236 12c0 6.352 5.111 11.5 11.415 11.5 6.306 0 11.416-5.148 11.416-11.5 0-6.35-5.11-11.5-11.415-11.5Z" clip-rule="evenodd"></path><path fill="#262626" fill-rule="evenodd" d="M102.24 11.11c.18 0 .287-.082.287-.23 0-.134-.073-.222-.274-.222h-.187v.452h.174Zm-.448-.68h.507c.281 0 .521.115.521.437a.393.393 0 0 1-.246.37l.307.56h-.307l-.235-.472h-.273v.471h-.274V10.43Zm1.475.7c0-.632-.433-1.083-.994-1.083-.561 0-.989.45-.989 1.082 0 .64.428 1.077.989 1.077.561 0 .995-.437.995-1.076h-.001Zm-2.25 0c0-.788.568-1.325 1.256-1.325.694 0 1.262.537 1.262 1.325 0 .787-.568 1.325-1.262 1.325-.688 0-1.256-.538-1.256-1.325Zm-8.377 5.38a.315.315 0 0 0 .312-.313v-1.154a.314.314 0 0 0-.31-.313h-.05c-.14 0-.28-.14-.28-.281v-6.84c0-.156-.155-.312-.31-.312H90.86c-.155 0-.31.156-.31.312v7.577l.005.197c0 .565.56 1.128 1.12 1.128l.964-.002ZM42.417 9.102c1.553 0 2.863 1.325 2.863 2.896a2.87 2.87 0 0 1-2.863 2.872c-1.57 0-2.848-1.287-2.848-2.872 0-1.597 1.277-2.896 2.848-2.896Zm0-1.823c-2.568 0-4.658 2.116-4.658 4.72 0 2.632 2.045 4.695 4.658 4.695 2.621 0 4.674-2.063 4.674-4.696 0-2.602-2.097-4.72-4.674-4.72Zm37.177 7.36c-.084.24-.592.694-1.17.694-.605 0-.943-.369-.943-.922 0-.582.408-.937 1.155-.937.52 0 .958.199.958.199v.965Zm-.761-4.84c-1.056 0-2.085.268-2.226.325-.141.043-.268.156-.212.398l.142.738c.027.199.154.355.365.284.382-.114 1.24-.242 1.833-.242.69 0 .93.398.9 1.235 0 0-.59-.184-1.253-.184-1.648 0-2.593.894-2.593 2.058 0 1.405.903 2.242 2.198 2.242a2.84 2.84 0 0 0 2.044-.823v.353c0 .17.14.312.31.312h.114a.212.212 0 0 0 .04.003h.48a.315.315 0 0 0 .31-.313v-3.534c0-1.789-.423-2.853-2.452-2.853Zm-11.827 0c-1.248 0-1.853.673-2.095.945v-.492a.314.314 0 0 0-.31-.312h-.737a.314.314 0 0 0-.31.312v5.933a.324.324 0 0 0 .31.313h1.042c.31 0 .409-.072.409-.313V12.44c.155-.454.564-1.022 1.409-1.022.788 0 1.126.525 1.126 1.377v3.392c0 .17.142.313.311.313h1.14a.324.324 0 0 0 .31-.313v-3.392c0-1.59-.535-2.995-2.605-2.995Zm-15.513 5.237c-.818 0-1.353-.37-1.353-.37v-2.342c.141-.37.592-.909 1.438-.909 1.014 0 1.535.895 1.535 1.817 0 .923-.55 1.803-1.62 1.803Zm.324-5.238a2.8 2.8 0 0 0-2.125.977v-.522a.314.314 0 0 0-.31-.313h-.693a.315.315 0 0 0-.31.312v8.601a.325.325 0 0 0 .31.313h1.142c.154 0 .31-.157.31-.313v-2.47a4.8 4.8 0 0 0 1.563.27c1.945 0 3.227-1.504 3.227-3.42 0-1.988-1.34-3.435-3.114-3.435Zm46.462 2.597c-.028-.639-.535-1.136-1.254-1.136-.789 0-1.296.483-1.38 1.136h2.634ZM97.069 9.8c1.69 0 2.985 1.263 2.985 3.037 0 .1-.015.326-.028.426a.331.331 0 0 1-.31.298h-4.17c.015.809.676 1.518 1.62 1.518.648 0 1.099-.241 1.395-.482.155-.128.324-.142.423 0l.549.738c.112.127.127.284-.028.426-.672.583-1.534.9-2.423.894-1.944 0-3.297-1.561-3.297-3.435 0-1.845 1.353-3.42 3.283-3.42ZM86.04 15.037c-.845 0-1.296-.54-1.437-.91v-2.34s.536-.37 1.353-.37c1.07 0 1.62.88 1.62 1.803 0 .922-.521 1.817-1.535 1.817Zm.155-5.238c-.648 0-1.296.156-1.592.284V7.585a.324.324 0 0 0-.31-.313h-1.141c-.155 0-.31.156-.31.313v8.601a.324.324 0 0 0 .31.313h.493c.01 0 .018 0 .028-.003h.132a.314.314 0 0 0 .312-.312v-.485l.007-.025s.748.979 2.17.979c1.776 0 3.058-1.561 3.058-3.434 0-1.917-1.226-3.42-3.156-3.42Zm-9.968-2.527H69.6a.268.268 0 0 0-.267.27v1.165c0 .141.112.269.267.269h2.39v7.253a.278.278 0 0 0 .269.27h1.31a.277.277 0 0 0 .268-.27V8.976h2.39a.268.268 0 0 0 .268-.27V7.542a.27.27 0 0 0-.268-.27Zm-15.775 5.124c-.028-.639-.536-1.136-1.254-1.136-.788 0-1.296.483-1.38 1.136h2.634ZM59.241 9.8c1.691 0 2.987 1.263 2.987 3.037 0 .1-.013.326-.028.426a.332.332 0 0 1-.31.298h-4.17c.015.809.676 1.518 1.62 1.518.649 0 1.099-.241 1.395-.482.155-.128.324-.142.423 0l.549.738c.113.127.127.284-.028.426a3.66 3.66 0 0 1-2.424.894c-1.944 0-3.296-1.561-3.296-3.435 0-1.845 1.352-3.42 3.282-3.42Z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default Footer;