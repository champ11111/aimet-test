import { render, screen } from "@testing-library/react";
import { InfoCard } from "../info-card"; // Adjust the path according to your file structure
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";

enum AISeverityLevel {
  LOW = "LOW",
  SEVERE = "SEVERE",
}

describe("InfoCard component", () => {
  describe("with LOW severity level", () => {
    beforeEach(() => {
      render(<InfoCard severityLevel={AISeverityLevel.LOW} />);
    });

    it("renders text correctly", () => {
      expect(
        screen.getByText("ความเสี่ยงโรคซึมเศร้าระดับ")
      ).toBeInTheDocument();
      expect(screen.getByText("เยี่ยมมากเลย")).toBeInTheDocument();
      expect(
        screen.getByText("หมั่นดูแลจิตใจให้แข็งแรงแบบนี้เสมอนะ")
      ).toBeInTheDocument();
      expect(
        screen.getByText("อยากพูดคุยกันเมื่อไร มาหาหมอได้เสมอ")
      ).toBeInTheDocument();
    });

    it("renders severity level text correctly", () => {
      const severityLevelText = screen.getByTestId("severity-level-text");
      expect(severityLevelText).toHaveTextContent("ต่ำ");
    });

    it("renders color correctly", () => {
      expect(screen.getByTestId("severity-level-card")).toHaveClass(
        "bg-[#CEEEDC]"
      );
      expect(screen.getByTestId("severity-level-text-box")).toHaveClass(
        "bg-[#60C78F]"
      );
      expect(screen.getByTestId("severity-info-text-box")).toHaveClass(
        "text-[#60C78F]"
      );
    });
  });

  describe("with SEVERE severity level", () => {
    beforeEach(() => {
      render(<InfoCard severityLevel={AISeverityLevel.SEVERE} />);
    });

    it("renders text correctly", () => {
      expect(
        screen.getByText("ความเสี่ยงโรคซึมเศร้าระดับ")
      ).toBeInTheDocument();
      expect(
        screen.getByText("หมอขอข้อมูลเพื่อให้เจ้าหน้าที่ติดต่อกลับไป")
      ).toBeInTheDocument();
      expect(
        screen.getByText("โดยจะได้รับการติดต่อกลับภายใน 24 ชั่วโมงนะคะ")
      ).toBeInTheDocument();
    });

    it("renders severity level text correctly", () => {
      const severityLevelText = screen.getByTestId("severity-level-text");
      expect(severityLevelText).toHaveTextContent("รุนแรง");
    });

    it("renders color correctly", () => {
      expect(screen.getByTestId("severity-level-card")).toHaveClass(
        "bg-[#FFCFCF]"
      );
      expect(screen.getByTestId("severity-level-text-box")).toHaveClass(
        "bg-[#FF6464]"
      );
      expect(screen.getByTestId("severity-info-text-box")).toHaveClass(
        "text-[#FF6464]"
      );
    });
  });
});
