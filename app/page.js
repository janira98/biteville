import { Footer, Header,Slider } from '@/components'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Home() {
  return (
    <main>
      <Slider />
    </main>
  )
}
