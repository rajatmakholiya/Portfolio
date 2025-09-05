import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Papa from "papaparse";

const Certifications = ({ currentTheme }) => {
  const [certificationsData, setCertificationsData] = useState([]);

  useEffect(() => {
    const certificationsSheetURL = process.env.REACT_APP_CERTS_SHEET_URL;

    if (certificationsSheetURL && certificationsSheetURL.trim() !== "") {
      Papa.parse(certificationsSheetURL, {
        download: true,
        header: true,
        complete: (results) => {
          const filteredData = results.data.filter(
            (item) => item.title && item.title.trim() !== ""
          );
          setCertificationsData(filteredData);
        },
        error: (error) => {
          // Error handling (optional, but no console log)
        },
      });
    }
  }, []);

  return (
    <div className="min-h-screen p-6 md:p-12 font-sans transition-colors duration-500">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col items-center text-center cursor-pointer"
              onClick={() => {
                window.open(cert.url, "_blank", "noopener,noreferrer");
              }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
                style={{ maxWidth: "300px" }}
              />
              <Typography variant="subtitle1" fontWeight={600}>
                {cert.title}
              </Typography>
              <Typography variant="body2">
                {cert.date} - {cert.institute}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;