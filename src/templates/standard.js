import pptxgen from "pptxgenjs";

const mm2i = (mm) => {
  return mm / 25.4;
};

const i2mm = (i) => {
  return 25.4 * i;
};

const standardWithPhotos = function (
  slide,
  team_name,
  players,
  left_edge,
  right_edge
) {
  const colStartY = 0.75;
  const rowHeight = 1.85;
  const colWidth = (right_edge - left_edge) / 5;
  const imageHeight = 1.3;

  // Add Team Title
  slide.addText(team_name, {
    x: left_edge,
    y: 0,
    w: (right_edge - left_edge),
    h: 0.5,
    valign: "top",
    fontFace: "Bahnschrift SemiLight SemiConde",
    fontSize: 20,
    underline: true,
    bold: false,
    align: "center",
  });

  slide.addText("STARTING XV", {
    x: left_edge,
    y: 0.35,
    w: (right_edge - left_edge),
    h: 0.5,
    valign: "top",
    fontFace: "Bahnschrift SemiLight SemiConde",
    fontSize: 18,
    underline: false,
    bold: false,
    align: "center",
  });

  slide.addText("RESERVES", {
    x: left_edge,
    y: colStartY + (3 * rowHeight) ,
    w: (right_edge - left_edge),
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
      const startY = colStartY + i * rowHeight;
      const startX =  (colWidth * j)// + mm2i(2);

      const imagePath = process.env.PUBLIC_URL + "/images/no_image.png";
      
      slide.addImage({
        path: imagePath,
        x: startX + left_edge,
        y: startY,
        sizing: { type: "contain", w: colWidth, h: imageHeight },
      });

      const pos = i * 5 + j + 1;

      slide.addText(pos + ".", {
        x: startX + left_edge,
        y: startY + imageHeight + mm2i(1),
        h: mm2i(6),
        w: mm2i(6.5),
        fontFace: "Impact",
        color: "184C92",
        fontSize: 12,
        valign: "top",
        align: "left",
        margin: 0,
      });

      slide.addText(
        (
          players[pos - 1].firstName +
          "\n" +
          players[pos - 1].lastName
        ).toUpperCase(),
        {
          x: startX + mm2i(5) + left_edge,
          y: startY + imageHeight + mm2i(1),
          w: 2,
          h: 0.8,
          fontFace: "Bahnschrift SemiLight SemiConde",
          fontSize: 11,
          valign: "top",
          align: "left",
          margin: 0,
        }
      );
    }
  }

  for (let j = 0; j < 7; j++) {
    const startY = colStartY + 3 * rowHeight + 0.5;
    const startX = (colWidth * j) * (5 / 7); //+2mm
    const imageHeightSmall = imageHeight * (5 / 7);

    const imagePath = process.env.PUBLIC_URL + "/images/no_image.png";

    slide.addImage({
      path: imagePath,
      x: startX + left_edge,
      y: startY,
      sizing: { type: "contain", w: colWidth  * (5 / 7), h: imageHeightSmall },
    });

    const pos = 15 + j + 1;

    slide.addText(pos + ".", {
      x: startX + left_edge,
      y: startY + imageHeightSmall + mm2i(1),
      h: mm2i(6),
      w: mm2i(6.5),
      fontFace: "Impact",
      color: "184C92",
      fontSize: 11 * (5 / 7),
      valign: "top",
      align: "left",
      margin: 0,
    });

    slide.addText(
      (
        players[pos - 1].firstName +
        "\n" +
        players[pos - 1].lastName
      ).toUpperCase(),
      {
        x: startX + mm2i(6) * (5 / 7) + left_edge,
        y: startY + imageHeightSmall + mm2i(1),
        w: 2,
        h: 0.8,
        fontFace: "Bahnschrift SemiLight SemiConde",
        fontSize: 11 * (5 / 7),
        valign: "top",
        align: "left",
        margin: 0,
      }
    );
  }
  return slide;
};

export const createPrintOut = function (options) {
  let pptx = new pptxgen();

  const printMargin = { mm: 5, i: mm2i(5) };
  const slideWidth = { mm: i2mm(11.7), i: 11.7 };
  const slideHeight = { mm: i2mm(8.3), i: 8.3 };

  const player_names = [];

  for (let i = 1; i <= 22; i++) {
    player_names.push({ firstName: "First Name", lastName: "Last Name" });
  }
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

  // first slide

  let slide = pptx.addSlide({ masterName: "MASTER_SLIDE" });

  let left_edge = 0;
  let right_edge = left_edge + slideWidth.i / 2 - printMargin.i;

  slide = standardWithPhotos(
    slide,
    "KAIKORAI",
    player_names,
    left_edge,
    right_edge
  );

  // first slide

  left_edge = slideWidth.i / 2 + printMargin.i;
  right_edge = slideWidth.i;
  
  // eslint-disable-next-line
  slide = standardWithPhotos(
    slide,
    "KAIKORAI",
    player_names,
    left_edge,
    right_edge
  );

  // output teamsheet to download
  pptx.writeFile({ fileName: "test.pptx " });
};
