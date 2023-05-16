import ReactAudioPlayer from 'react-audio-player'
export default function UFO() {
  return (
    <div className={`flex flex-col min-h-screen justify-center items-center`}>
      <div className={`text-8xl pb-8`}>🛸</div>
      <ReactAudioPlayer
        src='https://elasticbeanstalk-us-east-2-989071256297.s3.us-east-2.amazonaws.com/A+-+UFO+in+Waimanalo.wav'
        autoPlay
        controls
      />
    </div>
  )
}
