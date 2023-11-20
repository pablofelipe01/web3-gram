
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
  const pdfUrl = 'public/assets/pdf/Bidirectional_Tokenization_Model (1).pdf';

  return (
    <div className="flex flex-1">
      <div className="common-container">
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
          <div key={video.id} className="video-container">
            <h3 className="video-title">{video.title}</h3>
            <YouTube videoId={video.id} opts={opts} />
          </div>
        ))}

        {/* Download PDF link */}
        <div className="pdf-download-container">
          <a href={pdfUrl} download className="pdf-download-link">
          <span className="pdf-icon">📄</span> Download White Paper
          </a>
        </div>
      </div>
    </div>
  );
};

export default Videos;
