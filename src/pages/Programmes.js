import React from "react";
import { Container } from "react-bootstrap";
import pptxgen from "pptxgenjs";

export const Programmes = () => {
  const exportFile = function () {
    const mm2i = (mm) => {
      return mm / 25.4;
    };

    const i2mm = (i) => {
      return 25.4 * i;
    };

    const printMargin = { mm: 5, i: mm2i(5) };
    const slideWidth = { mm: i2mm(11.7), i: 11.7 };
    const slideHeight = { mm: i2mm(8.3), i: 8.3 };

    let pptx = new pptxgen();

    pptx.defineLayout({
      name: "A4",
      width: slideWidth.i,
      height: slideHeight.i,
    });

    pptx.layout = "A4";

    pptx.defineSlideMaster({
      title: "MASTER_SLIDE",
      margin: [0, 0, 0, 0],
    });

    let slide = pptx.addSlide({ masterName: "MASTER_SLIDE" });

    // Add Team Title
    slide.addText("KAIKORAI TEAM SHEET", {
      x: 0,
      y: 0.15,
      w: slideWidth.i * 0.5 - printMargin.i,
      h: 0.5,
      valign: "top",
      fontFace: "Bahnschrift SemiLight SemiConde",
      fontSize: 20,
      underline: true,
      bold: false,
      align: "center",
    });

    slide.addText("STARTING XV", {
      x: 0,
      y: 0.5,
      w: slideWidth.i * 0.5 - printMargin.i,
      h: 0.5,
      valign: "top",
      fontFace: "Bahnschrift SemiLight SemiConde",
      fontSize: 18,
      underline: false,
      bold: false,
      align: "center",
    });

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 5; j++) {
        const rowHeight = 2;
        const colWidth = (slideWidth.i * 0.5 - mm2i(3)) / 5;
        const startY = 1.1 + i * rowHeight;
        const startX = mm2i(4) + colWidth * j;
        const imageHeight = 1.5;
        const imagePath = "/images/missing.png";

        slide.addImage({
          path: imagePath,
          x: startX,
          y: startY,
          sizing: { type: "cover", w: imageHeight * (2 / 3), h: imageHeight },
        });

        const pos = i * 5 + j + 1;

        slide.addText(pos + ".", {
          x: startX,
          y: startY + imageHeight + mm2i(1),
          h: mm2i(6),
          w: mm2i(6.5),
          fontFace: "Impact",
          color: "184C92",
          fontSize: 10,
          valign: "top",
          align: "left",
          margin: 0,
        });

        slide.addText("FIRST NAME\nLAST NAME", {
            x: startX + mm2i(4.5),
            y: startY + imageHeight + mm2i(1),
            w: 2,
            h: 0.8,
            fontFace: "Bahnschrift SemiLight SemiConde",
            fontSize: 10,
            valign: "top",
            align: "left",
            margin: 0,
          });

      }
    }

    let slide2 = pptx.addSlide({ masterName: "MASTER_SLIDE" });

    slide2.addText("KAIKORAI TEAM SHEET", {
      x: 0,
      y: 0.15,
      w: slideWidth.i * 0.5 - printMargin.i,
      h: 0.5,
      valign: "top",
      fontFace: "Bahnschrift SemiLight SemiConde",
      fontSize: 20,
      underline: true,
      bold: false,
      align: "center",
    });

    pptx.writeFile({ fileName: "test.pptx " });
  };

  return (
    <Container>
      <h1>Programmes</h1>
      <button onClick={exportFile}> Press Me </button>
    </Container>
  );
};
