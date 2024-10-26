import Image from "next/image";

const Egg: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Image
        src="/images/tmp_eggImage.png"
        alt="Egg Image"
        width={400} // 원하는 너비
        height={0} // height를 0으로 설정하고 layout="intrinsic"으로 높이를 자동 조정
        layout="intrinsic"
      />
    </div>
  );
};

export default Egg;
