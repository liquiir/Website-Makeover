import Texture from "../images/Noise-texture.jpg"

export default function NoiseOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-50 opacity-80"
      style={{
        backgroundImage: `url(${Texture})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        mixBlendMode: 'multiply', // multiply darkens instead of brightening
      }}
    />
  )
}
