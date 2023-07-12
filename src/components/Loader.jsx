import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontWeight: 800,
          color: '#915eff',
          fontSize: 14,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader
