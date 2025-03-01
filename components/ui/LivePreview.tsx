"use client"

import React, { useState } from "react";

interface URLPreviewProps {
  url: string;
}

const URLPreview: React.FC<URLPreviewProps> = ({ url }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative border border-gray-300 rounded-lg overflow-hidden">
      {!isLoaded && <p className="text-center p-4">Loading preview...</p>}
      <iframe
        src={url}
        className="w-full h-full max-w-[400px] max-h-[400px]overflow-hidden"
        onLoad={() => setIsLoaded(true)}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </div>
  );
};

export default URLPreview;
