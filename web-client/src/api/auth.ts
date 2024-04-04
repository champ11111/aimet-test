
export interface IStartResponse {
  message: string;
  data: {
    session_id: string;
  };
}

export const getStart = async (): Promise<IStartResponse> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/start`);
  const data: IStartResponse = await res.json();

  return data;
};
