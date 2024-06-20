'use client'

import React, { useState } from 'react';
import jsPDF from 'jspdf';

const PdfGenerator = () => {
    const [pdfUrl, setPdfUrl] = useState('');

    const generatePdf = () => {
        // Create a new instance of jsPDF
        const doc = new jsPDF();

        // Add some text to the PDF
        doc.text('Hello, this is your PDF content!', 10, 10);

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

export default PdfGenerator;
