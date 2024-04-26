const BottomBar = () => {
  return (
    <div className="relative h-[60px] w-[845px] rounded-[30px] bg-white shadow">
      <div className="absolute left-[20px] top-[13px] inline-flex w-[673px] items-center justify-start gap-2">
        <div className="flex items-center justify-start gap-2">
          <div className="relative h-[34px] w-[23px]">
            <div className="font-['Mier A'] absolute left-[4px] top-[12px] text-base font-medium leading-snug text-black">
              🧠
            </div>
            <div className="font-['Mier A'] absolute left-0 top-0 text-[22.40px] font-medium leading-loose text-black">
              🧠
            </div>
          </div>
          <div className="font-['Pretendard Variable'] text-sm font-normal leading-tight text-black text-opacity-40">
            어떤 문제가 있으신가요?
          </div>
        </div>
      </div>
      <div className="absolute left-[782px] top-[6px] inline-flex size-12 items-center justify-center gap-2.5 rounded-[60px] bg-sky-500 p-2.5 shadow">
        <div className="relative size-6">
          <div className="absolute left-0 top-0 size-6"></div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
