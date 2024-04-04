import { AISeverityLevel } from "@/api/result";
import { Heart } from "../heart/heart";

interface InfoCardProps {
  severityLevel: AISeverityLevel;
}

export const InfoCard = (props: InfoCardProps) => {
  return (
    <div className="flex flex-col w-full h-auto gap-2 bg-white bg-opacity-25 rounded-[25px] p-3 mobile:mx-[25px] tablet:mx-0">
      {props.severityLevel === AISeverityLevel.LOW ? (
        <>
          <div
            data-testid="severity-level-card"
            className="flex flex-col items-center bg-[#CEEEDC] rounded-[25px] w-full h-auto px-10 py-2 gap-2"
          >
            <div className="font-mitr mobile:text-[16px] tablet:text-[18px] font-normal leading-[28.8px] text-[#3E3F45]">
              ความเสี่ยงโรคซึมเศร้าระดับ
            </div>
            <div
              data-testid="severity-level-text-box"
              className="flex items-center justify-center w-auto h-[41px] px-2 py-1 rounded-[25px] bg-[#60C78F]"
            >
              <div
                data-testid="severity-level-text"
                className="font-mitr mobile:text-[16px] tablet:text-[18px] font-normal leading-[28.8px] text-[#CEEEDC]"
              >
                ต่ำ
              </div>
            </div>
            <div className="flex flex-col gap-2 h-[36px] w-full relative">
              <Heart className="absolute top-[-7px] left-[-10px]" />
              <div className="w-auto min-h-3 rounded-[15px] bg-gradient-to-r from-[#5FC88F] via-[#FFCC7E] to-[#FF6464]"></div>

              <div className="flex justify-between w-auto">
                <div className="font-mitr mobile:text-[10px] tablet:text-[11px] font-normal leading-[17.6px] text-[#A9AAB6]">
                  ต่ำ
                </div>
                <div className="font-mitr mobile:text-[10px] tablet:text-[11px] font-normal leading-[17.6px] text-[#A9AAB6]">
                  ปานกลาง
                </div>
                <div className="font-mitr mobile:text-[10px] tablet:text-[11px]  font-normal leading-[17.6px] text-[#A9AAB6]">
                  รุนแรง
                </div>
              </div>
            </div>
          </div>

          <div
            data-testid="severity-info-text-box"
            className="flex flex-col items-center justify-center w-full h-auto px-3 py-1 font-mitr mobile:text-[14px] tablet:text-[16px] font-normal leading-[25.6px] text-[#60C78F]"
          >
            <div>เยี่ยมมากเลย</div>
            <div>หมั่นดูแลจิตใจให้แข็งแรงแบบนี้เสมอนะ</div>
            <div>อยากพูดคุยกันเมื่อไร มาหาหมอได้เสมอ</div>
          </div>
        </>
      ) : (
        <>
          <div
            data-testid="severity-level-card"
            className="flex flex-col items-center bg-[#FFCFCF] rounded-[25px] w-full h-auto px-10 py-2 gap-4"
          >
            <div className="font-mitr mobile:text-[16px] tablet:text-[18px]  font-normal leading-[28.8px] text-[#3E3F45]">
              ความเสี่ยงโรคซึมเศร้าระดับ
            </div>
            <div
              data-testid="severity-level-text-box"
              className="flex items-center justify-center w-auto h-[41px] px-2 py-1 rounded-[25px] bg-[#FF6464]"
            >
              <div
                data-testid="severity-level-text"
                className="font-mitr mobile:text-[16px] tablet:text-[18px] font-normal leading-[28.8px] text-[#FFCFCF]"
              >
                รุนแรง
              </div>
            </div>
            <div className="flex flex-col gap-2 h-[36px] w-full relative">
              <Heart className="absolute top-[-7px] right-[-10px]" />
              <div className=" w-auto min-h-3 rounded-[15px] bg-gradient-to-r from-[#5FC88F] via-[#FFCC7E] to-[#FF6464]"></div>

              <div className="flex justify-between w-full">
                <div className="font-mitr mobile:text-[10px] tablet:text-[11px] font-normal leading-[17.6px] text-[#A9AAB6]">
                  ต่ำ
                </div>
                <div className="font-mitr mobile:text-[10px] tablet:text-[11px]  font-normal leading-[17.6px] text-[#A9AAB6]">
                  ปานกลาง
                </div>
                <div className="font-mitr mobile:text-[10px] tablet:text-[11px] font-normal leading-[17.6px] text-[#A9AAB6]">
                  รุนแรง
                </div>
              </div>
            </div>
          </div>

          <div
            data-testid="severity-info-text-box"
            className="flex flex-col items-center justify-center w-full h-auto px-3 py-1 font-mitr mobile:text-[14px] tablet:text-[16px] font-normal leading-[25.6px] text-[#FF6464]"
          >
            <div>หมอขอข้อมูลเพื่อให้เจ้าหน้าที่ติดต่อกลับไป</div>
            <div>โดยจะได้รับการติดต่อกลับภายใน 24 ชั่วโมงนะคะ</div>
          </div>
        </>
      )}
    </div>
  );
};
