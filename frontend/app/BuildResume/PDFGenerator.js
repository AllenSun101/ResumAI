'use client'

import React, { useState } from 'react';
import jsPDF from 'jspdf';
import { VariableIcon } from '@heroicons/react/24/outline';

export default function PDFGenerator(props) {
    const [pdfUrl, setPdfUrl] = useState('');

    var ParseResume = (resumeString) => {
        const nameMatch = resumeString.match(/\*\*Name:\*\*\s*([^*]*)/);
        const emailMatch = resumeString.match(/\*\*Email:\*\*\s*([^*]*)/);
        
        const name = nameMatch ? nameMatch[1].trim() : '';
        const email = emailMatch ? emailMatch[1].trim() : '';
      
        const sections = resumeString.split('**Section:** ').slice(1);
        const parsedSections = sections.map(section => {
          const [header, ...details] = section.split('**Header:** ');
          const sectionDetails = details.map(detail => {
            const [header, ...rest] = detail.split('**Date:** ');
            const [date, ...bullets] = rest.join('**Date:** ').split('**Bullet:** ');
            return {
              header: header.trim(),
              date: date.trim(),
              bullets: bullets.map(bullet => bullet.trim())
            };
          });
          return {
            section: header.trim(),
            details: sectionDetails
          };
        });
      
        return {
          name,
          email,
          sections: parsedSections
        };
      };
      

    const generatePdf = () => {
        // Create a new instance of jsPDF
        const doc = new jsPDF();
        doc.setFont('Times', 'Normal');
        doc.setFontSize(10);

        let yPosition = 20;
        const margin = 10;

        var parsedResume = ParseResume(props.resume);

        // Add Name
        if (parsedResume.name) {
            doc.setFontSize(12);
            doc.text(parsedResume.name, margin, yPosition);
            yPosition += 10;
        }

        // Add Email
        if (parsedResume.email) {
            doc.setFontSize(10);
            doc.text(parsedResume.email, margin, yPosition);
            yPosition += 10;
        }

        parsedResume.sections.forEach(section => {
        if (yPosition > 270) {  // If close to bottom of the page, add a new page
            doc.addPage();
            yPosition = 20;
        }

        doc.setFontSize(12);
        doc.text(section.section, margin, yPosition);
        yPosition += 2;

    doc.setLineWidth(0.5);
    doc.line(margin, yPosition, 200 - margin, yPosition); // Draw a line
    yPosition += 6;

    section.details.forEach(detail => {
      doc.setFontSize(10);
      doc.text(detail.header, margin, yPosition);
      yPosition += 6;

      doc.text(detail.date, margin, yPosition);
      yPosition += 6;

      detail.bullets.forEach(bullet => {
        doc.text(`- ${bullet}`, margin + 5, yPosition);
        yPosition += 6;

        if (yPosition > 270) {  // If close to bottom of the page, add a new page
          doc.addPage();
          yPosition = 20;
        }
      });
    });

    yPosition += 6;
  });


        // Generate the PDF as a Blob
        const pdfBlob = doc.output('blob');

        // Create a URL for the Blob
        const pdfUrl = URL.createObjectURL(pdfBlob);

        // Set the URL to the state to display it in an iframe
        setPdfUrl(pdfUrl);
    };

    const downloadPdf = () => {
        const doc = new jsPDF();
        doc.text('Hello, this is your PDF content!', 10, 10);
        doc.save('sample.pdf');
    };

    return (
        <div>
            <button onClick={generatePdf}>Preview PDF</button>
            <button onClick={downloadPdf}>Download PDF</button>

            {pdfUrl && (
                <iframe
                    src={pdfUrl}
                    width="100%"
                    height="600px"
                    title="PDF Preview"
                ></iframe>
            )}
        </div>
    );
};

