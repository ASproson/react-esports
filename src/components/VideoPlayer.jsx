const videoUrl =
  "https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt714eaee50b90fc27/62cc7dcc6a8fb133b0ff7e55/VALORANT_ANNO22_SHATTERED_16x9_27s.mp4";

export const VideoPlayer = () => {
  return (
    <div className="-z-10">
      <video
        controls
        autoPlay
        muted
        loop
        className="pointer-events-none h-[100%] w-[100%]  sm:-mt-[100px] md:-mt-[150px]"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
};
