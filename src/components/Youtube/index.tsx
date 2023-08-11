interface YoutubeTileProps {
  title: string;
  src: string;
}
const YoutubeTile: React.FC<YoutubeTileProps> = ({ title, src }) => {
  const videoId = src.split('v=')[1]; // Extract the video ID from the YouTube link
  return (
    <div className='p-0'>
      <iframe
        width='100%'
        height='240'
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder='5'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeTile;
