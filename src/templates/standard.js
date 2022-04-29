import pptxgen from "pptxgenjs";

const mm2i = (mm) => {
  return mm / 25.4;
};

const i2mm = (i) => {
  return 25.4 * i;
};

const standardNoPhotosLogo = function (
  slide,
  team_name,
  players,
  logo_path,
  left_edge,
  right_edge
) {
  const colStartY = 0.9;
  const rowHeight = mm2i(12);
  const middleX = (right_edge - left_edge) / 2;
  const gutterX = mm2i(5);

  slide.addText(team_name, {
    x: left_edge,
    y: 0,
    w: right_edge - left_edge,
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
    w: right_edge - left_edge,
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
    y: colStartY + 8.5 * rowHeight,
    w: right_edge - left_edge,
    h: 0.5,
    valign: "top",
    fontFace: "Bahnschrift SemiLight SemiConde",
    fontSize: 18,
    underline: false,
    bold: false,
    align: "center",
  });

  for (let i = 1; i <= 8; i++) {
    const startY = colStartY + (i - 1) * rowHeight;
    const startX = gutterX + left_edge;

    slide.addText(i, {
      x: startX,
      y: startY,
      h: rowHeight,
      w: mm2i(9),
      fontFace: "Impact",
      color: "184C92",
      fontSize: 20,
      valign: "middle",
      align: "center",
      margin: 0,
    });

    slide.addText(
      (players[i - 1].firstName + " " + players[i - 1].lastName).toUpperCase(),
      {
        x: startX + mm2i(11),
        y: startY,
        h: rowHeight,
        w: (right_edge - left_edge) / 2 - (mm2i(11) + gutterX),
        fontFace: "Bahnschrift SemiLight SemiConde",
        fontSize: 14,
        valign: "middle",
        align: "left",
        margin: 0,
      }
    );
  }

  for (let i = 9; i <= 15; i++) {
    const startY = colStartY + (i - 9) * rowHeight;
    const startX = gutterX + middleX + left_edge;

    slide.addText(i, {
      x: startX,
      y: startY,
      h: rowHeight,
      w: mm2i(9),
      fontFace: "Impact",
      color: "184C92",
      fontSize: 20,
      valign: "middle",
      align: "center",
      margin: 0,
    });

    slide.addText(
      (players[i - 1].firstName + " " + players[i - 1].lastName).toUpperCase(),
      {
        x: startX + mm2i(11),
        y: startY,
        h: rowHeight,
        w: (right_edge - left_edge) / 2 - (mm2i(11) + gutterX),
        fontFace: "Bahnschrift SemiLight SemiConde",
        fontSize: 14,
        valign: "middle",
        align: "left",
        margin: 0,
      }
    );
  }

  for (let i = 16; i <= 19; i++) {
    const startY = colStartY + 9 * rowHeight + (i - 15) * rowHeight;
    const startX = gutterX + left_edge;

    slide.addText(i, {
      x: startX,
      y: startY,
      h: rowHeight,
      w: mm2i(9),
      fontFace: "Impact",
      color: "184C92",
      fontSize: 20,
      valign: "middle",
      align: "center",
      margin: 0,
    });

    slide.addText(
      (players[i - 1].firstName + " " + players[i - 1].lastName).toUpperCase(),
      {
        x: startX + mm2i(11),
        y: startY,
        h: rowHeight,
        w: (right_edge - left_edge) / 2 - (mm2i(11) + gutterX),
        fontFace: "Bahnschrift SemiLight SemiConde",
        fontSize: 14,
        valign: "middle",
        align: "left",
        margin: 0,
      }
    );
  }

  for (let i = 20; i <= 22; i++) {
    const startY = colStartY + 9 * rowHeight + (i - 19) * rowHeight;
    const startX = gutterX + middleX + left_edge;

    slide.addText(i, {
      x: startX,
      y: startY,
      h: rowHeight,
      w: mm2i(9),
      fontFace: "Impact",
      color: "184C92",
      fontSize: 20,
      valign: "middle",
      align: "center",
      margin: 0,
    });

    slide.addText(
      (players[i - 1].firstName + " " + players[i - 1].lastName).toUpperCase(),
      {
        x: startX + mm2i(11),
        y: startY,
        h: rowHeight,
        w: (right_edge - left_edge) / 2 - (mm2i(11) + gutterX),
        fontFace: "Bahnschrift SemiLight SemiConde",
        fontSize: 14,
        valign: "middle",
        align: "left",
        margin: 0,
      }
    );
  }
};

const standardWithPhotos = function (
  slide,
  team_name,
  players,
  left_edge,
  right_edge,
  logo
) {
  const colStartY = 1.5;
  const rowHeight = 1.68;
  const colWidth = (right_edge - left_edge) / 5;
  const imageHeight = 1.3;
  
  const sample_images = [
    process.env.PUBLIC_URL + "/images/no_image_grey.png",
    process.env.PUBLIC_URL + "/images/players/600545.png",
    process.env.PUBLIC_URL + "/images/players/3358780.png",
    process.env.PUBLIC_URL + "/images/players/3432698.png",
    process.env.PUBLIC_URL + "/images/players/1747522.png",
    process.env.PUBLIC_URL + "/images/players/miller.png"
  ];

  // Add Team Title
  slide.addText(team_name, {
    x: left_edge,
    y: 0,
    w: right_edge - left_edge,
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
    w: right_edge - left_edge,
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
    y: colStartY + 3 * rowHeight,
    w: right_edge - left_edge,
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
      const startX = colWidth * j; // + mm2i(2);

      //const imagePath = process.env.PUBLIC_URL + "/images/no_image.png";
      const imagePath = sample_images[Math.floor(Math.random() * sample_images.length)];

      slide.addImage({
        path: imagePath,
        x: (startX + left_edge),
        y: startY,
        sizing: { type: "contain", w: colWidth },
      });

      const pos = i * 5 + j + 1;

      slide.addText(pos, {
        x: startX + left_edge,
        y: startY + mm2i(27),
        h: mm2i(6),
        w: mm2i(5),
        fontFace: "Impact",
        color: "184C92",
        fontSize: 12,
        valign: "top",
        align: "right",
        margin: 0,
      });

      slide.addText(
        (
          players[pos - 1].firstName +
          "\n" +
          players[pos - 1].lastName
        ).toUpperCase(),
        {
          x: startX + mm2i(6) + left_edge,
          y: startY + mm2i(27),
          w: colWidth - mm2i(5),
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
    const startX = colWidth * j * (5 / 7); //+2mm
    const imageHeightSmall = imageHeight * (5 / 7);

    const imagePath = sample_images[Math.floor(Math.random() * 5)];

    slide.addImage({
      path: imagePath,
      x: (startX + left_edge),
      y: startY,
      sizing: { type: "contain", w: colWidth * (5 / 7) * 0.9 },
    });
    /*
    slide.addImage({
      path: imagePath,
      x: startX + left_edge,
      y: startY,
      sizing: { type: "contain", w: colWidth * (5 / 7), h: imageHeightSmall },
    });
    */
    const pos = 15 + j + 1;

    slide.addText(pos, {
      x: startX + left_edge,
      y: startY + imageHeightSmall + mm2i(1),
      h: mm2i(6),
      w: mm2i(6.5) * (5 / 7),
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
        w: colWidth * (5 / 7) - mm2i(6.5) * (5 / 7),
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

const addSponsors = function (
  slide,
  left_edge,
  right_edge,
  slide_height,
  sponsors
) {

  const gutters =  mm2i(5)
  const startX = left_edge + gutters;
  const usableWidth = (right_edge - left_edge) - (2 * gutters);
  const usableHeight = slide_height - (2 * gutters);
  const numSponsors = sponsors.length;
   
  sponsors.forEach((s) => {
    const ratio = usableWidth / s.w
    const new_height = (s.h * ratio)
    const new_width = (s.w * ratio)

    s.new_height = new_height;
    s.new_width = new_width;
    s.hw_ratio = s.h / s.w;    
  });

  const minHeight = Math.min(...sponsors.map(i => i.new_height))

  sponsors.forEach((s) => {
      const ratio = (minHeight * 1.5) / s.new_height;

      s.new_height = ratio < 1 ? s.new_height * ratio : s.new_height;
      s.new_width = ratio < 1 ? s.new_width * ratio : s.new_width;

  })
  
  const totalHeight = sponsors.map(i => i.new_height).reduce((prev, next) => prev + next) + (sponsors.length || 0 * gutters);

  if(totalHeight > slide_height) {
    const ratio = slide_height / totalHeight;
    sponsors.forEach((s) => {
      s.new_height = s.new_height * ratio;
      s.new_width = s.new_width * ratio;
    })
  }
  let cumStart = 0;

  for(let i = 0; i < sponsors.length; i++) {
    sponsors[i].startY = cumStart;
    cumStart = cumStart + sponsors[i].new_height + gutters;
  };

  console.log(sponsors)

  for (let i = 0; i < sponsors.length; i++) {
    const imagePath =
      process.env.PUBLIC_URL + "/images/sponsors/" + sponsors[i].value;
    const startY = sponsors[i].startY;
    slide.addImage({
      path: imagePath,
      x: ((right_edge - left_edge) / 2) - (sponsors[i].new_width / 2),
      y: startY,
      h: sponsors[i].new_height,
      w: sponsors[i].new_width
    });
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

  // first slide - left side

  let slide_one = pptx.addSlide({ masterName: "MASTER_SLIDE" });

  let left_edge = 0;
  let right_edge = left_edge + slideWidth.i / 2 - printMargin.i;

  slide_one =
    options.il_layout === "layout1"
      ? standardWithPhotos(
          slide_one,
          "KAIKORAI",
          player_names,
          left_edge,
          right_edge
        )
      : standardNoPhotosLogo(
          slide_one,
          "KAIKORAI",
          player_names,
          "",
          left_edge,
          right_edge
        );

  // first slide - right side
  console.log(options);
  left_edge = slideWidth.i / 2 + printMargin.i;
  right_edge = slideWidth.i;

  slide_one =
    options.ir_layout === "layout1"
      ? standardWithPhotos(
          slide_one,
          "KAIKORAI",
          player_names,
          left_edge,
          right_edge
        )
      : standardNoPhotosLogo(
          slide_one,
          "KAIKORAI",
          player_names,
          "",
          left_edge,
          right_edge
        );

  // second slide - left side - back page when folded

  let slide_two = pptx.addSlide({ masterName: "MASTER_SLIDE" });

  left_edge = 0;
  right_edge = left_edge + slideWidth.i / 2 - printMargin.i;

  slide_two = addSponsors(
    slide_two,
    left_edge,
    right_edge,
    slideHeight,
    options.sponsors
  );

  // output teamsheet to download
  pptx.writeFile({ fileName: "test.pptx " });
};
