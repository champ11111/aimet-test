"use client";
import { useState } from "react";
import { toast } from "react-toastify";

interface FeedbackSlideOverProps {
  sessionId: string | null;
  onSlideOverClickClose: () => void;
  onFeedbackSubmit: (
    sessionId: string,
    feedback: string
  ) => Promise<{ message: string }>;
}

export const FeedbackSlideOver = ({
  onFeedbackSubmit,
  onSlideOverClickClose,
  sessionId,
}: FeedbackSlideOverProps) => {
  const [feedback, setFeedback] = useState<string>("");
  console.log(feedback);

  const handleOnFeedbackChange = (text: string) => {
    setFeedback(() => text);
  };

  const handleOnSlideOverClose = () => {
    onSlideOverClickClose();
  };

  const handleDrop = () => {
    onSlideOverClickClose();
  };

  const handleDragOver = () => {
    onSlideOverClickClose();
  };

  const handleOnSubmit = () => {
    toast.promise(onFeedbackSubmit(sessionId!, feedback), {
      pending: "กำลังส่งข้อมูล...",
      success: "ส่งข้อมูลสำเร็จ",
      error: "เกิดข้อผิดพลาดในการส่งข้อมูล",
    });

    setFeedback(() => "");
    onSlideOverClickClose();
  };

  return (
    <div className="h-full md:w-[744px] w-full">
      <div className="flex flex-col gap-3 w-full h-fit rounded-[25px] pt-2 px-5 pb-10 bg-white relative">
        <div className="w-full flex flex-col h-[25px] justify-center items-center">
          <div
            data-testid="drag-zone"
            className="w-[73px] h-[5px] bg-[#D9D9D9] rounded-[14px]"
            draggable="true"
          ></div>
          <div
            data-testid="drop-zone"
            className="w-full h-full"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          ></div>
        </div>
        <div className="flex justify-end w-full">
          <svg
            data-testid="close-button"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleOnSlideOverClose}
            className="absolute top-5 right-5"
          >
            <path
              d="M1 13L13 1M1 1L13 13"
              stroke="#3E3F45"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex items-center justify-center font-mitr text-[20px] font-normal leading-[32px] text-[#3E3F45] w-full">
          แสดงความคิดเห็นเพิ่มเติม
        </div>
        <textarea
          className="flex border-[1px] h-[120px] w-full rounded-md bg-white px-[9px] pt-4 pb-20 font-mitr text-[18px] font-light leading-[28.8px] align-top text-left break-words resize-none"
          placeholder="ความคิดเห็น..."
          value={feedback}
          onChange={(e) => {
            handleOnFeedbackChange(e.currentTarget.value);
          }}
        ></textarea>
        <button
          data-testid="submit-feedback-button"
          className={`flex items-center justify-center w-full h-[53px] font-mitr mobile:text-[16px] tablet:text-[18px] leading-[28.8px] font-medium rounded-[50px] 
          ${
            feedback
              ? "bg-[#767DFF] text-white hover:bg-[#a9adfd] hover:text-[#dddddd]"
              : "bg-gray-400 text-white"
          }`}
          onClick={handleOnSubmit}
          disabled={!feedback}
        >
          ส่งข้อมูล
        </button>
      </div>
    </div>
  );
};
