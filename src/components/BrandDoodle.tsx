import { HTMLStyledProps, styled } from "@styled-system/jsx";

export type BrandDoodleProps = HTMLStyledProps<"svg">;

export default function BrandDoodle(props: BrandDoodleProps) {
  return (
    <>
      <styled.svg
        width="331"
        height="412"
        viewBox="0 0 331 412"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        display={{ base: "none", xl: "block" }}
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M374.97 -3.73124L344.426 -34.2757C293.818 -84.8835 211.767 -84.8835 161.159 -34.2757L38.9809 87.9022C-11.6268 138.51 -11.6268 220.561 38.981 271.169C55.8502 288.038 83.2007 288.038 100.07 271.169L374.97 -3.73124ZM38.981 454.436L69.5255 484.981C120.133 535.588 202.185 535.588 252.792 484.981L374.97 362.803C425.578 312.195 425.578 230.143 374.97 179.536C358.101 162.666 330.751 162.666 313.881 179.536L38.981 454.436Z"
          fill="#40BF86"
        />
      </styled.svg>
      <styled.svg
        display={{ base: "block", md: "none" }}
        width="375"
        height="270"
        viewBox="0 0 375 270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M234.813 95.8136L210.955 71.9551C171.425 32.4249 107.334 32.4249 67.8035 71.9551L-27.6307 167.389C-67.1609 206.919 -67.1609 271.01 -27.6307 310.541C-14.454 323.717 6.9097 323.717 20.0864 310.541L234.813 95.8136ZM-27.6307 453.692L-3.77214 477.55C35.758 517.081 99.849 517.081 139.379 477.55L234.813 382.116C274.344 342.586 274.344 278.495 234.813 238.965C221.637 225.788 200.273 225.788 187.096 238.965L-27.6307 453.692Z"
          fill="#40BF86"
        />
      </styled.svg>
    </>
  );
}
