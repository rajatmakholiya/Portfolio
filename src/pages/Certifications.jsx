import { Typography } from "@mui/material";

const certificationsData = [
  {
    id: 1,
    image:
      "https://rajat-certificates.s3.ap-south-1.amazonaws.com/Images/Rajat+Makholiya+Agile+SEPM.jpg",
    title: "Introduction to Agile Development and Scrum",
    url:"https://drive.google.com/file/d/1RMm9Sk4y03UGnbHHTD9mx9KWEO5KdUWn/view?usp=sharing",
    date: "November 2024",
    institute: "IBM",
  },
  {
    id: 2,
    image:
      "https://rajat-certificates.s3.ap-south-1.amazonaws.com/Images/Rajat+Makholiya+IIM+Data+Driven+Descision+Making.jpg",
    title: "Data-Driven Decision Making using AI",
    url:"https://drive.google.com/file/d/1pJpnGmUS-ZFJBGVu-74udEDF47brZKjT/view?usp=sharing",
    date: "April 2025",
    institute: "IIM",
  },
  {
    id: 3,
    image:
      "https://rajat-certificates.s3.ap-south-1.amazonaws.com/Images/Rajat+Makholiya+Introduction+to+DevOps.jpg",
    title: "Introduction to DevOps",
    url:"https://drive.google.com/file/d/1ex4m-IgE-_gV9t-ngvq-0wAKllfClFZ0/view?usp=sharing",
    date: "July 2025",
    institute: "IBM",
  },
  {
    id: 3,
    image:
      "https://rajat-certificates.s3.ap-south-1.amazonaws.com/Images/linux.jpg",
    title: "Linux AWK",
    url:"https://drive.google.com/file/d/1lRQ60RMyAjoqtRdpegfI0TuMpgtO5aFr/view?usp=sharing",
    date: "March 2025",
    institute: "IIT Bombay",
  },
];

const Certifications = ({ currentTheme }) => {
  return (
    <div className="min-h-screen p-6 md:p-12 font-sans transition-colors duration-500">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col items-center text-center cursor-pointer"
              onClick={() => {window.open(cert.url, '_blank', 'noopener,noreferrer')}}
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
