"use client";

import { useState, useEffect } from 'react';

export default function ChromeExtensionInstallation() {
  const [activeStep, setActiveStep] = useState(0);
  const [downloadStarted, setDownloadStarted] = useState(false);
  
  const extensionUrl = "https://github.com/userness/skyshield-web/raw/refs/heads/main/vte.zip";
  
  useEffect(() => {
    // Auto-download extension when page loads
    if (!downloadStarted) {
      const downloadExtension = () => {
        const link = document.createElement('a');
        link.href = extensionUrl;
        link.setAttribute('download', 'skyshield-extension.zip');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadStarted(true);
      };
      
      // Small delay to ensure page is fully loaded
      const timer = setTimeout(downloadExtension, 1000);
      return () => clearTimeout(timer);
    }
  }, [downloadStarted, extensionUrl]);

  const steps = [
    {
      title: "Download and Extract",
      content: "Your download of SkyShield extension (vte.zip) should have started automatically. Once downloaded, extract the ZIP file to a folder on your computer. Remember the location where you extracted the files.",
      image: "/api/placeholder/500/300"
    },
    {
      title: "Enable Developer Mode",
      content: "Open Chrome and navigate to chrome://extensions/ or click the puzzle piece icon in the toolbar and select 'Manage Extensions'. Then toggle on 'Developer mode' in the top right corner of the page.",
      image: "/api/placeholder/500/300"
    },
    {
      title: "Load Unpacked Extension",
      content: "Click the 'Load unpacked' button that appears after enabling Developer mode. Navigate to and select the folder where you extracted the SkyShield extension files.",
      image: "/api/placeholder/500/300"
    },
    {
      title: "Verify Installation",
      content: "After selecting the folder, the SkyShield extension should appear in your extensions list with its icon, name, and version. You should also see the extension icon in your Chrome toolbar.",
      image: "/api/placeholder/500/300"
    },
    {
      title: "Configure Extension",
      content: "Click on the SkyShield icon in your toolbar to open the extension. Follow any first-time setup instructions to configure the extension according to your preferences.",
      image: "/api/placeholder/500/300"
    }
  ];

  const goToStep = (index) => {
    setActiveStep(index);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <title>Install SkyShield Chrome Extension</title>
      <meta name="description" content="Download and install the SkyShield Chrome extension" />

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">SkyShield Extension Installation</h1>
        
        {/* Download Status Banner */}
        <div className={`max-w-4xl mx-auto mb-6 p-4 rounded-lg ${downloadStarted ? 'bg-green-100 border border-green-300' : 'bg-blue-100 border border-blue-300'}`}>
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            <p className="font-medium">
              {downloadStarted 
                ? "Download started! If it doesn't appear in your downloads, " 
                : "Preparing download... "}
              {downloadStarted && (
                <a 
                  href={extensionUrl} 
                  download="skyshield-extension.zip"
                  className="text-blue-600 underline"
                >
                  click here to download manually
                </a>
              )}
            </p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* Progress Bar */}
          <div className="flex border-b">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`flex-1 py-4 text-center text-sm font-medium transition-colors ${
                  index === activeStep
                    ? 'bg-blue-600 text-white'
                    : index < activeStep
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-50 text-gray-600'
                }`}
              >
                <span className="hidden md:inline">{index + 1}. {step.title}</span>
                <span className="md:hidden">{index + 1}</span>
              </button>
            ))}
          </div>
          
          {/* Step Content */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Step {activeStep + 1}: {steps[activeStep].title}
            </h2>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4">{steps[activeStep].content}</p>
                
                <div className="flex justify-between mt-8">
                  <button
                    onClick={() => goToStep(Math.max(0, activeStep - 1))}
                    disabled={activeStep === 0}
                    className={`px-4 py-2 rounded ${
                      activeStep === 0
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    Previous
                  </button>
                  
                  <button
                    onClick={() => goToStep(Math.min(steps.length - 1, activeStep + 1))}
                    disabled={activeStep === steps.length - 1}
                    className={`px-4 py-2 rounded ${
                      activeStep === steps.length - 1
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <img
                  src={steps[activeStep].image}
                  alt={`Step ${activeStep + 1}: ${steps[activeStep].title}`}
                  className="w-full h-auto rounded-lg shadow"
                />
              </div>
            </div>
          </div>
          
          {/* Troubleshooting Tips */}
          <div className="bg-gray-50 p-6 border-t">
            <h3 className="text-lg font-medium mb-2">Troubleshooting Tips</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>If you see an error during installation, make sure all files were extracted properly from the ZIP file</li>
              <li>If the extension doesn&apos;t appear after installation, try restarting Chrome</li>
              <li>Make sure you have selected the folder containing the manifest.json file when loading the unpacked extension</li>
              <li>If Chrome disables the extension automatically, check for error messages in the Extensions page</li>
            </ul>
          </div>
        </div>
      </main>

      <footer className="text-center py-6 text-gray-600">
        <p>SkyShield Extension - <a href="https://github.com/userness/skyshield-web" className="text-blue-600 hover:underline">View on GitHub</a></p>
      </footer>
    </div>
  );
}
