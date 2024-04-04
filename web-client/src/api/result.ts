export enum AIStatus {
  PROCESSING = "PROCESSING",
  FINISHED = "FINISHED",
}

export enum AISeverityLevel {
  LOW = "LOW",
  SEVERE = "SEVERE",
}


export interface IResultResponse {
  message: string;
  data?: {
    result_ai_status: AIStatus;
    result_ai_severity_level?: AISeverityLevel;
  };
}

export interface IFeedbackRequest {
  feedback: string;
}

export interface IFeedbackResponse {
  message: string;
}

export const postFeedback = async (
  sessionId: string,
  feedback: string
): Promise<IFeedbackResponse> => {
  const body: IFeedbackRequest = {
    feedback,
  };
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/feedback/${sessionId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const data: IFeedbackResponse = await res.json();

  return data;
};


export const getResultBySessionId = async (
  sessionId: string
): Promise<IResultResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/result/${sessionId}`
  );
  const data: IResultResponse = await res.json();

  return data;
};