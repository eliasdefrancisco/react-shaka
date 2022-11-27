import { useShaka } from './Shaka/useShaka'

export default function App() {
  const manifestUri = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'
  const { videoRef } = useShaka( manifestUri )

  return (
    <div className="App">
      <video 
        ref={videoRef}
        width="100%"
        poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
        controls 
        autoPlay 
      />
    </div>
  )
}

