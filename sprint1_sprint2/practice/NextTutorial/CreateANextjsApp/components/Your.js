import Image from "next/image";

const YourComponent = () => (
  <Image
    src="../images/profile.jpg" // 이미지 파일의 경로
    width={144} // 가로
    height={144} // 세로
    alt="Your Name"
  />
);
