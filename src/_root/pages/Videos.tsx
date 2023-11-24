import YouTube from 'react-youtube';

const Videos = () => {
  const videos = [
    { id: 'rWTwcySGvrE', title: 'A Creator-Led Internet' },
    // { id: 'vPukHebsQeQ', title: 'Video 2 Title' },
    // { id: 'hb6v4DIiWc8', title: 'Video 3 Title' },
  ];

  const opts = {
    height: '195',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  // Replace 'YOUR_PDF_URL' with the actual URL of your PDF file
  const pdfUrl = 'https://tokensolutions.mypinata.cloud/ipfs/QmVfLTmCsn9DmXuV9umNNnc7SR9k7qh3JtXUFMZ2kUCdME?_gl=1*vgufiv*_ga*MzQ1NDM4NDc0LjE2OTIyMDg4MzU.*_ga_5RMPXG14TE*MTcwMDg0OTExMC4xOC4xLjE3MDA4NDkxNjUuNS4wLjA.';

  return (
    <div className="flex flex-1">
      <div
        className="common-container"
        style={{
          /* Add your general styles here */
        }}
      >
        <div className="max-w-5xl flex-start gap-3 justify-start w-full">
          <img
            src="/assets/icons/video.svg"
            width={36}
            height={36}
            alt="add"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Video Tutorials</h2>
        </div>

        {videos.map((video) => (
          <div 
            key={video.id}
            className="video-container "
            style={{
              /* Add your video container styles here */
            }}
          >
            <h3 className="video-title">{video.title}</h3>
            <YouTube videoId={video.id} opts={opts} />
          </div>
        ))}

        {/* Download PDF link */}
        <div
          className="pdf-download-container"
          style={{
            /* Add your PDF container styles here */
          }}
        >
          <a href={pdfUrl} download className="pdf-download-link" rel="noreferrer" target="_blank">
            <span className="pdf-icon">📄</span> Download White Paper
          </a>
        </div>
      </div>
    </div>
  );
};

export default Videos;
