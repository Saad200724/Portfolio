
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, UnderlineType } from "docx";
import { DEVELOPER_INFO } from "../client/src/lib/constants";

export async function generateResume(): Promise<Buffer> {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Header - Name and Title
        new Paragraph({
          text: DEVELOPER_INFO.name,
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
        }),
        
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 300 },
          children: [
            new TextRun({
              text: `${DEVELOPER_INFO.title} • ${DEVELOPER_INFO.subtitle} • ${DEVELOPER_INFO.learning}`,
              size: 22,
              color: "666666",
            }),
          ],
        }),

        // Contact Information
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 },
          children: [
            new TextRun({
              text: `${DEVELOPER_INFO.email} • ${DEVELOPER_INFO.location}`,
              size: 20,
              color: "444444",
            }),
          ],
        }),

        // Professional Summary
        new Paragraph({
          text: "Professional Summary",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 200, after: 200 },
        }),
        
        new Paragraph({
          text: DEVELOPER_INFO.tagline,
          spacing: { after: 200 },
        }),
        
        new Paragraph({
          text: DEVELOPER_INFO.bio,
          spacing: { after: 400 },
        }),

        // Current Roles
        new Paragraph({
          text: "Current Positions",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 200, after: 200 },
        }),

        ...DEVELOPER_INFO.currentRoles.flatMap(role => [
          new Paragraph({
            spacing: { after: 100 },
            children: [
              new TextRun({
                text: role.title,
                bold: true,
                size: 24,
              }),
              new TextRun({
                text: ` - ${role.company}`,
                size: 24,
              }),
            ],
          }),
          new Paragraph({
            text: role.description,
            spacing: { after: 200 },
          }),
        ]),

        // Skills Section
        new Paragraph({
          text: "Technical Skills",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 400, after: 200 },
        }),

        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({
              text: "Programming Languages: ",
              bold: true,
            }),
            new TextRun({
              text: "Python, JavaScript/TypeScript, C/C++, Java, SQL",
            }),
          ],
        }),

        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({
              text: "Web Technologies: ",
              bold: true,
            }),
            new TextRun({
              text: "React, Node.js, Express, HTML/CSS, Tailwind CSS",
            }),
          ],
        }),

        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({
              text: "Backend & Databases: ",
              bold: true,
            }),
            new TextRun({
              text: "PostgreSQL, MongoDB, REST APIs, FastAPI, Flask",
            }),
          ],
        }),

        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({
              text: "AI/ML & Data Science: ",
              bold: true,
            }),
            new TextRun({
              text: "TensorFlow, scikit-learn, Pandas, NumPy, Data Analysis",
            }),
          ],
        }),

        new Paragraph({
          spacing: { after: 300 },
          children: [
            new TextRun({
              text: "Tools & Platforms: ",
              bold: true,
            }),
            new TextRun({
              text: "Git, Linux, Docker, Replit, VS Code",
            }),
          ],
        }),

        // Contact & Links
        new Paragraph({
          text: "Links & Contact",
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 400, after: 200 },
        }),

        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({
              text: "Email: ",
              bold: true,
            }),
            new TextRun({
              text: DEVELOPER_INFO.email,
              color: "0000FF",
              underline: {
                type: UnderlineType.SINGLE,
              },
            }),
          ],
        }),

        new Paragraph({
          spacing: { after: 100 },
          children: [
            new TextRun({
              text: "Portfolio: ",
              bold: true,
            }),
            new TextRun({
              text: "https://saad-tahsin-portfolio.com",
              color: "0000FF",
              underline: {
                type: UnderlineType.SINGLE,
              },
            }),
          ],
        }),
      ],
    }],
  });

  return await Packer.toBuffer(doc);
}
