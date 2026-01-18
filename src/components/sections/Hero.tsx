import { useState } from "react";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";

const Hero = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Google Drive link for resume PDF
  const resumeDriveLink = "https://drive.google.com/file/d/1xVLPhSzGo0p34C3bjH50BpjzhoFHN41a/view?usp=sharing";
  const resumeDownloadLink = "https://drive.google.com/file/d/1xVLPhSzGo0p34C3bjH50BpjzhoFHN41a/view?usp=drive_link";


  const handleDownloadResume = () => {
    try {
      // Try to download the resume file directly
      const link = document.createElement('a');
      link.href = resumeDownloadLink;
      link.download = 'Lohitha_Bhusarapu_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: open in Google Drive
      window.open(resumeDriveLink, '_blank');
    }
  };

  const closeResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <section className={`relative mx-auto h-screen w-full overflow-hidden z-10`}>
      <div
        className={`relative h-full flex flex-col justify-center px-6 sm:px-8 lg:px-16 xl:px-20`}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-start gap-5">
            <div className="mt-3 sm:mt-5 flex flex-col items-center justify-center">
              <div className="h-3 w-3 sm:h-5 sm:w-5 rounded-full bg-[#915EFF]" />
              <div className="violet-gradient h-24 w-1 sm:h-40 md:h-60 lg:h-80" />
            </div>

            <div className="flex-1">
              <h1
                className={`
                  ${styles.heroHeadText}
                  text-white
                  text-2xl
                  xs:text-3xl
                  sm:text-4xl
                  md:text-5xl
                  lg:text-4xl
                  xl:text-5xl
                  2xl:text-6xl
                  font-bold
                  leading-tight
                `}
              >
                Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
              </h1>
              <p
                className={`
                  ${styles.heroSubText}
                  text-white-100
                  mt-3
                  sm:mt-4
                  text-sm
                  xs:text-base
                  sm:text-lg
                  md:text-xl
                  lg:text-lg
                  xl:text-xl
                  2xl:text-2xl
                  leading-relaxed
                  max-w-4xl
                `}
              >
                {config.hero.p[0]} <br className="hidden sm:block" />
                {config.hero.p[1]}
              </p>

              {/* Resume Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDownloadResume}
                  className="relative z-20 bg-gradient-to-r from-[#915EFF] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#915EFF] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto min-h-[48px] touch-manipulation"
                >
                  Download Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={closeResumeModal}>
          <div className="relative max-w-4xl max-h-[90vh] w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="bg-white rounded-lg shadow-2xl">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-900">Resume - Lohitha Bhusarapu</h3>
                <button
                  onClick={closeResumeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-4">
                <iframe
                  src={resumeDriveLink}
                  className="w-full h-[70vh] border-0 rounded resume-iframe"
                  title="Resume Preview"
                  onLoad={() => {
                    // PDF loaded successfully
                    console.log('Resume PDF loaded successfully');
                  }}
                  onError={(e) => {
                    // If iframe fails to load, show error message
                    const target = e.target as HTMLIFrameElement;
                    target.style.display = 'none';
                    const container = target.parentElement;
                    if (container && !container.querySelector('.resume-error')) {
                      const errorDiv = document.createElement('div');
                      errorDiv.className = 'flex items-center justify-center h-full text-gray-500 resume-error';
                      errorDiv.innerHTML = `
                        <div class="text-center p-8">
                          <div class="mb-4">
                            <svg class="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <h3 class="text-lg font-medium text-gray-900 mb-2">Resume Preview Unavailable</h3>
                            <p class="text-gray-500 mb-4">The resume preview couldn't be loaded, but you can still download or view it directly.</p>
                          </div>
                          <div class="space-y-3">
                            <button
                              onclick="window.open('${resumeDriveLink}', '_blank')"
                              class="w-full bg-[#915EFF] hover:bg-[#7c3aed] text-white font-medium py-2 px-4 rounded-lg transition-colors"
                            >
                              Open Resume in New Tab
                            </button>
                            <button
                              onclick="window.location.reload()"
                              class="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors"
                            >
                              Retry Loading
                            </button>
                          </div>
                        </div>
                      `;
                      container.appendChild(errorDiv);
                    }
                  }}
                />
              </div>
              <div className="flex items-center justify-between p-4 border-t bg-gray-50">
                <button
                  onClick={handleDownloadResume}
                  className="bg-[#915EFF] hover:bg-[#7c3aed] text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Download PDF
                </button>
                <button
                  onClick={closeResumeModal}
                  className="text-gray-600 hover:text-gray-800 font-medium py-2 px-4 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
