import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { FeedbackSlideOver } from "../feedback-slide-over";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

describe("FeedbackSlideOver component", () => {
  const sessionId = "mockSessionId";

  it("renders without crashing", () => {
    render(
      <FeedbackSlideOver
        sessionId={sessionId}
        onSlideOverClickClose={() => {}}
        onFeedbackSubmit={() => Promise.resolve({ message: "Success" })}
      />
    );
    expect(screen.getByText("แสดงความคิดเห็นเพิ่มเติม")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("ความคิดเห็น...")).toBeInTheDocument();
  });

  it("disables submit button when text area is null", () => {
    render(
      <FeedbackSlideOver
        sessionId={sessionId}
        onSlideOverClickClose={() => {}}
        onFeedbackSubmit={() => Promise.resolve({ message: "Success" })}
      />
    );

    const submitButton = screen.getByTestId("submit-feedback-button");
    expect(submitButton).toBeDisabled();
  });

  it("closes slide over when close button is clicked", () => {
    const onSlideOverClickCloseMock = jest.fn();
    render(
      <FeedbackSlideOver
        sessionId={sessionId}
        onSlideOverClickClose={onSlideOverClickCloseMock}
        onFeedbackSubmit={() => Promise.resolve({ message: "Success" })}
      />
    );

    fireEvent.click(screen.getByTestId("close-button"));
    expect(onSlideOverClickCloseMock).toHaveBeenCalled();
  });

  it("submits feedback when submit button is clicked", async () => {
    const onFeedbackSubmitMock = jest.fn(() =>
      Promise.resolve({ message: "Success" })
    );
    render(
      <FeedbackSlideOver
        sessionId={sessionId}
        onSlideOverClickClose={() => {}}
        onFeedbackSubmit={onFeedbackSubmitMock}
      />
    );

    fireEvent.change(screen.getByPlaceholderText("ความคิดเห็น..."), {
      target: { value: "Test feedback" },
    });
    fireEvent.click(screen.getByTestId("submit-feedback-button"));

    await waitFor(() => {
      expect(onFeedbackSubmitMock).toHaveBeenCalledWith(
        sessionId,
        "Test feedback"
      );
    });
  });
});
