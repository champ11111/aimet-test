"use client";
import { useEffect, useState } from "react";
import { InfoCard } from "@/components/info-card/info-card";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FeedbackSlideOver } from "@/components/feedback-slide-over/feedback-slide-over";
import {
  AISeverityLevel,
  AIStatus,
  IResultResponse,
  getResultBySessionId,
  postFeedback,
} from "@/api/result";
import { getStart } from "@/api/auth";

export default function Home() {
  const [isFetching, setIsFetching] = useState(true);
  const [isSlideOverOpen, setIsSlideOverOpen] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [result, setResult] = useState<IResultResponse | null>(null);

  const [progress, setProgress] = useState<number>(10);
  const [fetchingText, setFetchingText] = useState<string>("กำลังประมวลผล");

  const handleOnSlideOverOpen = () => {
    setIsSlideOverOpen(() => true);
  };

  const handleOnSlideOverClose = () => {
    setIsSlideOverOpen(() => false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      setProgress(10);
      setFetchingText("กำลังประมวลผล");
      const startResponse = await getStart();
      setSessionId(() => startResponse.data.session_id);

      // Polling
      let isProgressDone = false;
      let intervalId: NodeJS.Timeout;
      const poll = async () => {
        const resultResponse = await getResultBySessionId(
          startResponse.data.session_id
        );
        setResult(() => resultResponse);
        setProgress((prev) => {
          if (prev === 90) {
            setFetchingText("ประมวลผลสำเร็จ");
          }
          if (prev < 100) {
            return prev + 10;
          }
          isProgressDone = true;
          return prev;
        });

        if (
          resultResponse.data?.result_ai_status === AIStatus.FINISHED &&
          isProgressDone
        ) {
          clearInterval(intervalId);
          setIsFetching(false);
        }
      };

      intervalId = setInterval(poll, 1000);

      return () => {
        clearInterval(intervalId);
      };
    };

    fetchData();
  }, []);

  return (
    <div className="relative ">
      {isFetching ? (
        <div
          className={`flex items-center justify-center h-screen w-screen bg-black bg-opacity-25`}
        >
          <div className=" bg-white h-[184px] w-[248px] rounded-[25px] flex items-center justify-center">
            <div
              data-testid="progress-card"
              className="flex flex-col items-center gap-[2px]"
            >
              <CircularProgressbarWithChildren
                className="flex items-center justify-center h-[64px] w-[64px]"
                value={progress}
                styles={buildStyles({
                  pathColor: "#767DFF",
                  trailColor: "#E1E1FB",
                })}
              >
                <div className="text-sm text-[#767DFF] font-medium font-inter text-center leading-5">
                  {progress}%
                </div>
              </CircularProgressbarWithChildren>

              <div className="text-[#767DFF] text-[13px] font-normal font-mitr leading-[20.8px]">
                {fetchingText}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`flex justify-center h-screen bg-[#F2F4F6] pt-6`}>
          <ToastContainer />
          <div
            className={`flex flex-col gap-3 min-w-[325px] max-w-[694px] w-full ${
              result?.data?.result_ai_severity_level === AISeverityLevel.LOW
                ? "bg-blur-low"
                : "bg-blur-severe"
            }`}
          >
            <div className="flex items-center justify-center w-full">
              <div className="mobile:text-[20px] tablet:text-[23px] font-normal font-mitr leading-[36.8px] text-[#3E3F45]">
                ผลการประเมินของคุณ
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <InfoCard
                severityLevel={
                  result?.data?.result_ai_severity_level || AISeverityLevel.LOW
                }
              />
            </div>
            {isSlideOverOpen ? (
              <div className="flex justify-center inset-x-1/2 -mx-[50vw] absolute bottom-0">
                <FeedbackSlideOver
                  sessionId={sessionId!}
                  onSlideOverClickClose={handleOnSlideOverClose}
                  onFeedbackSubmit={postFeedback}
                />
              </div>
            ) : (
              <div className="flex items-center justify-center w-full">
                <button
                  data-testid="open-slide-over-button"
                  className="flex items-center justify-center grow h-[50px] font-mitr text-[16px]  leading-[25.6px] font-medium rounded-[50px] text-[#767DFF]  bg-[#FDFDFE] hover:bg-[#C0C3FF] hover:text-white mobile:mx-[25px] tablet:mx-0"
                  onClick={handleOnSlideOverOpen}
                >
                  ให้คะแนนความพึงพอใจ
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
