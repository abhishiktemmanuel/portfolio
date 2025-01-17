const Education = () => {
    const educationData = [
      {
        id: 1,
        school: "Christ (Deemed to be University)",
        degree: "Bachelor of Science",
        year: "2021-2024",
        description: "Triple Major in Computer Science, Mathematics and Statistics",
        location: "Bengaluru, India"
      },
      {
        id: 2,
        school: "Methodist High School",
        degree: "Indian School Certificate",
        year: "2020",
        description: "Science stream with Computer Science",
        location: "Kanpur, India"
      },
      {
        id: 3,
        school: "Methodist High School",
        degree: "Indian Certificate of Secondary Education",
        year: "2018",
        description: "Science stream with Computer Science",
        location: "Kanpur, India"
      },
    ];
  

      
    return (
        <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-300"></div>
    
        <div className="relative w-full max-w-7xl mx-auto">
            {educationData.map((education, index) => (
            <div
                key={education.id}
                className={`flex items-center justify-between mb-8 w-full ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
            >
                {/* Content Box */}
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                <div className="education-card bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-lg relative">
                    <h3 className="text-base sm:text-xl font-bold text-gray-900">{education.school}</h3>
                    <h4 className="text-sm sm:text-lg font-semibold text-gray-700">{education.degree}</h4>
                    <p className="text-xs sm:text-base text-gray-600">{education.year}</p>
                    <p className="text-xs sm:text-base text-gray-500 mt-2">{education.description}</p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">{education.location}</p>
                </div>
                </div>
    
                {/* Timeline Dot */}
                <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white z-10"></div>
    
                {/* Empty space for the other side */}
                <div className="w-5/12"></div>
            </div>
            ))}
        </div>

      </div>
    );
    };
    
    export default Education;
    